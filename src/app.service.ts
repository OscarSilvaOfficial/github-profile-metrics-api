import { Injectable } from '@nestjs/common';
import { IGithubRepository } from './interfaces/app.service.interfaces';
import fetch from 'node-fetch';

@Injectable()
export class AppService {
  async getGithubProfileStatistics({
    user,
  }: IGithubRepository): Promise<IGithubRepository> {
    return fetch(`https://api.github.com/users/${user}/events`)
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return error;
      });
  }
}
