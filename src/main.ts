import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ServerErrorFilter } from './common/filter/error.filter';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { setupSwagger } from './config/swagger.config';
import { AppModule } from './module/app.module';
import { validationOptions } from './config/validation.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const SERVER_PORT = configService.get<number>('SERVER_PORT');

  /* Swagger Options Setting */
  setupSwagger(app);

  /* Validation Pipe Setting */
  app.useGlobalPipes(new ValidationPipe(validationOptions));

  /* ResponseInterceptor Setting, 응답 통합 처리 */
  app.useGlobalInterceptors(new ResponseInterceptor());

  /* ExceptionFilter Setting, 예외 통합 처리 */
  app.useGlobalFilters(new ServerErrorFilter());

  await app.listen(SERVER_PORT);
}
bootstrap();
