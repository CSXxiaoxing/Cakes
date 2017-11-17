/*
Navicat MySQL Data Transfer

Source Server         : tong
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : cake

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

<<<<<<< HEAD
Date: 2017-11-16 20:21:06
=======
Date: 2017-11-16 10:14:28
>>>>>>> 6823643672f2545fabd096d4536d6233ed88255c
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
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
<<<<<<< HEAD
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
=======
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
>>>>>>> 6823643672f2545fabd096d4536d6233ed88255c

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '芒果奶油蛋糕', 'Mango Cream Cake', '蛋糕', '人气', '不使用罐头水果和植混奶油,坚持应季凯特鲜切芒果', '芒果,百香果酱 \r\n', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b001_1.jpg&./src/img/b001_2.jpg&./src/img/b001_3.jpg&./src/img/b001_4.jpg&./src/img/b001_5.jpg&./src/img/last.jpg', './src/img/b001.jpg', '不使用罐头水果和植混奶油&坚持应季凯特鲜切芒果&新西兰纯乳脂奶油&21cake配方芒果百香果慕斯夹心', '上架', '1');
<<<<<<< HEAD
INSERT INTO `goodslist` VALUES ('2', '深艾尔', 'Dark Ale', '蛋糕', '新品', '四种精酿啤酒,搭配酸樱桃果酱,风味独特', '帝国世涛,樱桃果酱,樱桃果酱', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b002_1.jpg&./src/img/b002_2.jpg&./src/img/b002_3.jpg&./src/img/b002_4.jpg&./src/img/b002_5.jpg&./src/img/b002_6.jpg&./src/img/b002_7.jpg&./src/img/b002_8.jpg&./src/img/last.jpg', './src/img/b002.jpg', '深色烈性艾尔啤酒风味慕斯&搭配酸樱桃果酱、巧克力甘纳许&使用四种啤酒&罗斯福10号修道院,分水岭野人帝国世涛&林德曼樱桃酸啤&喜力淡色拉格', '上架', '2');
=======
INSERT INTO `goodslist` VALUES ('2', '深艾尔', 'Dark Ale', '蛋糕', '新品', '四种精酿啤酒,搭配酸樱桃果酱,风味独特', '帝国世涛,樱桃果酱,樱桃果酱', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b002_1.jpg&./src/img/b002_2.jpg&./src/img/b002_3.jpg&./src/img/b002_4.jpg&./src/img/b002_5.jpg&./src/img/b002_6.jpg&./src/img/b002_7.jpg&./src/img/b002_8.jpg&./src/img/last.jpg', '2', '深色烈性艾尔啤酒风味慕斯&搭配酸樱桃果酱、巧克力甘纳许&使用四种啤酒&罗斯福10号修道院,分水岭野人帝国世涛&林德曼樱桃酸啤&喜力淡色拉格', '上架', '2');
>>>>>>> 6823643672f2545fabd096d4536d6233ed88255c
INSERT INTO `goodslist` VALUES ('3', '百利甜情人', 'Bailey‘s Love Triangle', '蛋糕', '人气', '爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露', '爱尔兰百利甜酒,鲜切凯特芒切片,当日空运云南玫瑰', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b003_1.jpg&./src/img/b003_2.jpg&./src/img/b003_3.jpg&./src/img/last.jpg', './src/img/b003.jpg', 'Bailey’s Love Triangel／百利甜情人(含酒)&爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露&Just Baileys, light cream and you. The flavours may bevelvetty subtle, but the chemistry is as electric as a first kiss.', '上架', '3');
INSERT INTO `goodslist` VALUES ('4', '栗蓉暗香（新）', 'Chestnut Cream', '蛋糕', '新品', '鲜栗蓉,点缀手工比利时黑巧克力豆', '怀柔油栗泥,黑巧克力豆', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b004_1.jpg&./src/img/b004_2.jpg&./src/img/b004_3.jpg&./src/img/b004_4.jpg&./src/img/b004_5.jpg&./src/img/b004_6.jpg$./src/img/last.jpg', './src/img/b004.jpg', '栗子烘烤的蛋糕坯,鲜栗蓉,点缀手工比利时黑巧克力豆&Chestnuts and real fresh cream go so well together you &know this isn’t going to be a short term dalliance. In fact, &one whiff of the aroma of Chestnut Cream and you’ll realize you’re attending their wedding...', '上架', '4');
INSERT INTO `goodslist` VALUES ('5', '布萊克', 'The Nut Job Big', '蛋糕', '人气', '', '烤榛子和榛子酱,黑巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b005_1.jpg&./src/img/b005_2.jpg&./src/img/b005_3.jpg&./src/img/b005_4.jpg&./src/img/b005_5.jpg&./src/img/b005_6.jpg$./src/img/last.jpg', './src/img/b005.jpg', '比利时黑巧克力与中国榛子,淡苦与干脆,浓香丰满&Crazily crisp dark chocolate and kookily nutty fist fulls of &Chinese hazelnuts make this one nut job you won’t want &to lock up.', '上架', '5');
INSERT INTO `goodslist` VALUES ('6', '爱尔兰咖啡', 'Irish Coffee', '蛋糕', '新品', '', '爱尔兰威士忌,咖啡慕斯和咖啡坯', '238.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b006_1.jpg&./src/img/b006_2.jpg&./src/img/b006_3.jpg&./src/img/b006_4.jpg&./src/img/b006_5.jpg&./src/img/b006_6.jpg$./src/img/b006_7.jpg$./src/img/b006_8.jpg$./src/img/last.jpg', './src/img/b006.jpg', '真正的爱从未中断,也不会消失,它永远在守候下一刻就要坐到对面......&\r\nTopped with a shimmering jelly made with real Jameson’s &Irish Whiskey, a crisp chocolate biscuit base gives way to a &thick and fluffy coffee mousse', '上架', '6');
INSERT INTO `goodslist` VALUES ('7', '黑白巧克力慕斯（撒粉生日）', 'Black and White Chocolate Mousse', '蛋糕', '', '口感冰凉细腻,白巧克力慕斯的甜,与底部黑巧克力酱的苦', '君度酒,比利时巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b007_1.jpg&./src/img/b007_2.jpg&./src/img/b007_3.jpg&./src/img/last.jpg', './src/img/b007.jpg', '口感冰凉细腻,白巧克力慕斯的甜,与底部黑巧克力酱的苦&\r\nCool, silky white chocolate. Rich, bitter dark chocolate. &They’re like the mismatched cop duo who spent all their &time bickering but always got results. The results in this &case? A dessert experience to die for. ', '上架', '7');
INSERT INTO `goodslist` VALUES ('8', '朗姆芝士', 'Rum Cheese Cake', '蛋糕', '', '', '白朗姆酒,柠檬,芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b008_1.jpg&./src/img/b008_2.jpg&./src/img/b008_3.jpg&./src/img/b008_4.jpg&./src/img/b008_5.jpg&./src/img/b008_6.jpg$./src/img/last.jpg', './src/img/b008.jpg', '香滑的乳酪与打开的一瓶波多黎各朗姆酒&酒香，微苦，清新的柠檬&\r\nShiver me timbers! Here’s a rum one – but unlike most of &its seafaring fellows our rum cheesecake is far from swarthy.', '上架', '8');
INSERT INTO `goodslist` VALUES ('9', '芒果慕斯', 'Mango Jerry', '蛋糕', '', '', '芒果冻,芒果肉,芒果浆慕斯', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b009_1.jpg&./src/img/b009_2.jpg&./src/img/b009_3.jpg&./src/img/last.jpg', './src/img/b009.jpg', '世界公认41个品种的芒果,按四大种群,在不同产地相继成熟&为始终采用当季成熟鲜芒,做出理想的芒果慕斯,21cake肯于增&加采购成本，按不同标准挑选自然成熟的果实&\r\nFrom November to next September, Mangoes around the &world get to maturi-ty! So before purchasing a mango, &check your calendar, then your ', '上架', '9');
INSERT INTO `goodslist` VALUES ('10', '榴莲飘飘', 'A Picture of Durian Grey', '蛋糕', '推荐', '自然成熟的纯榴莲果肉夹层', '新鲜成熟榴莲肉,超薄白巧克力片', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b010_1.jpg&./src/img/b010_2.jpg&./src/img/b010_3.jpg&./src/img/b010_4.jpg&./src/img/b010_5.jpg&./src/img/b010_6.jpg&./src/img/last.jpg', './src/img/b010.jpg', '自然成熟的泰国榴莲&在曼谷,官兵后代庭院中,生长着一百年至一百五十年的榴莲树&\r\nImagine if an object could bear the weight of all your sins, &while you swan about ever beautiful. &The durian fruit bears the weight of its sins on the outside, in the &form of its malodorous stench.', '上架', '10');
INSERT INTO `goodslist` VALUES ('11', '6口味切块组合', 'Six Different Flavored Cakes', '蛋糕', '推荐', '松仁淡奶、芒果慕斯、摩卡、布朗尼、抹茶、黑白巧克力慕斯', '芒果,巧克力,酒,坚果,芝士,咖啡豆', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b011_1.jpg&./src/img/b011_2.jpg&./src/img/b011_3.jpg&./src/img/last.jpg', './src/img/b011.jpg', '21cake切块蛋糕&月销进入3万盒之际&所有口味，单盒克数增加多至45%&', '上架', '11');
INSERT INTO `goodslist` VALUES ('12', '摩卡', 'Café Mocha', '蛋糕', '', '非洲之吻咖啡豆、比利时黑巧克力、手工松露巧克力', '耶加雪菲咖啡豆,比利时巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b012_1.jpg&./src/img/b012_2.jpg&./src/img/b012_3.jpg&./src/img/b012_4.jpg&./src/img/b012_5.jpg&./src/img/last.jpg', './src/img/b012.jpg', '世上还有摩卡,就有无尽挣扎', '上架', '12');
INSERT INTO `goodslist` VALUES ('13', '新卡', 'Cappuccino In Mind', '蛋糕', '推荐', '埃塞俄比亚耶加雪菲、低温奶油冷萃、墨西哥咖啡酒、马达加斯加香草荚', '咖啡酒,精品咖啡豆', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b013_1.jpg&./src/img/b013_2.jpg&./src/img/b013_3.jpg&./src/img/b013_4.jpg&./src/img/b013_5.jpg&./src/img/b013_6.jpg&./src/img/last.jpg', './src/img/b013.jpg', '低温乳脂奶油冷萃耶加雪菲&配马达加斯加香草戚风', '上架', '13');
INSERT INTO `goodslist` VALUES ('14', '杰瑞', 'Jerry', '蛋糕', '新品', '', '芝士,白核桃碎', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b014_1.jpg&./src/img/b014_2.jpg&./src/img/last.jpg', './src/img/b014.jpg', '谁动了我的奶酪？!&Who touched my cheese? A silky smooth cheese cake fit for &the king of mice. Rich and tempting with a crunchy biscuit &base. No cats allowed!', '上架', '14');
INSERT INTO `goodslist` VALUES ('15', '布朗尼', 'Brownie Cake', '蛋糕', '', '', '黑朗姆酒,多种坚果', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b015_1.jpg&./src/img/b015_2.jpg&./src/img/b015_3.jpg&./src/img/b015_4.jpg&./src/img/b015_5.jpg&./src/img/b015_6.jpg&./src/img/last.jpg', './src/img/b015.jpg', '时光荏苒,亘古不变&If you ever find yourself packing God’s own lunchbox and &you’re looking for the perfect sweet treat, this is it. The &humble brownie just got uppity: sure it might look down its &nose at you, but only on its way to your mouth.', '上架', '15');
INSERT INTO `goodslist` VALUES ('16', '花格', 'Fruit Pocket', '蛋糕', '', '', '白巧克力,时令鲜果,椰蓉', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b016_1.jpg&./src/img/b016_2.jpg&./src/img/last.jpg', './src/img/b016.jpg', '去世界更多的地方,走入更多水果成熟的季节,欣赏、采集&A colourful crowding of fresh fruit all hemmed in by &coconut. Grab that spoon and get diggin', '上架', '16');
INSERT INTO `goodslist` VALUES ('17', '桂圆冰淇淋', 'Ice Cream Cake with Longan', '蛋糕', '', '白兰地让人分神,有些记忆与酒有关,一边融化,香味渐浓', '白兰地酒,金黄桂圆肉干', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b017_1.jpg&./src/img/b017_2.jpg&./src/img/b017_3.jpg&./src/img/b017_4.jpg&./src/img/last.jpg', './src/img/b017.jpg', '白兰地让人分神,有些记忆与酒有关&一边融化，香味渐浓......&It is more than the pleasing taste of dried longan. The flavor &of brandy comes by unexpectedly, the cream dissolves on &your tongue like a pleasant memory.', '上架', '17');
INSERT INTO `goodslist` VALUES ('18', '核桃斯诺', 'Hickory Snow', '蛋糕', '', '', '烤核桃', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b018_1.jpg&./src/img/b018_2.jpg&./src/img/b018_3.jpg&./src/img/last.jpg', './src/img/b018.jpg', '带着刚刚剥壳的一点微涩,香脆核桃与新西兰乳脂奶油&Hickory dickory dake. The mouse ran up the cake. He found &himself surrounded by crunchy nuts, and soft sweet cheese &and cream. The clock struck one. The mouse exploded. It &was just too much pleasure for his little rodent heart.', '上架', '18');
INSERT INTO `goodslist` VALUES ('19', '百香果酸乳酪慕斯蛋糕', 'easycake', '蛋糕', '', '', '百香果酱,酸奶酪,微酸', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b019_1.jpg&./src/img/b019_2.jpg&./src/img/b019_3.jpg&./src/img/last.jpg', './src/img/b019.jpg', '何况它，有超过130种芳香&除了酸味，百香果是世界上已知&充满芳香的水果之一', '上架', '19');
INSERT INTO `goodslist` VALUES ('20', '黑白巧克力慕斯', 'Black and White Chocolate Mousse', '蛋糕', '', '', '君度酒,比利时巧克力', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b020_1.jpg&./src/img/b020_2.jpg&./src/img/b020_3.jpg&./src/img/b020_4.jpg&./src/img/b020_5.jpg&./src/img/b020_6.jpg&./src/img/last.jpg', './src/img/b020.jpg', '口感冰凉细腻,白巧克力慕斯的甜,与底部黑巧克力酱的苦&Cool,  silky white chocolate. Rich, bitter dark chocolate. &They’re like the mismatched cop duo who spent all their &time bickering but always got results. The results in this &case? A dessert experience to die for.', '上架', '20');
INSERT INTO `goodslist` VALUES ('21', '松仁淡奶', 'Pine Stone Cowboy', '蛋糕', '', '', '大兴安岭松仁,低甜度', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b021_1.jpg&./src/img/b021_2.jpg&./src/img/b021_3.jpg&./src/img/last.jpg&./src/img/b021_4.jpg&./src/img/b021_5.jpg&./src/img/b021_6.jpg&./src/img/last.jpg', './src/img/b021.jpg', '中国松仁,和着甜润淡奶咀嚼&A soft, sentimental sponge unfettered as a prairie, but with &a sheen of bad boy dark chocolate on top. And there, like &stars over the desert, is a rugged studding of pine nuts.', '上架', '21');
INSERT INTO `goodslist` VALUES ('22', '新马斯卡彭-咖啡软芝士蛋糕', 'forget Tiramisu', '蛋糕', '', '', '含酒,马斯卡彭奶酪,蓝莓干', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b022_1.jpg&./src/img/b022_2.jpg&./src/img/b022_3.jpg&./src/img/b022_4.jpg&./src/img/b022_5.jpg&./src/img/b022_6.jpg&./src/img/b022_7.jpg&./src/img/last.jpg', './src/img/b022.jpg', '多孔蛋糕坯，深深沉浸墨西哥咖啡甘露&加杯咖啡，忘记提拉米苏&A perforated cake base, soaked in Mexican coffee syrup. &Now，forget Tiramisu...', '上架', '22');
<<<<<<< HEAD
INSERT INTO `goodslist` VALUES ('23', '朗姆芝士', 'Rum Cheese Cake', '', '轮播', '', '白朗姆酒,柠檬,芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b008_1.jpg&./src/img/b008_2.jpg&./src/img/b008_3.jpg&./src/img/b008_4.jpg&./src/img/b008_5.jpg&./src/img/b008_6.jpg$./src/img/last.jpg', './src/img/L1.jpg', '香滑的乳酪与打开的一瓶波多黎各朗姆酒&酒香，微苦，清新的柠檬&\r\nShiver me timbers! Here’s a rum one – but unlike most of &its seafaring fellows our rum cheesecake is far from swarthy.', '上架', '23');
INSERT INTO `goodslist` VALUES ('24', '深艾尔', 'Dark Ale', '', '轮播', '四种精酿啤酒,搭配酸樱桃果酱,风味独特', '帝国世涛,樱桃果酱,樱桃果酱', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b002_1.jpg&./src/img/b002_2.jpg&./src/img/b002_3.jpg&./src/img/b002_4.jpg&./src/img/b002_5.jpg&./src/img/b002_6.jpg&./src/img/b002_7.jpg&./src/img/b002_8.jpg&./src/img/last.jpg', './src/img/L2.jpg', '深色烈性艾尔啤酒风味慕斯&搭配酸樱桃果酱、巧克力甘纳许&使用四种啤酒&罗斯福10号修道院,分水岭野人帝国世涛&林德曼樱桃酸啤&喜力淡色拉格', '上架', '24');
INSERT INTO `goodslist` VALUES ('25', '芒果奶油蛋糕', 'Mango Cream Cake', '', '轮播', '不使用罐头水果和植混奶油,坚持应季凯特鲜切芒果', '芒果,百香果酱 \r\n', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b001_1.jpg&./src/img/b001_2.jpg&./src/img/b001_3.jpg&./src/img/b001_4.jpg&./src/img/b001_5.jpg&./src/img/last.jpg', './src/img/L3.jpg', '不使用罐头水果和植混奶油&坚持应季凯特鲜切芒果&新西兰纯乳脂奶油&21cake配方芒果百香果慕斯夹心', '上架', '25');
INSERT INTO `goodslist` VALUES ('26', '百利甜情人', 'Bailey‘s Love Triangle', '', '轮播', '爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露', '爱尔兰百利甜酒,鲜切凯特芒切片,当日空运云南玫瑰', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b003_1.jpg&./src/img/b003_2.jpg&./src/img/b003_3.jpg&./src/img/last.jpg', './src/img/L4.jpg', 'Bailey’s Love Triangel／百利甜情人(含酒)&爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露&Just Baileys, light cream and you. The flavours may bevelvetty subtle, but the chemistry is as electric as a first kiss.', '上架', '26');
INSERT INTO `goodslist` VALUES ('27', '冻慕斯与焗芝士', 'Cool&Hot', '蛋糕', '', '', '意大利马斯卡彭奶酪,法国咸芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b027_1.jpg&./src/img/b027_2.jpg&./src/img/b027_3.jpg&./src/img/b027_4.jpg&./src/img/b027_5.jpg&./src/img/b027_6.jpg&./src/img/last.jpg', './src/img/b027.jpg', '平衡冰与火&新鲜奶油慕斯，平滑叠加降温至4度的现焗法国软芝士，&轻盐味，诱发原香，丰富甜', '上架', '27');
INSERT INTO `goodslist` VALUES ('28', '卡布其诺', 'Cappuccino', '蛋糕', '', '', '咖啡酒,肯尼亚咖啡豆,芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b028_1.jpg&./src/img/b028_2.jpg&./src/img/last.jpg', './src/img/b028.jpg', '不同风味的咖啡叠加,把来自地中海的美妙味道凝固于蛋糕中&Close your eyes and put your &imaginary feet up, unfurl an imaginary copy of the Corriere della sera, glancing up &occasionally to shoo the imaginary pigeons away from your &imaginary table.', '上架', '28');
INSERT INTO `goodslist` VALUES ('29', '重组', 'Mille-feuille', '蛋糕', '', '', '拿波里千层酥,迷迭香奶油,树莓奶油,蓝莓奶油', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b029_1.jpg&./src/img/b029_2.jpg&./src/img/b029_3.jpg&./src/img/b029_4jpg&./src/img/b029_5.jpg&./src/img/b029_6.jpg&./src/img/last.jpg', './src/img/b029.jpg', '设计师限量款&探讨，设计研发符合人类进步的食物&传统的mille-feuille/Napolitain千层酥蛋糕', '上架', '29');
INSERT INTO `goodslist` VALUES ('30', '抹茶和栗', 'Matcha & Chestnut Mousse', '蛋糕', '', '', '济州岛抹茶,栗子羊羹,微苦', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b030_1.jpg&./src/img/b030_2.jpg&./src/img/b030_3.jpg&./src/img/b030_4jpg&./src/img/b030_5.jpg&./src/img/b030_6.jpg&./src/img/b030_7.jpg&./src/img/last.jpg', './src/img/b030.jpg', '那国度惊惧于，有人开始闭上眼睛&时间过去7年，21cake‘抹茶和栗慕斯’蛋糕&回归于对东方抹茶，及今日的&全新意见', '上架', '30');
INSERT INTO `goodslist` VALUES ('31', 'GELATO10', 'GELATO10', '冰淇淋', '', '', '冰淇淋', '180.00', '原味4个', './src/img/b031_1.jpg&./src/img/b031_2.jpg&./src/img/b031_3.jpg', './src/img/b031.jpg', '【单口味GELATO10组合】包含2种组合：4个原味&牛乳冰淇淋（组合1）', '上架', '31');
INSERT INTO `goodslist` VALUES ('32', '原味牛乳冰淇淋', 'Milk Gelato ', '冰淇淋', '', '', '冰淇淋', '45.00', '盒', './src/img/b032_1.jpg&./src/img/b032_2.jpg&./src/img/b032_3.jpg', './src/img/b032.jpg', '【单口味GELATO10组合】包含2种组合：4个原味&牛乳冰淇淋（组合1）', '上架', '32');
INSERT INTO `goodslist` VALUES ('33', '夏日-Affogato组合', 'Affogato', '冰淇淋', '', '', '冰淇淋', '55.00', '份', './src/img/b033_1.jpg&./src/img/b033_2.jpg&./src/img/b033_3.jpg&./src/img/b033_4.jpg&./src/img/b033_5.jpg&./src/img/b033_6.jpg&./src/img/b033_7.jpg&./src/img/b033_8.jpg', './src/img/b033.jpg', 'Affogato，冰淇淋吃法的一次实践&现冲，水粉比12:1 。约120ml，90℃-95℃热水冲煮挂耳咖啡&打开Gelato10，将咖啡注入冰淇淋表面&倒入少量，是咖啡“遇见”冰淇淋，凝成细细的冰沙&多倒一点，是咖啡瞬间“融化”冰淇淋&尝一口，Affogato', '上架', '33');
INSERT INTO `goodslist` VALUES ('34', '（十连包）耶加雪菲挂耳咖啡', '', '咖啡', '', '', '咖啡', '100.00', '盒', './src/img/b034_1.jpg&./src/img/b034_2.jpg&./src/img/b034_3.jpg', './src/img/b034.jpg', '产自埃塞俄比亚海拔2000米高原小镇&G1级咖啡豆，精湛的水洗技术带来清澈脱俗的花果芬芳&茉莉花香、柠檬香、杏仁香和绿茶&迷人的果香与醇厚&稀少而昂贵', '上架', '34');
INSERT INTO `goodslist` VALUES ('35', '（十连包）巴西喜拉多挂耳咖啡', '', '咖啡', '', '', '咖啡', '100.00', '盒', './src/img/b035_1.jpg&./src/img/b035_2.jpg&./src/img/b035_3.jpg', './src/img/b035.jpg', '产于巴西广袤的稀树草原&醇厚，柔和&坚果香、烤花生、烤榛子与焦糖&巴西精品咖啡豆的代名词', '上架', '35');
INSERT INTO `goodslist` VALUES ('36', '松仁淡奶', 'Pine Stone Cowboy ', '小切块', '', '', '大兴安岭松仁,低甜度', '36.00', '块', './src/img/b036_1.jpg&./src/img/b036_2.jpg&./src/img/b036_3.jpg', './src/img/b036.jpg', '小切块蛋糕，微小而触手可及的幸福，&简单却实在温暖，谁说美好的事物不能久存？&熟悉的口味，同样的简洁精致，&你定会与它一见如故。', '上架', '36');
INSERT INTO `goodslist` VALUES ('37', '抹茶和栗', 'Matcha & Chestnut Mousse', '小切块', '', '', '济州岛抹茶,栗子羊羹,微苦', '36.00', '块', './src/img/b037_1.jpg&./src/img/b037_2.jpg&./src/img/b037_3.jpg&./src/img/b037_4.jpg', './src/img/b037.jpg', '小切块蛋糕，微小而触手可及的幸福，&简单却实在温暖，谁说美好的事物不能久存？&熟悉的口味，同样的简洁精致，&你定会与它一见如故。', '上架', '37');
INSERT INTO `goodslist` VALUES ('38', '真爱如初', '', '鲜花', '', '', '雪山玫瑰，深紫勿忘我', '198.00', '束', './src/img/b038_1.jpg&./src/img/b038_2.jpg&./src/img/b038_3.jpg&./src/img/b038_4.jpg&./src/img/b038_5.jpg&./src/img/b038_6.jpg&./src/img/b038_7.jpg&./src/img/b038_8.jpg', './src/img/b038.jpg', '用一袭白裙装扮你那无瑕的身姿，&向一抹白云倾诉对你的思念，&用一捧鲜花证明我不变的心。', '上架', '38');
INSERT INTO `goodslist` VALUES ('39', '恋香--精品玫瑰礼盒', '', '鲜花', '', '', '香槟玫瑰', '288.00', '束', './src/img/b039_1.jpg&./src/img/b039_2.jpg&./src/img/b039_3.jpg&./src/img/b039_4.jpg&./src/img/b039_5.jpg&./src/img/b039_6.jpg', './src/img/b039.jpg', '微风伴着花香，&吹来爱的气息。&用一颗真心轻轻爱你，&温柔的话只说给你听', '上架', '39');
INSERT INTO `goodslist` VALUES ('40', '柔情似水', '', '鲜花', '', '', '香槟玫瑰,紫色勿忘我', '288.00', '束', './src/img/b040_1.jpg&./src/img/b040_2.jpg&./src/img/b040_3.jpg&./src/img/b040_4.jpg&./src/img/b040_5.jpg&./src/img/b040_6.jpg', './src/img/b040.jpg', '柔情似水，佳期如梦，忍顾鹊桥归路', '上架', '40');
=======
INSERT INTO `goodslist` VALUES ('23', '朗姆芝士', 'Rum Cheese Cake', '', '轮播', '', '白朗姆酒,柠檬,芝士', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b008_1.jpg&./src/img/b008_2.jpg&./src/img/b008_3.jpg&./src/img/b008_4.jpg&./src/img/b008_5.jpg&./src/img/b008_6.jpg$./src/img/last.jpg', './src/img/L1.jpg', '香滑的乳酪与打开的一瓶波多黎各朗姆酒&酒香，微苦，清新的柠檬&\r\nShiver me timbers! Here’s a rum one – but unlike most of &its seafaring fellows our rum cheesecake is far from swarthy.', '上架', '8');
INSERT INTO `goodslist` VALUES ('24', '深艾尔', 'Dark Ale', '', '轮播', '四种精酿啤酒,搭配酸樱桃果酱,风味独特', '帝国世涛,樱桃果酱,樱桃果酱', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b002_1.jpg&./src/img/b002_2.jpg&./src/img/b002_3.jpg&./src/img/b002_4.jpg&./src/img/b002_5.jpg&./src/img/b002_6.jpg&./src/img/b002_7.jpg&./src/img/b002_8.jpg&./src/img/last.jpg', './src/img/L2.jpg', '深色烈性艾尔啤酒风味慕斯&搭配酸樱桃果酱、巧克力甘纳许&使用四种啤酒&罗斯福10号修道院,分水岭野人帝国世涛&林德曼樱桃酸啤&喜力淡色拉格', '上架', '2');
INSERT INTO `goodslist` VALUES ('25', '芒果奶油蛋糕', 'Mango Cream Cake', '', '轮播', '不使用罐头水果和植混奶油,坚持应季凯特鲜切芒果', '芒果,百香果酱 \r\n', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b001_1.jpg&./src/img/b001_2.jpg&./src/img/b001_3.jpg&./src/img/b001_4.jpg&./src/img/b001_5.jpg&./src/img/last.jpg', './src/img/L3.jpg', '不使用罐头水果和植混奶油&坚持应季凯特鲜切芒果&新西兰纯乳脂奶油&21cake配方芒果百香果慕斯夹心', '上架', '1');
INSERT INTO `goodslist` VALUES ('26', '百利甜情人', 'Bailey‘s Love Triangle', '', '轮播', '爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露', '爱尔兰百利甜酒,鲜切凯特芒切片,当日空运云南玫瑰', '198.00', '1.0磅,2.0磅,3.0磅,5.0磅', './src/img/b003_1.jpg&./src/img/b003_2.jpg&./src/img/b003_3.jpg&./src/img/last.jpg', './src/img/L4.jpg', 'Bailey’s Love Triangel／百利甜情人(含酒)&爱尔兰百利甜酒,新西兰奶油,云南玫瑰甘露&Just Baileys, light cream and you. The flavours may bevelvetty subtle, but the chemistry is as electric as a first kiss.', '上架', '3');

-- ----------------------------
-- Table structure for goods_list
-- ----------------------------
DROP TABLE IF EXISTS `goods_list`;
CREATE TABLE `goods_list` (
  `gId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `gNameZH` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '商品名称(中文)',
  `gNameEN` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '商品名称(英文)',
  `gClass` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '商品分类',
  `gTag` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '商品标签',
  `gDesc` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品描述',
  `gPrice` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品价格',
  `gSpec` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品规格',
  `gDetalisPic` text CHARACTER SET utf8 COMMENT '商品详情图片',
  `gPicture` text CHARACTER SET utf8 COMMENT '商品图片',
  `gIntro` text CHARACTER SET utf8 COMMENT '商品介绍',
  `isPutaway` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '是否上架',
  `key` int(10) unsigned DEFAULT NULL COMMENT 'key',
  PRIMARY KEY (`gId`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES ('6', '环游世界·秋冬季蛋糕', 'Around The World Cake', '蛋糕', '推荐', '精选芝士、慕斯、鲜果与巧克力系列', '198', '1磅，2磅，3磅，5磅', '', './src/img/b002.jpg', '手工打发而成的进口鲜奶油,口感绵密，精致细腻,这份雪白让你有如获至宝的幸福感,进口的黑巧克力,通过精致的工艺,将巧克力的香醇甜蜜发挥到极致,每一口都倍感甜蜜', '上架', '2');
INSERT INTO `goods_list` VALUES ('7', '辣么巧流心蛋糕', 'Scorpio Chilli Chocolate Cake', '蛋糕', '人气', '不一样的味觉感受，等你来尝', '218', '1磅，2磅，3磅，5磅', '', './src/img/b003.jpg', '比利时进口黑巧克力暗藏玄机,丝丝辣味把浓情可可装进心里,看不透的秘密,就用吃来解决', '上架', '3');
INSERT INTO `goods_list` VALUES ('8', '实栗派核桃栗蓉蛋糕', 'walnut chestnut cake', '蛋糕', '人气', '栗子核桃香草巧克力', '218', '1磅，2磅，3磅，5磅', '', './src/img/b004.jpg', '城市中的人们来去匆匆,离清新的森林如此遥远,松软的戚风蛋糕如云拂过舌尖,醇香的核桃被栗子蓉覆盖,每一口都动人心弦,如沐斑斓阳光', '上架', '4');
INSERT INTO `goods_list` VALUES ('1', '雪域牛乳芝士蛋糕', 'Le Cheesecake', '蛋糕', '新品', '雪域牛乳芝士，比利时白巧克力，裱花奶油', '100', '1磅，2磅，3磅，5磅', '', './src/img/b001.jpg', '\r\n阿尔卑斯山的雪\r\n简单但有种永恒的美\r\n特浓牛乳和新西兰上等芝士用独特的工艺\r\n令芝士的香气完全散发出来\r\n蛋糕的口感也更加浓郁香滑、入口即溶\r\n上等食材的精心配比，让这款蛋糕回味无穷\r\n阿尔卑斯山的雪\r\n简单但有种永恒的美\r\n特浓牛乳和新西兰上等芝士用独特的工艺\r\n令芝士的香气完全散发出来\r\n蛋糕的口感也更加浓郁香滑、入口即溶\r\n上等食材的精心配比，让这款蛋糕回味无穷\r\n', '上架', '1');
INSERT INTO `goods_list` VALUES ('9', '鬼马小精灵蛋糕', 'Le Phantom Cake', '蛋糕', '人气', '草莓巧克力', '218', '1磅，2磅，3磅，5磅', '', './src/img/b005.jpg', '环绕着的巧克力片，像是一层幕布,小精灵们揭开面纱，跃上舞台,如同柔软绵密的戚风蛋糕和新鲜草莓,一起在舌尖碰撞出奇妙滋味,是万圣夜最亮眼的礼物', '上架', '5');
INSERT INTO `goods_list` VALUES ('10', '诺心花园•隆冬蛋糕', 'Le Cake’s Garden/Winter', '蛋糕', '新品', '牛乳松露蓝莓红豆芝士', '238', '1磅，2磅，3磅，5磅', '', './src/img/b006.jpg', '精选四款人气产品,雪域蓝莓芝士蛋糕、钻石雪域牛乳芝士蛋糕质,和风抹茶红豆蛋糕、巧克力松露蛋糕,四种蛋糕层次分明,如同隆冬飘雪里,一句一句说不完的故事', '上架', '6');
INSERT INTO `goods_list` VALUES ('11', '美刀刀蛋糕', 'Ms. Golden', '蛋糕', '新品', '奶油芝士白巧克力', '258', '1磅，2磅，3磅，5磅', '', './src/img/b007.jpg', '芝士与香草戚风被雪域奶油的浪漫笼罩,每一口都充满快乐的滋味,撩拨起无限的食欲,让味蕾懂得了心跳的感觉', '上架', '7');
INSERT INTO `goods_list` VALUES ('12', '钻石雪域牛乳芝士蛋糕', 'Diamond Cheesecake', '蛋糕', '推荐', '奶香芝士酒冻', '238', '1磅，2磅，3磅，5磅', '', './src/img/b008.jpg', '动人的纯粹,永远是最值得为之冒险的品质,撇开一切既有的存在去存在，才不枉此生,让一切回到最初的味道,淡淡的醇香奶油，柔滑的白巧克力，佐以酒的微苦,再诱人的千变万化，都不如一世绵长回味', '上架', '8');
INSERT INTO `goods_list` VALUES ('13', '鲜奶芒芒蛋糕', 'Mango Cream Cake', '蛋糕', '新品', '芒果香草奶油', '198', '1磅，2磅，3磅，5磅', '', './src/img/b009.jpg', '爱尔兰奶油与法国芒果果茸联袂演绎,口感与外在皆清爽细腻,就像是你记忆中跳动的小思绪,一口蛋糕就是一段快乐插曲', '上架', '9');
INSERT INTO `goods_list` VALUES ('14', '提拉米苏乐脆蛋糕', 'Tiramisu Crispy', '蛋糕', '人气', '可可巧克力芝士', '198', '1磅，2磅，3磅，5磅', '', './src/img/b010.jpg', '选用法国天然稀奶油,草莓 覆盆子 酸甜清新 错落有致且搭配适宜,慕斯与戚风 层层融合 口感绵密,相信会给你带来难忘的味蕾触动', '上架', '10');
INSERT INTO `goods_list` VALUES ('15', '爱•发声蛋糕', 'Le Loves', '蛋糕', '新品', '盛放的玫瑰', '258', '1磅，2磅，3磅，5磅', '', './src/img/b011.jpg', '巧克力的芬芳融合特选的香橙果酱,橙香四溢 造就了特有的口感,更加体现出蛋糕的本真原味,让爱·发声 眉梢嘴角间的流露的幸福,我想 这就是爱情', '上架', '11');
INSERT INTO `goods_list` VALUES ('16', '爱•撒娇蛋糕', 'Pink Loves', '蛋糕', '新品', '盛放的玫瑰', '258', '1磅，2磅，3磅，5磅', '', './src/img/b012.jpg', '粉色附在奶油表面极尽柔美,衬得酸奶味慕斯分外诱人,焦糖慕斯包裹着的苹果啫喱,唇齿间回味出点点惊喜,美味像情话般传递层层爱恋', '上架', '12');
INSERT INTO `goods_list` VALUES ('17', '花冠蛋糕', 'Stephanie Cake', '蛋糕', '推荐', '隐形的皇冠', '298', '1磅，2磅，3磅，5磅', '', './src/img/b013.jpg', '淡山茱萸粉的喷砂和巧克力慕斯里,包裹着双层诱人蓬松的红丝绒蛋糕,还有梨子啫喱、树莓啫喱交织的酸甜悠香,这顶隐形的皇冠，加冕你温柔而有趣的灵魂', '上架', '13');
INSERT INTO `goods_list` VALUES ('18', '牛乳大理石雪域双拼蛋糕', 'Milk & Marble Cheesecake', '蛋糕', '人气', '双拼蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b014.jpg', '经久不衰的浓郁,别具一格的香醇,一席的交错,舞出黑白底片里的肆然情绪,入口即化的轻巧滋味,从心弥漫出的幸福', '上架', '14');
INSERT INTO `goods_list` VALUES ('19', '牛乳钻石雪域双拼蛋糕', 'Milk & Diamond Cheesecake', '蛋糕', '人气', '双拼蛋糕', '198', '1磅，2磅，3磅，5磅', '', './src/img/b015.jpg', '相同的美好记忆有那么多,纯白巧克力的浪漫关怀,轻甜奶油的温柔呢喃,都同微笑凝在嘴边,当身影从酒中折射而出璀璨,沦陷的是更久更久的时光', '上架', '15');
INSERT INTO `goods_list` VALUES ('20', '牛乳蓝莓雪域双拼蛋糕', 'Milk & Blueberry Cheesecake', '蛋糕', '新品', '双拼蛋糕', '258', '1磅，2磅，3磅，5磅', '', './src/img/b016.jpg', '特浓牛乳透露出丝丝浓郁,在熟悉的味道里,蓝莓衣袂飘飘,一点欢乐一点迷惑,让心灵在阳光下越发透彻清明,酸甜驻心 冰雪明媚', '上架', '16');
INSERT INTO `goods_list` VALUES ('21', '雪域蓝莓芝士蛋糕', 'Blueberry Cheesecake/Emily', '蛋糕', '新品', '芝士蛋糕', '258', '1磅，2磅，3磅，5磅', '', './src/img/b017.jpg', '年轻的艾米丽用热情感染着身边的每一个人,生活的欢乐与忧愁在她的心里化作一道彩虹,她有富足的心灵，只要你肯了解,就能为你带来阳光,蓝莓的清新果香与浓郁的芝士让你品味艾米丽带来的无穷乐趣', '上架', '17');
INSERT INTO `goods_list` VALUES ('22', '玫瑰雪域芝士蛋糕', 'Rose Cheesecake', '蛋糕', '推荐', '隐形的皇冠', '298', '1磅，2磅，3磅，5磅', '', './src/img/b018.jpg', '玫瑰是美丽爱情的象征,而一朵纯白的玫瑰则映衬出少男少女纯净的感情,这款蛋糕延续了雪域牛乳芝士系列的浓郁香醇的口感,回味绵长恰如爱情的滋味,充满法式浪漫和柔情', '上架', '18');
INSERT INTO `goods_list` VALUES ('23', '巧克力松露蛋糕', 'Chocolate Marquise', '蛋糕', '人气', '松露蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b019.jpg', '凡尔赛宫气势恢宏令人神往,就像入口即化的松露巧克力,内涵深厚,经过精心制作为诺心的慕斯蛋糕,搭配如同宫殿上装饰的雕塑一般的比利时巧克力,化为一方巧克力魔盒,香气浓郁、口感醇和', '上架', '19');
INSERT INTO `goods_list` VALUES ('24', '草莓拿破仑蛋糕', 'Strawberry Mille-feuilles', '蛋糕', '人气', '草莓蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b020.jpg', '拿破仑蛋糕又称千层酥,独特的制作手法保证酥皮的层层分明,薄脆爽口,搭配新鲜草莓,精准配比,既让草莓的水分充足又保证拿破仑蛋糕酥皮的清脆口感,这是富有层次的味觉体验', '上架', '20');
INSERT INTO `goods_list` VALUES ('25', '蓝莓拿破仑蛋糕', 'Blueberry Mille-feuilles', '蛋糕', '人气', '蓝莓蛋糕', '238', '1磅，2磅，3磅，5磅', '', './src/img/b021.jpg', '拿破仑蛋糕又称千层酥,独特的制作手法保证酥皮的层层分明,薄脆爽口,搭配新鲜草莓,精准配比,既让草莓的水分充足又保证拿破仑蛋糕酥皮的清脆口感,这是富有层次的味觉体验', '上架', '21');
INSERT INTO `goods_list` VALUES ('26', '莓果绵绵蛋糕', 'Strawberry Cream Cake', '蛋糕', '人气', '莓果蛋糕', '198', '1磅，2磅，3磅，5磅', '', './src/img/b022.jpg', '颗颗鲜红草莓散发诱人浓郁果香,软绵香甜的香草戚风蛋糕,包裹纯酥脆糖和醇厚黄油,在草莓粒粒脆的星星点缀下,绽放专属少女心得纯真浪漫', '上架', '22');
INSERT INTO `goods_list` VALUES ('27', '唯·歌剧院蛋糕', 'Le Opera', '蛋糕', '新品', '惊艳时光', '258', '1磅，2磅，3磅，5磅', '', './src/img/b023.jpg', '歌剧院蛋糕突破传统,创造10层惊艳口感,精心甄选物料对比调配,终于寻到鲜莓慕斯,覆盆子啫喱、朱古力牛油忌廉等组成10层搭配,既融为一体散发绝妙口感,又层层分明,体验舌尖原味的真谛', '上架', '23');
INSERT INTO `goods_list` VALUES ('28', '粉色玫瑰森林蛋糕', 'Rose Garden', '蛋糕', '新品', '玫瑰蛋糕', '258', '1磅，2磅，3磅，5磅', '', './src/img/b024.jpg', '山坡上的粉红玫瑰,温柔而坚韧,不惧骄阳和寒风,依然开出美的花朵,不仅有悦人的外表,比利时巧克力与法国奶油细腻柔滑的口感,成就出色的巧克力蛋糕', '上架', '24');
INSERT INTO `goods_list` VALUES ('29', '雪域榴香芝士蛋糕', 'Parmesan Cheesecake', '蛋糕', '推荐', '榴莲蛋糕', '268', '1磅，2磅，3磅，5磅', '', './src/img/b025.jpg', '榴莲如此独特,就像其生长环境中充足的光,源源不断散发出浓郁香气,入口的香甜与醇香细滑,搭配上无与伦比的芝士慕斯,让人流连忘返', '上架', '25');
INSERT INTO `goods_list` VALUES ('30', '海盐乳酪芝士蛋糕', 'Chocolate Marquise', '蛋糕', '人气', '创意蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b026.jpg', '地中海的别样风情让人沉醉,清凉的风夹杂着丝丝的微咸轻抚脸庞,使得我产生了研发这款蛋糕的初衷,用海盐和新西兰上等芝士经过精心调配,让芝士的天然味道瞬间迸发出来,给味蕾出奇的惊艳', '上架', '26');
INSERT INTO `goods_list` VALUES ('31', '你好米菲蛋糕', 'hallo miffy', '蛋糕', '新品', '个性蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b027.jpg', '萌动可爱的miffy造型亲切温暖,是全世界小朋友最想拥有的小伙伴,红丝绒蛋糕胚的绵软,搭配原味芝士的浓香醇厚,甜蜜交织松软,每一口滋味都犹如坠入米菲的童话世界,欢笑声编织了最美好的童年回忆', '上架', '27');
INSERT INTO `goods_list` VALUES ('32', '榛子千层拿破仑蛋糕', 'Hazelnut Mille-feuilles', '蛋糕', '人气', '榛子蛋糕', '198', '1磅，2磅，3磅，5磅', '', './src/img/b028.jpg', '拿破仑蛋糕又称千层酥,独特的制作手法保证酥皮的层层分明,薄脆爽口,搭配新鲜草莓,精准配比,既让草莓的水分充足又保证拿破仑蛋糕酥皮的清脆口感,这是富有层次的味觉体验', '上架', '28');
INSERT INTO `goods_list` VALUES ('33', '芒果千层拿破仑蛋糕', 'Mango Mille-feuilles', '蛋糕', '推荐', '芒果蛋糕', '198', '1磅，2磅，3磅，5磅', '', './src/img/b029.jpg', '拿破仑蛋糕又称千层酥,独特的制作手法保证酥皮的层层分明,薄脆爽口,搭配新鲜草莓,精准配比,既让草莓的水分充足又保证拿破仑蛋糕酥皮的清脆口感,这是富有层次的味觉体验', '上架', '29');
INSERT INTO `goods_list` VALUES ('34', '芒果心愿盒蛋糕', 'Mango Box', '蛋糕', '推荐', '芒果蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b030.jpg', '与Shirley在香港品尝的甜品杨枝甘露让我萌生了创作这款蛋糕的想法,东南亚的芒果和泰国金柚肉,让这款甜品的口味与蛋糕融合在一起', '上架', '30');
INSERT INTO `goods_list` VALUES ('35', '宠爱蛋糕', 'Just Love', '蛋糕', '推荐', '创意蛋糕', '238', '1磅，2磅，3磅，5磅', '', './src/img/b031.jpg', '爱情的迷人酸甜和深切回味藏在这座精致的蛋糕城堡中,甄选新鲜草莓融入比利时白巧克力慕斯,搭配娇艳欲滴的玫瑰花瓣,每一口沁入舌尖的甜蜜,都是极致宠爱滋味', '上架', '31');
INSERT INTO `goods_list` VALUES ('36', '公主蛋糕', 'Princess Cake', '蛋糕', '推荐', '创意蛋糕', '238', '1磅，2磅，3磅，5磅', '', './src/img/b032.jpg', '彩色的棉花糖甜美柔和,粉色的巧克力皇冠搭配玫瑰风味啫喱,具有迷人魅力,这一刻,你就是备受宠爱的公主,如此创新美味,成就出色的巧克力蛋糕', '上架', '32');
INSERT INTO `goods_list` VALUES ('37', '王子蛋糕', 'Prince Cake', '蛋糕', '新品', '创意蛋糕', '238', '1磅，2磅，3磅，5磅', '', './src/img/b033.jpg', '淘气的小王子也有自己喜爱的甜蜜味道,蛋糕上层的巧克力与彩色巧克力豆,代表男性的阳光活力,比利时黑巧克力与奶油慕斯的组合口感醇厚而不甜腻,别有一番风味,如此创新美味成就出色的巧克力蛋糕', '上架', '33');
INSERT INTO `goods_list` VALUES ('38', '巧克力四重奏蛋糕', 'Chocolate Quartet', '蛋糕', '新品', '创意蛋糕', '238', '1磅，2磅，3磅，5磅', '', './src/img/b034.jpg', '奥地利的音乐享誉世界,纯粹的弦乐四重奏有一种深入人心的魔力,细腻柔滑的比利时巧克力,搭配法国奶油精心制作由浅至深的三层巧克力慕斯,辅以比利时黑巧克力蛋糕,四层迷人的风味犹如掉入了巧克力的漩涡无法自拔', '上架', '34');
INSERT INTO `goods_list` VALUES ('39', '和风抹茶红豆蛋糕', 'Matcha Red bean cake', '蛋糕', '推荐', '创意蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b035.jpg', '蜜豆的甘甜与抹茶的微苦,细细品味才能发现其中的韵味,顶层经过烘烤后的抹茶蛋糕清香酥脆,抹茶淋面和抹茶粉的搭配让口感更丰富,成就出色的慕斯蛋糕', '上架', '35');
INSERT INTO `goods_list` VALUES ('40', '雪域大理石芝士蛋糕', 'Marble Cheesecake', '蛋糕', '人气', '创意蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b036.jpg', '凡尔赛宫的大理石庭院有一种神秘而悠久的美,巧克力与奶油组合,线条和波纹的碰撞是别具一格的美,让蛋糕的口感达到美妙状态,浓醇的新西兰上等芝士甜而不腻,入口即溶,加上富有时尚感的外形,这是让人难忘的芝士蛋糕', '上架', '36');
INSERT INTO `goods_list` VALUES ('41', '阿尔蒙麦香蛋糕', 'Almond Oatmeal Aroma', '蛋糕', '新品', '创意蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b037.jpg', '祖母烤巴旦木的味道,是童年品尝到难以忘怀的美味,这款蛋糕献给呵护成长的长辈们,精心烤制的巴旦木香味浓郁,加上木糖醇让蛋糕的口感更加丰富,健康美味,这款特别制作的慕斯蛋糕,让长辈们可以尽情享受美味而无后顾之忧', '上架', '37');
INSERT INTO `goods_list` VALUES ('42', '阿尔蒙洛克蛋糕', 'Almond Rocks Cake', '蛋糕', '人气', '创意蛋糕', '218', '1磅，2磅，3磅，5磅', '', './src/img/b038.jpg', '在机场可以遇见各式的离别与重聚,心情各有不同,但相信牵挂与深爱之心不会因距离而变,优质的巴旦木营养丰富,细致研磨后散发的迷人口感如同机场相见的拥抱抚慰心灵,你该让时刻停止一刻来细品它的味道', '上架', '38');
INSERT INTO `goods_list` VALUES ('43', '庆生明星熊', 'LE Cheesecake Bear', '蛋糕', '推荐', '创意蛋糕', '238', '1磅，2磅，3磅，5磅', '', './src/img/b039.jpg', '阿尔卑斯山的雪纯净结白,简单但有种永恒的美,令芝士的香气完全散发出来,上等食材的精心配比，让这款蛋糕回味无穷', '上架', '39');

-- ----------------------------
-- Table structure for sheet1
-- ----------------------------
DROP TABLE IF EXISTS `sheet1`;
CREATE TABLE `sheet1` (
  `asd` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `asdqfq` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of sheet1
-- ----------------------------
INSERT INTO `sheet1` VALUES ('222', '333', '1');
INSERT INTO `sheet1` VALUES ('222', '333', '2');
INSERT INTO `sheet1` VALUES ('222', '333', '3');
INSERT INTO `sheet1` VALUES ('222', '333', '4');
INSERT INTO `sheet1` VALUES ('222', '333', '5');
INSERT INTO `sheet1` VALUES ('222', '333', '6');
INSERT INTO `sheet1` VALUES ('222', '333', '7');
INSERT INTO `sheet1` VALUES ('222', '333', '8');
INSERT INTO `sheet1` VALUES ('222', '333', '9');
INSERT INTO `sheet1` VALUES ('222', '333', '10');
INSERT INTO `sheet1` VALUES ('222', '333', '11');
INSERT INTO `sheet1` VALUES ('222', '333', '12');
INSERT INTO `sheet1` VALUES ('222', '388', '13');
INSERT INTO `sheet1` VALUES ('222', '333', '14');
>>>>>>> 6823643672f2545fabd096d4536d6233ed88255c
SET FOREIGN_KEY_CHECKS=1;
