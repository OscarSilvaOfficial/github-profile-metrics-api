import { IGithubRepository } from '../interfaces/app.service.interfaces';

export class GitProfileDTO {
  private name: string;
  private data;

  constructor(data: IGithubRepository) {
    this.name = data['name'];
    this.data = data;
  }

  getData() {
    return {
      name: this.name,
      data: this.data,
    };
  }
}
