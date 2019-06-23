//   ---   Navbar   ---   //
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>100){
            $("#navbar").css("background", "#62c017");
            $("#navbar").css("box-shadow", "0px 3px 4px 0px rgba(168,168,168,0.3)");
            $("#navbar").css("transition", ".25s");
        } else {
            $("#navbar").css("background", "transparent");
            $("#navbar").css("box-shadow", "none");
            $("#navbar").css("transition", ".25s");
        }
    })
})

//   ---   Smooth Scrolling  ---   //
$(document).ready(function(){
    var scrollLink =$('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 20
        }, 1000 )
    });
})

//   --- Open Mobile Menu   ---   //

$(document).ready(function(){
    $('.navbar__mobileIcon').click(function(){
        $('#navbarMobile').toggleClass('active')
    })
})