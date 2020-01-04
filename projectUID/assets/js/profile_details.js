$(document).ready(
    function(){
        let profileImage = $('#profile-image');
        let profileUserName = $('#profile-user-name');
        let params = new URLSearchParams(window.location.search);
        let srcProfileImage = params.get('img');
        let userName = params.get('username');
        profileUserName.text(userName);
        profileImage.attr('src', srcProfileImage);
    }
);