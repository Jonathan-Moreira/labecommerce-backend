"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchase = exports.product = exports.user = void 0;
const type_1 = require("./type");
exports.user = [
    {
        id: "001",
        email: "jonathan.g@hotmail.com",
        senha: "010101"
    },
    {
        id: "002",
        email: "rodi.g@hotmail.com",
        senha: "020202"
    }
];
exports.product = [
    {
        id: "001",
        name: "Lux Elementalista",
        preco: 3,
        categoria: type_1.Categoria.SKIN
    },
    {
        id: "002",
        name: "Emoje",
        preco: 2,
        categoria: type_1.Categoria.BAU
    }
];
exports.purchase = [
    {
        userId: "001",
        produtoId: "001",
        quantidade: 2,
        precoTotal: 6
    },
    {
        userId: "002",
        produtoId: "002",
        quantidade: 1,
        precoTotal: 2
    }
];
function createUser(id, email, password) {
    const novoUser = {
        id,
        email,
        senha: password
    };
    exports.user.push(novoUser);
    return "Cadastro realizado com sucesso";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.user;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, preco, categoria) {
    const obejeto = {
        id,
        name,
        preco,
        categoria
    };
    exports.product.push(obejeto);
    return "Produto criado com sucesso";
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.product;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    const resultado = exports.product.filter(prod => prod.id === idToSearch);
    return resultado;
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    const resultado = exports.product.filter(prod => prod.name === q);
    return resultado;
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, produtoId, quantidade, precoTotal) {
    const compra = {
        userId,
        produtoId,
        quantidade,
        precoTotal
    };
    exports.purchase.push(compra);
    return "Compra realizada com sucesso";
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    const resultado = exports.purchase.filter(user => user.userId === userIdToSearch);
    return resultado;
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map