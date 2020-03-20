$(document).ready(function () {
    //global array
    var K = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"];
    var Area = ["#text9", "#text10", "#text11", "#text12", "#text1", "#text2", "#text3", "#text4", "#text5"];
    console.log(hour);
    
    //SEtting Time
    setInterval(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }, 1000)
    
    

    //variable to help retrieve time in dom
        var today = new Date();
        var hour = today.getHours();
    //use yhr loop to go over all the text areas on tht html
    for (var i = 0; i < Area.length; i++) {
        //set a data time into  avarabe
        var data = $(Area[i]).attr("data-time");
      //change the string to a number to use in in an if statement  
        data = parseInt(data);
        //future if
        if (hour < data) {
            $(Area[i]).addClass("col-md-10 future description")
        }
        //present if 
        if (hour === data) {
            $(Area[i]).addClass("col-md-10 present description")
        }
        // past if
        if (hour > data) {
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
        var cool = localStorage.getItem(K[i]);
        if (cool != null) {
            $(Area[i]).text(cool);
        }

    }
    

})