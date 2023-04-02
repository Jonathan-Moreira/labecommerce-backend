-- Active: 1680212964528@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL

);

SELECT *FROM users;

SELECT *FROM users
 ORDER BY email ASC;

INSERT INTO users (id, email, password)
VALUES
("0001", "gustavo.costa@gmail.com", "gustavo1122"),
("0002", "aline.lima@gmail.com", "aline4477"),
("0003", "derick.jordan@gmail.com", "derick0099");



-----------------------------------------------------
CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

SELECT *FROM products;

SELECT *FROM products
ORDER BY id ASC
LIMIT 2;


SELECT *FROM products
WHERE price >= 100.00
AND price <= 200.00
ORDER BY price ASC;



INSERT INTO products (id, name, price, category)
VALUES
("00001", "Morgana Feiticeira", 100.00, "Boneca Colecionável"),
("00002", "Lux Enpírica", 100.00, "Boneca Colecionável"),
("00003", "Nami Embalos no Espaço", 100.00, "Boneca Colecionável"),
("00004", "Dj Sona", 100.00, "Boneca Colecionável"),
("00005", "Zyra Congregação das Bruxas", 100.00, "Boneca Colecionável");



DROP TABLE 

--Exercício 1

--Search Product by name
--mocke um termo de busca, por exemplo "monitor"
--retorna o resultado baseado no termo de busca
SELECT *FROM products
WHERE name LIKE "%Reinos Combatentes%";

--Create User
--mocke um novo usuário
--insere o item mockado na tabela users

INSERT INTO users
VALUES
("0004", "ro.drigo@gmail.com", "rodrigo5566");

--Create Product
--mocke um novo produto
--insere o item mockado na tabela products

INSERT INTO products
VALUES
("00006", "Garen Demacia Vice", 99.99, "Boneco Colecionável");

--Exercício 2
--Get Products by id
--busca de produtos por id
SELECT * FROM products
WHERE id = "00003";


--Delete User by id
--deleção de user por id
DELETE FROM users
WHERE id = "2";



--Delete Product by id
--deleção de produto por id
DELETE FROM products
WHERE id = "00005";


--Edit User by id
--edição de user por id
UPDATE users
SET password = 222324
WHERE id = "1";


--Edit Product by id
--edição de produto por id
UPDATE products
SET price = 200.00
WHERE id = "00001"

--Exercício 3
--Copie as queries do exercício 1 e refatore-as
--Get All Users
--retorna o resultado ordenado pela coluna email em ordem crescente

 -- feito na parte de cima com o SELECT %FROM USER



 --Get All Products versão 1
--retorna o resultado ordenado pela coluna price em ordem crescente
--limite o resultado em 20 iniciando pelo primeiro item

-- feito na parte de cima com o SELECR %FROM PRODUCTS


--Get All Products versão 2
--seleção de um intervalo de preços, por exemplo entre 100.00 e 300.00
--retorna os produtos com preços dentro do intervalo definido em ordem crescente

-- feito na parte de cima com o SELECT %FROM PRODUCTS