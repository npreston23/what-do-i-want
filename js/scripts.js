var add = function(hunger, idk, food){
  return hunger + idk + food;
}

//--------------------------------------

$(document).ready(function(){
  $("#fork-and-knife").click(function() {
    var number1 = parseInt($("#hunger").val());
    var number2 = parseInt($("#idk").val());
    var number3 = parseInt($("#food").val());
    var sum = number1 + number2 + number3;
    $(".decision").toggle();

    if (sum <= 3) {
      $(".chinese-food").toggle();
    }
    else if (sum <= 4) {
      $(".mexican-food").toggle();
    }
    else if (sum <= 5) {
      $(".italiano").toggle();
    }
    else if (sum <= 6) {
      $(".chicken-fingers").toggle();
    }
  });
});
