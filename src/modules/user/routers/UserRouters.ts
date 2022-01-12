import { Router } from "express";
import { ensureAdmin } from "../../../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { RemoveUserController } from "../controllers/RemoveUserController";
import { ShowUserController } from "../controllers/ShowUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const userRouter = Router()
const listController = new ListUsersController();
const showController = new ShowUserController();
const createController = new CreateUserController();
const updateController = new UpdateUserController();
const removeController = new RemoveUserController();

userRouter.get('/',ensureAuthenticated, ensureAdmin, listController.handle);
userRouter.get('/:id',ensureAuthenticated, ensureAdmin, showController.handle);
userRouter.post('/', createController.handle);
userRouter.put('/',ensureAuthenticated, updateController.handle);
userRouter.delete('/:id',ensureAuthenticated,ensureAdmin,removeController.handle);

export {userRouter}