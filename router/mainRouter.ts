import { Router ,Request,Response} from "express"
import * as mainController from '../controller/mainController'


const router:Router = Router()
const teacherFunctions = new mainController.teacherController()
const loadPages = new mainController.goToPages()

router.get("/",(req:Request , res:Response)=>{
    res.render("login")
})
router.get("/logIn",(req:Request , res:Response)=>{
     res.render("login")
}) 

router.post('/dashboard',(req:Request,res:Response)=> teacherFunctions.verifyTeacherLogin(req,res))
router.get('/dashboard',(req:Request,res:Response)=> loadPages.loadDash(req,res))
router.get('/createNew',(req:Request,res:Response)=> loadPages.goToCreateNew(req,res))
router.post('/createNewStd',(req:Request,res:Response)=> teacherFunctions.createNewStd(req,res))
router.get('/editStd',(req:Request,res:Response)=> teacherFunctions.editStudents(req,res))
router.post('/saveChanges',(req:Request,res:Response)=> teacherFunctions.saveChanges(req,res))


export default router