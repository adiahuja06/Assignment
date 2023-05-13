import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      new User('ahujaaditya04@gmail.com','Aditya Ahuja'),
      new User('raju@example.com', 'Raju'),
      new User( 'ram@example.com', 'Ram'),
    ];
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
