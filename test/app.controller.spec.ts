import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('Teste da controller', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('Pega todas as estatisticas do perfil', async () => {
    const response = await appController.getGithubProfileMetrics({
      name: 'OscarSilvaOfficial',
      repo: 'bla',
    });
    console.log(response);
    expect(response);
  });
});
