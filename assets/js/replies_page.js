let currentUser = {};
let comment = {};

function initCommentElement(comment, commentElement){
    let commentProfileImage = commentElement.find('#profile-image');
    commentProfileImage.attr('src', comment.user.image);
    let commentProfileUserName = commentElement.find('#profile-user-name');
    commentProfileUserName.text(comment.user.username);
    let commentContent = commentElement.find('#comment-content');
    commentContent.text(comment.content);
    commentElement.removeAttr('hidden');
}

function getActivityId(){
    let urlSearchParams = new URLSearchParams(window.location.search);
    let activityId = urlSearchParams.get('activity_id');
    return activityId;
}

function getCommentData(){
    let urlSearchParams = new URLSearchParams(window.location.search);
    let activityId = urlSearchParams.get('activity_id');
    let commentId = urlSearchParams.get('comment_id');
    if(!sessionStorage.getItem('data')){

        return DATA[activityId].comments[commentId];
    } else{
        let data = JSON.parse(sessionStorage.getItem('data'));
        return data[activityId].comments[commentId];
    }
}

function getCurrentUser(){
    return DATA.current_user;
}

function renderComments(commentsList){
    let nodeCommentsList = $('#comment-list');
    let genericCommentElement = $('#reply-element');
    nodeCommentsList.empty();
    for(let comment of commentsList){
        let specificCommentElement = genericCommentElement.clone();
        initCommentElement(comment, specificCommentElement);
        nodeCommentsList.append(specificCommentElement);
    }
}

function animateReplyAddition(commentElement){
    commentElement.css('opacity', 0.0);
    commentElement.animate(
        {
            opacity: 1.0
        },
        'fast',
        function(){}
    );
}

function handlePostButton(){
    let replyEditTextArea = $('#comment-edit');
    let replyContent = replyEditTextArea.val();
    replyEditTextArea.val('');
    if(replyContent.length != 0){
        let reply = 
        {
            user:
            {
                username: currentUser.username,
                image: currentUser.image
            },
            content: replyContent
        };
        insertReply(reply);
        let replyElement = $('#reply-element').clone();
        initCommentElement(reply, replyElement);
        let repliesList = $('#comment-list');
        repliesList.append(replyElement);
        animateReplyAddition(replyElement);
    }
}

function insertReply(reply){
    comment.replies.push(reply);
    let activityId = getActivityId();
    let commentId = comment.id;
    let data = JSON.parse(sessionStorage.getItem('data'));
    let originalComment = data[activityId].comments.filter(dataComment => dataComment.id == commentId)[0];
    originalComment.replies.push(reply);
    sessionStorage.setItem('data', JSON.stringify(data));
}

$(document).ready(
    function(){
        comment = getCommentData();
        currentUser = getCurrentUser();
        let commentElement = $('#comment-element');
        initCommentElement(comment, commentElement);
        renderComments(comment.replies);
        $('#post-btn').on('click', handlePostButton);
    }
);