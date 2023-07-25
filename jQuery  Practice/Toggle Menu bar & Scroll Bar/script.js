// change nav
$icon = $(".fa-bars")
$(document).ready(function(){
    $(".t_btn").click(function(){
        $(".nav_bar").toggleClass("nav");
        if($(".nav_bar").hasClass("nav") == true){
            $icon.removeClass("fa-bars");
            $icon.addClass("fa-close");
        }else{
            $icon.removeClass("fa-close");
            $icon.addClass("fa-bars");
        }
    })
})

// change header color
$(document).ready(function(){
    $(window).scroll(function(){
        $current = $(this).scrollTop();
        if($current > 0){
            $("header").addClass("header_fixed");
        }else{
            $("header").removeClass("header_fixed");
        }
    })
})

// dark mode
$icon = $(".fa-moon");
$(document).ready(function(){
    $icon.click(function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark") == true){
            $icon.removeClass("fa-moon");
            $icon.addClass("fa-sun");   
        }else{
            $icon.removeClass("fa-sun");
            $icon.addClass("fa-moon");
        }
    })
})