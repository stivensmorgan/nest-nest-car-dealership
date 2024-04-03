import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

/*
    PartialType hace que todas las propiedades del padre sean opcionales
*/
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name: string;
}