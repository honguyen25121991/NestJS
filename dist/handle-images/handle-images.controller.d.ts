import { PrismaClient } from '@prisma/client';
import { HandleImagesService } from './handle-images.service';
import { ConfigService } from '@nestjs/config';
export declare class HandleImagesController {
    private handleImages;
    private config;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    constructor(handleImages: HandleImagesService, config: ConfigService);
    getAll(): Promise<any>;
}
