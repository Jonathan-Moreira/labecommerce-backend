
export type Tcliente ={
    id: string,
    email: string,
    senha: string
};

export type Tproduto = {
    id: string,
    name: string,
    preco: number,
    categoria: Categoria
};

export type Tcompra = {
userId: string,
produtoId: string,
quantidade: number,
precoTotal: number,
};


export enum Categoria {
    SKIN = "Skin",
    RP = "Rp",
    BAU = "Bau"
}