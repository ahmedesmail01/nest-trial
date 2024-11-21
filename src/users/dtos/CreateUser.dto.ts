import { IsEmail, IsNotEmpty } from 'class-validator';

export class createUser {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
