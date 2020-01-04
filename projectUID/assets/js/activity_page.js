const GOING_BUTTON_STATE = {
    GOING: 'Going!',
    CANCEL: 'Cancel'
};

const INTERESTED_BUTTON_STATE ={
    INTERESTED: 'Interested',
    UNINTERESTED: 'Unmark' 
};

let goingState = GOING_BUTTON_STATE.GOING;
let interestedState = INTERESTED_BUTTON_STATE.INTERESTED;

function handleGoingButtonClick(){
    let goingButton = $('#going-btn');
    goingState = goingState == GOING_BUTTON_STATE.GOING ? GOING_BUTTON_STATE.CANCEL : GOING_BUTTON_STATE.GOING;
    goingButton.text(goingState);
}

function handleInterestedButtonClick(){
    let interestedButton = $('#interested-btn');
    interestedState = interestedState == INTERESTED_BUTTON_STATE.INTERESTED ? INTERESTED_BUTTON_STATE.UNINTERESTED : INTERESTED_BUTTON_STATE.INTERESTED;
    interestedButton.text(interestedState);
}

function getCurrentActivityData(){
    let params = new URLSearchParams(window.location.search);
    let activityId = params.get('activity_id');
    if(!sessionStorage.getItem('data')){
        sessionStorage.setItem('data', JSON.stringify(DATA));
        return {data: DATA[activityId], id: activityId};
    } else{
        let data = JSON.parse(sessionStorage.getItem('data'));
        return {'data': data[activityId], id:activityId};
    }
}

function getBasePath(){
    let basePath = window.location.origin + window.location.pathname;
    basePath = basePath.substr(0, basePath.lastIndexOf('/') + 1);
    return basePath;
}

function initProfileSummary(specificAttendeeElement, attendee){
    let profilePicture = specificAttendeeElement.find('#profile-image');
    let profileUsername = specificAttendeeElement.find('#profile-user-name');
    profilePicture.attr('src', attendee.image);
    profileUsername.text(attendee.username);
    let basePath = window.location.origin + window.location.pathname;
    basePath = basePath.substr(0, basePath.lastIndexOf('/') + 1);
    let url = new URL('./profile_details.html', basePath);
    url.searchParams.append('img', attendee.image);
    url.searchParams.append('username', attendee.username);
    profileUsername.attr('href', url.href);
}

function init(){
    let activityInfo = getCurrentActivityData();
    let activityData = activityInfo.data;
    let activityId = activityInfo.id;
    let activityImage = $('#activity-image');
    activityImage.attr('src', activityData.image);
    let activityName = $('#activity-name');
    activityName.text(activityData.title);
    let activityDescription = $('#description'); 
    activityDescription.html(activityData.description);
    let activityLocationName = $('#location-name');
    activityLocationName.text(activityData.location.name); 
    let activityLocationDescription = $('#location-description');
    activityLocationDescription.html(activityData.location.description);
    let activityDateHour = $('#date-hour');
    activityDateHour.text(activityData.date.hour);
    let activityDateMonth = $('#date-month');
    activityDateMonth.text(activityData.date.month);
    let activityDateDay = $('#date-day');
    activityDateDay.text(activityData.date.day);
    let activityPreq = $('#preq');
    activityPreq.text(activityData.prerequisetes);
    let activityAttendeesNum = $('#attendees-num');
    activityAttendeesNum.text(activityData.attendees.length);
    let activityEquipmentNum = $('#equipment-num');
    activityEquipmentNum.text(activityData.equipment.length);
    let basePath = getBasePath();
    let attendeesLink = $('#attendees-link');
    let attendeesURL = new URL('./attendees_page.html', basePath);
    attendeesURL.searchParams.append('activity_id', activityId);
    attendeesLink.attr('href', attendeesURL.href);
    let equipmentLink = $('#equipment-link');
    let equipmentURL = new URL('./equipment_page.html', basePath);
    equipmentURL.searchParams.append('activity_id', activityId);
    equipmentLink.attr('href', equipmentURL.href);
    let commentsURL = new URL('./comments_page.html', basePath);
    commentsURL.searchParams.append('activity_id', activityId);
    let commentLink = $('#comments-link');
    commentLink.attr('href', commentsURL.href);
    let numOfComments = activityData.comments.length + activityData.comments.map(comment => comment.replies.length).reduce((a, b) => a + b);
    let spanNumOfComments = $('#num-comments');
    spanNumOfComments.text(numOfComments);
    initProfileSummary($('#profile-summary-element'), activityData.organiser);
    $('#going-btn').on('click', handleGoingButtonClick);
    $('#interested-btn').on('click', handleInterestedButtonClick);
}

$(document).ready(
    function(){
        init();
    }
);