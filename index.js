import express from 'express'

const app=express()

app.get("/home",function(request,response){
    response.send("This is home")
})

app.get("/",function(request,response){
    response.send("Hi! Hello ! how are you ! I am Node JS")
})

app.listen(3000,function(){
    console.log("The server is started and running on port 3000")
})