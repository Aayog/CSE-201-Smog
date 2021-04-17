-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 104.154.66.238    Database: Project
-- ------------------------------------------------------
-- Server version	5.7.25-google-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '62751450-0d58-11eb-b55b-42010a8001c3:1-626220';

--
-- Table structure for table `Game`
--

DROP TABLE IF EXISTS `Game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Game` (
  `Title` varchar(100) NOT NULL,
  `Descript` varchar(500) DEFAULT NULL,
  `Developer` varchar(100) DEFAULT NULL,
  `Version` float DEFAULT NULL,
  `Link` varchar(300) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Img` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`Title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Game`
--

LOCK TABLES `Game` WRITE;
/*!40000 ALTER TABLE `Game` DISABLE KEYS */;
INSERT INTO `Game` VALUES ('Among Us','An online and local party game of teamwork and betrayal for 4-10 players...in space!','Innersloth',1,'https://store.steampowered.com/app/945360/Among_Us/',5,'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg?t=1598556351'),('Baba is You','Baba Is You is a puzzle game where the rules you have to follow are present as blocks you can interact with. By manipulating them, you can change how the game works, repurpose things you find in the levels and cause surprising interactions!','Hempuli Oy',1,'https://store.steampowered.com/app/736260/Baba_Is_You/',15,'https://cdn.cloudflare.steamstatic.com/steam/apps/736260/header.jpg?t=1601950406'),('BioShock','BioShock is a shooter unlike any you have ever played, loaded with weapons and tactics never seen. You will have a complete arsenal at your disposal from simple revolvers to grenade launchers and chemical throwers, but you will also be forced to genetically modify your DNA to create an even more deadly weapon: you.','2k Boston',1,'https://store.steampowered.com/app/7670/BioShock/',20,'https://cdn.cloudflare.steamstatic.com/steam/apps/7670/0000002509.1920x1080.jpg?t=1568739889'),('Borderlands 3','The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure! Blast through new worlds & enemies and save your home from the most ruthless cult leaders in the galaxy.','Gearbox Software',1,'https://store.steampowered.com/app/397540/Borderlands_3/',60,'https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg?t=1600378875'),('Counter-Strike: Global Offensive','Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).','Valve',1,'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/',0,'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1592263625'),('Garry\'s Mod','Garry\'s Mod is a physics sandbox. There aren\'t any predefined aims or goals. We give you the tools and leave you to play.','Facepunch Studios',1,'https://store.steampowered.com/app/4000/Garrys_Mod/',10,'https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg?t=1601306982'),('Grand Theft Auto V','Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.','Rockstar North',1,'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',30,'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1592866696'),('Hades','Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.','Supergiant Games',1,'https://store.steampowered.com/app/1145360/Hades/',25,'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg?t=1601510167'),('Minit','Minit is a peculiar little adventure played sixty seconds at a time.','JW, Kitty, Jukio, and Dom',1,'https://store.steampowered.com/app/609490/Minit/',10,'https://cdn.cloudflare.steamstatic.com/steam/apps/609490/header.jpg?t=1602083316'),('Ori and the Blind Forest','“Ori and the Blind Forest” tells the tale of a young orphan destined for heroics, through a visually stunning action-platformer crafted by Moon Studios for PC.','Moon Studios',1,'https://store.steampowered.com/app/261570/Ori_and_the_Blind_Forest/',20,'https://cdn.cloudflare.steamstatic.com/steam/apps/261570/header.jpg?t=1590605540'),('Overcooked! 2','Overcooked returns with a brand-new helping of chaotic cooking action! Journey back to the Onion Kingdom and assemble your team of chefs in classic couch co-op or online play for up to four players. Hold onto your aprons… it\'s time to save the world again!','Ghost Town Games Ltd',1,'https://store.steampowered.com/app/728880/Overcooked_2/',25,'https://cdn.cloudflare.steamstatic.com/steam/apps/728880/header_alt_assets_7.jpg?t=1601627040'),('Phasmophobia','Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost hunting equipment at your disposal in order to gather as much evidence as you can.','Kinetic Games',1,'https://store.steampowered.com/app/739630/Phasmophobia/',14,'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1602270061'),('Red Dead Redemption 2','Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.','Rockstar Games',1,'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',60,'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1597419522'),('Sea of Thieves','Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose.','Rare Tld',1,'https://store.steampowered.com/app/1172620/Sea_of_Thieves/',40,'https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg?t=1596057038'),('Slay The Spire','We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!','Mega Crit Games',2.1,'https://store.steampowered.com/app/646570/Slay_the_Spire/',25,'https://steamcdn-a.akamaihd.net/steam/apps/646570/header.jpg?t=1592339399'),('Stardew Valley','You have inherited your grandfather\'s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?','Concerned Ape',1,'https://store.steampowered.com/app/413150/Stardew_Valley/',15,'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1595525376'),('Tabletop Simulator','Tabletop Simulator is the only simulator where you can let your aggression out by flipping the table! There are no rules to follow: just you, a physics sandbox, and your friends. Make your own online board games or play the thousands of community created mods. Unlimited gaming possibilities!','Berserk Games',1,'https://store.steampowered.com/app/286160/Tabletop_Simulator/',20,'https://cdn.cloudflare.steamstatic.com/steam/apps/286160/header.jpg?t=1596589203'),('The Elder Scrolls V: Skyrim','EPIC FANTASY REBORN The next chapter in the highly anticipated Elder Scrolls saga arrives from the makers of the 2006 and 2008 Games of the Year, Bethesda Game Studios. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose.','Bethesda',1.01,'https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/',20,'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1590590362'),('The Jackbox Party Pack 6','It\'s the wildest Party Pack yet, with the absurd deathmatch Trivia Murder Party 2, the weird word circus Dictionarium, the hidden identity game Push The Button, the comedy contest Joke Boat and the offbeat personality test Role Models.','Jackbox Games',1,'https://store.steampowered.com/app/1005300/The_Jackbox_Party_Pack_6/',30,'https://cdn.cloudflare.steamstatic.com/steam/apps/1005300/header.jpg?t=1597773257'),('Untitled Goose Game','It\'s a lovely morning in the village and you are a horrible goose.','Panic',1,'https://store.steampowered.com/app/837470/Untitled_Goose_Game/',20,'https://cdn.cloudflare.steamstatic.com/steam/apps/837470/header.jpg?t=1601950406');
/*!40000 ALTER TABLE `Game` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-19 17:44:01
