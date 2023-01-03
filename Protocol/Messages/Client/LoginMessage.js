const LoginOkMessage = new (require("../Server/LoginOkMessage"));
const OwnHomeDataMessage = new (require("../Server/OwnHomeDataMessage"));
const PiranhaMessage = require("../../PiranhaMessage");
const Player = require("../../../Logic/Player");

class LoginMessage extends PiranhaMessage {
    constructor(client, bytes) {
        super(bytes)
        this.client = client;
        this.id = 10100
        this.version = 0
    }

    decode(){
        Player.HighID = this.readInt();
        Player.LowID = this.readInt();
    }

    process(){
        LoginOkMessage.send(this.client);
        OwnHomeDataMessage.send(this.client);
    }
}

module.exports = LoginMessage
