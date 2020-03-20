$(document).ready(function () {
    //global array
    var K = ["nIne", "tEn", "eLeven", "tWelve", "oNe", "tWo", "tHree", "fOur", "fIve"];
    var Area = ["#text9", "#text10", "#text11", "#text12", "#text1", "#text2", "#text3", "#text4", "#text5"];

    //SEtting Time
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

    //setInterval(moment(), 1000),

    //variable to help retrieve time in dom
    var today = new Date();
    var hour = today.getHours();

    for (var i = 0; i < array.length; index++) {

        var data = $(Area[i]).attr("data-time");
        console.log(data);

        if (hour < data) {
            $(Area[i]).addClass("col-md-10 future description")
        }
        if (hour < data) {
            $(Area[i]).addClass("col-md-10 present description")
        }
        if (hour < data) {
            $(Area[i]).addClass("col-md-10 past description")
        }

    }
    //adding n event listener to text content

    $(".saveBtn").on("click", function () {
        //get nearby values using sibling method:
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //saves it in local storage
        localStorage.setItem(time, value);
    })

    //$("#text9").textLocalStorage.getIem("nIne"));

    //for loop will match the arraysabove and link them via key method and then place them back on the screen.
    for (let i = 0; i < K.length; i++) {
        //cool gets all the sets in local storage
        console.log(localStorage.getItem(K[i]));
        //if local storage is null then loop will skip
        if (cool != null) {
            $(Area[i]).text(cool);
        }

    }




    console.log(localStoage.length);

})