const CHECK_BOX_CLASSES = 
{
    UNSELECTED: 'far fa-square',
    SELECTED: 'far fa-check-square'
};

const BUTTON_STATE = 
{
    SELECT_ALL: 'Select all!',
    DESELECT_ALL: 'Deselect all!'
};

let friendsList = 
[
    {
        username: 'Ion Verdes',
        image : 'assets/img/runner.png',
        selected: false
    },
    {
        username: 'Rares Drimbarean',
        image : 'assets/img/runner_second.jpg',
        selected: true
    }
];

let actionButtonState = BUTTON_STATE.SELECT_ALL;
let currentSearchString = '';

function handleActionButton(){
    friendsList.forEach(friend => {friend.selected = (actionButtonState == BUTTON_STATE.SELECT_ALL);});
    renderFriendsList(friendsList);
    updateNumOfFriendsSelected();
    actionButtonState = actionButtonState == BUTTON_STATE.SELECT_ALL ? BUTTON_STATE.DESELECT_ALL : BUTTON_STATE.SELECT_ALL;
    $('#action-btn').text(actionButtonState);
}

function handleCheckboxClick(){
    let friendIndex = Number($(this).parent().attr('list'));
    friendsList[friendIndex].selected = !friendsList[friendIndex].selected;
    renderFriendsList(friendsList);
    updateNumOfFriendsSelected();
}

function handleSearchBox(){
    currentSearchString = $('#search').val().toLowerCase();
    renderFriendsList(friendsList);
}

function initFriendsList(){
    friendsList = friendsList.map(
        (friend, index) => {
            let clone = Object.assign({id: index}, friend);
            return clone;
        }
    );
    updateNumOfFriendsSelected();
}

function updateNumOfFriendsSelected(){
    let numOfFriendsSelected = friendsList.filter(friend => friend.selected).length;
    let paraNumOfFriendsSelected = $('#num-friends');
    paraNumOfFriendsSelected.text(numOfFriendsSelected);
}

function initFriendElement(friendElement, friend){
    let profileImage = friendElement.find("#profile-image");
    profileImage.attr('src', friend.image);
    let profileUserName = friendElement.find('#profile-user-name');
    profileUserName.text(friend.username);
    let profileSelected = friendElement.find('#profile-selected');
    profileSelected.attr('class', friend.selected ? CHECK_BOX_CLASSES.SELECTED : CHECK_BOX_CLASSES.UNSELECTED);
    profileSelected.on('click', handleCheckboxClick);
    friendElement.removeAttr('hidden');
    friendElement.attr('list', friend.id);
}

function renderFriendsList(friendsList){
    let nodeFriendsList = $('#friends-list');
    let genericFriendsElement = nodeFriendsList.find("#profile-select-element");
    nodeFriendsList.empty();
    if(currentSearchString.length != 0){
        friendsList = friendsList.filter(friend => friend.username.toLowerCase().startsWith(currentSearchString));
    }
    for(let friend of friendsList){
        let specificFriendElement = genericFriendsElement.clone();
        initFriendElement(specificFriendElement, friend);
        nodeFriendsList.append(specificFriendElement);
    }
}

function handleNextButton(e){
    let numOfFriendsSelected = friendsList.filter(friend => friend.selected).length;
    if(numOfFriendsSelected == 0){
        let modal = $('#no-friends-modal');
        modal.modal();
        e.preventDefault();
    }
}

$(document).ready(
    function(){
        $('#action-btn').on('click', handleActionButton);
        $('#search').on('input', handleSearchBox);
        $('#next-step-btn').on('click', handleNextButton);
        initFriendsList();
        renderFriendsList(friendsList);
    }
);