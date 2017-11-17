/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : cake

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-16 15:46:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_list
-- ----------------------------
DROP TABLE IF EXISTS `user_list`;
CREATE TABLE `user_list` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1918 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_list
-- ----------------------------
INSERT INTO `user_list` VALUES ('13420173024', 'ljj111111', '3', 'af624036c6f50962f6ffd53453cd7aee');
INSERT INTO `user_list` VALUES ('13420173025', 'ljj111111', '1880', '632cebc5cd871a588fdd24a2674ed29e');
INSERT INTO `user_list` VALUES ('13420173026', 'ljj111111', '1881', 'b649d373f435e46cf7fb92c3ff35bf3a');
INSERT INTO `user_list` VALUES ('13420173022', 'ljj1111111', '1891', '067c40d467207e22e3a8321dad653d2b');
INSERT INTO `user_list` VALUES ('13420173021', 'ljj111111', '1889', '08bfcf4a24964be7938563f6ac46d262');
INSERT INTO `user_list` VALUES ('13420173027', 'ljj111111', '1888', 'd9988796addb06e56922e7d97c18075a');
INSERT INTO `user_list` VALUES ('13420173028', 'ljj111111', '1917', null);
INSERT INTO `user_list` VALUES ('13420172034', 'ljj1111111', '1914', 'e4a6d7c5c4bef87192b14296e556ae9d');
SET FOREIGN_KEY_CHECKS=1;
