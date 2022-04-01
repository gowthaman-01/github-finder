github = new Github('bff7908dbd01251afab2', '35b20fe1d121e2f8b6999a19426be98560c8f0d7');
ui = new UI;
const searchUser = document.getElementById('search');
searchUser.addEventListener('keyup', (eventParameter) => {
    const userInput = eventParameter.target.value;
    (userInput !== '')
        ? github.getUser(userInput)
            .then(data => {
                (data !== 'Not Found')
                    ? ui.showProfile(data.profile, data.repos)
                    : ui.userNotFound();
            })
        : ui.clearProfile();

});
