const ByteStream = require("../../../ByteStream");
const Messaging = require("../../../ByteStream/Messaging");

module.exports = {
    id: 20100,
    send: function(client){
        let buffer = new ByteStream();

        buffer.writeInt(1);
      
        buffer.writeString("");
      
        buffer.writeString();
        
        buffer.writeString("");
        buffer.writeString("");
        buffer.writeString("Crypto Not Disabled...");
      
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
