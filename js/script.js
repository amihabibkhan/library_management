function show_edit_form(){
    document.getElementById("profile_edit_form").classList.remove("d-none") 
    document.getElementById("profile_edit_button").classList.add("d-none") 
}
function show_edit_button_container(){
    document.getElementById("profile_edit_form").classList.add("d-none") 
    document.getElementById("profile_edit_button").classList.remove("d-none") 
} 

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
