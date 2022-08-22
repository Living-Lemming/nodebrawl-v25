const ByteStream = require("../../../ByteStream");
const Messaging = require("../../../ByteStream/Messaging");
const Player = require("../../../Logic/Player");

module.exports = {
    id: 20100,
    send: function(client){
        let buffer = new ByteStream();
        let player = new Player();

        buffer.writeVInt(0);
        buffer.writeVInt(0);
      
        buffer.writeVInt(player.PlayerTrophies); // Player Trophies
        buffer.writeVInt(player.MaxPlayerTrophiesGained); // Player Max Reached Trophies
      
        buffer.writeVInt(0);
        buffer.writeVInt(95); // Trophy Road Reward
      
        buffer.writeVInt(player.PlayerEXP); // Player EXP
      
        buffer.writeScId(28, 0); // Player Icon ID
        buffer.writeScId(43, player.NameColour); // Player Name Colour ID
        
        buffer.writeVInt(0);
        
        // Selected Skins Array
        buffer.writeVInt(player.BrawlerSkins.length);
        player.BrawlerSkins.forEach(element => buffer.writeScId(29, player.BrawlerSkins[element]);
        
        // Unlocked Skins Array
        buffer.writeVInt(player.SkinsID.length);
        player.SkinsID.forEach(element => buffer.writeScId(29, element);
        
        buffer.writeVInt(0); // Leaderboard Global TID (Asia, Global)
        buffer.writeVInt(0);
        buffer.writeVInt(0);
        
        buffer.writeBoolean(false); // Token Limit Reached message if true
        buffer.writeVInt(0);
        buffer.writeBoolean(true);
        
        buffer.writeVInt(player.TokensDoubler);
        buffer.writeVInt(1209599); // Season End Timer
        buffer.writeVInt(0);
        buffer.writeVInt(0);
        
        buffer.writeVInt(0);
        buffer.writeVInt(0);
        
        buffer.writeVInt(8);
        
        buffer.writeBoolean(true);
        buffer.writeBoolean(true);
        buffer.writeBoolean(true);
        
        buffer.writeVInt(player.NameChangePrice);
        buffer.writeVInt(player.NameChangeCooldownTimer);
        
        let count = Shop.offers.length;
        buffer.writeVInt(count);
        count.forEach(function () {
            
        });
        
        buffer.writeVInt(0);
        
        buffer.writeVInt(200);
        buffer.writeVInt(0); // Time till bonus tokens
        
        buffer.writeVInt(0);
        
        buffer.writeVInt(player.Tickets);
        buffer.writeVInt(0);
        
        buffer.writeScId(16, player.BrawlerID);
        
        buffer.writeString(player.Region);
        buffer.writeString(player.ContentCreator);
        
        buffer.writeVInt(0);
        buffer.writeVInt(0);
        buffer.writeVInt(0);
        buffer.writeVInt(0);
        buffer.writeVInt(0);
        
        buffer.writeVInt(2019049);
        
        buffer.writeVInt(player.TokensNeededForBrawlBox);
        buffer.writeVInt(player.StarTokensNeededForBigBox);
        
        /*
        for item in Shop.boxes:
            self.writeVint(item['Cost'])
            self.writeVint(item['Multiplier'])
        
        self.writeVint(Shop.token_doubler['Cost'])
        self.writeVint(Shop.token_doubler['Amount'])
        */
        
        buffer.writeVInt(500);
        buffer.writeVInt(50);
        buffer.writeVInt(999900);
        
        buffer.writeVInt(0);
        
        buffer.writeVInt(20);

        let message = new Messaging(client.client);
        message.send({
            id: this.id,
            buffer,
            version: client.version
        })
    }
}
