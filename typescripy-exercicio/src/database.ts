import { Categoria, Tcliente, Tcompra, Tproduto } from "./type";


export const user: Tcliente [] = [
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

export const product: Tproduto [] = [
    {
        id: "001",
        name: "Lux Elementalista",
        preco: 3,
        categoria: Categoria.SKIN
    },

    {
        id: "002",
        name: "Emoje",
        preco: 2,
        categoria: Categoria.BAU
    }

];


export const purchase: Tcompra [] = [
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

export function createUser(id: string, email: string, password: string) {

const novoUser = {
    id,
    email,
    senha: password
}

user.push(novoUser)

 return  "Cadastro realizado com sucesso"

}

export function getAllUsers() {
    return user
}

export function createProduct (id: string, name: string, preco: number, categoria: Categoria) {

    const obejeto = {
        id,
        name,
        preco,
        categoria
    }
    product.push(obejeto)
    return "Produto criado com sucesso"

}

export function getAllProducts() {
    return product
}

export function getProductById(idToSearch: string) {
    
    const resultado =  product.filter(prod => prod.id === idToSearch)
  
    return resultado
}

export function queryProductsByName(q: string) {
  
    const resultado = product.filter(prod => prod.name === q)
    
    return resultado
}

export function createPurchase(userId: string, produtoId: string, quantidade: number, precoTotal: number) {

    const compra = {
        userId,
        produtoId,
        quantidade,
        precoTotal
    }

    purchase.push(compra)

return "Compra realizada com sucesso"

}


export function getAllPurchasesFromUserId(userIdToSearch: string) {

 const resultado = purchase.filter(user => user.userId === userIdToSearch)

 return resultado
}