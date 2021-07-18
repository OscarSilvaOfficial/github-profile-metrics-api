import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../src/app.service';

describe('Teste do service', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();
    appService = module.get<AppService>(AppService);
  });

  it('Pega metricas do Github profile', async () => {
    let profile = await appService.getGithubProfileMetrics({
      user: 'OscarSilvaOfficial',
    });
    expect(typeof profile).toBe('object');
    profile = await appService.getGithubProfileMetrics({
      user: 'TesteDaSilva145615',
    });
    expect('message' in profile).toBe(true);
  });
});
