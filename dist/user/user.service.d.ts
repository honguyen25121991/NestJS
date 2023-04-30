import { PrismaClient, nguoi_dung } from '@prisma/client';
export declare class UserService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    getUser(): Promise<nguoi_dung[]>;
    createUser(user: {
        email: any;
        mat_khau: any;
        ho_ten: any;
        tuoi: any;
        anh_dai_dien: any;
    }): Promise<any>;
    loginUser(email: any, mat_khau: any): Promise<any>;
}
