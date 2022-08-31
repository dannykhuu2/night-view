import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class LikeImageDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    url: string

    @IsString()
    @IsNotEmpty()
    date: string

    @IsString()
    @IsOptional()
    copyright?: string

    @IsString()
    @IsNotEmpty()
    explanation: string
}