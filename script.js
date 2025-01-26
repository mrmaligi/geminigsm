document.addEventListener('DOMContentLoaded', function () {
    const homeScreen = document.getElementById('homeScreen');
    const settingsScreen = document.getElementById('settingsScreen');
    const addSiteScreen = document.getElementById('addSiteScreen');

    const settingsButton = document.getElementById('settingsButton');
    const backToHomeButton = document.getElementById('backToHome');
    const backToHomeFromAddSiteButton = document.getElementById('backToHomeFromAddSite');

    settingsButton.addEventListener('click', function() {
        homeScreen.style.display = 'none';
        settingsScreen.style.display = 'block';
        addSiteScreen.style.display = 'none'; // Hide Add Site screen if it was visible
    });

    backToHomeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (page reload)
        settingsScreen.style.display = 'none';
        homeScreen.style.display = 'block';
    });

     backToHomeFromAddSiteButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (page reload)
        addSiteScreen.style.display = 'none';
        homeScreen.style.display = 'block';
    });

    // ---  We'll add more JavaScript code here later for button actions, storage, etc. ---

});
