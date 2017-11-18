/*
SQLyog Ultimate v11.27 (32 bit)
MySQL - 5.7.14 : Database - cake
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cake` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `cake`;

/*Table structure for table `class_list` */

DROP TABLE IF EXISTS `class_list`;

CREATE TABLE `class_list` (
  `cId` int(10) NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `cName` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '分类名称',
  `key` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '分类编码',
  PRIMARY KEY (`cId`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `class_list` */

insert  into `class_list`(`cId`,`cName`,`key`) values (1,'蛋糕','01'),(2,'小切块','02'),(3,'冰淇淋','03'),(4,'鲜花','04'),(6,'礼品','05'),(7,'咖啡','06');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
