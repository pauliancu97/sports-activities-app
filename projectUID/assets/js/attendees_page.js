let attendeesList = [
    {
        username: 'Alex Todea',
        image: 'assets/img/runner.png',
        isFriend: true
    },
    {
        username: 'Bogdan Benea',
        image: 'assets/img/runner_second.jpg',
        isFriend: false
    },
    {
        username: 'Raluca Zbucea',
        image: 'assets/img/runner_third.jpg',
        isFriend: true
    },
    {
        username: 'Maria Dragomir',
        image: 'assets/img/runner_fourth.jpg',
        isFriend: false
    },
    {
        username: 'Jamal Knuth',
        image: 'assets/img/runner_fifth.jpg',
        isFriend: true
    },
    {
        username: 'Paul Morar',
        image: 'assets/img/runner.png',
        isFriend: false
    },
    {
        username: 'Andrei Oancea',
        image: 'assets/img/runner_second.jpg',
        isFriend: false
    },
    {
        username: 'Emilia Tudor',
        image: 'assets/img/runner_third.jpg',
        isFriend: true
    },
    {
        username: 'Denisa Macovei',
        image: 'assets/img/runner_fourth.jpg',
        isFriend: true
    },
    {
        username: 'Shaq Morris',
        image: 'assets/img/runner_fifth.jpg',
        isFriend: true
    },
    {
        username: 'Andrea Rad',
        image: 'assets/img/runner_third.jpg',
        isFriend: true
    },
    {
        username: 'Cristina Mures',
        image: 'assets/img/runner_fourth.jpg',
        isFriend: false
    },
    {
        username: 'Neil Tyson',
        image: 'assets/img/runner_fifth.jpg',
        isFriend: true
    },
    {
        username: 'Vasile Ungur',
        image: 'assets/img/runner.png',
        isFriend: false
    },
    {
        username: 'Dragos Chirian',
        image: 'assets/img/runner_second.jpg',
        isFriend: false
    }
];

const TAB_STATE = {
    ALL_TAB: 'ALL_TAB',
    FRIENDS_TAB: 'FRIENDS_TAB'
};

let tabState = TAB_STATE.ALL_TAB;

function renderAttendees(){
    let numOfAllAttendees = attendeesList.length;
    let numOfFriendsAttendees = attendeesList.filter(attendee => attendee.isFriend).length;
    let allAttendeesNumParagraph = $('#num-all-attendees');
    let friendsAttendeesNumParagraph = $('#num-friends-attendees');
    allAttendeesNumParagraph.text(new String(numOfAllAttendees));
    friendsAttendeesNumParagraph.text(new String(numOfFriendsAttendees));
    let allTab = $('#all-tab-content');
    let friendsTab = $('#friends-tab-content');
    let genericAttendeeElement = $('#profile-summary-element');
    for(let attendee of attendeesList){
        let specificAttendeeElement = genericAttendeeElement.clone();
        specificAttendeeElement.removeAttr('hidden');
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
        allTab.append(specificAttendeeElement.clone());
        if(attendee.isFriend){
            friendsTab.append(specificAttendeeElement.clone());
        }
    }
}

function renderAttendeesList(attendeesList, tabContent){
    tabContent.empty();
    let genericAttendeeElement = $('#profile-summary-element');
    for(let attendee of attendeesList){
        let specificAttendeeElement = genericAttendeeElement.clone();
        specificAttendeeElement.removeAttr('hidden');
        let profilePicture = specificAttendeeElement.find('#profile-image');
        let profileUsername = specificAttendeeElement.find('#profile-user-name');
        profilePicture.attr('src', attendee.image);
        profileUsername.text(attendee.username);
        tabContent.append(specificAttendeeElement.clone());
    }
}

function handleSearchBoxChange(){
    let currentSearchString = $('#search').val().toLowerCase();
    console.log(currentSearchString);
    if(currentSearchString.length != 0){
        let allTabContent = $('#all-tab-content');
        let friendsTabContent = $('#friends-tab-content');
        let friendsList = attendeesList.filter(attendee => attendee.isFriend && attendee.username.toLowerCase().startsWith(currentSearchString));
        let allList = attendeesList.filter(attendee => attendee.username.toLowerCase().startsWith(currentSearchString));
        renderAttendeesList(allList, allTabContent);
        renderAttendeesList(friendsList, friendsTabContent);
    } else{
        let allTabContent = $('#all-tab-content');
        let friendsTabContent = $('#friends-tab-content');
        let friendsList = attendeesList.filter(attendee => attendee.isFriend);
        renderAttendeesList(attendeesList, allTabContent);
        renderAttendeesList(friendsList, friendsTabContent);
    }
}

function registerSearchBoxChange(){
    $('#search').on('input', function(){
        handleSearchBoxChange();
    });
}

function initAttendeesList(){
    let params = new URLSearchParams(window.location.search);
    let activityId = params.get('activity_id');
    attendeesList = DATA[activityId].attendees;
}

$(document).ready(
    function(){
        initAttendeesList();
        renderAttendees();
        $('.nav-tabs').tab();
        $('.nav-tabs a').on('click', function (e) {
            $(this).tab('show');
            e.preventDefault();
        });
        registerSearchBoxChange();
    }
);