function travelLog(location, time, landmarks, notes){
  this.placeVisited = location;
  this.timeVisited = time;
  this.landmarkVisited = landmarks;
  this.notesVisited = notes;
};





$(document).ready(function(){
  $("#new-location").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("#new-place").val();
    var inputtedTime = $("#new-time").val();
    var inputtedLandmarks = $("#new-landmarks").val();
    var inputtedNotes = $("#new-note").val();

    var newEntry = new travelLog(inputtedLocation, inputtedTime, inputtedLandmarks, inputtedNotes);

    $("#locationDisplay").append("<li><span class='places'>" + newEntry.placeVisited + "</span></li>");

    $(".places").last().click(function() {
        $("#show-location").show();
        $(".display-location").text(newEntry.placeVisited);
        $(".display-time").text(newEntry.timeVisited);
        $(".display-landmarks").text(newEntry.landmarkVisited);
        $(".display-notes").text(newEntry.notesVisited);

    });
    $("input#new-place").val("");
    $("input#new-time").val("");
    $("input#new-landmarks").val("");
    $("input#new-note").val("");

  });


});
