$(document).ready(function(){
// Radi butto Vacation Suggester
$("form#about-you").submit(function(event){
    var destination = $("input:radio[name=vacation]:checked").val();

    if (destination === "vacation1") {
      $("#destination-result").empty().append("You should travel to the Wailea Grand Resort on the Hawaiian Island of Maui. Set on 40 acres of tropical gardens bordering Wailea Beach, this luxe resort is next to Wailea Blue Golf Course and 6 miles from Ahihi Kinau Natural Area Reserve. All rooms have private terraces or balconies.There's a plush spa with 40 treatment rooms and a fitness center. Other amenities include a kids' club, multiple restaurants, 9 pools and a 2,000-ft river with waterslides.");

    } else if (destination === "vacation2") {
      $("#destination-result").empty().append("You should travel to Cooper Island Beach Club in the British Virgin Islands where you will find a family-owned eco-resort on the sandy shores of Manchioneel Bay accessible only by private boat. ");

    } else if (destination === "vacation3") {
      $("#destination-result").empty().append("You should travel to New York City, home to the Empire State Building, Times Square, Statue of Liberty, Broadway and other iconic sites. It is a fast-paced, globally influential center of art, culture and finance.");

    } else if (destination === "vacation4") {
      $("#destination-result").empty().append("You should travel to Breckenridge, Colorado, a town at the base of the Rocky Mountains Tenmile Range. It is prennially one of the most visited ski resorts in the western hemisphere.");

    } else  {
      $("#destination-result").empty().append("You should travel to Bend, Oregon for some of the most spectacular and beautiful hikes in the country, if not the world. Several cycling routes within the Three Sisters Scenic Bikeway represent the most scenic road cycling routes in Central Oregon.Nothing compares to the crystal clear rivers and lakes for kayaking and canoeing");

    }

    event.preventDefault();
  });

    $("form#vacation-selector").submit(function(event){
      var answer1 = $("select#question1").val();
      var answer2 = $("select#question2").val();

      if (answer1 === "yes" && answer2 === "yes") {

        $("#vacation-answer").empty().append(" Visit Vail Resort, CO");
        $("#vacation-result").show();

      } else if (answer1 === "yes" && answer2 === "no") {

        $("#vacation-answer").empty().append(" Visit Bachelor Mountain, OR");
        $("#vacation-result").show();

      } else if (answer1 === "no") {
        $("#vacation-answer").empty().append("Consider a vacation to the beach instead!");
        $("#vacation-result").show();
      }
        event.preventDefault();

  });

});
