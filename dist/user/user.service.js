"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let UserService = class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getUser() {
        return await this.prisma.nguoi_dung.findMany();
    }
    async createUser(user) {
        try {
            await this.prisma.nguoi_dung.create({ data: user });
            return `Tạo người dùng thành công`;
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async loginUser(email, mat_khau) {
        const user = await this.prisma.nguoi_dung.findFirst({ where: { email, mat_khau } });
        if (user !== null) {
            return `Login thanh cong`;
        }
        else {
            return `Sai tk hoac mat khau`;
        }
    }
    async getInfoUser(id) {
        return await this.prisma.nguoi_dung.findFirst({ where: { nguoi_dung_id: +id } });
    }
    async updateInfoUser(data, id) {
        const check = await this.prisma.nguoi_dung.update({ data, where: { nguoi_dung_id: +id } });
        if (check !== null) {
            return `Update Success`;
        }
        else {
            return `Update Fail`;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map