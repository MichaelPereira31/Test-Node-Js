import {Router} from 'express'
import { authenticateRouters } from './modules/authenticate/routers/AuthenticateRouters'
import { userRouter } from './modules/user/routers/UserRouters'
const routers = Router()

routers.use('/user',userRouter)
routers.use('/login',authenticateRouters)
routers.get('/',()=>{
    console.log('ok')
})


export {routers}