import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const usersList = this.listAllUsersUseCase.execute({ user_id });

      return response.json(usersList);
    } catch (error) {
      return response.status(400).json({ error: `Error: ${error}` });
    }
  }
}

export { ListAllUsersController };
