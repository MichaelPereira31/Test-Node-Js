import { Router } from "express";
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

userRouter.get('/',ensureAuthenticated, listController.handle);
userRouter.get('/:id',ensureAuthenticated, showController.handle);
userRouter.post('/',ensureAuthenticated, createController.handle);
userRouter.put('/:id',ensureAuthenticated, updateController.handle);
userRouter.delete('/:id',ensureAuthenticated, removeController.handle);

export {userRouter}