import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient, nguoi_dung } from '@prisma/client'
import { userLogin } from './Dto/user.dto';
@Injectable()
export class UserService {
    prisma = new PrismaClient()

    async getUser(): Promise<nguoi_dung[]> {
        return await this.prisma.nguoi_dung.findMany()
    }
    async createUser(user: {
        email: string, mat_khau: string, ho_ten: string, tuoi: number, anh_dai_dien: string
    }): Promise<any> {
        try {
            await this.prisma.nguoi_dung.create({ data: user })
            return `Tạo người dùng thành công`
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }
    async loginUser(
        email: string,
        mat_khau: string
    ): Promise<any> {
        const user: userLogin = await this.prisma.nguoi_dung.findFirst({ where: { email, mat_khau } });
        if (user !== null) {
            return `Login thanh cong`
        } else {
            return `Sai tk hoac mat khau`
        }
    }
    async getInfoUser(id: string): Promise<any> {
        return await this.prisma.nguoi_dung.findFirst({ where: { nguoi_dung_id: +id } })
    }

    async updateInfoUser(data: {
        email: any, mat_khau: any, ho_ten: any, tuoi: any, anh_dai_dien: any
    }, id: string): Promise<any> {
        const check = await this.prisma.nguoi_dung.update({ data, where: { nguoi_dung_id: +id } })
        if (check !== null) {
            return `Update Success`
        } else {
            return `Update Fail`
        }
    }

    // async saveAva(userId: string, imageName: string,) {
    //     let data = await this.prisma.nguoi_dung.findFirst({
    //         where: { id: +userId }
    //     })
    //     data.anh_dai_dien = imageName
    //     await this.prisma.nguoi_dung.update({
    //         data, where: {
    //             id:
    //                 +nguoi_dung_id

    //         }
    //     })
    //     // return imageName
    //     return "upload thanh cong";
    // }

}
