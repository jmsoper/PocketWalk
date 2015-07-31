
$(document).ready(function(){
  var arrowposition = $("#column").offset();
  console.log(arrowposition);
  var arrowwidth = $("#littlearrow").width()-5;
  $("#littlearrow").css("left", (arrowposition.left-arrowwidth));

      $('#littlearrow').click(function () {
        $("#column").hide("slide", { direction: "right" }, 1200);
        $("#column").delay(400).show("slide", { direction: "right" }, 1200);
    });

});
