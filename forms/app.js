const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    const filePath=path.join(__dirname,"index.html");
    res.sendFile(filePath);
})
app.post('/submit',(req,res)=>{
    const {name,rollno}=req.body;
    res.send(`<h2>Sucesss</h2>
        <p>WelCome To FEWD Class and your Deatils <br>
            <strong>Name :</strong> ${name} <br>
            <strong>Name :</strong> ${rollno} <br> `)
})

app.listen(3000,()=>{
    console.log(`server is running at http://localhost:3000`);
})