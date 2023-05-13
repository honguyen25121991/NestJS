/// <reference types="multer" />
import { PrismaClient } from '@prisma/client';
import { HandleImagesService } from './handle-images.service';
export declare class HandleImagesController {
    private handleImages;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    constructor(handleImages: HandleImagesService);
    postImage(id: string, _file: Express.Multer.File, body: {
        ten_hinh: string;
        mo_ta: string;
    }): Promise<{
        statusCode: number;
        message: string;
        content: {
            ten_hinh: string;
            duong_dan: string;
            mo_ta: string;
        };
        dateTime: Date;
    }>;
    updateImage(id: string, _file: Express.Multer.File, body: {
        ten_hinh: string;
        mo_ta: string;
        hinh_id: string;
    }): Promise<{
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
    getAll(): Promise<any>;
    getDetailImage(body: {
        name: string;
    }): Promise<any>;
    getDetail(id: string): Promise<any>;
    checkSaveImage(id: number): Promise<any>;
    getListImageSaved(id: number): Promise<any>;
    getListImageCreated(id: number): Promise<any>;
    deleteImage(id: string): Promise<any>;
}
