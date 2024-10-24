import { Request, Response } from "express";
import dataBase from '../model/dbconfig'

interface interfaceData {
   name: string;
   email: string;
   password: string;
   rollno: number;
   course: string;
}

type Data = Partial<interfaceData>

export class teacherController{
   public async verifyTeacherLogin(req:Request , res:Response):Promise<void>{
      try{
        const teacherEmail:String = "teacher@123" 
        const teacherPassword:String = "abc"
        
        const teacherSignupData:Data={
          email:req.body.email,
          password:req.body.password
        }

         if( teacherEmail === teacherSignupData.email ){
            if(teacherPassword === teacherSignupData.password){
               res.redirect("/dashboard")
            }else{
                res.render('login',{passError:"invalid password",data:teacherSignupData})
            }
         }else{
            res.render("login",{emailError:"invalid email",data:teacherSignupData})
         }
      } catch (error) {
        res.status(500).json({ message: 'Error'});
      }
   }

   public async goToCreateNew(req:Request , res:Response):Promise<void>{
      try{
            res.render('create')
      }catch (error) {
        res.status(500).json({ message: 'Error'});
      }
   }

   public async createNewStd(req:Request , res:Response):Promise<void>{
      try{

          const studentsData:Data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            rollno: req.body.rollno,
            course: req.body.course
          }
         

         let emailCheck = await dataBase.query(`SELECT * FROM students WHERE email = $1`, [studentsData.email]);

         if(emailCheck.rows.length > 0){
            res.render('create',{message:"Email already exists",data:studentsData})
         }else{
         
          const querys = `INSERT INTO students (name, email, password, rollno, course) VALUES ($1, $2, $3, $4, $5)`;

        await dataBase.query(querys,[studentsData.name,studentsData.email, studentsData.password,studentsData.rollno, studentsData.course])

        res.redirect('/dashboard')

         }
      }catch (error) {
         console.error("this is the DB er", error)
        res.status(500).json({ message: 'Error'});
      }
   }
}