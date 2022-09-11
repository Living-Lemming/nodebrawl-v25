const net = require("net");
const Packetizer = require("./ByteStream/packetizer");
const MessageFactory = require("./Packets/MessageFactory");
const server = new net.Server();
const Messages = new MessageFactory();

const PORT = 9339;

server.on("connection", async(client) => {
    client.log = function(text){
        return console.log(`[${this.remoteAddress.split(":").slice(-1)}] >> ${text}`)
    };

    client.log(`[INFO] A wild connection appeared!`);
    const packets = Messages.getPackets();
    const packetizer = new Packetizer();
    
    client.on('data', async(chunk) => {
        packetizer.packetize(chunk, (packet) => {
            let message = {
                id: packet.readUInt16BE(0),
                len: packet.readUIntBE(2, 3),
                version: packet.readUInt16BE(5),
                payload: packet.slice(7, this.len),
                client
            };
            if(packets.indexOf(String(message.id)) != -1){
                try{
                    client.log(`[PACKET] Gotcha ${message.id}!`);
                    Messages.handle(message.id)(message)
                }catch(e){
                    console.log(e)
                }
            }else{
                client.log(`[PACKET] Undefined ${message.id} received!`)
            }
        })
    });

    client.on('end', async () => {
        return client.log(`[INFO] Client disconnected.`)
    });

    client.on('error', async error => {
        try {
            client.log(`A wild error!`);
            console.log(error);
            client.destroy()
        } catch (e) { }
    })
});

server.once('listening', () => console.log(`[SERVER] Server started on ${PORT} port!`));
server.listen(PORT)
