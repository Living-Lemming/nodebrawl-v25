const PiranhaMessage = require('../../PiranhaMessage')

class OwnHomeDataMessage extends PiranhaMessage {
    constructor(client, player, bytes){
        super(client, bytes)
        this.client = client
        this.player = player
        this.id = 20100
        this.version = 0
    }

    encode(){
        this.writeVInt(0);
        this.writeVInt(0);
      
        this.writeVInt(this.player.PlayerTrophies); // Player Trophies
        this.writeVInt(this.player.MaxPlayerTrophiesGained); // Player Max Reached Trophies
      
        this.writeVInt(0);
        this.writeVInt(95); // Trophy Road Reward
      
        this.writeVInt(this.player.PlayerEXP); // Player EXP
      
        this.writeScId(28, 0); // Player Icon ID
        this.writeScId(43, this.player.NameColour); // Player Name Colour ID
        
        this.writeVInt(0);
        
        // Selected Skins Array
        this.writeVInt(0);
        
        // Unlocked Skins Array
        this.writeVInt(0);
        
        this.writeVInt(0); // Leaderboard Global TID (Asia, Global)
        this.writeVInt(0);
        this.writeVInt(0);
        
        this.writeBoolean(false); // Token Limit Reached message if true
        this.writeVInt(1);
        this.writeBoolean(true);
        
        this.writeVInt(this.player.TokensDoubler);
        this.writeVInt(1209599); // Season End Timer
        this.writeVInt(0);
        this.writeVInt(0);
        
        this.writeVInt(0);
        this.writeVInt(0);
        
        this.writeVInt(8);
        
        this.writeBoolean(true);
        this.writeBoolean(true);
        this.writeBoolean(true);
        
        this.writeVInt(this.player.NameChangePrice);
        this.writeVInt(this.player.NameChangeCooldownTimer);
        
        this.writeVInt(0);
        
        this.writeVInt(0);
        
        this.writeVInt(200);
        this.writeVInt(0); // Time till bonus tokens
        
        this.writeVInt(0);
        
        this.writeVInt(this.player.Tickets);
        this.writeVInt(0);
        
        this.writeScId(16, this.player.BrawlerID);
        
        this.writeString(player.Region);
        this.writeString(player.ContentCreator);
        
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        
        this.writeVInt(2019049);
        
        this.writeVInt(player.TokensNeededForBrawlBox);
        this.writeVInt(player.StarTokensNeededForBigBox);
        
        this.writeVInt(0); // self.writeVint(Shop.token_doubler['Cost'])
        this.writeVInt(0); // self.writeVint(Shop.token_doubler['Amount'])
        
        this.writeVInt(500);
        this.writeVInt(50);
        this.writeVInt(999900);
        
        this.writeVInt(0);
        
        this.writeVInt(20);
    }
}

module.exports = OwnHomeDataMessage
