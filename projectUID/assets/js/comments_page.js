let currentUser = {};
let commentsList = [];

function getCurrentUser(){
    return DATA.current_user;
}

function animateCommentAddition(commentElement){
    commentElement.css('opacity', 0.0);
    commentElement.animate(
        {
            opacity: 1.0
        },
        'fast',
        function(){}
    );
}

function getActivityId(){
    let urlSearchParams = new URLSearchParams(window.location.search);
    let activityId = urlSearchParams.get('activity_id');
    return activityId;
}

function getCommentsData(){
    let urlSearchParams = new URLSearchParams(window.location.search);
    let activityId = urlSearchParams.get('activity_id');
    if(!sessionStorage.getItem('data')){
        let rawComments = DATA[activityId].comments;
        sessionStorage.setItem('data', JSON.stringify(DATA));
        return rawComments;
    } else{
        let data = JSON.parse(sessionStorage.getItem('data'));
        return data[activityId].comments;
    }
}

function initCommentElement(comment, commentElement){
    let commentProfileImage = commentElement.find('#profile-image');
    commentProfileImage.attr('src', comment.user.image);
    let commentProfileUserName = commentElement.find('#profile-user-name');
    commentProfileUserName.text(comment.user.username);
    let commentContent = commentElement.find('#comment-content');
    commentContent.text(comment.content);
    let basePath = window.location.origin + window.location.pathname;
    basePath = basePath.substr(0, basePath.lastIndexOf('/') + 1);
    let url = new URL('./replies_page.html', basePath);
    url.searchParams.append('activity_id', getActivityId());
    url.searchParams.append('comment_id', comment.id);
    if(comment.replies.length != 0){
        let commentRepliesLink = commentElement.find('#comment-replies-link');
        commentRepliesLink.attr('href', url.href);
        let commentNumRepliesElement = commentRepliesLink.find('#num-replies');
        commentNumRepliesElement.text(comment.replies.length);
        let commentRepliesText = commentRepliesLink.find('#replies-text');
        commentRepliesText.text(comment.replies.length != 1 ? 'replies' : 'reply');
        commentRepliesLink.removeAttr('hidden');
    } else{
        let commentRepliesLink = commentElement.find('#reply-btn');
        commentRepliesLink.attr('href', url.href);
        commentRepliesLink.removeAttr('hidden');
    }
    commentElement.removeAttr('hidden');
}

function renderComments(commentsList){
    let nodeCommentsList = $('#comment-list');
    let genericCommentElement = $('#comment-element');
    nodeCommentsList.empty();
    for(let comment of commentsList){
        let specificCommentElement = genericCommentElement.clone();
        initCommentElement(comment, specificCommentElement);
        nodeCommentsList.append(specificCommentElement);
    }
}

function handlePostClick(){
    let commentEditTextArea = $('#comment-edit');
    let commentContent = commentEditTextArea.val();
    commentEditTextArea.val('');
    if(commentContent.length != 0){
        let comment = 
        {
            id: commentsList.length,
            user:
            {
                username: currentUser.username,
                image: currentUser.image
            },
            content: commentContent,
            replies:[]
        };
        insertComment(comment);
        let commentElement = $('#comment-element').clone();
        initCommentElement(comment, commentElement);
        let nodeCommentsList = $('#comment-list');
        nodeCommentsList.append(commentElement);
        animateCommentAddition(commentElement);
    }
}

function insertComment(comment){
    commentsList.push(comment);
    let data = JSON.parse(sessionStorage.getItem('data'));
    let activityId = getActivityId();
    data[activityId].comments.push(comment);
    sessionStorage.setItem('data', JSON.stringify(data));
}

function init(){
    currentUser = getCurrentUser();
    commentsList = getCommentsData();
    renderComments(commentsList);
    $('#post-btn').on('click', handlePostClick);
}

$(document).ready(
    function(){
        init();   
    }
);