import issues from '../mongolayer/issueschema.js';
import express from 'express'

const route=express.Router()

route.get("/",async (request,response)=>{
try{
  let data = await  issues.find({},{_id:0,__v:0})
  response.json(data)
}
catch(e){
    response.status(500)
}
  
})

route.post("/",async (request,response)=>{
    try{
     let newdata=request.body
     console.log(newdata)
     let data=await issues.insertMany([newdata])
     console.log(data)
      response.json("insertion successful",201)
    }
    catch(e){
        response.status(500)
    }
      
    })

route.put("/",async (request,response)=>{
        try{
         let issue=request.body.issue;
         let newdata=request.body
         console.log(issue)
         console.log(newdata)
         let data=await issues.updateOne({issue: issue},newdata)
         console.log(data)
          response.json("update successful",200)
        }
        catch(e){
            response.status(500)
        }
          
        })



export default route