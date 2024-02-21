const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    username: '',
    repositories: [],

    set_info(github_user){
        this.avatar_url = github_user.avatar_url;
        this.name = github_user.name;
        this.bio = github_user.bio;
        this.username = github_user.login;
    },

    set_repositories(repositories){
        this.repositories = repositories;
    }
}

export { user };