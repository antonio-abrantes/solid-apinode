import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { MailTrapMailProvider } from './../../providers/implementations/MailTRapMailProvider';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUsersRepository';

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
