const express = require("express")
const app = express()
const path = require("path")
const puerto =process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname,"./public")))
app.get ('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})


app.get('/register',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.listen(puerto, ()=> console.log("servidor corriendo en puerto 3000"))