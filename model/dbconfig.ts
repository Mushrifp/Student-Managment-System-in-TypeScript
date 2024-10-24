import { Client } from 'pg';
import * as dotenv from 'dotenv'

dotenv.config()

interface dbConfig{
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}

const client = new Client({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:Number(process.env.DB_PORT)

}as dbConfig)

client.connect()
 .then(()=>{
 console.log("DB connected ")
 }).catch((error)=>{
   console.log("error occured",error)
 })

 export default client