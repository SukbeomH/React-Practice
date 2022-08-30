import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

interface ErrorMsg {
  success: false;
  date: string;
  message: string | undefined;
}

@Catch(HttpException)
export class ServerErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse<Response>();
    const { statusCode, message }: any = exception.getResponse();

    // 에러 statusCode에 따라 메시지를 변경하는 함수
    const customMessage: any = (statusCode: any, message: any) => {
      switch (statusCode) {
        case 400:
          return '요청 입력 값이 잘못되었습니다.';
        case 401:
          return '중복 로그인 발생으로 인해 접속이 종료됩니다.';
        case 403:
          return '접근 권한이 없습니다.';
        case 500:
          return message;
      }
    };

    const errorMsg: ErrorMsg = {
      success: false,
      date: new Date().toLocaleString(),
      message: customMessage(statusCode, message),
    };

    return response.status(HttpStatus.OK).json(errorMsg);
  }
}
