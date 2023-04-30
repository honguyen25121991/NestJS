import { Injectable } from '@nestjs/common';
import { PrismaClient, nguoi_dung } from '@prisma/client'
import { userLogin } from './Dto/user.dto';
@Injectable()
export class UserService {
    prisma = new PrismaClient()

    async getUser(): Promise<nguoi_dung[]> {
        return await this.prisma.nguoi_dung.findMany()
    }
    async createUser(user: {
        email: any, mat_khau: any, ho_ten: any, tuoi: any, anh_dai_dien: any
    }): Promise<any> {
        await this.prisma.nguoi_dung.create({ data: user })
        return `Tạo người dùng thành công`
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
    // async saveAva(nguoi_dung_id: string, imageName: string,) {
    //     let data = await this.prisma.nguoi_dung.findFirst({
    //         where: {
    //             id: Number(
    //                 nguoi_dung_id
    //             )
    //         }
    //     })
    //     data.hinh_dai_dien = imageName
    //     await this.prisma.nguoi_dung.update({
    //         data, where: {
    //             id: Number(
    //                 nguoi_dung_id
    //             )
    //         }
    //     })
    //     // return imageName
    //     return "upload thanh cong";
    // }

}
