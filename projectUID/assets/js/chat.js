$(document).ready(() =>
{
    user = sessionStorage.getItem('otherUser');
    console.log(user);
    $('#username').text(user);
    var msgList = $('#message-list');
    $('#send-button').click(()=>{
        var text =  $('#message-input').val();
        if (text.length > 0)
        {
            $('#message-input').val("");
            var li = $('<li>')
                    .addClass('list-group-item right-message')
                    .appendTo(msgList);
            var span = $('<span>')
                        .text(text)
                        .appendTo(li);
            
            setTimeout(
                function()
                {
                    var li = $('<li>')
                        .addClass('list-group-item left-message')
                        .appendTo(msgList);
                    var span = $('<span>')
                        .text("OK")
                        .appendTo(li);
                }, 2000
            );
        }
    });
});