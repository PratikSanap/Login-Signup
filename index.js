import {app} from './app.js';
import authroutes from './routes/authroutes.js';
const port =process.env.PORT || 3000;
app.use('/api/auth', authroutes);
app.listen(port,()=>{
    return console.log('server has been started on Port:' )
})