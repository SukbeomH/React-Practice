import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';

interface ResponseData {
  success: boolean;
  date: string;
  message: string;
  data: any | undefined;
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map(({ message, data }) => {
        const response: ResponseData = {
          success: true,
          date: new Date().toLocaleString(),
          message,
          data,
        };
        return response;
      }),
    );
  }
}
