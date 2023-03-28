-- Active: 1680035851073@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL

);

SELECT *FROM users;

INSERT INTO users (id, email, password)
VALUES
(0001, "gustavo.costa@gmail.com", "gustavo1122"),
(0002, "aline.lima@gmail.com", "aline4477"),
(0003, "derick.jordan@gmail.com", "derick0099");



-----------------------------------------------------


CREATE TABLE products;(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);


SELECT *FROM products;

INSERT INTO products (id, name, price, category)
VALUES
(00001, "Morgana Feiticeira", 100.00, "Boneca Colecionável"),
(00002, "Lux Enpírica", 100.00, "Boneca Colecionável"),
(00003, "Nami Embalos no Espaço", 100.00, "Boneca Colecionável"),
(00004, "Dj Sona", 100.00, "Boneca Colecionável"),
(00005, "Zyra Congregação das Bruxas", 100.00, "Boneca Colecionável");

