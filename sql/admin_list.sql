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

/*Table structure for table `admin_list` */

DROP TABLE IF EXISTS `admin_list`;

CREATE TABLE `admin_list` (
  `aId` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '管理员名字',
  `aPermission` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '权限等级',
  `aJointime` timestamp NULL DEFAULT NULL COMMENT '加入时间',
  `key` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'key',
  `password` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '密码',
  PRIMARY KEY (`aId`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `admin_list` */

insert  into `admin_list`(`aId`,`username`,`aPermission`,`aJointime`,`key`,`password`) values (1,'赵天明','经理','2017-11-15 21:00:29','1510755276131','123'),(2,'333','员工','2017-11-15 21:01:07','1510755276132','123'),(3,'admin','经理','2017-11-15 21:43:37','1510755276133','123'),(4,'111','经理','2017-11-15 22:25:49','1510755276134','123'),(5,'222','员工','2017-11-15 22:24:03','1510755276138','123'),(6,'111111','经理','2017-11-15 22:24:35','1510755870456','11111'),(7,'111111','经理','2017-11-15 22:25:09','1510755870457','11111');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
