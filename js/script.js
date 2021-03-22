$(document).ready(function(){

   $('.custom_menu li a.menu-item').click(function(){
               
        if (!$(this).hasClass("active")) {
            $('.custom_menu li a.menu-item').removeClass('active')
            $(this).addClass('active')
        }
    })
    
    $(window).scroll(function(){

        var profileBanner = $('.profile-banner').outerHeight()
        var topTobottom = $(window).scrollTop()

        if(topTobottom > profileBanner){
            $('.sidebar').addClass('stikey')

        }else{
            $('.sidebar').removeClass('stikey')
        }



    })

   
});
