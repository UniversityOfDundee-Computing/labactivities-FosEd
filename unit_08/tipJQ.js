$('#low').click(() => {giveTip(5)});
$('#meduim').click(() => {giveTip(10)});
$('#high').click(() => {giveTip(25)});
$('#large').click(() => {giveTip(0)});
var tipAmount = 0;
var billValue = 0;
$(function () {
    $("#selectable").selectable({
        stop: function () {
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                console.log($(this).html());
                billValue = parseFloat(billValue) + parseFloat($(this).html().slice(1));
                
                billValue = billValue.toFixed(2);
                console.log(billValue);
                $('#cost').html("£" + billValue);

            });
        }
    });
});



function giveTip(val) {
  console.log(billValue);
  if (val == "5") {
    tipAmount = billValue*0.05;
  }
  else if (val == "10") {
    tipAmount = billValue*0.1;
  }
  else if (val == "25") {
    tipAmount = billValue*0.25;
  }
  else {
    tipAmount = billValue*0.25;
    if (tipAmount < 2.02){
      tipAmount = 2.02;
    }
  }

  tipAmount=tipAmount.toFixed(2);
  let total = "£".concat(tipAmount);
  $("#tip").html(total);
  console.log(tipAmount);
  if (tipAmount<=5){
    $('#tip').css("background-color", "red");
    $('#top').css({"font-family": "Lucida Console, Courier New, monospace"});
  }
  else if (tipAmount <=10 && tipAmount>5){
    $('#tip').css("background-color", "orange");
    $('#tip').css({"font-family": "Arial, Helvetica, sans-serif", "font-size":"150%"});
  }
  else{
    $('#tip').css("background-color", "green");
    $('#tip').css({"font-family": "Arial, Helvetica, sans-serif", "font-size": "200%"});
  }
}