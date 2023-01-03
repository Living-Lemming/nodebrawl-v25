const PiranhaMessage = require("../../PiranhaMessage");

class KeepAliveMessage extends PiranhaMessage {
    constructor(client, bytes) {
        super(bytes)
        this.client = client
        this.id = 10100
        this.version = 0
    }

    decode() {
        
    }

    process() {
        
    }
}

module.exports = KeepAliveMessage
