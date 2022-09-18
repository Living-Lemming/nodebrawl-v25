const ServerHelloMessage = new (require("../Server/ServerHelloMessage"))

class ClientHelloMessage {
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
