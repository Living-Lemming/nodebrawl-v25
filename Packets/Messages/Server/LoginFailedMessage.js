const ByteStream = require("../../../ByteStream");
const Messaging = require("../../../ByteStream/Messaging");
const Player = require("../../../Logic/Player");

module.exports = {
    id: 20100,
    send: function(client){
        let buffer = new ByteStream();
        let player = new Player();
        
        buffer.writeInt(player.ErrorCode);
      
        buffer.writeString("");
      
        buffer.writeString();
        
        buffer.writeString("");
        buffer.writeString("");
        buffer.writeString("");
      
        buffer.writeInt(0);
        buffer.writeBoolean(false);
      
        buffer.writeString();
        buffer.writeString();
      
        buffer.writeInt(0);
        buffer.writeInt(3);
      
        buffer.writeString();
        buffer.writeString();
      
        buffer.writeInt(0);
        buffer.writeInt(0);
      
        buffer.writeBoolean(false);
        buffer.writeBoolean(false);

        let message = new Messaging(client.client);
        message.send({
            id: this.id,
            buffer,
            version: client.version
        })
    }
}
