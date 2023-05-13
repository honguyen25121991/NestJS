import { PrismaClient } from '@prisma/client';
export declare class HandleImagesService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    postImage(id: string, ten_hinh: string, duong_dan: string, mo_ta: string): Promise<{
        statusCode: number;
        message: string;
        content: {
            ten_hinh: string;
            duong_dan: string;
            mo_ta: string;
        };
        dateTime: Date;
    }>;
    getImages(): Promise<any>;
    getNameImage(name: string): Promise<any>;
    getDetaiImage(id: string): Promise<any>;
    checkSaveImage(id: number): Promise<any>;
    getListImageSaved(id: number): Promise<any>;
    getListImageCreated(id: number): Promise<any>;
    deleteImage(id: string): Promise<any>;
    updateImage(id: string, ten_hinh: string, mo_ta: string, hinh_id: string, duong_dan: string): Promise<{
        statusCode: number;
        message: string;
        dateTime: Date;
        content?: undefined;
    } | {
        statusCode: number;
        message: string;
        content: {
            ten_hinh: string;
            duong_dan: string;
            mo_ta: string;
        };
        dateTime: Date;
    }>;
}
