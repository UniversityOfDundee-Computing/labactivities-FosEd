document.getElementById('low').addEventListener("click", () => {giveTip(5)});
document.getElementById('meduim').addEventListener("click", () => {giveTip(10)});
document.getElementById('high').addEventListener("click", () => {giveTip(25)});
document.getElementById('large').addEventListener("click", () => {giveTip(0)});
var tipAmount = 0;

function giveTip(value) {
  let billValue = document.getElementById("BI").value;
  console.log(billValue);
  if (value == "5") {
    tipAmount = billValue*0.05
  }
  else if (value == "10") {
    tipAmount = billValue*0.1
  }
  else if (value == "25") {
    tipAmount = billValue*0.25
  }
  else {
    tipAmount = billValue*0.25
    if (tipAmount < 2.02){
      tipAmount = 2.02
    }
  }
  let total = "£".concat(tipAmount);
  document.getElementById("tip").textContent = total;

}
