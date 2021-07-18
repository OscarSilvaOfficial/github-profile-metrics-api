import { Injectable } from '@nestjs/common';
import { IGithubRepository } from './interfaces/app.service.interfaces';
import fetch from 'node-fetch';

@Injectable()
export class AppService {
  // eslint-disable-next-line prettier/prettier
  async getGithubProfileMetrics({ user }: IGithubRepository): Promise<any> {
    return fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return error.json();
      });
  }
}
