import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) {
      throw new Error('You can not access this route');
    }

    const usersList = this.usersRepository.list();

    return usersList;
  }
}

export { ListAllUsersUseCase };
