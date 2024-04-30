import model from '../database/model.js'
import express from 'express'
const route=express.Router()
//import {currentDir} from '../constants.js'
//import path from 'path'



route.get("/",async function(request,response){
    try{
   const  result =await model.department.findAll(
        {include:[model.employee]})
        response.json(result)
   }
   catch(e){
       response.status(500).send('server error')
   }
})



route.post("/",async function(request,response){
var dept={department_id:request.body.department_id,
          name:request.body.name,
          vinodhemployees:request.body.employees}
          console.log(dept);
try{
      const result = await model.department.create(dept,{include: [model.employee]})
      response.send("record inserted")
    }
    catch(e){
        response.status(500).send('server error')
    }
         
})


export default route;