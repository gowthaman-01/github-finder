class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    showProfile = (profileData, repoData) => {
        Object.keys(profileData).forEach((info) => { if (profileData[info] === null) profileData[info] = 'Not listed' });



        this.profile.innerHTML = `
        <div class="profile" style="padding: 25px;">
            <div class="row">   
                <div class="col-md-3">
                    <img class="img-fluid mb-2" 
                        src='${profileData.avatar_url}' style="border-radius: 5px">
                    <div class="visit-profile-button" style="text-align: center; margin-top: 10px; height: 80px;">
                        <a href='${profileData.html_url}' target="_blank" id="visit-profile-button" class="btn btn-outline-dark" style="text-align: center; height: 40px; padding: 8px; width: 130px;">Visit Profile</a>
                    </div>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos: ${profileData.public_repos}</span>
                    <span class="badge bg-warning">Public Gists: ${profileData.public_gists}</span>
                    <span class="badge bg-success">Followers: ${profileData.followers}</span>
                    <span class="badge bg-info">Following: ${profileData.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item" style="color: #8C92AC;">Company: ${profileData.company}</li>
                        <li class="list-group-item" style="color: #8C92AC;">Blog: ${profileData.blog}</li>
                        <li class="list-group-item" style="color: #8C92AC;">Location: ${profileData.location}</li>
                        <li class="list-group-item" style="color: #8C92AC;">Created: ${profileData.created_at}</li>
                        <li class="list-group-item" style="color: #8C92AC;">Company: ${profileData.company}</li>
                    </ul>
                </div>
            </div>            
        </div>
        `
    }

    clearProfile = () => {
        this.profile.innerHTML = '';
    }

    NotFound = () => {
        this.profile.innerHTML = `
        <div class = "alert-message">
            <div class="alert alert-dismissible alert-danger">
                <div>User not found</div>
            </div>
        </div>
      `
    }
}