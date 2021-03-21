$(document).ready(function(){

   $('.custom_menu li a.menu-item').click(function(){
        // $(this).addClass('active')
        
        if (!$(this).hasClass("active")) {
            $('.custom_menu li a.menu-item').removeClass('active')
            $(this).addClass('active')
        }
    })
    
    // $('.custom_menu li a.menu-item').click(function(){
    //     $(this).removeClass('active')
    // })

   
});
