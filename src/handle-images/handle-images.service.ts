import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class HandleImagesService {
    prisma = new PrismaClient()

    async postImage(id: string, ten_hinh: string, duong_dan: string, mo_ta: string) {
        await this.prisma.hinh_anh.create({
            data: {
                nguoi_dung_id: +id,
                ten_hinh: ten_hinh,
                duong_dan: duong_dan,
                mo_ta: mo_ta
            }
        })
        return "Upload Success";
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

        try {
            const existingImage = await this.prisma.hinh_anh.findUnique({
                where: {
                    hinh_id: 1
                }
            });

            if (!existingImage) {
                throw new Error('Hình ảnh không tồn tại');
            }

            await this.prisma.$transaction([
                this.prisma.hinh_anh.deleteMany({
                    where: {
                        nguoi_dung_id: 1
                    }
                }),
                this.prisma.hinh_anh.delete({
                    where: {
                        hinh_id: 1
                    }
                })
            ]);

            console.log('Xóa hình ảnh thành công');

        } catch (err) {
            console.error(err);
        } finally {
            await this.prisma.$disconnect();
        }


    }
    async updateImage(id: string, imageName: string,) {
        let data = await this.prisma.hinh_anh.findFirst({
            where: { nguoi_dung_id: +id }
        })
        data.ten_hinh = imageName
        await this.prisma.hinh_anh.update({
            data, where: {
                hinh_id: +id
            }
        })
        return "Upload Success";
    }
}
