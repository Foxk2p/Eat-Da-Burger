DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(30) NOT NULL,
devoured BOOL NOT NULL
);



-- DROP DATABASE IF EXISTS favorite_db;

-- CREATE DATABASE favorite_db;

-- USE favorite_db;

-- CREATE TABLE movies (
--   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   title VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE songs (
--   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   title VARCHAR(30) NOT NULL,
--   artist VARCHAR(30) NOT NULL
-- );
