import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { HandleImagesService } from './handle-images.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from '@nestjs/passport';

@Controller('handle-images')
export class HandleImagesController {

    prisma = new PrismaClient()
    constructor(
        private handleImages: HandleImagesService,
    ) { }
    @ApiConsumes('mutilpart/from-data')
    @ApiBody({
        description: 'fileload',
        // type: any
    })
    @UseInterceptors(FileInterceptor('fileUpload', {
        storage: diskStorage({
            destination: process.cwd() + "/public/img",
            filename: (req, file, callback) => callback(null, Date.now() + "_" + file.originalname)
        })

    }))

    @UseGuards(AuthGuard('jwt'))
    @Post('/post-image/:id') postImage(
        @Param("id") id: string,
        @UploadedFile() _file: Express.Multer.File,
        @Body() body: {
            ten_hinh: string, mo_ta: string
        },
    ) {
        const { ten_hinh, mo_ta } = body
        const duong_dan = `localhost:3000/public/img/${_file.filename}`
        try {
            return this.handleImages.postImage(id, ten_hinh, duong_dan, mo_ta)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @ApiConsumes('mutilpart/from-data')
    @ApiBody({
        description: 'fileload',
        // type: any
    })
    @UseInterceptors(FileInterceptor('fileUpload', {
        storage: diskStorage({
            destination: process.cwd() + "/public/img",
            filename: (req, file, callback) => callback(null, Date.now() + "_" + file.originalname)
        })

    }))
    @UseGuards(AuthGuard('jwt'))
    @Patch('/update-image/:id') updateImage(
        @Param("id") id: string,
        @UploadedFile() _file: Express.Multer.File,
        @Body() body: {
            ten_hinh: string, mo_ta: string, hinh_id: string
        },
    ) {
        const { ten_hinh, mo_ta, hinh_id } = body
        const duong_dan = `localhost:3000/public/img/${_file.filename}`

        try {
            return this.handleImages.updateImage(id, ten_hinh, mo_ta, hinh_id, duong_dan)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('all')
    getAll() {
        return this.handleImages.getImages()
    }

    @Get('name') getDetailImage(
        @Body() body: { name: string },
    ) {
        const { name } = body
        try {
            return this.handleImages.getNameImage(name)

        } catch (error) {
            throw new HttpException("Lỗi BE", 500)

        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    getDetail(
        @Param("id") id: string,
    ) {
        try {
            return this.handleImages.getDetaiImage(id)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('/check/:id')
    checkSaveImage(
        @Param("id") id: number,
    ) {
        try {
            return this.handleImages.checkSaveImage(id)

        } catch (error) {
            throw new HttpException("Lỗi BE", 500)

        }
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('/save-list/:id')
    getListImageSaved(
        @Param("id") id: number,
    ) {
        try {
            return this.handleImages.getListImageSaved(id)

        } catch (error) {
            throw new HttpException("Lỗi BE", 500)

        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/create-list/:id')
    getListImageCreated(
        @Param("id") id: number,
    ) {
        try {
            return this.handleImages.getListImageCreated(id)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/delete/:id')
    deleteImage(
        @Param("id") id: string,
    ) {
        // try {
        return this.handleImages.deleteImage(id)
        // } catch (error) {
        //     throw new HttpException("Lỗi BE", 500)
        // }
    }
}
