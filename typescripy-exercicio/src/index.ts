import { user, product, purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database"
import { Categoria, Tcliente, Tcompra, Tproduto} from "./type"
import * as express from "express"
import * as cors from "cors"



// console.log(user)
// console.log(product)
// console.log(purchase)
// console.log(createUser("003", "jonathanmunroi@hotmail.com", "jonathan0202")) 
// console.table(getAllUsers())
// console.log(createProduct("003", "Nami", 10, Categoria.SKIN))
// console.table(getAllProducts())
// console.log(getProductById("004"))
// console.log(queryProductsByName("Lux Elementalista"))
// console.log(createPurchase("002", "002", 2, 4))
// console.table(getAllPurchasesFromUserId("001"))

//criação do servidor express
const app = express();
//com formato json
app.use(express.json());

app.use(cors())
app.listen(3003,()=>{
    console.log(3003)
})

app.get("/ping", (req: express.Request, res:express.Response)=>{
res.send("pong!")
})

app.get("/users", (req: express.Request, res:express.Response)=>{
    const userALL = getAllUsers()
    
    res.status(200).send(userALL)
})



app.get("/products",(req: express.Request, res: express.Response)=>{
   const allProducts = getAllProducts()

   res.status(200).send(allProducts)
})

app.get("/product/search", (req: express.Request, res: express.Response)=>{
   const queryP = req.query.q as string
   const queryProduto = queryProductsByName(queryP)

   res.status(200).send(queryProduto)
})


app.post("/users", (req: express.Request, res:express.Response)=>{
    const id = req.body.id
    const email = req.body.email
    const password = req.body.password

    const criarUsuario = createUser(id, email, password)

    res.status(201).send("Cadastro realizado com sucesso")
})


app.post("/products", (req: express.Request,res: express. Response)=>{
    const id = req.body.id
    const name = req.body.name
    const price = req.body.price
    const category = req.body.category

    const crairProduto = createProduct(id, name, price, category)

    res.status(201).send("Produto cadastrado com sucesso")
})


app.post("/purchases", (req: express.Request, res: express.Response)=>{
    const userId = req.body.userId
    const productId = req.body.produtoId
    const quantiny = req.body.quantiny
    const totalPrice = req.body.totalPrice

    const criarCompra = createPurchase (userId, productId, quantiny, totalPrice)

    res.status(201).send("Compra realizada com sucesso")
})

app.get("/products/:id", (req: express.Request, res: express.Response)=>{

    const id: string = req.params.id 

    const result: Tproduto = product.find((item)=> item.id===id)

    res.status(200).send(result)
})


app.get("/users/:id/purchases", (req: express.Request, res: express.Response)=>{

    const id: string = req.params.id

    const result:Tcompra[] = getAllPurchasesFromUserId(id) 

    res.status(200).send(result)
})


app.delete("/users/:id", (req: express.Request, res: express.Response)=>{
    const id: string = req.params.id

    const index: number = user.findIndex((item)=> item.id ===id)

    let message: string

    if(index >= 0) {
        user.splice (index, 1)
        message = "item delatado com sucesso"
    }else {
        message = "nenhum item encontrado"
    }

    res.status(200).send(message)
})


app.delete("/products/:id", (req: express.Request, res: express.Response)=>{

    const id: string = req.params.id

    const index: number = product.findIndex((item)=> item.id ===id)

    let message: string

    if(index >= 0) {
        user.splice (index, 1)
        message = "item deletado com sucesso"
    }else {
        message = "nenhum item encontrado"

    }

    res.status(200).send(message)
})


app.put("/users/:id", (req: express.Request, res: express.Response)=>{
   const id: string = req.params.id 
   const email:string | undefined = req.body.email 
   const password: string | undefined = req.body.password

   const users: Tcliente = user.find((item)=> item.id ===id)
   

   if (users) {
    users.email = email || users.email
    users.senha = password || users.senha
   }

 res.status(200).send("usuario aleterado")
} )


app.put("/products/:id", (req: express.Request, res: express.Response)=>{
    const id: string = req.params.id
    const name: string | undefined = req.body.name
    const price: number | undefined = req.body.price
    const category: Categoria | undefined = req.body.category

    const produtos: Tproduto = product.find((item)=> item.id ===id)
    
    if(produtos){
     produtos.name = name || produtos.name
     produtos.preco = price || produtos.preco
     produtos.categoria = category || produtos.categoria
    }

    res.status(200).send("peoduto aleterado")
})

