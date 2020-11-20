var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY, h: mm a"));

var hours = today.hours();
var currentHour = parseInt(moment().format("h"));

function timeKeeper(){
    if (hours < currentHour) {
        $(".row").addClass("past");
    }
    if (hours == currentHour) {
        $(".row").addClass("present");
    }
    if (hours>currentHour) {
        $(".row").addClass("future");
    }
    

}

$(".saveBtn").on("click", function(){
    var savedData = $(this).parent().siblings(".form-control").val().trim()
    var dataField = $(this).parent().parent().attr("id")
    console.log (dataField)
    localStorage.setItem(dataField, savedData)
    console.log(localStorage)
});


// define getStorage function w/ object loop to iterate each input response & retrieve from local storage.
function getStorage(){
   var objectKeys= Object.keys(localStorage)
   for (i=0; i< objectKeys.length; i++){
       var currentItem= localStorage.getItem(objectKeys[i])
       console.log(currentItem)
       $("#" + objectKeys[i]).children(".form-control").val(currentItem)
   }

}

getStorage()

// get current time w/ moment and compare w/ timeblock time
// differentiate somehow between am and pm times
// look up documentation to understand how to use moment