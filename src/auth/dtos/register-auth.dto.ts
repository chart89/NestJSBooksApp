import { Match } from 'src/utils/match.decorator';
import {
    IsNotEmpty,
    IsString,
    Length,
    IsEmail
  } from 'class-validator';
  
  export class RegisterDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(5, 40)
    password: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(5, 40)
    @Match('password')
    passwordRepeat: string;
  }