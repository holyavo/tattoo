$(document).ready(function () {
   $('.menu-burger').click(function (event) {
       $('.menu-burger, .menu-burger__menu, .footer__menu-burger ').toggleClass('active');
       $('body').toggleClass('lock');
   });
});