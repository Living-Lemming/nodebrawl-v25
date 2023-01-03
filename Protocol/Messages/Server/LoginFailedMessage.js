const PiranhaMessage = require('../../PiranhaMessage')
const Player = require('../../../Logic/Player');

class LoginFailedMessage extends PiranhaMessage {
    constructor(client, bytes, msg) {
        super(client, bytes)
        this.client = client
        this.player = Player
        this.msg = msg
        this.id = 20103
        this.version = 0
    }

    /*
        << Error Code List >>
        # 1  = Custom Message
        # 7  = Patch
        # 8  = Update Available
        # 9  = Failed to Connect
        # 10 = Maintenance
        # 11 = Banned
        # 13 = Acc Locked PopUp
        # 16 = Updating Cr/Maintenance
        # 18 = Chinese Text?
    */

    encode() {
        this.writeInt(this.player.ErrorCode);
        this.writeString('');
        
        this.writeString();
        
        this.writeString('');
        this.writeString('');
        this.writeString(this.msg);
        
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
