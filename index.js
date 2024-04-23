//const os=require("os")
//const fs= require("fs")
import os from 'os'
import fs from 'fs'

console.log("Home Directory",os.homedir())
console.log("Number of cpus",os.cpus().length)

fs.readFile("backup.notes","utf-8",function(err,data){
   if(err)
      console.log(err)
   else
      console.log(data)
})

console.log("After the file call")