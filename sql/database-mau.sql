-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: db_pony_little
-- ------------------------------------------------------
-- Server version	8.0.40

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

--
-- Table structure for table `configs`
--

DROP TABLE IF EXISTS `configs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configs` (
  `id` varchar(36) NOT NULL,
  `key_config` varchar(255) NOT NULL,
  `name_config` varchar(255) NOT NULL,
  `value_config` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_b23aa6f36f7e2b6082eb51bac1` (`key_config`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configs`
--

LOCK TABLES `configs` WRITE;
/*!40000 ALTER TABLE `configs` DISABLE KEYS */;
INSERT INTO `configs` VALUES ('088bb879-7f02-4021-9fcb-155e92afed25','COST_ADS_SHOPPE','Phí quảng cáo SHOPPE','0','2025-02-26 05:57:48','2025-02-26 05:57:48'),('1382e5ca-bcbc-42db-84b3-91f381e841be','COSTS_AFF_TIKTOK','Phí tiếp thị tiktok','0','2025-02-26 05:57:48','2025-02-26 05:57:48'),('325e21b3-0df4-45d4-a403-2aaf0b9551cc','COSTS_PLATFORM_TIKTOK','Phí sàn tiktok','300','2025-02-26 05:57:48','2025-02-26 05:57:48'),('3667514c-986c-46bd-a449-2a6fa46df7ad','COSTS_PAYMENT_TIKTOK','Phí thanh toán sàn tiktok','500','2025-02-26 05:57:48','2025-02-26 05:57:48'),('39a595cd-7f84-4e19-a34f-173dfa5f5069','COSTS_AFF_SHOPPE','Phí tiếp thị shoppe','0','2025-02-26 05:57:48','2025-02-26 05:57:48'),('7aeca861-27c4-46f0-b8c1-578240b25c96','COST_OPERATING_SHOPPE','Phí vận hành shoppe','200','2025-02-26 05:57:48','2025-02-26 05:57:48'),('8cde9353-e782-41cc-9059-71ee787dd833','COSTS_PLATFORM_SHOPPE','Phí sàn shoppe','400','2025-02-26 05:57:48','2025-02-26 05:57:48'),('9c217da7-964f-46a3-ac26-7d9d2201c186','COST_OPERATING_TIKTOK','Phí vận hành sàn tiktok','200','2025-02-26 05:57:48','2025-02-26 05:57:48'),('a0a05ef2-1873-4c0d-bffa-4a9b54afbbe2','COSTS_PAYMENT_SHOPPE','Phí thanh toán sàn shoppe','500','2025-02-26 05:57:48','2025-02-26 05:57:48'),('aae5126c-8895-4553-957c-0409e56d4f0b','COST_ADS_TIKTOK','Phí quảng cáo tiktok','0','2025-02-26 05:57:48','2025-02-26 05:57:48'),('d1584a14-dbe4-407c-b398-7dfa64d25c20','COSTS_BOX','Phí đóng gói','200','2025-02-26 05:57:48','2025-02-26 05:57:48'),('dfcc8812-ebd7-4fca-ae92-b902f92d5ecb','COSTS_TAX','Thuế','150','2025-02-26 05:57:48','2025-02-26 05:57:48');
/*!40000 ALTER TABLE `configs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platforms` (
  `id` varchar(36) NOT NULL,
  `name_platform` varchar(255) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
INSERT INTO `platforms` VALUES ('d3ec8496-0e31-43be-979a-b6fab08a11fb','Shoppe',1,'2025-02-26 05:57:48','2025-02-26 05:57:48'),('de5e9b28-4e87-4b8a-91d4-ae1d19199667','Tiktok Shop',1,'2025-02-26 05:57:48','2025-02-26 05:57:48');
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `name_product` varchar(255) NOT NULL,
  `price_input` int NOT NULL DEFAULT '0',
  `price_sell` int NOT NULL DEFAULT '0',
  `percent_profit` int NOT NULL DEFAULT '0',
  `profit` int NOT NULL DEFAULT '0',
  `is_sale` tinyint NOT NULL DEFAULT '0',
  `price_sale_list` int NOT NULL DEFAULT '0',
  `profit_sale` int NOT NULL DEFAULT '0',
  `percent_sale` int NOT NULL DEFAULT '0',
  `is_voucher` tinyint NOT NULL DEFAULT '0',
  `percent_voucher` int NOT NULL DEFAULT '0',
  `price_voucher_list` int NOT NULL DEFAULT '0',
  `profit_voucher` int NOT NULL DEFAULT '0',
  `percent_costs_platform` int NOT NULL DEFAULT '0',
  `costs_platform` int NOT NULL DEFAULT '0',
  `percent_costs_payment` int NOT NULL DEFAULT '0',
  `costs_payment` int NOT NULL DEFAULT '0',
  `percent_costs_box` int NOT NULL DEFAULT '0',
  `costs_box` int NOT NULL DEFAULT '0',
  `percent_costs_operating` int NOT NULL DEFAULT '0',
  `costs_operating` int NOT NULL DEFAULT '0',
  `percent_costs_tax` int NOT NULL DEFAULT '0',
  `costs_tax` int NOT NULL DEFAULT '0',
  `percent_costs_ads` int NOT NULL DEFAULT '0',
  `costs_ads` int NOT NULL DEFAULT '0',
  `percent_costs_affilate` int NOT NULL DEFAULT '0',
  `costs_affilate` int NOT NULL DEFAULT '0',
  `list_shipping` varchar(255) NOT NULL DEFAULT '',
  `total_costs` int NOT NULL DEFAULT '0',
  `price_listing` int NOT NULL DEFAULT '0',
  `quantity_imported` int NOT NULL DEFAULT '0',
  `quantity_tock` int NOT NULL DEFAULT '0',
  `description_product` varchar(255) NOT NULL DEFAULT '',
  `active` tinyint NOT NULL DEFAULT '1',
  `idPlatformId` varchar(36) DEFAULT NULL,
  `idUnitId` varchar(36) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `images` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ff13fef2d837593f4c1e9f5cbc0` (`idPlatformId`),
  KEY `FK_a5afc5c8c79101f3fa9655c0d80` (`idUnitId`),
  CONSTRAINT `FK_a5afc5c8c79101f3fa9655c0d80` FOREIGN KEY (`idUnitId`) REFERENCES `units` (`id`),
  CONSTRAINT `FK_ff13fef2d837593f4c1e9f5cbc0` FOREIGN KEY (`idPlatformId`) REFERENCES `platforms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('2a718d22-0de0-4e50-85b4-fd67792e80b2','1sa',1,25001,0,0,0,1,0,0,0,0,0,0,300,0,500,0,200,0,200,0,150,0,0,0,0,0,'common',25000,0,1,1,'<p>Đây là mô tả sản phẩm</p>',0,'d3ec8496-0e31-43be-979a-b6fab08a11fb','06ba0d0e-4843-447b-912d-8ac11f76f798','2025-02-26 05:57:48','2025-02-26 05:57:48',''),('5b24d3c7-25cf-4ec5-b675-6e71daa0f025','Túi cầm tay/Shopper Bags - Small Bookbag - Dolly Rose - 302213',150000,211772,1019,0,1,164458,826,50,0,0,0,0,300,4958,500,8264,200,3305,200,3305,150,2479,0,0,0,0,'common',47313,0,100000,100000,'<p>Đây là mô tả sản phẩm</p>',1,'d3ec8496-0e31-43be-979a-b6fab08a11fb','06ba0d0e-4843-447b-912d-8ac11f76f798','2025-02-26 05:57:48','2025-02-26 05:57:48','https://ixgbnptihqukuoziiruu.supabase.co/storage/v1/object/public/image-product/public/P81740556154.jpg'),('71202dfc-b8fe-45c3-bc10-e751fa7e8d16','dsadsadasd',1,25001,0,0,0,1,0,0,0,0,0,0,300,0,500,0,200,0,200,0,150,0,0,0,0,0,'common',25000,0,1,1,'<p>Đây là mô tả sản phẩm</p>',0,'d3ec8496-0e31-43be-979a-b6fab08a11fb','06ba0d0e-4843-447b-912d-8ac11f76f798','2025-02-26 07:12:32','2025-02-26 07:12:32',''),('a50b8164-8b8b-44ff-931e-ca2fa32937ea','21312312',1,25001,0,0,0,1,0,0,0,0,0,0,300,0,500,0,200,0,200,0,150,0,0,0,0,0,'common',25000,0,1,1,'<p>Đây là mô tả sản phẩm</p>',0,'d3ec8496-0e31-43be-979a-b6fab08a11fb','06ba0d0e-4843-447b-912d-8ac11f76f798','2025-02-26 07:06:56','2025-02-26 07:06:56',''),('be37d066-55d9-4073-b415-8fb5f717e542','dsadd',1,25001,0,0,0,1,0,0,0,0,0,0,300,0,500,0,200,0,200,0,150,0,0,0,0,0,'common',25000,0,1,1,'<p>Đây là mô tả sản phẩm</p>',0,'d3ec8496-0e31-43be-979a-b6fab08a11fb','06ba0d0e-4843-447b-912d-8ac11f76f798','2025-02-26 05:57:48','2025-02-26 05:57:48',''),('c897a3ad-a2eb-4fd4-889f-f6f475336530','Dép Nam Nữ Quai Ngang BBR đế vân sần tăng chiều cao, dép thời trang 2025',50000,75000,0,0,0,50000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'shoppe',25000,0,100000,100000,'<p>Đây là mô tả sản phẩm</p>',1,'d3ec8496-0e31-43be-979a-b6fab08a11fb','d18afcdf-9e2b-4754-8b6c-63df92562a10','2025-02-26 05:57:48','2025-02-26 05:57:48',''),('fb633c30-34cd-4915-9138-462607c9e360','231sd',1,25001,0,0,0,1,0,0,0,0,0,0,300,0,500,0,200,0,200,0,150,0,0,0,0,0,'common',25000,0,1,1,'<p>Đây là mô tả sản phẩm</p>',0,'d3ec8496-0e31-43be-979a-b6fab08a11fb','06ba0d0e-4843-447b-912d-8ac11f76f798','2025-02-26 07:36:49','2025-02-26 07:36:49','https://ixgbnptihqukuoziiruu.supabase.co/storage/v1/object/public/image-product/public/images1740555409.jpg,https://ixgbnptihqukuoziiruu.supabase.co/storage/v1/object/public/image-product/public/P8-Copy1740555409.jpg'),('ffae0f49-cef7-4020-87fb-f216b365e3ef','dsadasdas',10,25011,1000,0,1,9,1,1000,0,0,0,0,300,0,500,0,200,0,200,0,150,0,0,0,0,0,'common',25001,0,10,10,'<p>Đây là mô tả sản phẩm</p>',0,'d3ec8496-0e31-43be-979a-b6fab08a11fb','06ba0d0e-4843-447b-912d-8ac11f76f798','2025-02-26 07:06:48','2025-02-26 07:06:48','https://ixgbnptihqukuoziiruu.supabase.co/storage/v1/object/public/image-product/public/images1740556018.jpg,https://ixgbnptihqukuoziiruu.supabase.co/storage/v1/object/public/image-product/public/images-Copy1740556132.jpg,https://ixgbnptihqukuoziiruu.supabase.co/storage/v1/object/public/image-product/public/images1740556132.jpg,https://ixgbnptihqukuoziiruu.supabase.co/storage/v1/object/public/image-product/public/P81740556144.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping_products`
--

DROP TABLE IF EXISTS `shipping_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipping_products` (
  `id` varchar(36) NOT NULL,
  `costs_ship_list` varchar(255) NOT NULL,
  `costs_ship` varchar(255) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `idShippingId` varchar(36) DEFAULT NULL,
  `idProductId` varchar(36) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_fc5317579179ed914603289fbb7` (`idShippingId`),
  KEY `FK_c95885ea36760fe84f638110970` (`idProductId`),
  CONSTRAINT `FK_c95885ea36760fe84f638110970` FOREIGN KEY (`idProductId`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_fc5317579179ed914603289fbb7` FOREIGN KEY (`idShippingId`) REFERENCES `shippings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping_products`
--

LOCK TABLES `shipping_products` WRITE;
/*!40000 ALTER TABLE `shipping_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippings`
--

DROP TABLE IF EXISTS `shippings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shippings` (
  `id` varchar(36) NOT NULL,
  `name_shipping` varchar(255) NOT NULL,
  `persent` int NOT NULL,
  `key` varchar(255) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippings`
--

LOCK TABLES `shippings` WRITE;
/*!40000 ALTER TABLE `shippings` DISABLE KEYS */;
INSERT INTO `shippings` VALUES ('2e3cca64-be90-4166-a9ec-7a98e6a280da','Voucher Extra',300,'shoppe',1,'2025-02-26 05:57:48','2025-02-26 05:57:48'),('326e51ba-cbe6-4f9f-8efd-c54c8201d1e6','Myship',0,'common',1,'2025-02-26 05:57:48','2025-02-26 05:57:48'),('4e00387f-9e77-41e5-9cc2-6be36049ef39','Freeship Extra',600,'shoppe',1,'2025-02-26 05:57:48','2025-02-26 05:57:48');
/*!40000 ALTER TABLE `shippings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `units`
--

DROP TABLE IF EXISTS `units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `units` (
  `id` varchar(36) NOT NULL,
  `name_unit` varchar(255) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `units`
--

LOCK TABLES `units` WRITE;
/*!40000 ALTER TABLE `units` DISABLE KEYS */;
INSERT INTO `units` VALUES ('06ba0d0e-4843-447b-912d-8ac11f76f798','Cái',1,'2025-02-26 05:57:48','2025-02-26 05:57:48'),('8117ac81-a76b-4aa2-90b1-92c63101a179','Bộ',1,'2025-02-26 05:57:48','2025-02-26 05:57:48'),('d18afcdf-9e2b-4754-8b6c-63df92562a10','Đôi',1,'2025-02-26 05:57:48','2025-02-26 05:57:48');
/*!40000 ALTER TABLE `units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_pony_little'
--

--
-- Dumping routines for database 'db_pony_little'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-26 14:51:24
