import { Router } from "express"
import { AuthenticateController } from "../controllers/AuthenticateController"

const authenticateRouters = Router()
const authenticationController = new AuthenticateController()

authenticateRouters.post("/", authenticationController.handle)

export { authenticateRouters }