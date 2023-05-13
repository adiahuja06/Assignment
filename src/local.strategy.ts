import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(name: string, email: string): Promise<any> { //if the name and email is found then the response will be returned in form of a promise otherwise exception will be thrown
    const user = await this.authService.validateUserByEmail( email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
