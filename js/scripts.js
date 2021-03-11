console.log('Welcome Dear Guest! This Is My Portfolio Site!')

function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

$(document).ready(function () {
  $('.navigation .navigation-links').click(function (event) {
    if($('#myNavtoggle').hasClass('responsive')) {
      $('#myNavtoggle').removeClass('responsive');
    }
  });
});
