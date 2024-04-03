import { IsOptional, IsString, IsUUID, MinLength, isUUID, minLength } from 'class-validator';

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    @IsString({ message: 'Brand is not valid' })
    @MinLength(3)
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}
