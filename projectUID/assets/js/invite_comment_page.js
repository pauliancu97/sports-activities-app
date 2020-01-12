const CHAR_LIMIT = 150;

function handleCommentChange(){
    let commentTextArea = $('#comment');
    let commentContent = commentTextArea.val();
    commentContent = commentContent.substr(0, CHAR_LIMIT);
    commentTextArea.val(commentContent);
    let spanNumCharsLeft = $('#chars-left');
    spanNumCharsLeft.text(CHAR_LIMIT - commentContent.length);
}

function handleSendButtonClick(e){
    swal(
        {
            title:'Success',
            text:'The invitation was successfully sent!',
            icon: "success"
        }
    ).then(() => {window.history.go(-2);});
    e.preventDefault();
}

$(document).ready(
    function(){
        $('#comment').on('input', handleCommentChange);
        $('#send-btn').on('click', handleSendButtonClick);
    }
);