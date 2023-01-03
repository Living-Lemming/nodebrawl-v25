const PiranhaMessage = require('../../PiranhaMessage')
const Player = require('../../../Logic/Player');

class OwnHomeDataMessage extends PiranhaMessage {
    constructor(client, bytes){
        super(client, bytes)
        this.client = client
        this.id = 20100
        this.version = 0
    }

    encode() {
        this.writeVInt(0);
        this.writeVInt(0);
      
        this.writeVInt(Player.PlayerTrophies); // Player Trophies
        this.writeVInt(Player.MaxPlayerTrophiesGained); // Player Max Reached Trophies
      
        this.writeVInt(0);
        this.writeVInt(95); // Trophy Road Reward
      
        this.writeVInt(Player.PlayerEXP); // Player EXP
      
        this.writeScId(28, 0); // Player Icon ID
        this.writeScId(43, Player.NameColour); // Player Name Colour ID
        
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
        
        this.writeVInt(Player.TokensDoubler);
        this.writeVInt(1209599); // Season End Timer
        this.writeVInt(0);
        this.writeVInt(0);
        
        this.writeVInt(0);
        this.writeVInt(0);
        
        this.writeVInt(8);
        
        this.writeBoolean(true);
        this.writeBoolean(true);
        this.writeBoolean(true);
        
        this.writeVInt(Player.NameChangePrice);
        this.writeVInt(Player.NameChangeCooldownTimer);
        
        this.writeVInt(0);
        
        this.writeVInt(0);
        
        this.writeVInt(200);
        this.writeVInt(0); // Time till bonus tokens
        
        this.writeVInt(0);
        
        this.writeVInt(Player.Tickets);
        this.writeVInt(0);
        
        this.writeScId(16, Player.BrawlerID);
        
        this.writeString(Player.Region);
        this.writeString(Player.ContentCreator);
        
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        
        this.writeVInt(2019049);
        
        this.writeVInt(Player.TokensNeededForBrawlBox);
        this.writeVInt(Player.StarTokensNeededForBigBox);
        
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
