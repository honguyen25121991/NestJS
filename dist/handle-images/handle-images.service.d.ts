import { PrismaClient } from '@prisma/client';
export declare class HandleImagesService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    getImages(): Promise<any>;
}
