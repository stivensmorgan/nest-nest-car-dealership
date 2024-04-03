import { IsString, MinLength, minLength } from "class-validator";

export class CreateCarDto {
  @IsString({ message: 'Brand is not valid' })
  @MinLength(3)
  readonly brand: string;
  @IsString()
  readonly model: string;
}