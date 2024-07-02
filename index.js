import express from "express";
import fs from 'fs';
import { format } from "date-fns";
import path from "path";
// import {format} from 'date-fns';

// importing space

const app=express();
const PORT=4000;

// middleware
app.use(express.json())

// routes
app.get('/',(req,res)=>{
//    res.status(200).json({message:"hi all welcome to the our first node app"})
   res.status(200).send(`welcom to the our first node js`)
})

app.get('/create',(req,res)=>{
    let today = format(new Date(),'dd-MM-yyyy-HH-mm-ss');
     const filepath =`Timestamp/${today}.txt`
    fs.writeFileSync(filepath,`${today}`,"utf8");
    res.status(200).send("<div>created successfully</div>")
})

app.get('/read',(req,res)=>{
    let files=fs.readdirSync(`Timestamp`);
    const data =[]
    files.forEach((ele)=>{
        data.push(fs.readFileSync(`Timestamp/${ele}`,"utf8"))
    })
    res.status(200).json({textFiles:files,data})
})



app.listen(PORT,()=>{
    console.log(`App is listening on the port = ${PORT}`);
})