// animation for portfilo box
$(".projectbox").mouseenter(function () {

    $(this).addClass('animated pulse')
    // $(this).addClass('thumbnail-overlay')
    // $(".test2").removeClass('external')

    // $(".test").addClass('portbtn')
    // $(".test").removeClass('external')
    // $(this).css('')
   
  });
  
  $(".projectbox").mouseleave(function () {
  
    $(this).removeClass('animated pulse')
 
  });
