github = new Github('f5c69d89e64d13d9af50', 'a798069a69e41c8b0ff9283ee8f28f758d817544');
ui = new UI;
const searchUser = document.getElementById('search');
searchUser.addEventListener('keyup', (eventParameter) => {
    const userInput = eventParameter.target.value;
    (userInput !== '')
        ? github.getUser(userInput)
            .then(data => {
                (data.profile.message !== 'Not Found')
                    ? ui.showProfile(data.profile, data.repos)
                    : ui.userNotFound();
            })
        : ui.clearProfile();

});
