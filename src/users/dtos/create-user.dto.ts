import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlpha()
  name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  age: number;
}
