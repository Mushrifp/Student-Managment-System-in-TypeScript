import { Router ,Request,Response} from "express"
import * as mainController from '../controller/mainController'


const router:Router = Router()
const controller = new mainController.teacherController()

router.get("/",(req:Request , res:Response)=>{
    res.render("main")
})
router.get("/logIn",(req:Request , res:Response)=>{
     res.render("main")
})

router.post('/loginVerify',(req:Request,res:Response)=> controller.verifyTeacherLogin(req,res))
 

export default router