import { User } from ".prisma/client";
import { hash } from "../helpers/hashing";
import UserRepository from "../repositories/UserRepository";
import AppError from "../validators/AppError";

class UserService {
    protected userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUsers() {
        return await this.userRepository.getUsers();
    }

    async create(user: Omit<User, "id">) {

        const existingUser = await this.userRepository.byEmail(user.email);

        if (existingUser) {
            throw new AppError('User already exists');
        }

        // Hashing the password
        user.password = await hash(user.password);

        return await this.userRepository.create(user);
    }

    async byEmail(email: string) {
        return await this.userRepository.byEmail(email);
    }
}

export default UserService;