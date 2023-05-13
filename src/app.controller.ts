import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.model';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('jwt'))
  @Get('auth/google') //this is the end point where our function will be called
  getProfile(@Request() req): User {
    return req.user;
  }
}
