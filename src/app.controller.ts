import { Controller, Get, Param } from '@nestjs/common';
import { IGithubRepository } from './interfaces/app.service.interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getGithubProfileMetrics(@Param() params: IGithubRepository): any {
    const requestParams: IGithubRepository = {
      user: params.user,
    };
    return this.appService.getGithubProfileMetrics(requestParams);
  }
}
