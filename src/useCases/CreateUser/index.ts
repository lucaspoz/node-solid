import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { PostgressUsersRepository } from '../../repositories/implementations/PostgressUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailtrapProvider = new MailtrapMailProvider()
const postgressUsersRepository = new PostgressUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  mailtrapProvider,
  postgressUsersRepository
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
