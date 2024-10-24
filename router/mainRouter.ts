import { Router ,Request,Response} from "express"
import * as mainController from '../controller/mainController'


const router:Router = Router()
const controller = new mainController.teacherController()

router.get("/",(req:Request , res:Response)=>{
    res.render("login")
})
router.get("/logIn",(req:Request , res:Response)=>{
     res.render("login")
}) 

router.post('/dashboard',(req:Request,res:Response)=> controller.verifyTeacherLogin(req,res))
router.get('/dashboard',(req:Request,res:Response)=> res.render('dash'))
router.get('/createNew',(req:Request,res:Response)=> controller.goToCreateNew(req,res))
router.post('/createNewStd',(req:Request,res:Response)=> controller.createNewStd(req,res))
 

export default router