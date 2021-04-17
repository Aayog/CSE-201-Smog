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
-- Table structure for table `UserRequests`
--

DROP TABLE IF EXISTS `UserRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserRequests` (
  `gTitle` varchar(100) DEFAULT NULL,
  `gDescript` varchar(500) DEFAULT NULL,
  `userName` varchar(50) NOT NULL,
  `reqID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`reqID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserRequests`
--

LOCK TABLES `UserRequests` WRITE;
/*!40000 ALTER TABLE `UserRequests` DISABLE KEYS */;
INSERT INTO `UserRequests` VALUES ('Call of Duty: Black Ops Cold War','Call of Duty: Black Ops Cold War is a 2020 first-person shooter video game developed by Treyarch and Raven Software and published by Activision. It is the sixth installment in the Black Ops series, and the seventeenth installment in the overall Call of Duty series.','Alan',1),('Mario Bros.','Mario Bros. is a platform game developed and published for arcades by Nintendo in 1983. It was designed by Shigeru Miyamoto and his coworker and Nintendo’s chief engineer Gunpei Yokoi. Italian-American plumber Mario and his brother Luigi exterminate creatures emerging from the sewers by flipping them on their backs and kicking them away. The original versions of Mario Bros. the arcade version and the Family Computer/Nintendo Entertainment System versionwere received positively by critics.','Alan',2),('Sekiro: Shadows Die Twice','Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.','Alan',3),('Dark Souls 3','Dark Souls 3 is a game where you attempt to fight demons in order to save the world. Attempt being the key word. You WILL die.','Alan',4);
/*!40000 ALTER TABLE `UserRequests` ENABLE KEYS */;
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

-- Dump completed on 2020-11-19 17:43:59
