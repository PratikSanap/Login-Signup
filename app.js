import express from 'express';
import cors from 'cors';
import authroutes from './routes/authroutes.js';
export const app =express();
app.use(express.json({type:'application/json'}));
app.use('/api/auth', authroutes);
app.use(cors({
    origin:process.env.CORS_ORIGINS || 'http://localhost:3000',
    credentials:true,
}));
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
})