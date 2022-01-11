import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { AppError } from "../../../errors/AppError"
import { UserRepository } from "../../user/typeorm/repository/UserRepository"

interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string;
        email: string;
    }
    token: string;
}
class AuthenticateUserService {
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const userRepository = getCustomRepository(UserRepository)
        
        const user = await userRepository.findOne({email})
        
        if (!user) {
            throw new AppError('user not found')
        }

        //verificação de senha
        const passwordMatch = await compare(password, user.password)
        
        if (!passwordMatch) {
            throw new AppError('Email/password incorrect')
        }

        // Gerando token
        const token = sign({}, "9e63d220b6e6fc6d028720ce077967d6", {
            subject: user.id,
            expiresIn: "1d"
        })
        const tokenReturn: IResponse = {
            token,
            user:{
                name: user.name,
                email: user.email
            }
        }
        
        return tokenReturn
    }
}
export { AuthenticateUserService }