class LoginFailedMessage {
    constructor(client, player, bytes){
        super(client, bytes)
        this.client = client
        this.player = player
        this.id = 20100
        this.version = 0
    }

    encode(){
        this.writeInt(this.player.ErrorCode);
        this.writeString('');
        
        this.writeString();
        
        this.writeString('');
        this.writeString('');
        this.writeString('');
        
        this.writeInt(0);
        this.writeBoolean(false);
        
        this.writeString();
        this.writeString();
        
        this.writeInt(0);
        this.writeInt(3);
        
        this.writeString();
        this.writeString();
        
        this.writeInt(0);
        this.writeInt(0);
        
        this.writeBoolean(false);
        this.writeBoolean(false);
    }
}

module.exports = LoginFailedMessage
