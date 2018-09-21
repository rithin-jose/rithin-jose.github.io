//check off specific to-do by clicking
$("ul").on("click","li",function(){
  $(this).toggleClass("completed")
});

//event bubbling is there as the span is in li inul in cont and boddy
// so event.stopPropgation() is used
// delete to-do on clicking
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(1000,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// adding to-do
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
     var todoText = $(this).val();
     $(this).val("");
     // new li
     $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
     input();
  }
});

input();

$(".fa-plus").click(function(){
  $("input[type='text']").fadeIn(500);
});

function input(){
     $("input[type='text']").fadeOut(0);
}
