import express from 'express'
const route=express.Router()
import {currentDir} from '../constants.js'
import path from 'path'
import fs from 'fs'
route.get("/fileit",function(request,response){
    fs.readFile(path.join(currentDir,"filedata/x.json"),"utf-8",function(error,data){
         if(error)
             response.sendStatus(500)
         else
             //response.json(JSON.parse(data))
            response.render("people",{persons: JSON.parse(data)})
    })
})

route.post("/addperson",function(request,response){
    fs.readFile(path.join(currentDir,"filedata/x.json"),"utf-8",function(error,data){
         if(error)
             response.sendStatus(500)
         else{
             //response.json(JSON.parse(data))
            let people = JSON.parse(data)
            console.log(people)
            console.log(request.body)
            people.push(request.body)
            fs.writeFile(path.join(currentDir,"filedata/x.json"),JSON.stringify(people),function(err,data){
                if(err)
                   response.send("Not able to upload data")
                else
                   response.redirect("../home")
                })
           // response.render("people",{persons: JSON.parse(data)})
         }
    })
})


//const fileroute= route
export default  route