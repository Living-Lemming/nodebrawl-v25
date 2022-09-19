const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
    constructor(client, player, bytes){
        super(client, bytes)
        this.client = client
        this.player = player
        this.id = 20100
        this.version = 0
    }

    encode(){
        this.writeInt(this.player.HighID); // High ID
        this.writeInt(this.player.LowID); // Low ID
      
        this.writeInt(this.player.HighID);
        this.writeInt(this.player.LowID);
      
        this.writeString(player.Token);
        this.writeString(); // Facebook ID
        this.writeString(); // Gamecenter ID
      
        this.writeInt(24); // Majour Version
        this.writeInt(150); // Build
        this.writeInt(0); // Minor Version
      
        this.writeString("dev"); // Environment
      
        this.writeInt(0); // Session Count
        this.writeInt(0); // Play Time Seconds
        this.writeInt(0); // Days Since Started Playing
      
        this.writeString();
        this.writeString();
        this.writeString();
      
        this.writeInt(0);
      
        this.writeString();
        this.writeString(player.Region);
        this.writeString();
      
        this.writeInt(1);
        
        this.writeString();
      
        this.writeInt(0); // Array
        
        this.writeInt(0); // Array
      
        this.writeVInt(0);
      
        this.writeString();
      
        this.writeVInt(1);
        this.writeVInt(1);
      
        this.writeString();
    }
}

module.exports = LoginOkMessage
