import { Router } from "express";
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

userRouter.get('/',listController.handle);
userRouter.get('/:id',showController.handle);
userRouter.post('/',createController.handle);
userRouter.put('/:id',updateController.handle);
userRouter.delete('/:id',removeController.handle);

export {userRouter}