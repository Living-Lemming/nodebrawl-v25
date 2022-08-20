// If you dont know what something means, dont change it :)
class Players {
  // Player Data
  let HighID = 0;
  let LowID = 0;
  let Token = "TOKEN";
  let BoxID = 0;
  let MapID = 0;
  let SlotIndex = 0;
  let RoomID = 0;
  let BrawlerID;
  let SkinsID;
  let CardSkillsID;
  let CardUnlockID;
  let BrawlerUnlockedState = {};

  // Brawler Data
  SkinsID = Files.getSkinsID();
  BrawlerID = Files.getCharactersID();
  CardSkillsID = Files.getSpgID();
  CardUnlockID = Files.getBrawlerUnlock();

  ///////////////////////
  // Configurable Data //
  let Name = "LivingLemming";
  let NameColour = 0;
  let DoNotDisturb = 0;
  let UnlockType = "All";
  
  // Resources
  let PlayerEXP = 99999;
  let TokensDoubler = 0;
  let PlayerTrophies = 0;
  let Gems = 0;
  let Gold = 0;
  let MaxPlayerTrophiesGained = 0;
  let StarPoints = 0;
  let Tickets = 0;
  let Tokens = 0;

  // Boxes
  let BrawlBoxes = 0;
  let BigBoxes = 0;

  let Region = "CZ";
  let ContentCreator = "LivingLemming";

  let NameChangePrice = 0;
  let NameChangeCooldownTimer = 0;

  if UnlockType == "All" {
      for (let i = 0; i in BrawlerID; i++) {
          BrawlerUnlockedState[i.toString] = 1;
      }
  }

  BrawlerSkins = {};
  for (let id = 0; id in BrawlerID; id++) {
      BrawlerSkins.concat({f'{id}': 0})
  }

  let ErrorCode;
  let Maintenence = false;
  let MaintenenceTime = 0;

  let BattleResult = 0;
  let GameType = 0;

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
