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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService, config) {
        this.userService = userService;
        this.config = config;
        this.prisma = new client_1.PrismaClient();
    }
    getUser(req) {
        try {
            let tokenDecode = req.user;
            return this.userService.getUser();
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getUserbyId() {
        return "ssss";
    }
    async createUser(body) {
        try {
            const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = body;
            await this.userService.createUser({ email, mat_khau, ho_ten, tuoi, anh_dai_dien });
            return `Tạo người dùng thành công`;
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async loginUser(body) {
        try {
            const { email, mat_khau } = body;
            return await this.userService.loginUser(email, mat_khau);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    putUser() {
        return "put User";
    }
    removeUser() {
        return "remove User";
    }
};
__decorate([
    (0, swagger_1.ApiConsumes)('mutilpart/from-data'),
    (0, swagger_1.ApiBody)({
        description: 'fileload',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('fileUpload', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + "/public/img",
            filename: (req, file, callback) => callback(null, Date.now() + "_" + file.originalname)
        })
    })),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserbyId", null);
__decorate([
    (0, common_1.Post)("/create-user/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)("/login-user/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "putUser", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map