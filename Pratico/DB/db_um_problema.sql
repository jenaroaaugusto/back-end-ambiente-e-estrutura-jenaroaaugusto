-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 05/11/2020 às 22:11
-- Versão do servidor: 5.7.32-0ubuntu0.18.04.1
-- Versão do PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_um_problema`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `demandas`
--

CREATE TABLE `demandas` (
  `iddemandas` int(11) NOT NULL,
  `categorias` varchar(45) DEFAULT NULL,
  `local` varchar(80) DEFAULT NULL,
  `resumo` varchar(80) DEFAULT NULL,
  `requerente` int(11) DEFAULT NULL,
  `status` enum('resolvido','analise','recebida','negado') NOT NULL,
  `usuario_idusuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `demandas`
--

INSERT INTO `demandas` (`iddemandas`, `categorias`, `local`, `resumo`, `requerente`, `status`, `usuario_idusuario`) VALUES
(2, 'Cas', 'KAkak', 'hashhash', 155, 'recebida', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `cpf` varchar(45) DEFAULT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `Tipo` enum('adm','gestor','usuario') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nome`, `cpf`, `endereco`, `email`, `Tipo`) VALUES
(1, 'JEnaro', '11345678910', 'rua A', 'jenaroaaugusto', 'adm');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `demandas`
--
ALTER TABLE `demandas`
  ADD PRIMARY KEY (`iddemandas`,`usuario_idusuario`),
  ADD KEY `fk_demandas_usuario1_idx` (`usuario_idusuario`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `demandas`
--
ALTER TABLE `demandas`
  MODIFY `iddemandas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `demandas`
--
ALTER TABLE `demandas`
  ADD CONSTRAINT `fk_demandas_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
