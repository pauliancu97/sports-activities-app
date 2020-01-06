Notify = function(text, callback, close_callback, style) {

	var time = '10000';
	var $container = $('#notifications');
	var icon = '<i class="fa fa-info-circle "></i>';
 
	if (typeof style == 'undefined' ) style = 'warning'
  
	var html = $('<div class="alert alert-' + style + '  hide">' + icon +  " " + text + '</div>');
  
	$('<a>',{
		text: '×',
		class: 'button close',
		style: 'padding-left: 10px;',
		href: '#',
		click: function(e){
			e.preventDefault()
			close_callback && close_callback()
			remove_notice()
		}
	}).prependTo(html)

	$container.prepend(html)
	html.removeClass('hide').hide().fadeIn('slow')

	function remove_notice() {
		html.stop().fadeOut('slow').remove()
	}
	
	var timer =  setInterval(remove_notice, time);

	$(html).hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(remove_notice, time);
	});
	
	html.on('click', function () {
		clearInterval(timer)
		callback && callback()
		remove_notice()
	});
  
}

function getProfileData(){
    let params = new URLSearchParams(window.location.search);
    let srcProfileImage = params.get('img');
    let userName = params.get('username');
    return {username: userName, image: srcProfileImage};
}

function load(){
    let data = JSON.parse(sessionStorage.getItem('data'));
    let profileData = getProfileData();
    let username = profileData.username;
    if(data.pending_friend_requests.indexOf(username) != -1){
        $('#friend-request-btn').text('Pending friend request');
    }
}

function handleSendFriendRequestButton(){
    if($('#friend-request-btn').text() != 'Pending friend request'){
        Notify('Friend request sent!', null, null, 'success');
        $('#friend-request-btn').text('Pending friend request');
        let profileData = getProfileData();
        let username = profileData.username;
        let data = JSON.parse(sessionStorage.getItem('data'));
        data.pending_friend_requests.push(username);
        sessionStorage.setItem('data', JSON.stringify(data));
    }
}

$(document).ready(
    function(){
        load();
        let profileImage = $('#profile-image');
        let profileUserName = $('#profile-user-name');
        let params = new URLSearchParams(window.location.search);
        let srcProfileImage = params.get('img');
        let userName = params.get('username');
        profileUserName.text(userName);
        profileImage.attr('src', srcProfileImage);
        $('#friend-request-btn').on('click', handleSendFriendRequestButton);
    }
);