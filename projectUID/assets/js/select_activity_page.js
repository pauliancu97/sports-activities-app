function getActivities(){
    let data = [];
    if(!sessionStorage.getItem('data')){
        data = DATA;
        sessionStorage.setItem('data', JSON.stringify(data));
    } else{
        data = JSON.parse(sessionStorage.getItem('data'));
    }
    let activities = [];
    for(let key in data){
        if(data[key].activity){
            activities.push(data[key]);
        }
    }
    return activities;
}

function initActivityElement(activity, activityElement){
    let activityImage = activityElement.find('#activity-image');
    let activityName = activityElement.find('#activity-name');
    let activityLocation = activityElement.find('#activity-location');
    let activityHour = activityElement.find('#activity-hour');
    let activityDay = activityElement.find('#activity-day');
    let activityMonth = activityElement.find('#activity-month');
    activityImage.attr('src', activity.image);
    activityName.text(activity.title);
    activityLocation.text(activity.location.name);
    activityHour.text(activity.date.hour);
    activityDay.text(activity.date.day);
    activityMonth.text(activity.date.month);
    activityElement.removeAttr('hidden');
    activityElement.on('click', handleActivityClick);
}

function renderActivities(activities){
    let genericActivityElement = $('#activity-item');
    let nodeActivityList = $('#activity-list');
    for(let activity of activities){
        let activityElement = genericActivityElement.clone();
        initActivityElement(activity, activityElement);
        nodeActivityList.append(activityElement);
    }
}

function getBasePath(){
    let basePath = window.location.origin + window.location.pathname;
    basePath = basePath.substr(0, basePath.lastIndexOf('/') + 1);
    return basePath;
}

function handleActivityClick(){
    swal(
        {
            title:'Success',
            text:'The report was successfully sent!',
            icon: 'success'
        }
    ).then(() => {window.history.go(-2);});
}

function init(){
    let activities = getActivities();
    renderActivities(activities);
}

$(document).ready(
    function(){
        init();
    }
);