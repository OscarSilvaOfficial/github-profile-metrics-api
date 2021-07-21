import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless from 'serverless-http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'GET' && event.path === '/') {
    callback(null, {
      statusCode: 200,
      body: 'Rwarw',
    });
  }
};
