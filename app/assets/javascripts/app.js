

document.addEventListener("DOMContentLoaded", function(event) {


      $q('#littlearrow').click(function () {
        var arrowposition = $q("#littlearrow").css("right");
        if(arrowposition == "right:26px"){
                 $q("#column").width("450");
                 $q("#column").css("right", "0");
                 $q("#littlearrow").css("right", "450px");
        }else{
          $q("#column").css("right", "-424px");
          $q("#littlearrow").css("right", "26px");
        }

      });

      var modal = document.getElementById("modal");
      var help = document.getElementsByClassName("help")[0];

      help.addEventListener("click", function() {
        modal.classList.toggle("closed");
      });

      // closeButton.addEventListener("click", function() {
      //   modal.classList.toggle("closed");
      // });

      var viewportsize = window.innerWidth;
      // Returns width of browser viewport

      if(viewportsize >= 500){
      }

      $q('.mapicon').click(function(){
        if($q("#column").width("100%")){
              var arrowposition = $q(".mapicon").css("top");
              $q("#column").css("top", "-500px");
}
      });

      $q('body').on('click', '.mapicon', function(){
        if ($q("#column").css("top")=="-500px"){
                 $q("#column").height("92%");
                 $q("#column").css("top", "0");
               }else{
                 $q("#column").css("top", "-500px");
               }

      });


      $q("#submitbutton").click(function(){
        $q(".selectbox, .label,.box, #incdirection").hide();
        $q("#returnbutton").css("visibility", "visible");
        $q("#directions_panel").show();
        $q("#littlearrow").show();
      });

      $q("#returnbutton").click(function(){
        $q("#returnbutton").css("visibility", "hidden");
        $q("#directions_panel").hide();
        $q(".selectbox, .label, .box, #incdirection, #littlearrow").show();
      });
  $q("html").on("click", ".gm-style-iw", function(){

      var windowinfo = $q(this).html();
      var firstthree = windowinfo.substring(150,153);
      var threeid = firstthree.toString();

      $q("#directions_panel").html(threeid);
      console.log("clicked the " + threeid + " flag.");

    });

});
