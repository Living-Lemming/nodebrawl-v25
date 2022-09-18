const ByteStream = require("../../../ByteStream");
const Messaging = require("../../../ByteStream/Messaging");
const Player = require("../../../Logic/Player");

module.exports = {
    id: 20100,
    send: function(client){
        let buffer = new ByteStream();
        let player = new Player();

        buffer.writeInt(player.HighID); // High ID
        buffer.writeInt(player.LowID); // Low ID
      
        buffer.writeInt(0);
        buffer.writeInt(0);
      
        buffer.writeString(player.Token);
        buffer.writeString(); // Facebook ID
        buffer.writeString(); // Gamecenter ID
      
        buffer.writeInt(24); // Majour Version
        buffer.writeInt(150); // Build
        buffer.writeInt(0); // Minor Version
      
        buffer.writeString("dev"); // Environment
      
        buffer.writeInt(0); // Session Count
        buffer.writeInt(0); // Play Time Seconds
        buffer.writeInt(0); // Days Since Started Playing
      
        buffer.writeString();
        buffer.writeString();
        buffer.writeString();
      
        buffer.writeInt(0);
      
        buffer.writeString();
        buffer.writeString(player.Region);
        buffer.writeString();
      
        buffer.writeInt(1);
        
        buffer.writeString();
      
        buffer.writeInt(0); // Array
        
        buffer.writeInt(0); // Array
      
        buffer.writeVInt(0);
      
        buffer.writeString();
      
        buffer.writeVInt(1);
        buffer.writeVInt(1);
      
        buffer.writeString();
        

        let message = new Messaging(client.client);
        message.send({
            id: this.id,
            buffer,
            version: client.version
        })
    }
}