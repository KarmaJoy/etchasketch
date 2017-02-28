squareCount = 16;

$(document).ready(function(){
  newCanvas(squareCount);
});


function newCanvas(squareCount){
  $('#canvas').empty();
  var pixelCount = squareCount*squareCount;
  var pixelSize = (600/squareCount)-2;

  for (i=0;i<pixelCount;i++) {
      $('#canvas').append("<div class='pixelsquare' style='height:" + pixelSize + "px; width:" + pixelSize + "px;'></div>");
    }

    paintPixel();
};

function paintPixel() {
  $('.pixelsquare').hover(function() {
      $(this).addClass("hover");
    },
    function() {
      $(this).removeClass("hover");
      $(this).css("background-color","#98167c");
    }
  )
};
