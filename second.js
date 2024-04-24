export const person={
    sno:1,
    name: "Roshan",
    city: "Mumbai"
}

export function sayHi(name){
    return "Hi!!!"+name
}

const consolidate = {
     personRecord: person,
     greet: sayHi
}
export default consolidate
/*
   a file can have maximum one default export
    and any number of export

    export?  to get it used in other files (to import you need to export)
*/
/*
   module.exports= {  person: person, sayHi: sayHi, consolidate: consolidate}

   in index.js

   const x = require('./second')

   console.log(x.person)
   x.sayHi("varun")
*/