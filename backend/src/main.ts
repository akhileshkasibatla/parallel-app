import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { existsSync, mkdirSync } from 'fs';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const { UPLOAD_DIR } = process.env;
  const uploadPath = join(__dirname, '..', UPLOAD_DIR);

  if (!existsSync(uploadPath)) {
    mkdirSync(uploadPath, { recursive: true });
    console.log('Created uploads folder at startup');
  }

  app.use(morgan('dev'));
  app.useStaticAssets(uploadPath, { prefix: `/${UPLOAD_DIR}` });
  app.enableCors();

  await app.listen(3000);
}

bootstrap();
