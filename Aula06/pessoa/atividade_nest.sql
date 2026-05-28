
-- ATIVIDADE - MYSQL

-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS atividade_nest;

-- Seleciona o banco
USE atividade_nest;

-- Remove a tabela caso já exista
DROP TABLE IF EXISTS pessoa;

-- Criação da tabela
CREATE TABLE pessoa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Inserção de registros
INSERT INTO pessoa (nome, idade, email)
VALUES ('Joao', 20, 'joao@email.com');

INSERT INTO pessoa (nome, idade, email)
VALUES ('Maria', 25, 'maria@email.com');

-- Consulta de todos os registros
SELECT * FROM pessoa;
