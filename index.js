const net = require("net");
const Packetizer = require("./ByteStream/packetizer");
const MessageFactory = require("./Packets/MessageFactory");
const server = new net.Server();
const Messages = new MessageFactory();


server.on("connection", async(client) => {
    console.log("[INFO] A wild connection appeared!");
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
                    console.log(`[PACKET] Gotcha ${message.id} packet!`);
                    Messages.handle(message.id)(message)
                }catch(e){
                    console.log(e)
                }
            }else{
                console.log(`[PACKET] Gotcha undefined ${message.id} packet!`)
            }
        })
    });

    client.on('end', async () => {
        return console.log('[INFO] Client disconnected.')
    });

    client.on('error', async error => {
        try {
            console.error('[ERROR] A wild error!');
            console.log(error);
            client.destroy()
        } catch (e) { }
    })
});

server.once('listening', () => console.log('[INFO] Server started!'));
server.listen(9339);
