/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1705

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-15 21:53:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods_list
-- ----------------------------
DROP TABLE IF EXISTS `goods_list`;
CREATE TABLE `goods_list` (
  `gId` int(11) NOT NULL AUTO_INCREMENT,
  `gNameZH` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gNameEN` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gClass` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gTag` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gDesc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gMaterials` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gPrice` decimal(10,2) DEFAULT NULL,
  `gSpec` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gDetalispic` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gPicture` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gIntro` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `isPutaway` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `key` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`gId`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES ('1', '芒果奶油蛋糕', 'Mango Cream Cake', '蛋糕', '人气', '不使用罐头水果和植混奶油,坚持应季凯特鲜切芒果', '芒果,百香果酱 \r\n', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b001_1.jpg&./src/img/b001_2.jpg&./src/img/b001_3.jpg&./src/img/b001_4.jpg&./src/img/b001_5.jpg&./src/img/b001_6.jpg', './src/img/b001.jpg', '不使用罐头水果和植混奶油&坚持应季凯特鲜切芒果&新西兰纯乳脂奶油&21cake配方芒果百香果慕斯夹心', '上架', '1');
SET FOREIGN_KEY_CHECKS=1;
