  var slide = document.getElementById('sliders');
  var btn5 = document.getElementById('btn5');
  var btn6 = document.getElementById('btn6');
  var btn7 = document.getElementById('btn7');
  var btn8 = document.getElementById('btn8');

  btn5.onclick = function(){
    slide.style.transform = "translatex(0px)";
    btn5.classList.remove("actives");
    btn6.classList.add("actives");
    btn7.classList.remove("actives");
    btn8.classList.remove("actives");
  }
  
  btn6.onclick = function(){
    slide.style.transform = "translatex(-100%)";
    btn5.classList.add("actives");
    btn6.classList.remove("actives");
    btn7.classList.remove("actives");
    btn8.classList.remove("actives");
  }
  btn7.onclick = function(){
    slide.style.transform = "translatex(-200%)";
    btn5.classList.remove("actives");
    btn6.classList.remove("actives");
    btn7.classList.add("actives");
    btn8.classList.remove("actives");
  }
  btn8.onclick = function(){
    slide.style.transform = "translatex(-300%)";
    btn5.classList.remove("actives");
    btn6.classList.remove("actives");
    btn7.classList.remove("actives");
    btn8.classList.add("actives");
  }