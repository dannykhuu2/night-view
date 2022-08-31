import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { LikeImageDto } from './dto';
import { ImageService } from './image.service';

@Controller('images')
export class ImageController {
    constructor(private imageService: ImageService) {}

    @Get('/api/:count')
    getImages(@Param('count', ParseIntPipe) count: number) {
        return this.imageService.getImages(count);
    }
    
    @UseGuards(JwtGuard)
    @Get('/likes')
    getLikedImages(@GetUser('id') userId: number) {
        return this.imageService.getLikedImages(userId);
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    getLikedImagesById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) imageId: number) {
        return this.imageService.getLikedImagesById(userId, imageId);
    }

    @UseGuards(JwtGuard)
    @Post()
    likeImage(@GetUser('id') userId: number, @Body() dto: LikeImageDto) {
        return this.imageService.likeImage(userId, dto);
    }

    @UseGuards(JwtGuard)
    @Delete('/byId/:id')
    deleteLikedImageById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) imageId: number) {
        return this.imageService.deleteLikedImageById(userId, imageId);
    }

    @UseGuards(JwtGuard)
    @Delete('/byUrl/:encodedUrl')
    deleteLikedImageByUrl(@GetUser('id') userId: number, @Param('encodedUrl') encodedUrl: string) {
        return this.imageService.deleteLikedImageByUrl(userId, encodedUrl);
    }

}
