import { connection } from "./connection.js";


const userops= {
    getusers: connection.query("select * from users",callback)
}

export default userops