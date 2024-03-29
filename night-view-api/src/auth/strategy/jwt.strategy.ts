import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(config: ConfigService, private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT]),
            secretOrKey: config.get('JWT_SECRET'),
        })
    }

    async validate(payload: {sub: number, email: string}) {
        const {hash, ...user} = await this.prisma.user.findUnique({
            where: {
                id: payload.sub,
            }
        });
        return user;
    }

    private static extractJWT(req: Request) : string | null {
        if (req.cookies && "access_token" in req.cookies) {
            return req.cookies.access_token;
        }
        return null;
    }
}