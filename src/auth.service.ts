import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.userService.findOneByEmail(email);
    return user;
  }//checking whether the user is authentic or not
}
