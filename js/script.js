

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
               
        if (!$(this).hasClass("active")) {
            $('.custom_menu li a.menu-item').removeClass('active')
            $(this).addClass('active')
        }
    })
    
    $(window).scroll(function(){

        var profileBanner = $('.profile-banner').outerHeight()
        var profileCover = $('.profile__cover').outerHeight()
        var profileText = $('.profile_text').outerHeight()
        var profileCoverText = profileCover + profileText;

        var topTobottom = $(window).scrollTop() 
         
    //stikey sidebar    
        if(topTobottom > profileBanner){
            $('.sidebar').addClass('stikey')

        }else{
            $('.sidebar').removeClass('stikey')
        }
        
    //stikey menu
        if(topTobottom > profileCoverText){
            $(".navbarMenu").addClass('stikey_menu')
        }else{
            $('.navbarMenu').removeClass('stikey_menu')
        }
    //only menu stikey
        var onlymenu = $('.main_nav').outerHeight()
      
        if(onlymenu < 300){
            $('.main_nav').addClass('stikey_menu');
        } 
        if(topTobottom == 0){
            $('.main_nav').removeClass('stikey_menu');  
        }


    })

   
});


// Writers name suggestion
function suggestion_box(){
    var nameSuggestion = document.getElementById("name_suggestion")
    var nameInput = document.getElementById("name_input").value


    if(nameInput.length > 0){
        nameSuggestion.classList.remove('d-none')
    }else{
        nameSuggestion.classList.add('d-none')
    }

}
function removeSuggestionBox(){
    var nameSuggestion = document.getElementById("name_suggestion")
    nameSuggestion.classList.add('d-none')
}

// Publishers name suggestion
function publication_suggestion_box(){
    var nameSuggestion = document.getElementById("publication_suggestion")
    var nameInput = document.getElementById("publication_input").value


    if(nameInput.length > 0){
        nameSuggestion.classList.remove('d-none')
    }else{
        nameSuggestion.classList.add('d-none')
    }

}
function remove_publication_suggestionBox(){
    var nameSuggestion = document.getElementById("publication_suggestion")
    nameSuggestion.classList.add('d-none')
}



$(document).ready(function(){

    var liValueGet = $('.name_suggestion ul li').text
    var liValueSet = $('.name_input').text(liValueGet)

    $(".name_suggestion ul li").click(function(){
        $(this).text(liValueSet)
    })
})


// jquery

// Writers name suggestion
// $(document).ready(function(){

//     // $("input.name_input").keypress(function(){
//     //     $(".name_suggestion").show()
//     // })

//     if($("input.name_input").click()){
//         $(".name_suggestion").show()
//     }
// });




//taginput 
$(".tagAdd input").val()
$(".tagAdd input").tagsinput('items')
  

//active tab
$(document).ready(function(){

    $('.nav-link').click(function(){
        $(this).addClass('active'); 
    })

})


//colone data js


//   $('#add-more').cloneData({

//     init: function() {},
//     complete: function() {},
//     beforeRender: function() {},
//     afterRender: function() {},
//     beforeRemove: function() {},
//     afterRemove: function() {}
  
//   });
//   $('#add-more').cloneData({

//     // 0 = unlimited
//     maxLimit: 0, 
  
//     // 0 = unlimited
//     minLimit: 1
  
//   });

$(document).ready(function(){
    $(".main-container .button").click(function(){
        $('.container-item').removeClass('d-none');
    })
})