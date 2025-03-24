const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("Hello world from the server")
})

app.listen(5000, ()=>{
console.log("Listning to port 5000")
})