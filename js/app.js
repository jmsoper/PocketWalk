
$(document).ready(function(){
//  var arrowposition = $("#column").offset();

//  var arrowwidth = $("#littlearrow").width()-5;


      $('#littlearrow').click(function () {
        $("#column").css("right", "-320px");
        $("#littlearrow").css("right", "26px");
//        $("#map-canvas").css("width", "97.5%");
      });

      $('body').on('click', '#littlearrow', function(){
        var arrowposition = $("#littlearrow").css("right");
        if(arrowposition == "26px"){
                 $("#column").width(350);
                 $("#column").css("right", "0");
                 $("#littlearrow").css("right", "348px");
        }else{
          console.log("not a match.");
          console.log(arrowposition);
        }
      });

      var viewportsize = $(window).width();
      // Returns width of browser viewport

      if(viewportsize >= 500){
        console.log("big viewport.");
      }

      $('.mapicon').click(function(){
        if($("#column").width("100%")){
              var arrowposition = $(".mapicon").css("top");
              $("#column").css("top", "-500px");
              console.log(arrowposition);}
      });

      $('body').on('click', '.mapicon', function(){
        if ($("#column").css("top")=="-500px"){
                 $("#column").height("92%");
                 $("#column").css("top", "0");
               }else{
                 $("#column").css("top", "-500px");
               }
      //           $("#downarrow").css("top", "348px");
      //  }else{
          console.log("not a match.");
          console.log(arrowposition);
  //      }
      });


      $("#submitbutton").click(function(){
        $(".selectbox, .label,.box, #incdirection").hide();
        $("#returnbutton").css("visibility", "visible");
        $("#directions_panel").show();
        $("#littlearrow").show();
      });

      $("#returnbutton").click(function(){
        $("#returnbutton").css("visibility", "hidden");
        $("#directions_panel").hide();
        $(".selectbox, .label, .box, #incdirection, #littlearrow").show();
      })
//        $("#column").hide("slide", { direction: "right" }, 1200);
//        $("#column").delay(400).show("slide", { direction: "right" }, 1200);


});
