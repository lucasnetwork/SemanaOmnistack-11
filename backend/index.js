const express = require("express")
const app = express()

app.get('/contato',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.listen(3333,() => console.log("hello world"))