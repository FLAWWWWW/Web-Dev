function welcomeFunc() {
  let age = document.getElementById("age").value;
  var name = document.getElementById("name").value;

  if(name == ""){
    document.getElementById("hidden-name").style.visibility = 'visible';
    document.getElementById("hidden-not-welcome").style.visibility = 'hidden';
    document.getElementById("hidden-welcome").style.visibility = 'hidden';
  }
  else{
    document.getElementById("hidden-name").style.visibility = 'hidden';
    if(age == 18){
        document.getElementById("hidden-welcome").style.visibility = 'visible';
        document.getElementById("hidden-not-welcome").style.visibility = 'hidden';
    }
    else if(age > 18){
        document.getElementById("hidden-welcome").style.visibility = 'visible';
        document.getElementById("hidden-not-welcome").style.visibility = 'hidden';
    }
    else{
        document.getElementById("hidden-not-welcome").style.visibility = 'visible';
        document.getElementById("hidden-welcome").style.visibility = 'hidden';
    }
  }
}