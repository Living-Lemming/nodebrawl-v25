// If you dont know what something means, dont change it :)
class Players {
  // Player Data
  HighID = 0;
  LowID = 0;
  Token = "TOKEN";
  BoxID = 0;
  MapID = 0;
  SlotIndex = 0;
  RoomID = 0;
  BrawlerID;
  SkinsID;
  CardSkillsID;
  CardUnlockID;
  BrawlerUnlockedState = {};
    
  // Brawler Data
  SkinsID = Files.getSkinsID();
  BrawlerID = Files.getCharactersID();
  CardSkillsID = Files.getSpgID();
  CardUnlockID = Files.getBrawlerUnlock();

  ///////////////////////
  // Configurable Data //
  Name = "LivingLemming";
  NameColour = 0;
  DoNotDisturb = 0;
  UnlockType = "All";
  
  // Resources
  PlayerEXP = 99999;
  TokensDoubler = 0;
  PlayerTrophies = 0;
  Gems = 0;
  Gold = 0;
  MaxPlayerTrophiesGained = 0;
  StarPoints = 0;
  Tickets = 0;
  Tokens = 0;

  // Boxes
  BrawlBoxes = 0;
  TokensNeededForBrawlBox = 100;
  BigBoxes = 0;
  StarTokensNeededForBigBox = 10;

  Region = "CZ";
  ContentCreator = "LivingLemming";

  NameChangePrice = 0;
  NameChangeCooldownTimer = 0;

  BrawlerPowerLevel = 1;
  BrawlerTrophiesForRank = 0;
  BrawlerTrophies = 0;
  BrawlerUpgradePoints = 0;

  BannedIPs = {
      01 : "",
      02 : "",
      03 : ""
  };

  if (UnlockType == "All") {
      for (i = 0; i in BrawlerID; i++) {
          BrawlerUnlockedState[i.toString] = 1;
      }
  }

  BrawlerSpgUnlock = {};
  starpower = 76

  BrawlerTrophies = {};
  BrawlerTrophies.forEach(element => BrawlerTrophies.concat({element.toString(): BrawlerTrophiesForRank}));

  BrawlerSkins = {};
  BrawlerSkins.forEach(element => BrawlerSkins.concat({element.toString(): 0}));

  ErrorCode;
  Maintenence = false;

  BattleResult = 0;
  GameType = 0;

  bot1 = 0;
  bot1n = null;
  bot2 = 0;
  bot2n = null;
  bot3 = 0;
  bot3n = null;
  bot4 = 0;
  bot4n = null;
  bot5 = 0;
  bot5n = null;
}

