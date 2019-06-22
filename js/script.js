$(function() {

    // ふわっと表示
    window.sr = ScrollReveal();
    sr.reveal('.message', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.place__title', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.place__chapel', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.place__banquet', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.schedule__title', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.schedule__illust-balloon-1', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.schedule__illust-balloon-2', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.access__title', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.access__content', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.access__map', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.works__title', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });
    sr.reveal('.works__contents', { easing: 'ease', duration: 1500, distance: '100px', opacity: 1, scale: 1 });

    // ぬるっと移動
    $('a[href^="#"]' + 'a:not(".carousel-control")').click(function(){ 
        $('#menu-cover').fadeOut();
        var speed = 1500; 
        var href= $(this).attr("href"); 
        var target = $(href == "#" || href == "" ? 'html' : href); 
        var position = target.offset().top; 
        $("html, body").animate({scrollTop:position}, speed, "swing"); 
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