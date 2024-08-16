-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: tercero
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tercero`
--

DROP TABLE IF EXISTS `tercero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tercero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipoPersona` enum('Natural','Jurídica') NOT NULL,
  `tipoDocumento` enum('CC','TI','NIT','CE','PAS') NOT NULL,
  `identificacion` varchar(20) NOT NULL,
  `digitoVerificacion` char(1) DEFAULT NULL,
  `razonSocial` varchar(255) DEFAULT NULL,
  `tipoTercero` enum('Cliente','Proveedor','Empleado','Otro') NOT NULL,
  `tipoActividad` varchar(255) NOT NULL,
  `tipoCliente` enum('Mayorista','Minorista','Consumidor final') NOT NULL,
  `nombreRepresentanteLegal` varchar(255) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `pais` varchar(100) NOT NULL,
  `codigoPais` varchar(10) DEFAULT NULL,
  `departamento` varchar(100) NOT NULL,
  `codigoDepartamento` varchar(10) DEFAULT NULL,
  `municipio` varchar(100) NOT NULL,
  `codigoMunicipio` varchar(10) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `celular` varchar(20) DEFAULT NULL,
  `correo` varchar(40) DEFAULT NULL,
  `codigoVendedor` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `cupoCredito` varchar(100) DEFAULT NULL,
  `cobrador` varchar(100) DEFAULT NULL,
  `tipoPago` varchar(100) DEFAULT NULL,
  `lPrecio` varchar(100) DEFAULT NULL,
  `zona` varchar(100) DEFAULT NULL,
  `plazo` varchar(100) DEFAULT NULL,
  `descuento` varchar(100) DEFAULT NULL,
  `centroCosto` varchar(100) DEFAULT NULL,
  `observacion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `identificacion` (`identificacion`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tercero`
--

LOCK TABLES `tercero` WRITE;
/*!40000 ALTER TABLE `tercero` DISABLE KEYS */;
INSERT INTO `tercero` VALUES (1,'Natural','CC','777777','R','actualizar','Cliente','Comercio minorista','Minorista','Juan Pérez','1985-07-12','Colombia','CO','Antioquia','05','envigado','05001','Carrera 50 # 30-40','4445555','30012567','juan.perez@example.com','V001','Juan Pérez','500000','Pedro García','Crédito','10000','Zona Norte','30 días','10%','CC001','Observación de prueba actualizar rick'),(10,'Natural','CC','1076543210','3',NULL,'Proveedor','Transporte','Mayorista','Julio Ramírez','1984-03-14','Colombia','57','Cundinamarca','11','Bogotá','11001','Calle 123 #45-67','3101234567','3009876543','julio.ramirez@example.com','V001','Transporte JR','10000000','C001','Contado','LP001','Norte','30','5%','CC001','Entrega a tiempo'),(11,'Jurídica','NIT','88888','7','Comercial XYZ S.A.S.','Cliente','Comercio','Minorista','Sara López','1970-05-20','Colombia','57','Antioquia','05','Medellín','05001','Carrera 50 #30-40','6041234567','3208765432','contacto@xyz.com','V002','XYZ S.A.S.','15000000','C002','Crédito','LP002','Centro','60','10%','CC002','Cliente preferente'),(12,'Natural','CC','1087654321','1',NULL,'Empleado','Tecnología','Consumidor final',NULL,'1990-08-30','Colombia','57','Valle del Cauca','76','Cali','76001','Avenida Siempre Viva #123','6023456789','3156789012','ana.martinez@example.com','V003','Ana Martínez','2000000','C003','Contado','LP003','Oeste','30','3%','CC003','Pago puntual'),(13,'Jurídica','NIT','900765432','9','Industrias ABC S.A.','Proveedor','Manufactura','Mayorista','Carlos González','1982-12-12','Colombia','57','Atlántico','08','Barranquilla','08001','Calle 45 #23-56','6052345678','3178765432','contacto@abc.com','V004','Industrias ABC','20000000','C004','Crédito','LP004','Sur','90','12%','CC004','Entrega rápida'),(15,'Natural','CC','111111','Q','actualizar','Cliente','ee','Mayorista','felipe','2024-08-14','Colombia','05002','Antioquia','05002','envigado','05002','Carrera 50 # 30-40','4445555','30012567','juan.perez@example.com','','','','','','','','','','','verificar ');
/*!40000 ALTER TABLE `tercero` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-15 23:54:27
