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
    function()
    {
		load();
        let profileImage = $('#profile-image');
        let profileUserName = $('#profile-user-name');
        let params = new URLSearchParams(window.location.search);
        let srcProfileImage = params.get('img');
        let userName = params.get('username');
        profileUserName.text(userName);
        profileImage.attr('src', srcProfileImage);
        sessionStorage.setItem('otherUser', profileUserName.html());
		$('#friend-request-btn').on('click', handleSendFriendRequestButton);
        var star1 = $("#star1");
        var star2 = $("#star2");
        var star3 = $("#star3");
        var star4 = $("#star4");
        var star5 = $("#star5");

        star1.hover(
            function()
            {
                star1.addClass("checked");
            },
            function()
            {
                star1.removeClass("checked");
            });

        star2.hover(
            function()
            {
                star1.addClass("check");
                star2.addClass("check");
            },
            function()
            {
                star1.removeClass("check");
                star2.removeClass("check");
            });

        star3.hover(
            function()
            {
                star1.addClass("check");
                star2.addClass("check");
                star3.addClass("check");
            },
            function()
            {
                star1.removeClass("check");
                star2.removeClass("check");
                star3.removeClass("check");
            });

        star4.hover(
            function()
            {
                star1.addClass("check");
                star2.addClass("check");
                star3.addClass("check");
                star4.addClass("check");
            },
            function()
            {
                star1.removeClass("check");
                star2.removeClass("check");
                star3.removeClass("check");
                star4.removeClass("check");
            });

        star5.hover(
            function()
            {
                star1.addClass("check");
                star2.addClass("check");
                star3.addClass("check");
                star4.addClass("check");
                star5.addClass("check");
            },
            function()
            {
                star1.removeClass("check");
                star2.removeClass("check");
                star3.removeClass("check");
                star4.removeClass("check");
                star5.removeClass("check");
            });

        star1.click(function()
        {
            star1.addClass("checked");
            star2.removeClass("checked");
            star3.removeClass("checked");
            star4.removeClass("checked");
            star5.removeClass("checked");
        });

        star2.click(function()
        {
            star1.addClass("checked");
            star2.addClass("checked");
            star3.removeClass("checked");
            star4.removeClass("checked");
            star5.removeClass("checked");
        });

        star3.click(function()
        {
            star1.addClass("checked");
            star2.addClass("checked");
            star3.addClass("checked");
            star4.removeClass("checked");
            star5.removeClass("checked");
        });

        star4.click(function()
        {
            star1.addClass("checked");
            star2.addClass("checked");
            star3.addClass("checked");
            star4.addClass("checked");
            star5.removeClass("checked");
        });

        star5.click(function()
        {
            star1.addClass("checked");
            star2.addClass("checked");
            star3.addClass("checked");
            star4.addClass("checked");
            star5.addClass("checked");
        });

    }
);