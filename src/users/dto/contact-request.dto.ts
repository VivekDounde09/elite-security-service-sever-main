import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class ContactRequestDto {
  @ApiProperty()
  @IsEmail()
  email: string;;

  @ApiProperty()
  @IsPhoneNumber(undefined, {
    message:
      "The mobile number you entered is invalid",
  })
  mobile: string;

  @ApiProperty()
  @IsString()
  message: string;
}
