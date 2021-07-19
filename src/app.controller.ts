import { Controller, Get, Param } from '@nestjs/common';
import { IGithubRepository } from './interfaces/app.service.interfaces';
import { GitProfileDTO } from './dto/gitprofile';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getGithubProfileMetrics(@Param() params): Promise<any> {
    const requestParams: IGithubRepository = {
      user: params.user,
    };
    const profile = await this.appService.getGithubProfileMetrics(
      requestParams,
    );
    return new GitProfileDTO(profile).getData();
  }
}
