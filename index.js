$('li').on('click',(e)=>{
  var $li = $(e.currentTarget)
  $li.addClass('active').siblings().removeClass('active')
  var index = $li.index()
  $('.box').children().eq(index).addClass('active').siblings().removeClass('active')
})



