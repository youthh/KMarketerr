$(function(){



 


    let header = $('#header');
    let intro  = $('#introI');
    let headerH = header.innerHeight();
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    $(window).on('scroll', function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH   ){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }


    });


    $('.menu_btn').on('click',function(){

        $('.menu__list').toggleClass('menu__list-active')
    });

    $('.menu_btn').on('click',function(e){

        $('span').toggleClass('menu_btn-active');
    });


    
    $("[data-scroll]").on("click", function(event){
        

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;



        $("html, body").animate({
             scrollTop:  elementOffset +8
              
        },700);


    });


    
   
});