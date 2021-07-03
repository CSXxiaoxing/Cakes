/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1705

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-16 19:13:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for order_list
-- ----------------------------
DROP TABLE IF EXISTS `order_list`;
CREATE TABLE `order_list` (
  `gId` varchar(255) NOT NULL,
  `gNameEN` varchar(255) NOT NULL,
  `gNameZH` varchar(255) NOT NULL,
  `gNb` varchar(255) NOT NULL,
  `gPicture` varchar(255) NOT NULL,
  `gTotal` varchar(255) NOT NULL,
  `gSpec` varchar(255) NOT NULL,
  `gWare` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `gTime` varchar(255) NOT NULL,
  `gNum` varchar(255) NOT NULL,
  PRIMARY KEY (`gId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_list
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
