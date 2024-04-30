import express from 'express'
const route=express.Router()
import {currentDir} from '../constants.js'
import path from 'path'
import userops  from '../database/userscrud.js'


route.get("/",(request,response)=>{
  userops.getusers((err,data)=>{
    if(err)
        response.status(500)
     else
        response.json({"users":data},200);
 })
})

route.get("/:id",(request,response)=>{
    const id= request.params.id
    userops.getuser(id,(err,data)=>{
      if(err)
          response.status(500)
       else
          response.json(data,200);
   })
  })

  route.put("/:id",(request,response)=>{
    const id= request.params.id
    userops.getuser(id,(err,data)=>{
      if(err)
          response.status(500)
       else{
          if(data.length==0)
              response.send("The user id is wrong, no record exists with that name",200)
          else {
            
            let name= request.body.name? request.body.name:data[0].name
            let city= request.body.city? request.body.city:data[0].city
            userops.updateUser({userid:id,name:name,city:city},(err,data)=> {
                    if(err)
                       response.sendStatus(500)
                    else
                       response.send("row updated",200)
            })
          }
        
       }
   })
  })

  
  route.delete("/:id",(request,response)=>{
    const id= request.params.id
    userops.deleteUser(id,(err,data)=>{
      if(err)
          response.status(500)
      else
          if(data.affectedRows==1)
                    response.send("successfully deleted")
          else
                    response.send("There is no record with that id")
   })
  })


route.post("/",(request,response)=>{
    let user={name:request.body.name,city:request.body.city}
    userops.addUser(user,(err,data)=>{
      if(err)
          response.status(500)
       else
          response.json(data,201); //201: Created
   })
  })

export default route;