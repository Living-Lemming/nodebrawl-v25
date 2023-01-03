const PiranhaMessage = require("../../PiranhaMessage");
const LoginFailedMessage = new (require('../Server/LoginFailedMessage'))()

class ClientHelloMessage extends PiranhaMessage {
    constructor(client, bytes) {
        super(bytes)
        this.client = client;
        this.id = 10100
        this.version = 0
    }

    decode() {
        
    }

    process() {
        this.player.ErrorCode = 1
        LoginFailedMessage.send(this.client, this.player, bytes, 'Crypto Not Disabled')
    }
}

module.exports = ClientHelloMessage
