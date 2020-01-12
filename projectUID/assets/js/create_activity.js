$(document).ready(() =>
{
    $('#create_activity').submit((e) =>
    {
        e.preventDefault();
        var name = $("#name").val();
        var description = $("#description").val();
        var location = $("#location").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var forWhom = $("#for_whom").val();
        sessionStorage.setItem("create_activity", "yes");
        sessionStorage.setItem("new_activity_name", name);
        sessionStorage.setItem("new_activity_description", description);
        sessionStorage.setItem("new_activity_location", location);
        sessionStorage.setItem("new_activity_date", date);
        sessionStorage.setItem("new_activity_time", time);
        sessionStorage.setItem("new_activity_for_whom", forWhom);

        var day = date.substring(8);
        var month = date.substring(5, 7);
        var monthName;

        switch(month)
        {
            case "01":
                monthName = "Ian";
                break;
            case "02":
                monthName = "Feb";
                break;
            case "03":
                monthName = "Mar";
                break;
            case "04":
                monthName = "Apr";
                break;
            case "05":
                monthName = "Mai";
                break;
            case "06":
                monthName = "Iun";
                break;
            case "07":
                monthName = "Iul";
                break;
            case "08":
                monthName = "Aug";
                break;
            case "09":
                monthName = "Sep";
                break;
            case "10":
                monthName = "Oct";
                break;
            case "11":
                monthName = "Nov";
                break;
            case "12":
                monthName = "Dec";
                break;
            default:
        }

        var newActivity = {};
        newActivity['activity'] = true;
        newActivity['image'] = "assets/img/cycling_event.jpg";
        newActivity["title"] = name;
        newActivity["description"] = description;
        newActivity["location"] = {};
        newActivity["location"]["name"] = location;
        newActivity["date"] = {};
        newActivity["date"]["hour"] = time;
        newActivity["date"]["day"] = day;
        newActivity["date"]["month"] = monthName;
        newActivity["prerequisetes"] = forWhom;
        newActivity["organiser"] = {};
        newActivity["organiser"]["username"] = DATA.current_user.username;
        newActivity["organiser"]["image"] = DATA.current_user.image;
        newActivity["comments"] = [];
        newActivity["equipment"] = [];
        newActivity["attendees"] = [];

        DATA[name] = newActivity;
        sessionStorage.setItem('data', JSON.stringify(DATA));

        window.location.replace("after log in/afterLogin.html");
    });
});