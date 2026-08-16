// bcrypt dotenv jsonwebtoken express nodemon cors

const express= require('express')
const app = express()
const routes = require('./Routes/UserRoutes');
const cors = require('cors')

app.use(cors({
    origin:'*'
}))

app.use(express.json())  //body-parser
// app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("Backend is working ")
})
app.use('/pages',routes)

app.listen(8888,()=>{
    console.log("Server is running fine at 8888")
})