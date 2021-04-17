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
-- Table structure for table `Platform`
--

DROP TABLE IF EXISTS `Platform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Platform` (
  `gTitle` varchar(100) NOT NULL,
  `Platform` varchar(100) NOT NULL,
  PRIMARY KEY (`Platform`,`gTitle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Platform`
--

LOCK TABLES `Platform` WRITE;
/*!40000 ALTER TABLE `Platform` DISABLE KEYS */;
INSERT INTO `Platform` VALUES ('Baba is You','Linux'),('Counter-Strike: Global Offensive','Linux'),('Garry\'s Mod','Linux'),('Minit','Linux'),('Overcooked! 2','Linux'),('Slay The Spire','Linux'),('Stardew Valley','Linux'),('Tabletop Simulator','Linux'),('The Jackbox Party Pack 6','Linux'),('Baba is You','Mac OS X'),('Counter-Strike: Global Offensive','Mac OS X'),('Garry\'s Mod','Mac OS X'),('Hades','Mac OS X'),('Minit','Mac OS X'),('Overcooked! 2','Mac OS X'),('Slay The Spire','Mac OS X'),('Stardew Valley','Mac OS X'),('Tabletop Simulator','Mac OS X'),('The Jackbox Party Pack 6','Mac OS X'),('Untitled Goose Game','Mac OS X'),('Baba is You','SteamOS'),('Counter-Strike: Global Offensive','SteamOS'),('Garry\'s Mod','SteamOS'),('Minit','SteamOS'),('Overcooked! 2','SteamOS'),('Slay The Spire','SteamOS'),('Stardew Valley','SteamOS'),('Tabletop Simulator','SteamOS'),('The Jackbox Party Pack 6','SteamOS'),('Among Us','Windows'),('Baba is You','Windows'),('BioShock','Windows'),('Borderlands 3','Windows'),('Counter-Strike: Global Offensive','Windows'),('Garry\'s Mod','Windows'),('Grand Theft Auto V','Windows'),('Hades','Windows'),('Minit','Windows'),('Ori and the Blind Forest','Windows'),('Overcooked! 2','Windows'),('Phasmophobia','Windows'),('Red Dead Redemption 2','Windows'),('Sea of Thieves','Windows'),('Slay The Spire','Windows'),('Stardew Valley','Windows'),('Tabletop Simulator','Windows'),('The Elder Scrolls V: Skyrim','Windows'),('The Jackbox Party Pack 6','Windows'),('Untitled Goose Game','Windows');
/*!40000 ALTER TABLE `Platform` ENABLE KEYS */;
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

-- Dump completed on 2020-11-19 17:43:54
