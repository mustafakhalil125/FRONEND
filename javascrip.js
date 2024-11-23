$(document).ready(function(){
    $('#icon').click(function(){
       $('#nav').slideToggle()
     })
})
// Can also be used with $(document).ready()
$(window).on('load',function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});



