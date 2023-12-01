import { Controller, Post, Body, UseGuards, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register')
    create(@Body() authData: RegisterDTO) {
      return this.authService.register(authData);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req, @Response() res) {
      const tokens = await this.authService.createSession(req.user);
      res.cookie('auth', tokens, { httpOnly: true });
      res.send({
      message: 'success',
      });
    }
}
