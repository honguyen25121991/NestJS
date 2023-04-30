import { Body, Controller, Get, Headers, HttpCode, Param, Query, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
interface person {
  id: number;
  hoTen: string;
  email: string
}
@ApiTags("App")
@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get("/get-title/:idParam")
  @HttpCode(200)
  getTitle(
    @Req() request: Request, @Query('idQuery') idQuery: string,
    @Param("idParam") idParam: string,
    @Body() body: person
  ): string {
    let { id, hoTen, email } = body
    return idQuery
  }
  @Get("/aaa")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/demo")
  getDemo(): string {
    return "demo11111"
  }
}
