export class GitProfileDTO {
  private user: any;

  constructor(data: any) {
    this.user = data;
  }

  getData() {
    return this.user;
  }
}
