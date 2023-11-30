import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register')
    create(@Body() authData: RegisterDTO) {
      return this.authService.register(authData);
    }
}
