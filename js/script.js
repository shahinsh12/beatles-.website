$(window).on('load',function(){
    $('.preloader').fadeOut(4000)
}) 

$(function () {

    /* slider */

    $('.slider').slick({
        prevArrow: '<i class="slider-icons fas fa-arrow-left"></i>',
        nextArrow: '<i class="slider-icons fas fa-arrow-right"></i>',
        dots: true,
        dotsClass: 'slider-dots',
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000
    })

    /*fixed menu*/

   $(window).on('scroll', function(){
       if ($(window).scrollTop() > $('#bottomheader').height()){
           $('#bottomheader').addClass('fixed-menu')
       }else {
           $('#bottomheader').removeClass('fixed-menu')
       }
   })



   /*read more button*/
    $('#readmore').click(function () {
        
        $('#test').slideToggle(500);
        
        

        
       
    })





    /*scroll top button*/

    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 450 ) {
            $('#topbtn').fadeIn(500);
        }else{
            $('#topbtn').fadeOut(500);
        }

    })


    
    $('#topbtn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })

    /*smooth jump*/ 

    $('a').on('click', function(event){
        event.preventDefault;
        if(this.hash !== '') {
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top,
            },1000)
        }
    })


})