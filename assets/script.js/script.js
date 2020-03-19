$(document).ready(function () {


//SEtting Time
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

//setInterval(moment(), 1000),

//Adding text to local Storage
//localStorage.setItem()

//var hour = today.get(Hours)))
//if html < ()
//addClass ("blue")





//adding n event listener to text content

    $(".saveBtn").on("click", function () {
        //get nearby values using sibling method:
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //saves it in local storage
        localStorage.setItem(time, value);
    })

var K = ["nIne", "tEn" , "eLeven", "tWelve", "oNe", "tWo", "tHree", "fOur", "fIve"];
var Area = ["#text9", "#text10", "#text11", "#text12", "#text1", "#text2", "#text3", "#text4", "#text5"];
//$("#text9").textLocalStorage.getIem("nIne"));












})