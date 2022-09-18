class ServerHelloMessage {
    constructor(client, bytes) {
        super(client, bytes)
        this.id = 20100
        this.version = 0
    }

    encode() {
        this.writeInt(0);
    }
}

module.exports = ServerHelloMessage
