import { IsNotEmpty, IsString } from "class-validator"

export class LikeImageDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    url: string

    @IsString()
    @IsNotEmpty()
    copyright: string

    @IsString()
    @IsNotEmpty()
    explanation: string

    @IsString()
    @IsNotEmpty()
    hdurl: string
}