/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1705

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-15 21:58:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cake_car
-- ----------------------------
DROP TABLE IF EXISTS `cake_car`;
CREATE TABLE `cake_car` (
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `gId` int(11) NOT NULL,
  `gNameZH` varchar(255) NOT NULL COMMENT '中文名',
  `gNameEN` varchar(255) NOT NULL COMMENT '英文名',
  `gSpec` varchar(255) NOT NULL COMMENT '磅数',
  `gPrice` varchar(255) NOT NULL COMMENT '价格',
  `gWare` varchar(255) NOT NULL COMMENT '餐具',
  `gNb` varchar(255) NOT NULL COMMENT '个数',
  `gPicture` varchar(255) NOT NULL COMMENT '图片',
  PRIMARY KEY (`gId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cake_car
-- ----------------------------
INSERT INTO `cake_car` VALUES ('13432858111', '1', '芒果奶油蛋糕', 'Mango Cream Cake', '1.0磅', '198', '含5套餐具', '2', './src/img/b001.jpg');
SET FOREIGN_KEY_CHECKS=1;
