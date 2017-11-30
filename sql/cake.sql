/*
Navicat MySQL Data Transfer

Source Server         : tzj
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : cake

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-30 15:37:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_list
-- ----------------------------
DROP TABLE IF EXISTS `admin_list`;
CREATE TABLE `admin_list` (
  `aId` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '管理员名字',
  `aPermission` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '权限等级',
  `aJointime` timestamp NULL DEFAULT NULL COMMENT '加入时间',
  `key` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'key',
  `password` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '密码',
  PRIMARY KEY (`aId`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of admin_list
-- ----------------------------
INSERT INTO `admin_list` VALUES ('1', '赵天明', '经理', '2017-11-15 21:00:29', '1510755276131', '123');
INSERT INTO `admin_list` VALUES ('2', '333', '员工', '2017-11-15 21:01:07', '1510755276132', '123');
INSERT INTO `admin_list` VALUES ('3', 'admin', '经理', '2017-11-15 21:43:37', '1510755276133', '123');
INSERT INTO `admin_list` VALUES ('5', '222', '员工', '2017-11-15 22:24:03', '1510755276138', '123');
INSERT INTO `admin_list` VALUES ('6', '111111', '经理', '2017-11-15 22:24:35', '1510755870456', '11111');
INSERT INTO `admin_list` VALUES ('7', '111111', '经理', '2017-11-15 22:25:09', '1510755870457', '11111');
INSERT INTO `admin_list` VALUES ('8', 'tzj', '经理', '2017-11-21 21:52:32', '1511272351262', '123');

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
  `gPicture` varchar(255) NOT NULL COMMENT '图片'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cake_car
-- ----------------------------
INSERT INTO `cake_car` VALUES ('13420173024', '1', '芒果奶油蛋糕', 'Mango Cream Cake', '1.0磅', '198', '含5套餐具', '11', './src/img/b001.jpg');
INSERT INTO `cake_car` VALUES ('13420173021', '11', '6口味切块组合', 'Six Different Flavored Cakes', '1.0磅', '198', '含5套餐具', '1', './src/img/b011.jpg');
INSERT INTO `cake_car` VALUES ('13420173021', '2', '深艾尔', 'Dark Ale', '1.0磅', '198', '含5套餐具', '1', './src/img/b002.jpg');
INSERT INTO `cake_car` VALUES ('13420173021', '6', '爱尔兰咖啡', 'Irish Coffee', '1.0磅', '238', '含5套餐具', '1', './src/img/b006.jpg');
INSERT INTO `cake_car` VALUES ('18898329230', '1', '芒果奶油蛋糕', 'Mango Cream Cake', '1.0磅', '198', '含5套餐具', '3', './src/img/b001.jpg');
INSERT INTO `cake_car` VALUES ('15577128389', '1', '芒果奶油蛋糕', 'Mango Cream Cake', '1.0磅', '198', '含5套餐具', '2', './src/img/b001.jpg');

-- ----------------------------
-- Table structure for class_list
-- ----------------------------
DROP TABLE IF EXISTS `class_list`;
CREATE TABLE `class_list` (
  `cId` int(10) NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `cName` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '分类名称',
  `key` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '分类编码',
  PRIMARY KEY (`cId`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of class_list
-- ----------------------------
INSERT INTO `class_list` VALUES ('1', '蛋糕', '01');
INSERT INTO `class_list` VALUES ('2', '小切块', '02');
INSERT INTO `class_list` VALUES ('3', '冰淇淋', '03');
INSERT INTO `class_list` VALUES ('4', '鲜花', '04');
INSERT INTO `class_list` VALUES ('6', '礼品', '05');
INSERT INTO `class_list` VALUES ('7', '咖啡', '06');
INSERT INTO `class_list` VALUES ('8', '大苏打', '12');

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
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES ('1', '芒果奶油蛋糕', 'Mango Cream Cake', '蛋糕', '人气', '不使用罐头水果和植混奶油,坚持应季凯特鲜切芒果', '芒果,百香果酱 \r\n', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b001_1.jpg&./src/img/b001_2.jpg&./src/img/b001_3.jpg&./src/img/b001_4.jpg&./src/img/b001_5.jpg&./src/img/last.jpg&./src/up_tmp/1.jpg', './src/img/b001.jpg', '不使用罐头水果和植混奶油&坚持应季凯特鲜切芒果&新西兰纯乳脂奶油&21cake配方芒果百香果慕斯夹心', '上架', '1');
INSERT INTO `goods_list` VALUES ('2', '深艾尔', 'Dark Ale', '蛋糕', '新品', '四种精酿啤酒,搭配酸樱桃果酱,风味独特', '帝国世涛,樱桃果酱,樱桃果酱', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b002_1.jpg&./src/img/b002_2.jpg&./src/img/b002_3.jpg&./src/img/b002_4.jpg&./src/img/b002_5.jpg&./src/img/b002_6.jpg&./src/img/b002_7.jpg&./src/img/b002_8.jpg&./src/img/last.jpg', './src/img/b002.jpg', '深色烈性艾尔啤酒风味慕斯&搭配酸樱桃果酱、巧克力甘纳许&使用四种啤酒&罗斯福10号修道院,分水岭野人帝国世涛&林德曼樱桃酸啤&喜力淡色拉格', '上架', '2');
INSERT INTO `goods_list` VALUES ('3', '百利甜情人', 'Bailey‘s Love Triangle', '蛋糕', '人气', '爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露', '爱尔兰百利甜酒,鲜切凯特芒切片,当日空运云南玫瑰', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b003_1.jpg&./src/img/b003_2.jpg&./src/img/b003_3.jpg&./src/img/last.jpg', './src/img/b003.jpg', 'Bailey’s Love Triangel／百利甜情人(含酒)&爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露&Just Baileys, light cream and you. The flavours may bevelvetty subtle, but the chemistry is as electric as a first kiss.', '上架', '3');
INSERT INTO `goods_list` VALUES ('4', '栗蓉暗香（新）', 'Chestnut Cream', '蛋糕', '新品', '鲜栗蓉,点缀手工比利时黑巧克力豆', '怀柔油栗泥,黑巧克力豆', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b004_1.jpg&./src/img/b004_2.jpg&./src/img/b004_3.jpg&./src/img/b004_4.jpg&./src/img/b004_5.jpg&./src/img/b004_6.jpg$./src/img/last.jpg', './src/img/b004.jpg', '栗子烘烤的蛋糕坯,鲜栗蓉,点缀手工比利时黑巧克力豆&Chestnuts and real fresh cream go so well together you &know this isn’t going to be a short term dalliance. In fact, &one whiff of the aroma of Chestnut Cream and you’ll realize you’re attending their wedding...', '上架', '4');
INSERT INTO `goods_list` VALUES ('5', '布萊克', 'The Nut Job Big', '蛋糕', '人气', '', '烤榛子和榛子酱,黑巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b005_1.jpg&./src/img/b005_2.jpg&./src/img/b005_3.jpg&./src/img/b005_4.jpg&./src/img/b005_5.jpg&./src/img/b005_6.jpg$./src/img/last.jpg', './src/img/b005.jpg', '比利时黑巧克力与中国榛子,淡苦与干脆,浓香丰满&Crazily crisp dark chocolate and kookily nutty fist fulls of &Chinese hazelnuts make this one nut job you won’t want &to lock up.', '上架', '5');
INSERT INTO `goods_list` VALUES ('6', '爱尔兰咖啡', 'Irish Coffee', '蛋糕', '新品', '', '爱尔兰威士忌,咖啡慕斯和咖啡坯', '238.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b006_1.jpg&./src/img/b006_2.jpg&./src/img/b006_3.jpg&./src/img/b006_4.jpg&./src/img/b006_5.jpg&./src/img/b006_6.jpg$./src/img/b006_7.jpg$./src/img/b006_8.jpg$./src/img/last.jpg', './src/img/b006.jpg', '真正的爱从未中断,也不会消失,它永远在守候下一刻就要坐到对面......&\r\nTopped with a shimmering jelly made with real Jameson’s &Irish Whiskey, a crisp chocolate biscuit base gives way to a &thick and fluffy coffee mousse', '上架', '6');
INSERT INTO `goods_list` VALUES ('7', '黑白巧克力慕斯（撒粉生日）', 'Black and White Chocolate Mousse', '蛋糕', '', '口感冰凉细腻,白巧克力慕斯的甜,与底部黑巧克力酱的苦', '君度酒,比利时巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b007_1.jpg&./src/img/b007_2.jpg&./src/img/b007_3.jpg&./src/img/last.jpg', './src/img/b007.jpg', '口感冰凉细腻,白巧克力慕斯的甜,与底部黑巧克力酱的苦&\r\nCool, silky white chocolate. Rich, bitter dark chocolate. &They’re like the mismatched cop duo who spent all their &time bickering but always got results. The results in this &case? A dessert experience to die for. ', '上架', '7');
INSERT INTO `goods_list` VALUES ('8', '朗姆芝士', 'Rum Cheese Cake', '蛋糕', '', '', '白朗姆酒,柠檬,芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b008_1.jpg&./src/img/b008_2.jpg&./src/img/b008_3.jpg&./src/img/b008_4.jpg&./src/img/b008_5.jpg&./src/img/b008_6.jpg$./src/img/last.jpg', './src/img/b008.jpg', '香滑的乳酪与打开的一瓶波多黎各朗姆酒&酒香，微苦，清新的柠檬&\r\nShiver me timbers! Here’s a rum one – but unlike most of &its seafaring fellows our rum cheesecake is far from swarthy.', '上架', '8');
INSERT INTO `goods_list` VALUES ('9', '芒果慕斯', 'Mango Jerry', '蛋糕', '', '', '芒果冻,芒果肉,芒果浆慕斯', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b009_1.jpg&./src/img/b009_2.jpg&./src/img/b009_3.jpg&./src/img/last.jpg', './src/img/b009.jpg', '世界公认41个品种的芒果,按四大种群,在不同产地相继成熟&为始终采用当季成熟鲜芒,做出理想的芒果慕斯,21cake肯于增&加采购成本，按不同标准挑选自然成熟的果实&\r\nFrom November to next September, Mangoes around the &world get to maturi-ty! So before purchasing a mango, &check your calendar, then your ', '上架', '9');
INSERT INTO `goods_list` VALUES ('10', '榴莲飘飘', 'A Picture of Durian Grey', '蛋糕', '推荐', '自然成熟的纯榴莲果肉夹层', '新鲜成熟榴莲肉,超薄白巧克力片', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b010_1.jpg&./src/img/b010_2.jpg&./src/img/b010_3.jpg&./src/img/b010_4.jpg&./src/img/b010_5.jpg&./src/img/b010_6.jpg&./src/img/last.jpg', './src/img/b010.jpg', '自然成熟的泰国榴莲&在曼谷,官兵后代庭院中,生长着一百年至一百五十年的榴莲树&\r\nImagine if an object could bear the weight of all your sins, &while you swan about ever beautiful. &The durian fruit bears the weight of its sins on the outside, in the &form of its malodorous stench.', '上架', '10');
INSERT INTO `goods_list` VALUES ('11', '6口味切块组合', 'Six Different Flavored Cakes', '蛋糕', '推荐', '松仁淡奶、芒果慕斯、摩卡、布朗尼、抹茶、黑白巧克力慕斯', '芒果,巧克力,酒,坚果,芝士,咖啡豆', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b011_1.jpg&./src/img/b011_2.jpg&./src/img/b011_3.jpg&./src/img/last.jpg', './src/img/b011.jpg', '21cake切块蛋糕&月销进入3万盒之际&所有口味，单盒克数增加多至45%&', '上架', '11');
INSERT INTO `goods_list` VALUES ('12', '摩卡', 'Café Mocha', '蛋糕', '', '非洲之吻咖啡豆、比利时黑巧克力、手工松露巧克力', '耶加雪菲咖啡豆,比利时巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b012_1.jpg&./src/img/b012_2.jpg&./src/img/b012_3.jpg&./src/img/b012_4.jpg&./src/img/b012_5.jpg&./src/img/last.jpg', './src/img/b012.jpg', '世上还有摩卡,就有无尽挣扎', '上架', '12');
INSERT INTO `goods_list` VALUES ('13', '新卡', 'Cappuccino In Mind', '蛋糕', '推荐', '埃塞俄比亚耶加雪菲、低温奶油冷萃、墨西哥咖啡酒、马达加斯加香草荚', '咖啡酒,精品咖啡豆', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b013_1.jpg&./src/img/b013_2.jpg&./src/img/b013_3.jpg&./src/img/b013_4.jpg&./src/img/b013_5.jpg&./src/img/b013_6.jpg&./src/img/last.jpg', './src/img/b013.jpg', '低温乳脂奶油冷萃耶加雪菲&配马达加斯加香草戚风', '上架', '13');
INSERT INTO `goods_list` VALUES ('14', '杰瑞', 'Jerry', '蛋糕', '新品', '', '芝士,白核桃碎', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b014_1.jpg&./src/img/b014_2.jpg&./src/img/last.jpg', './src/img/b014.jpg', '谁动了我的奶酪？!&Who touched my cheese? A silky smooth cheese cake fit for &the king of mice. Rich and tempting with a crunchy biscuit &base. No cats allowed!', '上架', '14');
INSERT INTO `goods_list` VALUES ('15', '布朗尼', 'Brownie Cake', '蛋糕', '推荐', '', '黑朗姆酒,多种坚果', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b015_1.jpg&./src/img/b015_2.jpg&./src/img/b015_3.jpg&./src/img/b015_4.jpg&./src/img/b015_5.jpg&./src/img/b015_6.jpg&./src/img/last.jpg', './src/img/b015.jpg', '时光荏苒,亘古不变&If you ever find yourself packing God’s own lunchbox and &you’re looking for the perfect sweet treat, this is it. The &humble brownie just got uppity: sure it might look down its &nose at you, but only on its way to your mouth.', '上架', '15');
INSERT INTO `goods_list` VALUES ('16', '花格', 'Fruit Pocket', '蛋糕', '推荐', '', '白巧克力,时令鲜果,椰蓉', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b016_1.jpg&./src/img/b016_2.jpg&./src/img/last.jpg', './src/img/b016.jpg', '去世界更多的地方,走入更多水果成熟的季节,欣赏、采集&A colourful crowding of fresh fruit all hemmed in by &coconut. Grab that spoon and get diggin', '上架', '16');
INSERT INTO `goods_list` VALUES ('17', '桂圆冰淇淋', 'Ice Cream Cake with Longan', '蛋糕', '推荐', '白兰地让人分神,有些记忆与酒有关,一边融化,香味渐浓', '白兰地酒,金黄桂圆肉干', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b017_1.jpg&./src/img/b017_2.jpg&./src/img/b017_3.jpg&./src/img/b017_4.jpg&./src/img/last.jpg', './src/img/b017.jpg', '白兰地让人分神,有些记忆与酒有关&一边融化，香味渐浓......&It is more than the pleasing taste of dried longan. The flavor &of brandy comes by unexpectedly, the cream dissolves on &your tongue like a pleasant memory.', '上架', '17');
INSERT INTO `goods_list` VALUES ('18', '核桃斯诺', 'Hickory Snow', '蛋糕', '', '', '烤核桃', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b018_1.jpg&./src/img/b018_2.jpg&./src/img/b018_3.jpg&./src/img/last.jpg', './src/img/b018.jpg', '带着刚刚剥壳的一点微涩,香脆核桃与新西兰乳脂奶油&Hickory dickory dake. The mouse ran up the cake. He found &himself surrounded by crunchy nuts, and soft sweet cheese &and cream. The clock struck one. The mouse exploded. It &was just too much pleasure for his little rodent heart.', '上架', '18');
INSERT INTO `goods_list` VALUES ('19', '百香果酸乳酪慕斯蛋糕', 'easycake', '蛋糕', '', '', '百香果酱,酸奶酪,微酸', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b019_1.jpg&./src/img/b019_2.jpg&./src/img/b019_3.jpg&./src/img/last.jpg', './src/img/b019.jpg', '何况它，有超过130种芳香&除了酸味，百香果是世界上已知&充满芳香的水果之一', '上架', '19');
INSERT INTO `goods_list` VALUES ('20', '黑白巧克力慕斯', 'Black and White Chocolate Mousse', '蛋糕', '', '', '君度酒,比利时巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b020_1.jpg&./src/img/b020_2.jpg&./src/img/b020_3.jpg&./src/img/b020_4.jpg&./src/img/b020_5.jpg&./src/img/b020_6.jpg&./src/img/last.jpg', './src/img/b020.jpg', '口感冰凉细腻,白巧克力慕斯的甜,与底部黑巧克力酱的苦&Cool,  silky white chocolate. Rich, bitter dark chocolate. &They’re like the mismatched cop duo who spent all their &time bickering but always got results. The results in this &case? A dessert experience to die for.', '上架', '20');
INSERT INTO `goods_list` VALUES ('21', '松仁淡奶', 'Pine Stone Cowboy', '蛋糕', '', '', '大兴安岭松仁,低甜度', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b021_1.jpg&./src/img/b021_2.jpg&./src/img/b021_3.jpg&./src/img/last.jpg&./src/img/b021_4.jpg&./src/img/b021_5.jpg&./src/img/b021_6.jpg&./src/img/last.jpg', './src/img/b021.jpg', '中国松仁,和着甜润淡奶咀嚼&A soft, sentimental sponge unfettered as a prairie, but with &a sheen of bad boy dark chocolate on top. And there, like &stars over the desert, is a rugged studding of pine nuts.', '上架', '21');
INSERT INTO `goods_list` VALUES ('22', '新马斯卡彭-咖啡软芝士蛋糕', 'forget Tiramisu', '蛋糕', '', '', '含酒,马斯卡彭奶酪,蓝莓干', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b022_1.jpg&./src/img/b022_2.jpg&./src/img/b022_3.jpg&./src/img/b022_4.jpg&./src/img/b022_5.jpg&./src/img/b022_6.jpg&./src/img/b022_7.jpg&./src/img/last.jpg', './src/img/b022.jpg', '多孔蛋糕坯，深深沉浸墨西哥咖啡甘露&加杯咖啡，忘记提拉米苏&A perforated cake base, soaked in Mexican coffee syrup. &Now，forget Tiramisu...', '上架', '22');
INSERT INTO `goods_list` VALUES ('23', '朗姆芝士', 'Rum Cheese Cake', '', '轮播', '', '白朗姆酒,柠檬,芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b008_1.jpg&./src/img/b008_2.jpg&./src/img/b008_3.jpg&./src/img/b008_4.jpg&./src/img/b008_5.jpg&./src/img/b008_6.jpg$./src/img/last.jpg', './src/img/L1.jpg', '香滑的乳酪与打开的一瓶波多黎各朗姆酒&酒香，微苦，清新的柠檬&\r\nShiver me timbers! Here’s a rum one – but unlike most of &its seafaring fellows our rum cheesecake is far from swarthy.', '上架', '23');
INSERT INTO `goods_list` VALUES ('24', '深艾尔', 'Dark Ale', '', '轮播', '四种精酿啤酒,搭配酸樱桃果酱,风味独特', '帝国世涛,樱桃果酱,樱桃果酱', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b002_1.jpg&./src/img/b002_2.jpg&./src/img/b002_3.jpg&./src/img/b002_4.jpg&./src/img/b002_5.jpg&./src/img/b002_6.jpg&./src/img/b002_7.jpg&./src/img/b002_8.jpg&./src/img/last.jpg', './src/img/L2.jpg', '深色烈性艾尔啤酒风味慕斯&搭配酸樱桃果酱、巧克力甘纳许&使用四种啤酒&罗斯福10号修道院,分水岭野人帝国世涛&林德曼樱桃酸啤&喜力淡色拉格', '上架', '24');
INSERT INTO `goods_list` VALUES ('25', '芒果奶油蛋糕', 'Mango Cream Cake', '', '轮播', '不使用罐头水果和植混奶油,坚持应季凯特鲜切芒果', '芒果,百香果酱 \r\n', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b001_1.jpg&./src/img/b001_2.jpg&./src/img/b001_3.jpg&./src/img/b001_4.jpg&./src/img/b001_5.jpg&./src/img/last.jpg', './src/img/L3.jpg', '不使用罐头水果和植混奶油&坚持应季凯特鲜切芒果&新西兰纯乳脂奶油&21cake配方芒果百香果慕斯夹心', '上架', '25');
INSERT INTO `goods_list` VALUES ('26', '百利甜情人', 'Bailey‘s Love Triangle', '', '轮播', '爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露', '爱尔兰百利甜酒,鲜切凯特芒切片,当日空运云南玫瑰', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b003_1.jpg&./src/img/b003_2.jpg&./src/img/b003_3.jpg&./src/img/last.jpg', './src/img/L4.jpg', 'Bailey’s Love Triangel／百利甜情人(含酒)&爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露&Just Baileys, light cream and you. The flavours may bevelvetty subtle, but the chemistry is as electric as a first kiss.', '上架', '26');
INSERT INTO `goods_list` VALUES ('27', '冻慕斯与焗芝士', 'Cool&Hot', '蛋糕', '', '', '意大利马斯卡彭奶酪,法国咸芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b027_1.jpg&./src/img/b027_2.jpg&./src/img/b027_3.jpg&./src/img/b027_4.jpg&./src/img/b027_5.jpg&./src/img/b027_6.jpg&./src/img/last.jpg', './src/img/b027.jpg', '平衡冰与火&新鲜奶油慕斯，平滑叠加降温至4度的现焗法国软芝士，&轻盐味，诱发原香，丰富甜', '上架', '27');
INSERT INTO `goods_list` VALUES ('28', '卡布其诺', 'Cappuccino', '蛋糕', '', '', '咖啡酒,肯尼亚咖啡豆,芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b028_1.jpg&./src/img/b028_2.jpg&./src/img/last.jpg', './src/img/b028.jpg', '不同风味的咖啡叠加,把来自地中海的美妙味道凝固于蛋糕中&Close your eyes and put your &imaginary feet up, unfurl an imaginary copy of the Corriere della sera, glancing up &occasionally to shoo the imaginary pigeons away from your &imaginary table.', '上架', '28');
INSERT INTO `goods_list` VALUES ('29', '重组', 'Mille-feuille', '蛋糕', '', '', '拿波里千层酥,迷迭香奶油,树莓奶油,蓝莓奶油', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b029_1.jpg&./src/img/b029_2.jpg&./src/img/b029_3.jpg&./src/img/b029_4jpg&./src/img/b029_5.jpg&./src/img/b029_6.jpg&./src/img/last.jpg', './src/img/b029.jpg', '设计师限量款&探讨，设计研发符合人类进步的食物&传统的mille-feuille/Napolitain千层酥蛋糕', '上架', '29');
INSERT INTO `goods_list` VALUES ('30', '抹茶和栗', 'Matcha & Chestnut Mousse', '蛋糕', '', '', '济州岛抹茶,栗子羊羹,微苦', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b030_1.jpg&./src/img/b030_2.jpg&./src/img/b030_3.jpg&./src/img/b030_4jpg&./src/img/b030_5.jpg&./src/img/b030_6.jpg&./src/img/b030_7.jpg&./src/img/last.jpg', './src/img/b030.jpg', '那国度惊惧于，有人开始闭上眼睛&时间过去7年，21cake‘抹茶和栗慕斯’蛋糕&回归于对东方抹茶，及今日的&全新意见', '上架', '30');
INSERT INTO `goods_list` VALUES ('31', 'GELATO10', 'GELATO10', '冰淇淋', '', '', '冰淇淋', '180.00', '原味4个', './src/img/b031_1.jpg&./src/img/b031_2.jpg&./src/img/b031_3.jpg', './src/img/b031.jpg', '【单口味GELATO10组合】包含2种组合：4个原味&牛乳冰淇淋（组合1）', '上架', '31');
INSERT INTO `goods_list` VALUES ('32', '原味牛乳冰淇淋', 'Milk Gelato ', '冰淇淋', '', '', '冰淇淋', '45.00', '盒', './src/img/b032_1.jpg&./src/img/b032_2.jpg&./src/img/b032_3.jpg', './src/img/b032.jpg', '【单口味GELATO10组合】包含2种组合：4个原味&牛乳冰淇淋（组合1）', '上架', '32');
INSERT INTO `goods_list` VALUES ('33', '夏日-Affogato组合', 'Affogato', '冰淇淋', '', '', '冰淇淋', '55.00', '份', './src/img/b033_1.jpg&./src/img/b033_2.jpg&./src/img/b033_3.jpg&./src/img/b033_4.jpg&./src/img/b033_5.jpg&./src/img/b033_6.jpg&./src/img/b033_7.jpg&./src/img/b033_8.jpg', './src/img/b033.jpg', 'Affogato，冰淇淋吃法的一次实践&现冲，水粉比12:1 。约120ml，90℃-95℃热水冲煮挂耳咖啡&打开Gelato10，将咖啡注入冰淇淋表面&倒入少量，是咖啡“遇见”冰淇淋，凝成细细的冰沙&多倒一点，是咖啡瞬间“融化”冰淇淋&尝一口，Affogato', '上架', '33');
INSERT INTO `goods_list` VALUES ('34', '（十连包）耶加雪菲挂耳咖啡', '', '咖啡', '', '', '咖啡', '100.00', '盒', './src/img/b034_1.jpg&./src/img/b034_2.jpg&./src/img/b034_3.jpg', './src/img/b034.jpg', '产自埃塞俄比亚海拔2000米高原小镇&G1级咖啡豆，精湛的水洗技术带来清澈脱俗的花果芬芳&茉莉花香、柠檬香、杏仁香和绿茶&迷人的果香与醇厚&稀少而昂贵', '上架', '34');
INSERT INTO `goods_list` VALUES ('35', '（十连包）巴西喜拉多挂耳咖啡', '', '咖啡', '', '', '咖啡', '100.00', '盒', './src/img/b035_1.jpg&./src/img/b035_2.jpg&./src/img/b035_3.jpg', './src/img/b035.jpg', '产于巴西广袤的稀树草原&醇厚，柔和&坚果香、烤花生、烤榛子与焦糖&巴西精品咖啡豆的代名词', '上架', '35');
INSERT INTO `goods_list` VALUES ('36', '松仁淡奶', 'Pine Stone Cowboy ', '小切块', '', '', '大兴安岭松仁,低甜度', '36.00', '块', './src/img/b036_1.jpg&./src/img/b036_2.jpg&./src/img/b036_3.jpg', './src/img/b036.jpg', '小切块蛋糕，微小而触手可及的幸福，&简单却实在温暖，谁说美好的事物不能久存？&熟悉的口味，同样的简洁精致，&你定会与它一见如故。', '上架', '36');
INSERT INTO `goods_list` VALUES ('37', '抹茶和栗', 'Matcha & Chestnut Mousse', '小切块', '', '', '济州岛抹茶,栗子羊羹,微苦', '36.00', '块', './src/img/b037_1.jpg&./src/img/b037_2.jpg&./src/img/b037_3.jpg&./src/img/b037_4.jpg', './src/img/b037.jpg', '小切块蛋糕，微小而触手可及的幸福，&简单却实在温暖，谁说美好的事物不能久存？&熟悉的口味，同样的简洁精致，&你定会与它一见如故。', '上架', '37');
INSERT INTO `goods_list` VALUES ('38', '真爱如初', '', '鲜花', '', '', '雪山玫瑰，深紫勿忘我', '198.00', '束', './src/img/b038_1.jpg&./src/img/b038_2.jpg&./src/img/b038_3.jpg&./src/img/b038_4.jpg&./src/img/b038_5.jpg&./src/img/b038_6.jpg&./src/img/b038_7.jpg&./src/img/b038_8.jpg', './src/img/b038.jpg', '用一袭白裙装扮你那无瑕的身姿，&向一抹白云倾诉对你的思念，&用一捧鲜花证明我不变的心。', '上架', '38');
INSERT INTO `goods_list` VALUES ('39', '恋香--精品玫瑰礼盒', '', '鲜花', '', '', '香槟玫瑰', '288.00', '束', './src/img/b039_1.jpg&./src/img/b039_2.jpg&./src/img/b039_3.jpg&./src/img/b039_4.jpg&./src/img/b039_5.jpg&./src/img/b039_6.jpg', './src/img/b039.jpg', '微风伴着花香，&吹来爱的气息。&用一颗真心轻轻爱你，&温柔的话只说给你听', '上架', '39');
INSERT INTO `goods_list` VALUES ('40', '柔情似水', '', '鲜花', '', '', '香槟玫瑰,紫色勿忘我', '288.00', '束', './src/img/b040_1.jpg&./src/img/b040_2.jpg&./src/img/b040_3.jpg&./src/img/b040_4.jpg&./src/img/b040_5.jpg&./src/img/b040_6.jpg', './src/img/b040.jpg', '柔情似水，佳期如梦，忍顾鹊桥归路', '上架', '40');

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
  `key` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_list
-- ----------------------------
INSERT INTO `order_list` VALUES ('10', 'A Picture of Durian Grey', '榴莲飘飘', '1', './src/img/b010.jpg', '198', '1.0磅', '含5套餐具', '13420173021', '2001/11/11', '111', '10');
INSERT INTO `order_list` VALUES ('5', 'The Nut Job Big', '布萊克', '1', './src/img/b005.jpg', '198', '1.0磅', '含5套餐具', '13420173021', '2001/11/11', '111', '5');
INSERT INTO `order_list` VALUES ('4', 'Chestnut Cream', '栗蓉暗香（新）', '1', './src/img/b004.jpg', '198', '1.0磅', '含5套餐具', '13420173021', '2001/11/11', '111', '4');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '1', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '13420173021', '2001/11/11', '111', '1');
INSERT INTO `order_list` VALUES ('2', 'Dark Ale', '深艾尔', '3', './src/img/b002.jpg', '198', '1.0磅', '含5套餐具', '13420173021', '2001/11/11', '111', '2');
INSERT INTO `order_list` VALUES ('3', 'Bailey‘s Love Triangle', '百利甜情人', '1', './src/img/b003.jpg', '198', '1.0磅', '含5套餐具', '13420173021', '2017/11/17', '111', '3');
INSERT INTO `order_list` VALUES ('4', 'Chestnut Cream', '栗蓉暗香（新）', '1', './src/img/b004.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1103422643', '4');
INSERT INTO `order_list` VALUES ('4', 'Chestnut Cream', '栗蓉暗香（新）', '1', './src/img/b004.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '4');
INSERT INTO `order_list` VALUES ('2', 'Dark Ale', '深艾尔', '2', './src/img/b002.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '2');
INSERT INTO `order_list` VALUES ('3', 'Bailey‘s Love Triangle', '百利甜情人', '1', './src/img/b003.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '3');
INSERT INTO `order_list` VALUES ('4', 'Chestnut Cream', '栗蓉暗香（新）', '1', './src/img/b004.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '4');
INSERT INTO `order_list` VALUES ('3', 'Bailey‘s Love Triangle', '百利甜情人', '1', './src/img/b003.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '3');
INSERT INTO `order_list` VALUES ('2', 'Dark Ale', '深艾尔', '2', './src/img/b002.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '2');
INSERT INTO `order_list` VALUES ('4', 'Chestnut Cream', '栗蓉暗香（新）', '1', './src/img/b004.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '4');
INSERT INTO `order_list` VALUES ('2', 'Dark Ale', '深艾尔', '1', './src/img/b002.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '1977999774', '2');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '1', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '0961321117', '1');
INSERT INTO `order_list` VALUES ('7', 'Black and White Chocolate Mousse', '黑白巧克力慕斯（撒粉生日）', '1', './src/img/b007.jpg', '198', '1.0磅', '含5套餐具', '13420173025', '2017/11/17', '4201150870', '7');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '2', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/17', '9206924268', '1');
INSERT INTO `order_list` VALUES ('2', 'Dark Ale', '深艾尔', '4', './src/img/b002.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/17', '9206924268', '2');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '3', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/17', '6560658430', '1');
INSERT INTO `order_list` VALUES ('3', 'Bailey‘s Love Triangle', '百利甜情人', '2', './src/img/b003.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/17', '8802000983', '3');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '9', './src/img/b001.jpg', '', '1.0磅2.0磅3.0磅5.0磅', '', '18898329230', '2017/11/17', '4268382720', '1');
INSERT INTO `order_list` VALUES ('2', 'Dark Ale', '深艾尔', '23', './src/img/b002.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/21', '1020766704', '2');
INSERT INTO `order_list` VALUES ('3', 'Bailey‘s Love Triangle', '百利甜情人', '2', './src/img/b003.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/21', '1020766704', '3');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '1', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/25', '5414190924', '1');
INSERT INTO `order_list` VALUES ('6', 'Irish Coffee', '爱尔兰咖啡', '4', './src/img/b006.jpg', '238', '1.0磅', '含5套餐具', '15577128389', '2017/11/25', '5414190924', '6');
INSERT INTO `order_list` VALUES ('4', 'Chestnut Cream', '栗蓉暗香（新）', '1', './src/img/b004.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/25', '3423330621', '4');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '3', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/25', '3423330621', '1');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '1', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/25', '1695337304', '1');
INSERT INTO `order_list` VALUES ('6', 'Irish Coffee', '爱尔兰咖啡', '4', './src/img/b006.jpg', '238', '1.0磅', '含5套餐具', '15577128389', '2017/11/25', '1695337304', '6');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '1', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/29', '8130538830', '1');
INSERT INTO `order_list` VALUES ('13', 'Cappuccino In Mind', '新卡', '2', './src/img/b013.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/29', '8452079039', '13');
INSERT INTO `order_list` VALUES ('36', 'Pine Stone Cowboy ', '松仁淡奶', '4', './src/img/b036.jpg', '72 ', '2.0磅', '', '15577128389', '2017/11/29', '8452079039', '36');
INSERT INTO `order_list` VALUES ('1', 'Mango Cream Cake', '芒果奶油蛋糕', '2', './src/img/b001.jpg', '198', '1.0磅', '含5套餐具', '15577128389', '2017/11/29', '8452079039', '1');

-- ----------------------------
-- Table structure for user_list
-- ----------------------------
DROP TABLE IF EXISTS `user_list`;
CREATE TABLE `user_list` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1923 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_list
-- ----------------------------
INSERT INTO `user_list` VALUES ('13420173024', '1342017302413420173024', '3', '84df983c7a2e95f4d03ab3631eb4b82c', '广州市天河区元岗路', '13420173024', '13420173024');
INSERT INTO `user_list` VALUES ('13420173025', 'ljj111111', '1880', '632cebc5cd871a588fdd24a2674ed29e', '广州市天河区元岗路', '13420173025', '13420173025');
INSERT INTO `user_list` VALUES ('13420173026', 'ljj111111', '1881', 'b649d373f435e46cf7fb92c3ff35bf3a', '广州市天河区元岗路', '13420173026', '13420173026');
INSERT INTO `user_list` VALUES ('13420173022', 'ljj1111111', '1891', '067c40d467207e22e3a8321dad653d2b', '广州市天河区元岗路', '13420173022', '13420173022');
INSERT INTO `user_list` VALUES ('13420173021', 'ljj111111', '1889', '08bfcf4a24964be7938563f6ac46d262', '广州市天河区元岗路', '13420173021', '13420173021');
INSERT INTO `user_list` VALUES ('13420173027', 'ljj111111', '1888', 'd9988796addb06e56922e7d97c18075a', '广州市天河区元岗路', '13420173027', '13420173027');
INSERT INTO `user_list` VALUES ('13420173028', 'ljj111111', '1917', null, '广州市天河区元岗路', '13420173028', '13420173028');
INSERT INTO `user_list` VALUES ('13420172034', 'ljj1111111', '1914', 'e4a6d7c5c4bef87192b14296e556ae9d', '广州市天河区元岗路', '13420172034', '13420172034');
INSERT INTO `user_list` VALUES ('15577128389', 'tz123456789', '1918', '27f7b62dcc8798d7ef76d34de9037a98', '广州市天河区元岗路', '15577128389', '15577128389');
INSERT INTO `user_list` VALUES ('15555555555', 't123456789', '1919', '1c843918303f0af1649dda997a3d3958', null, null, null);
INSERT INTO `user_list` VALUES ('15555555551', 't123456789', '1920', null, null, null, null);
INSERT INTO `user_list` VALUES ('13333333333', 't123456789', '1921', null, null, null, null);
INSERT INTO `user_list` VALUES ('18898329230', 't123456789', '1922', 'fe05b30bcdbf975f915886cf8dc6b376', null, null, null);
SET FOREIGN_KEY_CHECKS=1;
