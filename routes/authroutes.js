import express from 'express';
import {getuser,updateuser,getlogin,gethome} from '../controllers/authcontroller.js';
const router =express.Router();
router.get('/test',(req,res)=>{
    res.send("Test is succesful");
});
router.get('/signup',getuser);
router.post('/signup',updateuser);
router.get('/login',getlogin);
router.get('/home',gethome);

export default router;