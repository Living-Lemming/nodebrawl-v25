const ByteStream = require("../../../ByteStream");
const LoginOkMessage = require("../Server/LoginOkMessage");
const OwnHomeDataMessage = require("../Server/OwnHomeDataMessage");
const Player = require("../../../Logic/Player");

module.exports = {
    id: 10101,
    handle: function(client){
        let data = new ByteStream(client.payload);
        let player = new Player();
        if (player.maintenance) {
             
        }
        else {
            LoginOkMessage.send(client);
            OwnHomeDataMessage.send(client);
        }
    }
}
