const LoginOkMessage = new (require("../Server/LoginOkMessage"));
const OwnHomeDataMessage = new (require("../Server/OwnHomeDataMessage"));
const PiranhaMessage = require("../../PiranhaMessage");

class LoginMessage extends PiranhaMessage {
    constructor(client, player, bytes){
        super(bytes)
        this.client = client;
        this.player = player;
        this.id = 10100
        this.version = 0
    }

    decode(){
        this.player.HighID = this.readInt();
        this.player.LowID = this.readInt();
    }

    process(){
        LoginOkMessage.send(this.client);
        OwnHomeDataMessage.send(this.client);
    }
}

module.exports = LoginMessage
