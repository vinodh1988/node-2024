import express from 'express'
import path from 'path'
import {currentDir} from './constants.js'
const app=express()
import  fileroutes from './routes/fileroute.js'
import bodyParser from 'body-parser'
import userroutes  from './routes/userroute.js'
import deptroutes  from './routes/deptroute.js'
app.use(bodyParser.urlencoded({extended:true})) //we can read request body
app.use(bodyParser.json()) //parses json format if input is in json format

//configuring direct access of static resources
app.use(express.static(path.join(currentDir,"public/js")))
app.use(express.static(path.join(currentDir,"public/css")))
app.use(express.static(path.join(currentDir,"public/images")))

app.use("/filedata",fileroutes)
app.use("/users",userroutes)
app.use("/departments",deptroutes)
app.set('views', path.join(currentDir, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

app.get("/home",function(request,response){
    response.sendFile(path.join(currentDir,"public/html/index.html"))
})



app.get("/",function(request,response){
    response.send("Hi! Hello ! how are you ! I am Node JS 20.x")
})

app.listen(3000,function(){
    console.log("The server is started and running on port 3000")
})
/*
try {
    const [results, fields] = await connection.query(
      "select * from dummy"
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }*/
  