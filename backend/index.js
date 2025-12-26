const express = require("express")
const app = express();
app.use(express.json()) ;
app.get("/test", (req,res)=>{
    res.send("backend is running ");
})
app.get("/notes",(req,res)=>{
    res.send("hello world")
})
app.post("/notes",(req,res)=>{
    
})

app.put("/notes",(req,res)=>{
    
})
app.listen(3000)