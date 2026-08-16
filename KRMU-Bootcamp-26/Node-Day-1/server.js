const express = require("express")
// console.log(express)
const app = express()
// console.log(app);

app.get("/",(req,res)=>{
    res.send("this is home page")
})
app.get("/about",(req,res)=>{
    res.send(
        `<html>
            <head></head>
            <body>
                <h1>This is About page</h1>
                <button>Click</button>
            </body>
        </html>`
    )
})
app.get("/contact",(req,res)=>{
    res.send("this is contact page")
})

app.listen(3100,()=>{
    console.log("server is running in 3100")
})

// const math = require("./math");
// console.log(math,"math");

// console.log(math.add(5, 3)); // Output: 8
// console.log(math.subtract(8, 3)); // Output: 5