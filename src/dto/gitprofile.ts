export class GitProfileDTO {
  private user: any;

  constructor(data: any) {
    this.user = data;
  }

  get getData() {
    return this.user.map((data) => {
      return {
        public: data['public'],
        created_at: data['created_at'],
        type: data['type'],
        actor: {
          login: data['actor']['login'],
          url: data['actor']['url'],
          avatar: data['actor']['avatar_url'],
        },
        repo: {
          name: data['repo']['name'],
          url: data['repo']['url'],
        },
        commits: data['payload']['commits'],
      };
    });
  }
}
