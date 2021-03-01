console.log("Welcome Dear Guest! This Is My Portfolio Site!")


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//for image slider

//$(document).ready(function sliderdonkey(){
//  x = 0;
  //for next slider
//  $('.btn-next').click(function sliderdonkey(){
  //  x = (x<=300)?(x+100):0;   //es6
//    $('figure').css('left', -x+"%");

//  });
//for previous slider

//$('.btn-prev').click(function sliderdonkey(){
//  x = (x>=100)?(x-100):400;   //es6
//  $('figure').css('left', -x+"%");

//});
//}
