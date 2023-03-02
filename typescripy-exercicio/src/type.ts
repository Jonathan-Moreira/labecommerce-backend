
export type Tcliente ={
    id: string,
    email: string,
    senha: string
};

export type Tproduto = {
    id: string,
    name: string,
    preco: number,
    catergoria: string
};

export type Tcompra = {
userId: string,
produtoId: string,
quantidade: number,
precoTotal: number,
};