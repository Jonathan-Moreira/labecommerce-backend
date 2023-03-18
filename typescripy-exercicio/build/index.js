"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log(3003);
});
app.get("/ping", (req, res) => {
    res.send("pong!");
});
app.get("/users", (req, res) => {
    const userALL = (0, database_1.getAllUsers)();
    res.status(200).send(userALL);
});
app.get("/products", (req, res) => {
    const allProducts = (0, database_1.getAllProducts)();
    res.status(200).send(allProducts);
});
app.get("/product/search", (req, res) => {
    const queryP = req.query.q;
    const queryProduto = (0, database_1.queryProductsByName)(queryP);
    res.status(200).send(queryProduto);
});
app.post("/users", (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const criarUsuario = (0, database_1.createUser)(id, email, password);
    res.status(201).send("Cadastro realizado com sucesso");
});
app.post("/products", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const crairProduto = (0, database_1.createProduct)(id, name, price, category);
    res.status(201).send("Produto cadastrado com sucesso");
});
app.post("/purchases", (req, res) => {
    const userId = req.body.userId;
    const productId = req.body.produtoId;
    const quantiny = req.body.quantiny;
    const totalPrice = req.body.totalPrice;
    const criarCompra = (0, database_1.createPurchase)(userId, productId, quantiny, totalPrice);
    res.status(201).send("Compra realizada com sucesso");
});
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const result = database_1.product.find((item) => item.id === id);
    res.status(200).send(result);
});
app.get("/users/:id/purchases", (req, res) => {
    const id = req.params.id;
    const result = (0, database_1.getAllPurchasesFromUserId)(id);
    res.status(200).send(result);
});
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const index = database_1.user.findIndex((item) => item.id === id);
    let message;
    if (index >= 0) {
        database_1.user.splice(index, 1);
        message = "item delatado com sucesso";
    }
    else {
        message = "nenhum item encontrado";
    }
    res.status(200).send(message);
});
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const index = database_1.product.findIndex((item) => item.id === id);
    let message;
    if (index >= 0) {
        database_1.user.splice(index, 1);
        message = "item deletado com sucesso";
    }
    else {
        message = "nenhum item encontrado";
    }
    res.status(200).send(message);
});
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const email = req.body.email;
    const password = req.body.password;
    const users = database_1.user.find((item) => item.id === id);
    if (users) {
        users.email = email || users.email;
        users.senha = password || users.senha;
    }
    res.status(200).send("usuario aleterado");
});
app.put("/products/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const produtos = database_1.product.find((item) => item.id === id);
    if (produtos) {
        produtos.name = name || produtos.name;
        produtos.preco = price || produtos.preco;
        produtos.categoria = category || produtos.categoria;
    }
    res.status(200).send("peoduto aleterado");
});
//# sourceMappingURL=index.js.map