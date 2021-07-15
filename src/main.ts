import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import 'reflect-metadata';
import 'es6-shim';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  )
  app.useStaticAssets(join(__dirname, '../..', 'public'));
  app.setBaseViewsDir(join(__dirname, '../..', 'views'));
  app.setViewEngine('hbs');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();