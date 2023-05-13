import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class HandleImagesService {
    prisma = new PrismaClient()

    async postImage(id: string, ten_hinh: string, duong_dan: string, mo_ta: string) {
        const date = new Date();
        await this.prisma.hinh_anh.create({
            data: {
                nguoi_dung_id: +id,
                ten_hinh: ten_hinh,
                duong_dan: duong_dan,
                mo_ta: mo_ta
            }
        })
        return {
            "statusCode": 200,
            "message": "Tải ảnh thành công ",
            "content": {
                ten_hinh, duong_dan, mo_ta,
            },
            "dateTime": date
        }


    }
    async getImages(): Promise<any> {
        return await this.prisma.hinh_anh.findMany()
    }

    async getNameImage(
        name: string
    ): Promise<any> {
        return await
            this.prisma.hinh_anh.findFirst({ where: { ten_hinh: name } })
    }

    async getDetaiImage(
        id: string
    ): Promise<any> {
        return await
            this.prisma.hinh_anh.findFirst({ where: { hinh_id: +id } })
    }

    async checkSaveImage(id: number): Promise<any> {
        const check = await this.prisma.luu_anh.findFirst({ where: { hinh_id: +id } })
        if (check !== null) {
            return `Đã lưu`
        } else {
            return ` Chưa lưu`
        }
    }

    async getListImageSaved(id: number): Promise<any> {
        return await this.prisma.hinh_anh.findMany({ where: { nguoi_dung_id: +id } })
    }
    async getListImageCreated(id: number): Promise<any> {
        return await this.prisma.luu_anh.findMany({ where: { nguoi_dung_id: +id } })
    }
    async deleteImage(id: string): Promise<any> {
        const existingImage = await this.prisma.hinh_anh.findUnique({
            where: {
                hinh_id: +id
            }
        });
        if (!existingImage) {
            return {
                "statusCode": 404,
                "message": " Id ảnh không tồn tại",
            }
        } else {
            await this.prisma.$transaction([
                this.prisma.hinh_anh.delete({
                    where: { hinh_id: +id },
                }),
            ]);
        }


    }
    async updateImage(id: string, ten_hinh: string, mo_ta: string, hinh_id: string, duong_dan: string) {
        const date = new Date();
        const checkIdImage = await this.prisma.hinh_anh.findFirst({
            where: {
                hinh_id: +hinh_id
            }
        })
        const checkIdUser = await this.prisma.hinh_anh.findFirst({
            where: {
                nguoi_dung_id: +id
            }
        })
        if (checkIdUser !== null) {
            if (checkIdImage === null) {
                return {
                    "statusCode": 404,
                    "message": " Id ảnh không tồn tại",
                    "dateTime": date
                }
            } else {
                await this.prisma.hinh_anh.update({
                    data: {
                        nguoi_dung_id: +id,
                        ten_hinh: ten_hinh,
                        mo_ta: mo_ta,
                        duong_dan: duong_dan
                    }, where: {
                        hinh_id: +hinh_id
                    }
                })
                return {
                    "statusCode": 200,
                    "message": "Update ảnh thành công ",
                    "content": {
                        ten_hinh, duong_dan, mo_ta,
                    },
                    "dateTime": date
                }
            }
        } else {

            return {
                "statusCode": 404,
                "message": " Id người dùng không tồn tại",
                "dateTime": date
            }
        }


    }
}
