import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '4/0AbUR2VPeB6qbteh7dOnG2uRiTnbOkCNFihuZKzcoEIWG78wBcrAH-MwrJUKNRjoeGxC5rA', //here we will be replacing with secret key that could be generated using nodejs  crypto libraray
      //the other method is when we are making API using OAuth playground we can easily add the access key 
      /*
      const crypto = require('crypto');
      const secretKey = crypto.randomBytes(32).toString('hex');
      console.log(secretKey);
      */
    });
  }

  async validate(payload: any): Promise<User> {
    const user = await this.authService.validateUserByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
