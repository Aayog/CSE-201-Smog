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
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `Username` varchar(50) NOT NULL,
  `gTitle` varchar(50) NOT NULL,
  `Comment` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`Username`,`gTitle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES ('Alan','Among Us','Fun Multiplayer Experience'),('Alan','Baba is You','Decievingly difficult puzzle game'),('Alan','BioShock','Great variety of weapons'),('Alan','Borderlands 3','Looting, shooting fun'),('Alan','Counter-Strike: Global Offensive','Tactics driven team shooter'),('Alan','Garry\'\'s Mod','Great communities and plenty of game modes'),('Alan','Grand Theft Auto V','Whether you do heists or take out the competition, this game is an all around fun time'),('Alan','Hades','Fast paced combat and infinite combinations of upgrades make this game fun and different every time'),('Alan','Minit','Loved the art'),('Alan','Ori and the Blind Forest','Very cinematic with great platforming'),('Alan','Overcook! 2','Chaotic but fun'),('Alan','Phasmophobia','A scarily fun game'),('Alan','Red Dead Redemption 2','Yeehaw'),('Alan','Sea of Thieves','If you ever wanted to be a pirate this game is for you'),('Alan','Slay The Spire','Fun and easy to pick up, hard to win'),('Alan','Stardew Vally','Relaxing'),('Alan','Tabletop Simulator','Great for playing boardgames online with friends'),('Alan','The Elder Scrolls V: Skyrim','Kind of buggy but an overall good time'),('Alan','The Jackbox Party Pack 6','A collection of great party games. Joke boat had me and my friends gasping for air'),('Alan','Untitled Goose Game','Wonderful use of non verbal story telling'),('Connor','Among Us','At first I was sus about the quality of a $5 game, but this game is no impostor'),('Connor','Baba is You','Too hard, couldn\'t beat it'),('Dave','Among Us','Had a great time backstabbing my friends'),('Dave','Baba is You','A nice challenge'),('john','Among Us','Got stabbed. 10/10 would play again');
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
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

-- Dump completed on 2020-11-19 17:44:02
