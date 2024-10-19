import * as express from 'express';
import * as dotenv from 'dotenv';


dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.send("welcome to the page ") 
}) 

app.listen(process.env.PORT , ()=>{
    console.log(`server started running http://localhost:${process.env.PORT}`)
})