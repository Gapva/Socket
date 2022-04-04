window.onload = function() {

  var cbg = document.getElementById("cbg")
  var cbgb = document.getElementById("cbgb")
  
  function update() {
    document.body.style.backgroundImage = "url('" + cbg.value + "')";
    cbg.value = ""
  }

  cbgb.onclick = update;
  
}