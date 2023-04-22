import crypto from 'crypto'

class Product {
    constructor( id,code, title, description, abv, price, status, stock, category, thumbnail, db) {
       
        if (!title) throw new Error('falta un argumento title')
        if (!description) throw new Error('falta un argumento')
        if(Number.isNaN(price)||!price) throw new Error('falta un argumento price o es un tipo invalido')
        if(Number.isNaN(stock)||!stock) throw new Error('falta un argumento stock o es un tipo invalido')
        if (!category) throw new Error('falta el argumento category')
        // if (thumbnail.length === 0) throw new Error('falta un argumento thumbnail')

        this.id = id
        this.code=code
        this.title = title
        this.description = description
        this.abv=abv
        this.price= price
        this.status=status
        this.stock = stock
        this.category=category
        this.thumbnail=thumbnail
        this.db=db

    }
}

class ProductManager {


    constructor() {
        
        this.products = []
    }

    getProducts() {
        
        return this.products
        
    }

    getProductById(id) {
        
        const searched = this.products.find(product => product.id === id)
        if (!searched) {
            throw new Error('product not found')
        }

        return searched
    }

    addProduct(title,description,abv,price,stock,category,thumbnail,db){
        
        
        
        let id = null
        if(this.products.some((product)=> product.title===title||this.products.some((product)=> product.id===id))){
            console.log(title)
            throw new Error (`el producto "${title}" ya existe`)  
        }
        
        if(this.products.length > 0){
            id = this.products.length + 1
            let product = new Product (id,crypto.randomUUID(), title, description, abv, price, true, stock, category, thumbnail,db)
            this.products.push(product)
            
    
        }

        if(this.products.length === 0){
            id =1
            let  product = new Product ( id,crypto.randomUUID(), title, description,abv, price, true, stock, category, thumbnail,db)
            this.products.push(product)    
           
   
        }
    }
}

const productManager= new ProductManager

productManager.getProducts()
productManager.addProduct('producto de prueba','Este es un producto prueba',undefined,250,25,"prueba","sin imagen",undefined)
productManager.getProducts()
productManager.addProduct('producto de prueba','Este es un producto prueba',undefined,250,25,"prueba","sin imagen",undefined)

