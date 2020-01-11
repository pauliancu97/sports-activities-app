$(document).ready(
    function()
    {
        let profileImage = $('#profile-image');
        let profileUserName = $('#profile-user-name');
        let params = new URLSearchParams(window.location.search);
        let srcProfileImage = params.get('img');
        let userName = params.get('username');
        profileUserName.text(userName);
        profileImage.attr('src', srcProfileImage);
        sessionStorage.setItem('otherUser', profileUserName.html());

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