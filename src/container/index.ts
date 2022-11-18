import { createContainer, asClass } from 'awilix';
import UserController from '../controllers/UserController';
import UserRepository from '../repositories/UserRepository';
import UserService from '../services/UserService';

const container = createContainer();

container.register({
    userRepository: asClass(UserRepository),
    userService: asClass(UserService),
    userController: asClass(UserController)
});

export default container;