import { Body, Controller, HttpCode, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(@Body() dto: AuthDto, @Res({ passthrough: true}) response: Response) {
        const access_token = await this.authService.signUp(dto);
        response.cookie("access_token", access_token, {
            expires: new Date(Date.now() + 10800000),
            httpOnly: true
        });
        response.send();
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signin(@Body() dto: AuthDto, @Res({ passthrough: true}) response: Response) {
        const access_token = await this.authService.signIn(dto);
        response.cookie("access_token", access_token, {
            expires: new Date(Date.now() + 10800000),
            httpOnly: true
        });
        response.send();
    }
}