const ByteStream = require("../../../ByteStream");
const LoginOkMessage = require("../Server/LoginOkMessage");

module.exports = {
    id: 10101,
    handle: function(client){
        let data = new ByteStream(client.payload);
        LoginOkMessage.send(client);
    }
}
