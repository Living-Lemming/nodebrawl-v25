const ByteStream = require("../../../ByteStream");
const Messaging = require("../../../ByteStream/Messaging");

let PlayerTrophies = 0;
let MaxPlayerTrophiesReached = 0;
let PlayerEXP = 99999;

module.exports = {
    id: 20100,
    send: function(client){
        let buffer = new ByteStream();

        buffer.writeVInt(0);
        buffer.writeVInt(0);
      
        buffer.writeVInt(PlayerTrophies); // Player Trophies
        buffer.writeVInt(MaxPlayerTrophiesReached); // Player Max Reached Trophies
      
        buffer.writeVInt(0);
        buffer.writeVInt(95); // Trophy Road Reward
      
        buffer.writeVInt(PlayerEXP); // Player EXP
      
        buffer.writeScId(28, 0); // Player Icon ID
        buffer.writeScId(43, 0); // Player Name Colour ID
        
        buffer.writeVInt(0);
        
        // Selected Skins
        buffer.writeVInt(brawler_skins.length)
        for (brawler_id in brawler_skins) {
            
        }
        // Work in progress...

        let message = new Messaging(client.client);
        message.send({
            id: this.id,
            buffer,
            version: client.version
        })
    }
}
