"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleImagesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let HandleImagesService = class HandleImagesService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async postImage(id, ten_hinh, duong_dan, mo_ta) {
        const date = new Date();
        await this.prisma.hinh_anh.create({
            data: {
                nguoi_dung_id: +id,
                ten_hinh: ten_hinh,
                duong_dan: duong_dan,
                mo_ta: mo_ta
            }
        });
        return {
            "statusCode": 200,
            "message": "Tải ảnh thành công ",
            "content": {
                ten_hinh, duong_dan, mo_ta,
            },
            "dateTime": date
        };
    }
    async getImages() {
        return await this.prisma.hinh_anh.findMany();
    }
    async getNameImage(name) {
        return await this.prisma.hinh_anh.findFirst({ where: { ten_hinh: name } });
    }
    async getDetaiImage(id) {
        return await this.prisma.hinh_anh.findFirst({ where: { hinh_id: +id } });
    }
    async checkSaveImage(id) {
        const check = await this.prisma.luu_anh.findFirst({ where: { hinh_id: +id } });
        if (check !== null) {
            return `Đã lưu`;
        }
        else {
            return ` Chưa lưu`;
        }
    }
    async getListImageSaved(id) {
        return await this.prisma.hinh_anh.findMany({ where: { nguoi_dung_id: +id } });
    }
    async getListImageCreated(id) {
        return await this.prisma.luu_anh.findMany({ where: { nguoi_dung_id: +id } });
    }
    async deleteImage(id) {
        const existingImage = await this.prisma.hinh_anh.findUnique({
            where: {
                hinh_id: +id
            }
        });
        if (!existingImage) {
            return {
                "statusCode": 404,
                "message": " Id ảnh không tồn tại",
            };
        }
        else {
            await this.prisma.$transaction([
                this.prisma.hinh_anh.delete({
                    where: { hinh_id: +id },
                }),
            ]);
        }
    }
    async updateImage(id, ten_hinh, mo_ta, hinh_id, duong_dan) {
        const date = new Date();
        const checkIdImage = await this.prisma.hinh_anh.findFirst({
            where: {
                hinh_id: +hinh_id
            }
        });
        const checkIdUser = await this.prisma.hinh_anh.findFirst({
            where: {
                nguoi_dung_id: +id
            }
        });
        if (checkIdUser !== null) {
            if (checkIdImage === null) {
                return {
                    "statusCode": 404,
                    "message": " Id ảnh không tồn tại",
                    "dateTime": date
                };
            }
            else {
                await this.prisma.hinh_anh.update({
                    data: {
                        nguoi_dung_id: +id,
                        ten_hinh: ten_hinh,
                        mo_ta: mo_ta,
                        duong_dan: duong_dan
                    }, where: {
                        hinh_id: +hinh_id
                    }
                });
                return {
                    "statusCode": 200,
                    "message": "Update ảnh thành công ",
                    "content": {
                        ten_hinh, duong_dan, mo_ta,
                    },
                    "dateTime": date
                };
            }
        }
        else {
            return {
                "statusCode": 404,
                "message": " Id người dùng không tồn tại",
                "dateTime": date
            };
        }
    }
};
HandleImagesService = __decorate([
    (0, common_1.Injectable)()
], HandleImagesService);
exports.HandleImagesService = HandleImagesService;
//# sourceMappingURL=handle-images.service.js.map