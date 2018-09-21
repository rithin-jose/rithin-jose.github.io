var clickedButton = document.querySelectorAll("input");
var switcher = "true";

clickedButton.forEach(function(click){
  click.addEventListener("click",function(){
    if(switcher === "true"){
      click.setAttribute("value","O");
      click.setAttribute("disabled","disabled");
      switcher = "false";
    }
    else{
      click.setAttribute("value","X");
      click.setAttribute("disabled","disabled");
      switcher = "true";
    }
  })
})
