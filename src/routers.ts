import {Router} from 'express'
import { userRouter } from './modules/user/routers/UserRouters'
const routers = Router()

routers.use('/user',userRouter)

export {routers}