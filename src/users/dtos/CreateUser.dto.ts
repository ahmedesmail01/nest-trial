import { IsEmail, IsNotEmpty } from 'class-validator';

export class createUser {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
