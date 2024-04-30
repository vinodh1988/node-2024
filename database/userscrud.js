import { connection } from "./connection.js";


const userops= {
    getusers: (callback)=>{connection.query("select * from users",callback)},
    getuser: (id,callback)=>{connection.query("select * from users where userid=?",
     [id],callback)},
    addUser: (user,callback)=> {
        connection.query("insert into users(name,city) values(?,?)",
       [user.name,user.city],callback)
    },
    updateUser: (user,callback)=> {
        connection.query("update users set name=?, city=?  where userid=?",
        [user.name,user.city,user.userid],callback
    )
    },
    deleteUser: (id,callback)=> {
        connection.query("delete from users where userid=?",[id],callback)
    }
}

export default userops

/*

   function(data) {


   }

   (data)=> {}*/