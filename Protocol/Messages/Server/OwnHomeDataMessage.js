const PiranhaMessage = require('../../PiranhaMessage');
const Player = require('../../../Logic/Player');

class OwnHomeDataMessage extends PiranhaMessage {
    constructor(client, bytes){
        super(client, bytes);
        this.client = client;
        this.id = 20100;
        this.version = 0;
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
        
        this.writeVInt(0); // Shop Offers Array
        
        this.writeVInt(0); // Array
        
        this.writeVInt(200);
        this.writeVInt(0); // Time till bonus tokens
        
        this.writeVInt(0); // Array
        
        this.writeVInt(Player.Tickets); // Tickets
        this.writeVInt(0);
        
        this.writeScId(16, Player.BrawlerID); // Selected Brawler
        
        this.writeString(Player.Region); // Location
        this.writeString(Player.ContentCreator); // Supported Content Creator
        
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        
        this.writeVInt(2019049);
        
        this.writeVInt(Player.TokensNeededForBrawlBox);
        this.writeVInt(Player.StarTokensNeededForBigBox);
        
        this.writeVInt(0); // self.writeVint(Shop.token_doubler['Cost']) (Boxes Area Multiplier + Cost)
        this.writeVInt(0); // self.writeVint(Shop.token_doubler['Amount'])
        
        this.writeVInt(500);
        this.writeVInt(50);
        this.writeVInt(999900);
        
        this.writeVInt(0);
        
        this.writeVInt(20);
        
        for (const x of Array(5).keys()) {
            this.writeVInt(x);
        }
        
        // Event logic in hex cuz im lazy
        this.writeBytes('01010100b8a90a000f0702ffffffff0000000000');
        
        this.writeVInt(0); // Array
        
        this.writeVInt(8);
        for (const x of [20, 35, 75, 140, 290, 480, 800, 1250]) {
            this.writeVInt(x);
        }
        
        this.writeVInt(8);
        for (const x of [1, 2, 3, 4, 5, 10, 15, 20]) {
            this.writeVInt(x);
        }
        
        this.writeVInt(3);
        for (const x of [10, 30, 80]) { // Tickets Price
            this.writeVInt(x);
        }
        
        this.writeVInt(3);
        for (const x of [20, 35, 75, 140, 290, 480, 800, 1250]) { // Tickets Amount
            this.writeVInt(x);
        }
        
        this.writeVInt(4); // Shop Gold Offers Amount
        for (const x of [20, 50, 140, 260]) { // Shop Gold Offers Cost
            this.writeVInt(x);
        }
        
        this.writeVInt(4); // Shop Gold Offers Amount
        for (const x of [150, 400, 1200, 2600]) { // Shop Gold Offers Amount
            this.writeVInt(x);
        }
    }
}

module.exports = OwnHomeDataMessage
