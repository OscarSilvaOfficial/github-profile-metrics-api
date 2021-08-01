import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { GitProfileDTO } from './dto/gitprofile';
import { AppService } from './app.service';
import { FAKE_DATA } from './utils/data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  index(): string {
    return 'Server is on';
  }

  @Get('/user')
  async getGithubProfileMetrics(@Query() params: any): Promise<any> {
    if ('test' in params) {
      return JSON.parse(FAKE_DATA);
    }
    if ('user' in params) {
      const profile = await this.appService.getGithubProfileMetrics({
        user: params.user,
      });
      const userData = new GitProfileDTO(profile).getData;
      return userData;
    } else {
      throw new NotFoundException({
        statusCode: 404,
        discription: 'Usuário não existe',
      });
    }
  }
}
