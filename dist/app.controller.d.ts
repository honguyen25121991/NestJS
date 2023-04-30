import { AppService } from './app.service';
interface person {
    id: number;
    hoTen: string;
    email: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getTitle(request: Request, idQuery: string, idParam: string, body: person): string;
    getHello(): string;
    getDemo(): string;
}
export {};
