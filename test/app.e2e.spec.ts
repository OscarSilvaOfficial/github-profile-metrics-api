import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/user (GET)', () => {
    it('Acessa endpoint sem mandar usuário', () => {
      return request(app.getHttpServer()).get('/user').expect(404);
    });
    it('Acessa endpoint mandando usuário que não existe', () => {
      return request(app.getHttpServer())
        .get('/user?user=5454d4qawerfq34')
        .expect(404);
    });
    it('Acessa endpoint mandando o meu usuário', () => {
      return request(app.getHttpServer())
        .get('/user?user=OscarSilvaOfficial')
        .expect(200);
    });
  });
});
