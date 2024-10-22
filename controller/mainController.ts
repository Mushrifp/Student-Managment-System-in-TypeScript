import { Request, Response } from "express";

export class teacherController{
   public async verifyTeacherLogin(req:Request , res:Response):Promise<void>{
      try{
        const name:String = "teacher@123"
        const password:String = "abc"
        interface teacherData {
            email:string;
            password:string
        }
        const data:teacherData = {
            email:req.body.email,
            password:req.body.passError
        }

         if( name === req.body.email ){
            if(password === req.body.password){
               res.render("dash")
            }else{
                res.render('main',{passError:"invalid password",data})
            }
         }else{
            res.render("main",{emailError:"invalid email",data})
         }
      } catch (error) {
        res.status(500).json({ message: 'Error'});
      }
   }
}