import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { GitProfileDTO } from './dto/gitprofile';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  index(): string {
    return 'Server is on';
  }

  @Get('/user')
  async getGithubProfileMetrics(@Query() params: any): Promise<any> {
    const profile = await this.appService.getGithubProfileMetrics({
      user: params.user,
    });

    if ('message' in profile || params.user === undefined)
      throw new NotFoundException({
        statusCode: 404,
        discription: 'Usuário não existe',
      });

    const userData = new GitProfileDTO(profile).getData;

    return {
      username: params.user,
      metrics: userData,
    };
  }
}
