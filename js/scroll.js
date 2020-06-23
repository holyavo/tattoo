 $(document).ready(function(){
    $(".menu__item").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(".menu-burger__item").on("click", function (event) {
        event.preventDefault();
        
        $('.menu-burger__menu, .footer__menu-burger, .menu-burger').toggleClass('active');
        $('body').toggleClass('lock');
        
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});