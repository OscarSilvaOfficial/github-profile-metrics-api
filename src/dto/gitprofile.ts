export class GitProfileDTO {
  private user: any;

  constructor(data: any) {
    this.user = data;
  }

  get getData() {
    return this.user;
  }
}
