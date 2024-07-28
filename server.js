const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require ('dotenv')

const userRoutes = require('./routes/user')
const expenseRoutes = require('./routes/expense')

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Mongodb connected!')
}).catch((error)=>{
    console.log(error)
})

app.use('/user', userRoutes)
app.use('/expense', expenseRoutes)

app.listen(7000, ()=>{
    console.log('server running at 7000')
})