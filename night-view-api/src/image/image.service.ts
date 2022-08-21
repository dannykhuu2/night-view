import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LikeImageDto } from './dto';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
    constructor(private config: ConfigService, private readonly httpService: HttpService,
        private prisma: PrismaService) {}

    getImages(count: number) {
        const api_key = this.config.get('API_KEY');
        return this.httpService.get(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=${api_key}`).pipe(
            map(response => response.data),
        );

    }
    
    getLikedImages(userId: number) {
        return this.prisma.image.findMany({
            where: {
                userId
            }
        })
    }

    getLikedImagesById(userId: number, imageId: number) {
        return this.prisma.image.findFirst({
            where: {
                id: imageId,
                userId,
            }
        })
    }

    async likeImage(userId: number, dto: LikeImageDto) {
        const likedImage = await this.prisma.image.create({
            data: {
                userId,
                ...dto
            },
        });

        return likedImage;
    }

    async deleteLikedImageById(userId: number, imageId: number) {
        const likedImage = await this.prisma.image.findUnique({
            where: {
                id: imageId
            }
        });

        if (!likedImage || likedImage.userId !== userId) {
            throw new ForbiddenException('Permissions to delete resources denied');
        }

        await this.prisma.image.delete({
            where: {
                id: imageId
            }
        })
    }
}
