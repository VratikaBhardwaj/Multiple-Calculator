// THis is percent calculator script
function mypercent() {
  debugger;
  var per = document.getElementById("percent").value;
  var num = document.getElementById("number").value;
  var res = (num / 100) * per;
  document.getElementById("result").value = res;
}

// this is BMI Script
function mybmi() {
  var kg = document.getElementById("weight").value;
  var mt = document.getElementById("height").value;
  document.getElementById("bmiresult").value = kg / (mt * mt);

  {
    function myhealth() {
      if (bmiresult >= 18.5 || bmiresult <= 24.9) {
        
          (document.getElementById(healthy).innerHTML = "you are over-weight")
        ;
      } else if (bmiresult >= 25.0 || bmiresult <= 29.9) {
        
          (document.getElementById(healthy).innerHTML = "you are over-weight")
        ;
      } else {
        
          (document.getElementById(healthy).innerHTML = "you are under-weight")
        ;
      }
    }
}
}
