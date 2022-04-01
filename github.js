class Github {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    getUser = async (user) => {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();
        return {
            profile: profileData,
            repos: repoData
        }
    };
}