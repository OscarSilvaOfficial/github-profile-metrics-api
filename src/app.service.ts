import { Injectable } from '@nestjs/common';
import { IGithubRepository } from './interfaces/app.service.interfaces';
import fetch from 'node-fetch';

@Injectable()
export class AppService {
  // eslint-disable-next-line prettier/prettier
  async getGithubProfileMetrics({ user }: IGithubRepository): Promise<IGithubRepository> {
    return fetch(`https://api.github.com/users/${user}/starred`).then((res) => {
      return res.json();
    });
  }
}
