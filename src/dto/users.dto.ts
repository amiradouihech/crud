import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  fullname: string | undefined;

  @IsEmail()
  email: string | undefined;

  @IsNotEmpty()
  age: number | undefined;

  @IsNotEmpty()
  country: string | undefined;
}
