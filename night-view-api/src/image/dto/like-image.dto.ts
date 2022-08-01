import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class LikeImageDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    url: string

    @IsString()
    @IsOptional()
    copyright?: string

    @IsString()
    @IsNotEmpty()
    explanation: string

    @IsString()
    @IsNotEmpty()
    hdurl: string
}