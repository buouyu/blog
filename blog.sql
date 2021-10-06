/*
 Navicat Premium Data Transfer

 Source Server         : lby
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : sequelizetest

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 06/10/2021 14:58:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `qq` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `weixin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mailTo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `personWeb` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `github` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES (7, 'lby', 'c2bd11d751065f22be612e5330815cc6', '1879153421', 'l1879153421', '1879153421@qq.com', 'https://1879153421.github.io/lby/', 'https://github.com/1879153421/lby', '2021-10-05 12:20:15', '2021-10-05 12:20:15', NULL);
INSERT INTO `admins` VALUES (11, 'cjj', '07cc130d7ce6471639fcb539ab35e2e6', '3172810267', 'aaa', '3172810267@qq.com', '', '', '2021-10-06 02:33:27', '2021-10-06 02:33:27', NULL);

-- ----------------------------
-- Table structure for banners
-- ----------------------------
DROP TABLE IF EXISTS `banners`;
CREATE TABLE `banners`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `midImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `bigImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of banners
-- ----------------------------
INSERT INTO `banners` VALUES (1, 'http://mdrs.yuanjin.tech/img/20201031204401.jpg', 'http://mdrs.yuanjin.tech/img/20201031204403.jpg', '布偶鱼', '兰尼斯特有债必偿', '2021-10-03 08:12:21', '2021-10-04 07:20:04', NULL);
INSERT INTO `banners` VALUES (2, 'http://mdrs.yuanjin.tech/img/20201031205550.jpg', 'http://mdrs.yuanjin.tech/img/20201031205551.jpg', '血火同源', '如果我回头，一切都完了', '2021-10-03 08:12:21', '2021-10-03 08:12:21', NULL);
INSERT INTO `banners` VALUES (3, 'http://mdrs.yuanjin.tech/img/20201031141507.jpg', 'http://mdrs.yuanjin.tech/img/20201031141350.jpg', '凛冬将至', '人唯有恐惧的时候方能勇敢', '2021-10-03 08:12:21', '2021-10-03 08:12:21', NULL);

SET FOREIGN_KEY_CHECKS = 1;
