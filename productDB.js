require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require('./products.json')

const start = async() => {
    try {
        await connectDB()
        console.log('deleting previous Data in Database')
        await Product.deleteMany()
        console.log('previous Data in Database deleted')
        await Product.create(ProductJson)
        console.log('new Data created successfully')
    } catch (error) {
        console.log(error)
    }
}
start()