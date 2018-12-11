$("li").eq(0).css("background","yellow")
$(".content").eq(0).css("display","block")

$("li").each(function(index){
  $(this).click(function(){
    $(this).css("background","yellow").siblings().css("background","#fff")
    $(".content").eq(index).css("display","block").siblings().css("display","none")
  })
})



