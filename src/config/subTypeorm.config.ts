import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { AdminEntity } from 'src/entity/subEntity/admin.subEntity';

export const subTypeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  name: 'test',
  useFactory: (configService: ConfigService) => ({
    type: configService.get<'mysql' | 'mariadb'>('DB_TYPE'),
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('SUB_DB_DATABASE'),
    entities: [AdminEntity],
    logging: configService.get<string>('NODE_ENV') === 'dev' ? true : false,
  }),
};
