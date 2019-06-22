$(function() {

    // ふわっと表示
    window.sr = ScrollReveal();
    sr.reveal('.opening-movie', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.ending-movie', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.profile-book', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });

    $('a[href^="#"]').click(function() {
        var speed = 400;
        $('body,html').animate({scrollTop: 0}, speed, 'swing');
        return false;
     });

    // (スマホ)メニューの開閉
    $('#menu-bar').click(function() {
        $('#menu-cover').fadeIn();
    });

    $('.menu-close').click(function() {
        $('#menu-cover').fadeOut();
    });
});