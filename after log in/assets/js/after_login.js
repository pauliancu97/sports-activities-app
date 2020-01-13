$(document).ready(()=>{
    var ok = sessionStorage.getItem("create_activity");
    if (ok === "yes")
    {
        var name = sessionStorage.getItem("new_activity_name");
        var description = sessionStorage.getItem("new_activity_description");
        var location = sessionStorage.getItem("new_activity_location");
        var date = sessionStorage.getItem("new_activity_date");
        var time = sessionStorage.getItem("new_activity_time");
        var forWhom = sessionStorage.getItem("new_activity_for_whom");
        console.log(name);
        console.log(description);
        console.log(location);
        console.log(date);
        console.log(time);
        console.log(forWhom);

        var day = date.substring(8);
        var month = date.substring(5, 7);
        var monthName;

        switch(month)
        {
            case "01":
                monthName = "IAN";
                break;
            case "02":
                monthName = "FEB";
                break;
            case "03":
                monthName = "MAR";
                break;
            case "04":
                monthName = "APR";
                break;
            case "05":
                monthName = "MAI";
                break;
            case "06":
                monthName = "IUN";
                break;
            case "07":
                monthName = "IUL";
                break;
            case "08":
                monthName = "AUG";
                break;
            case "09":
                monthName = "SEP";
                break;
            case "10":
                monthName = "OCT";
                break;
            case "11":
                monthName = "NOV";
                break;
            case "12":
                monthName = "DEC";
                break;
            default:
        }

        var figure = $("<figure>", {"class": "snip1527"});
        var divImage = $("<div>", {"class": "image"});
        var image = $("<img>", {src: "assets/img/cycling_event.jpg"});
        var figcaption = $("<figcaption>");
        var divDate = $("<div>", {"class": "date"});
        var spanDay = $("<span>", {"class": "day", html: day});
        var spanMonth = $("<span>", {"class": "month", html: monthName});
        var hName = $("<h3>", {html: name});

        var stringLink = "../acticity_page.html?activity_id=" + name;
        var link = $("<a>", {href: stringLink});

        divDate.append(spanDay, spanMonth);
        figcaption.append(divDate, hName);
        divImage.append(image);
        figure.append(divImage, figcaption, link);

        $("#activity_list").append(figure);
    }
});