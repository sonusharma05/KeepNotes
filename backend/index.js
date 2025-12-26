const express = require("express");
const { notes } = require("./db");
const app = express();
app.use(express.json()) ;
app.get("/test", (req,res)=>{
    res.send("backend is running ");
    
})
app.get("/notes",async(req,res)=>{
    
   const a = await notes.find();
   res.send(a);
})
app.post("/notes",async (req,res)=>{
    const title = req.body.title;
    const noteBody = req.body.body;

    await notes.create({
        title:title,
        body:noteBody
    })
    res.json({
        msg:"Note Created"
    })
   console.log("running fine") 
})

app.put("/notes",(req,res)=>{
    
})
app.listen(3000)