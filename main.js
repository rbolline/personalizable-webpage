

(function() {
  "use strict";


  window.addEventListener("load", main);
  /**
  * main function that is called when the page loads
  */
  function main() {
    buttonActions();
  }

  function buttonActions(){
    var upbtn = document.getElementById("upbutton");
    var downbtn = document.getElementById("downbutton");

    upbtn.addEventListener("click", function(e){
      /*if y at 0 in first div, do nothing
        else if in first div, move to 0
        else move up to previous div*/
    });
    upbtn.addEventListener("mouseover", function(e){
      //set color to dark grey
    });
    upbtn.addEventListener("mouseout", function(e){
      //set color to black
    });
    downbtn.addEventListener("click", function(e){
      /*if y at bottom in last div, do nothing
        else if in last div, move to bottom
        else move down to next div*/
    });
    downbtn.addEventListener("mouseover", function(e){
      //set color to dark grey
    });
    downbtn.addEventListener("mouseout", function(e){
      //set color to black
    });


  }
  
})();
