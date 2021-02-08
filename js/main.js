 

 $(function(){
    'use strict';
    $('.head').height($(window).height());
    $(window).resize(function(){
      $('.head').height($(window).height()); 
      $('.slider').css({
         'padding-top':($(window).height()-$(' .sli').height()) /2,
         'padding-buttom':($(window).height()-$('.sli').height()) /2,
      })   
    });
    
 });
 $('nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
 })



/**slider */
 $(document).ready(function(){
   $('.slider').bxSlider({
      pager:false
   });
   $('.slider').each(function(){
      $(this).css({
         'padding-top':($(window).height()-$(' .sli').height()) /2,
         'padding-buttom':($(window).height()-$('.sli').height()) /2,
      })
   })
 });


 
 /**smooth scroll */

 $('li a').click(function(){
     console.log($(this).data('value'));
    $('body, html').animate({
       scrollTop: $('#' + $(this).data('value')).offset().top,
    }, 1000)
 

   });
 

   /** infinity slider */
    (function auto(){
      $('.slide .active').each(function(){
         if(!$(this).is(':last-child')){
            $(this).delay(1000).fadeOut(1000, function(){
               $(this).removeClass('active').next().addClass('active').fadeIn(3000);
               auto();
            });
         }else{
            $(this).delay(1000).fadeOut(1000, function(){
               $(this).removeClass('active');
               $('.slide div').eq(0).addClass('active').fadeIn();
            })
         }
      });
 }());
 

 /* mixitupe*/
mixitup('.gallery');

 /**Nice scroll */ 
 $("body").niceScroll();




