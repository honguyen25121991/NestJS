import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class HandleImagesService {
    prisma = new PrismaClient()
    async getImages(): Promise<any> {
        return await this.prisma.hinh_anh.findMany()
    }

}
