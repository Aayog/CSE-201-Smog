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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '62751450-0d58-11eb-b55b-42010a8001c3:1-626219';

--
-- Table structure for table `Genres`
--

DROP TABLE IF EXISTS `Genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Genres` (
  `gTitle` varchar(100) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  PRIMARY KEY (`Genre`,`gTitle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genres`
--

LOCK TABLES `Genres` WRITE;
/*!40000 ALTER TABLE `Genres` DISABLE KEYS */;
INSERT INTO `Genres` VALUES ('Among Us','2D'),('Minit','2D'),('BioShock','Action'),('Borderlands 3','Action'),('Counter-Strike: Global Offensive','Action'),('Grand Theft Auto V','Action'),('Hades','Action'),('Red Dead Redemption 2','Action'),('Sea of Thieves','Action'),('The Elder Scrolls V: Skyrim','Action'),('Minit','Adventure'),('Red Dead Redemption 2','Adventure'),('Sea of Thieves','Adventure'),('The Elder Scrolls V: Skyrim','Adventure'),('BioShock','Atmospheric'),('Ori and the Blind Forest','Atmospheric'),('Grand Theft Auto V','Automobile Sim'),('Tabletop Simulator','Board Game'),('Slay The Spire','Card Battler'),('Slay The Spire','Card Game'),('Overcooked! 2','Casual'),('The Jackbox Party Pack 6','Casual'),('Garry\'s Mod','Co-op'),('Sea of Thieves','Co-op'),('Counter-Strike: Global Offensive','Competitive'),('Baba is You','Cute'),('Ori and the Blind Forest','Cute'),('Untitled Goose Game','Cute'),('Slay The Spire','Deckbuilder'),('Baba is You','Difficult'),('The Elder Scrolls V: Skyrim','Fantasty'),('Stardew Valley','Farming Sim'),('BioShock','FPS'),('Counter-Strike: Global Offensive','FPS'),('Garry\'s Mod','Funny'),('The Jackbox Party Pack 6','Funny'),('Untitled Goose Game','Funny'),('Red Dead Redemption 2','Gore'),('Ori and the Blind Forest','Great Soundtrack'),('BioShock','Horror'),('Phasmophobia','Horror'),('Baba is You','Indie'),('Hades','Indie'),('Minit','Indie'),('The Jackbox Party Pack 6','Indie'),('Untitled Goose Game','Indie'),('Hades','Isometric'),('Stardew Valley','Life Sim'),('Overcooked! 2','Local Co-op'),('Borderlands 3','Looter Shooter'),('Minit','Minimalist'),('Garry\'s Mod','Moddable'),('Among Us','Multiplayer'),('Counter-Strike: Global Offensive','Multiplayer'),('Garry\'s Mod','Multiplayer'),('Grand Theft Auto V','Multiplayer'),('Overcooked! 2','Multiplayer'),('Phasmophobia','Multiplayer'),('Sea of Thieves','Multiplayer'),('Tabletop Simulator','Multiplayer'),('The Jackbox Party Pack 6','Multiplayer'),('Among Us','Online Co-op'),('Borderlands 3','Online Co-op'),('Overcooked! 2','Online Co-op'),('Phasmophobia','Online Co-op'),('Grand Theft Auto V','Open World'),('Red Dead Redemption 2','Open World'),('The Elder Scrolls V: Skyrim','Open World'),('Sea of Thieves','Pirates'),('Minit','Pixel Graphics'),('Stardew Valley','Pixel Graphics'),('Ori and the Blind Forest','Platformer'),('Baba is You','Puzzle'),('Hades','Roguelike'),('Slay The Spire','Rougelike'),('Borderlands 3','RPG'),('Hades','RPG'),('Stardew Valley','RPG'),('The Elder Scrolls V: Skyrim','RPG'),('Garry\'s Mod','Sandbox'),('Counter-Strike: Global Offensive','Shooter'),('Tabletop Simulator','Simulation'),('Baba is You','Singleplayer'),('Among Us','Space'),('BioShock','Story Rich'),('Among Us','Survival'),('Tabletop Simulator','Tabletop'),('The Jackbox Party Pack 6','Trivia'),('Untitled Goose Game','Villian Protagonist'),('Phasmophobia','VR'),('Red Dead Redemption 2','Western');
/*!40000 ALTER TABLE `Genres` ENABLE KEYS */;
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

-- Dump completed on 2020-11-19 17:43:57
