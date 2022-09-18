const ByteStream = require("../../../ByteStream");
const Messaging = require("../../../ByteStream/Messaging");
const Player = require("../../../Logic/Player");

class LoginOkMessage {
    constructor(client, player, bytes){
        super(client, bytes)
        this.client = client
        this.player = player
        this.id = 20100
        this.version = 0
    }

    encode(){
        buffer.writeInt(this.player.HighID); // High ID
        buffer.writeInt(this.player.LowID); // Low ID
      
        buffer.writeInt(this.player.HighID);
        buffer.writeInt(this.player.LowID);
      
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

    }
}

module.exports = LoginOkMessage
