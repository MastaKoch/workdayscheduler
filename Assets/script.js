var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY, h: mm a"));

var hours = today.hours();
var currentHour = parseInt(moment().format("H"));

// gets element from HTML page from input sections. For the function it takes the id from each row.
$("input.form-control").each(function() {
    var parent= $(this).parents("div.row");
    var id = parseInt(parent.attr("id"));

     if (id < currentHour) {
                $(this).addClass("past");
            }
            if (id == currentHour) {
                $(this).addClass("present");
            }
            if (id>currentHour) {
                $(this).addClass("future");
   };

// on click function for save button to store data
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

getStorage()});
