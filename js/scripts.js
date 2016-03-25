$(document).ready(function(){

$("form#about-you").submit(function(event){
    var destination = $("input:radio[name=vacation]:checked").val();

    if (destination === "vacation1") {
      $("#destination-result").empty().append("You should travel to: Wailea, Maui");

    } else if (destination === "vacation2") {
      $("#destination-result").empty().append("You should travel to Cooper Island Beach Club"); 

    } else if (destination === "vacation3") {
      $("#destination-result").empty().append("You should travel to New York City:");

    } else if (destination === "vacation4") {
      $("#destination-result").empty().append("You should travel to Breckenridge, Colorado:");

    } else  {
      $("#destination-result").empty().append("You should travel to Bend, Oregon:");

    }

    event.preventDefault();
  });
});
