-- Active: 1680644892653@@127.0.0.1@3306

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

UPDATE users
SET id = "0001"
WHERE password = 222324;

UPDATE users
SET id = "0002"
WHERE password = "derick0099";

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
WHERE id = "00001";

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

-------------------------------------------------------------------------------------------------------------

--RELAÇOES SQL I
--Exercício 1

CREATE TABLE purchases (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users (id)
);

--Exercício 2

SELECT 
purchases.id,
purchases.total_price,
purchases.paid,
purchases.delivered_at,
purchases.buyer_id,
users.id
FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id;



INSERT INTO purchases
VALUES
("u01",100,0,NULL,"0001"),
("u02",90,1,NULL,"0002"),
("u03",80,0,NULL,"0003"),
("u04",20,1,NULL,"0004");

UPDATE purchases
SET delivered_at = "04/04/2023"
WHERE id = "u04";

UPDATE purchases
SET delivered_at = "04/04/2023"
WHERE id = "u01";

UPDATE purchases
SET delivered_at = "04/04/2023"
WHERE id = "u02";

--Exercício 3

SELECT *FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id 
WHERE users.id = "0001";

-- SELECT *FROM purchases

CREATE TABLE purchases_products(
purchase_id TEXT NOT NULL,
product_id TEXT NOT NULL,
quantity INTEGER NOT NULL,
FOREIGN KEY (purchase_id) REFERENCES purchases(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);


INSERT INTO purchases_products
VALUES
("u01","00001",0),
("u02","00002",1),
("u04","00003",1);


SELECT *FROM purchases_products;

SELECT *FROM purchases_products
INNER JOIN products ON purchases_products.product_id = products.id
INNER JOIN purchases ON purchases_products.purchase_id = purchases.id
INNER JOIN users ON purchases.buyer_id = users.id;

