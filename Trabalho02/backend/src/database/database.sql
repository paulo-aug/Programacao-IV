CREATE DATABASE bleach_wiki;

USE bleach_wiki;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE personagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    conteudo TEXT NOT NULL,
    imagem VARCHAR(500),
    ordem INT DEFAULT 0,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO personagens (titulo, conteudo, imagem, ordem)
VALUES
(
'Ichigo Kurosaki',
'Substituto de Shinigami e protagonista da série.',
'https://static.wikia.nocookie.net/bleach/images/4/41/NBFHIchigo_profile.png/revision/latest/scale-to-width-down/268?cb=20260410211133&path-prefix=en',
1
),

(
'Rukia Kuchiki',
'Shinigami responsável por conceder poderes ao Ichigo.',
'https://static.wikia.nocookie.net/bleach/images/2/23/NBFHRukia_profile.png/revision/latest?cb=20230903201912&path-prefix=en',
2
),

(
'Orihime Inoue',
'Amiga de Ichigo com poderes de cura.',
'https://static.wikia.nocookie.net/bleach/images/9/94/686Post-War_Orihime.png/revision/latest?cb=20190523143321&path-prefix=en',
3
);

INSERT INTO personagens
(titulo, conteudo, imagem, ordem)

VALUES
(
'Kenpachi Zaraki',
'Capitão da 11ª divisão.',
'https://static.wikia.nocookie.net/bleach/images/5/5c/463Kenpachi_kills_Giriko.png/revision/latest?cb=20251216162146&path-prefix=en',
4
);