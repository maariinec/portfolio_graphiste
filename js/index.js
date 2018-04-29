$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

console.log('hello');

let nb =1;
$("#butt").click(function(){
  if($('#butt').hasClass("bdown")){
    nb++;
    let divid = "#scroll"+nb;
    console.log(nb);
$('body').animate({ scrollTop: "+=591px"

    }, 2000);
    return false;
  }
  else if ($('#butt').hasClass("bup")) {
    $("body").animate({ scrollTop: 0}, 1000);
    console.log("avant"+nb);
    nb = 1;
    console.log("apres"+nb);
    return false;
  }
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('#butt').removeClass('bdown');
       $("#butt").addClass('bup');
       return false;
   }
   else{
     $('#butt').removeClass('bup');
     $("#butt").addClass('bdown');

     return false;
   }
});