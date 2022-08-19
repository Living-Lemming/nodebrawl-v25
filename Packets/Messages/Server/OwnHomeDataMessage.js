const ByteStream = require("../../../ByteStream");
const Messaging = require("../../../ByteStream/Messaging");

module.exports = {
    id: 20100,
    send: function(client){
        let buffer = new ByteStream();

        buffer.writeVInt(0);
        buffer.writeVInt(0);
      
        buffer.writeVInt(0); // Player Trophies
        buffer.writeVInt(0); // Player Max Reached Trophies
      
        buffer.writeVInt(0);
        buffer.writeVInt(95); // Trophy Road Reward
      
        buffer.writeVInt(99999); // Player EXP
      
        buffer.writeVInt(28); // Player Icon ID
        // In progres...

        let message = new Messaging(client.client);
        message.send({
            id: this.id,
            buffer,
            version: client.version
        })
    }
}
