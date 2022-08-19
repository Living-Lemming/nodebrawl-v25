const ByteStream = require("../../../ByteStream");
const LoginOkMessage = require("../Server/LoginOkMessage");
const OwnHomeDataMessage = require("../Server/OwnHomeDataMessage");

module.exports = {
    id: 10101,
    handle: function(client){
        let data = new ByteStream(client.payload);
        LoginOkMessage.send(client);
        OwnHomeDataMessage.send(client);
    }
}
