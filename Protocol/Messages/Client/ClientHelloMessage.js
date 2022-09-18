const ServerHelloMessage = new (require("../Server/ServerHelloMessage"));
const PiranhaMessage = require("../../PiranhaMessage");

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
        ServerHelloMessage.send(this.client)
    }
}

module.exports = ClientHelloMessage
