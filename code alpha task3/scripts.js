
function loginWithFacebook() {
    alert('Logging in with Facebook...');
    fetchFacebookFeed();
}

function loginWithTwitter() {
    alert('Logging in with Twitter...');
    fetchTwitterFeed();
}

function loginWithInstagram() {
    alert('Logging in with Instagram...');
    fetchInstagramFeed();
}

function fetchFacebookFeed() {
    document.getElementById('facebook-feed').innerHTML = '<p>Facebook feed content here...</p>';
}

function fetchTwitterFeed() {
    document.getElementById('twitter-feed').innerHTML = '<p>Twitter feed content here...</p>';
}

function fetchInstagramFeed() {
    document.getElementById('instagram-feed').innerHTML = '<p>Instagram feed content here...</p>';
}