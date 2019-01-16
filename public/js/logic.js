$(document).ready(function(){
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
 });

$("input").keyup(function(){
    var txt = $("input").val();
    $.post("demo_ajax_gethint.asp", {suggest: txt}, function(result){
      $("span").html(result);
    });
  });