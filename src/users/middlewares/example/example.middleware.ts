import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Example Middleware');
    console.log(req.headers.authorization);
    next();
  }
}
