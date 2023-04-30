import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { HandleImagesService } from './handle-images.service';
import { ConfigService } from '@nestjs/config';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('handle-images')
export class HandleImagesController {
    prisma = new PrismaClient()
    constructor(
        private handleImages: HandleImagesService,
        private config: ConfigService
    ) { }
    @Get('all')
    getAll() {
        return this.handleImages.getImages()
    }
}
