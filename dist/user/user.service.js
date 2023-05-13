"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(jwtService, config) {
        this.jwtService = jwtService;
        this.config = config;
        this.prisma = new client_1.PrismaClient();
    }
    async getUser() {
        return await this.prisma.nguoi_dung.findMany();
    }
    async createUser(user) {
        const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = user;
        const checkEmail = await this.prisma.nguoi_dung.findFirst({ where: { email } });
        const date = new Date();
        if (checkEmail === null) {
            await this.prisma.nguoi_dung.create({ data: user });
            return {
                "statusCode": 200,
                "message": "Tạo người dùng thành công",
                "content": {
                    email, mat_khau, ho_ten, tuoi, anh_dai_dien
                },
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 400,
                "message": "Yêu cầu không hợp lệ!",
                "content": "Email đã tồn tại !",
                "dateTime": date
            };
        }
    }
    async loginUser(email, mat_khau) {
        const user = await this.prisma.nguoi_dung.findFirst({ where: { email, mat_khau } });
        const date = new Date();
        if (user !== null) {
            let token = this.jwtService.sign({ data: 'nodejs 29' }, { secret: this.config.get("SECRET_KEY"), expiresIn: "60m" });
            return {
                "statusCode": 200,
                "content:": user,
                "token": token,
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 400,
                "message": "Yêu cầu không hợp lệ!",
                "content": "Email hoặc mật khẩu không đúng !",
                "dateTime": date
            };
        }
    }
    async getInfoUser(id) {
        return await this.prisma.nguoi_dung.findFirst({ where: { nguoi_dung_id: +id } });
    }
    async updateInfoUser(data, id) {
        const check = await this.prisma.nguoi_dung.update({
            data, where: {
                nguoi_dung_id: +id
            }
        });
        if (check !== null) {
            return {
                check, "Message": 'Update success'
            };
        }
        else {
            return `Update Fail`;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map