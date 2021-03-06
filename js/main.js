$(document).ready(function() {

    function scrollToAnchor(aid) {
        var aTag = $("section[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

    /***** Slide to ID ******/
    $("#neo-link").click(function() {
        scrollToAnchor('neo-link');
        $("#cat-popup").removeClass("fadeIn");
        $('.popup-overlay').removeClass('fadeIn');
    });
    $("#heart-link").click(function() {
        scrollToAnchor('heart-link');
        $("#cat-popup").removeClass("fadeIn");
        $('.popup-overlay').removeClass('fadeIn');
    });
    $("#alternate-link").click(function() {
        scrollToAnchor('alternate-link');
        $("#cat-popup").removeClass("fadeIn");
        $('.popup-overlay').removeClass('fadeIn');
    });
    $("#lol-link").click(function() {
        scrollToAnchor('lol-link');
        $("#cat-popup").removeClass("fadeIn");
        $('.popup-overlay').removeClass('fadeIn');
    });
    $("#am-x-link").click(function() {
        scrollToAnchor('am-x-link');
        $("#cat-popup").removeClass("fadeIn");
        $('.popup-overlay').removeClass('fadeIn');
    });
    $("#am-y-link").click(function() {
        scrollToAnchor('am-y-link');
        $("#cat-popup").removeClass("fadeIn");
        $('.popup-overlay').removeClass('fadeIn');
    });

    /***** Mobile Nav *****/
    $('.burger').on('click', function(){
        $(this).toggleClass('is-active');
        $('nav').toggleClass('popin');
    });

    /***** Search Box Open *****/
    $('.search-button-mobile a').click(function(){

        if($('.search-button-mobile').hasClass('is-active')) {
            $('.search-button-mobile').removeClass('is-active');
            $('.search-box-container.fadeIn').removeClass('fadeIn');
        }
        else {
            $('.search-button-mobile').addClass('is-active');
            $('.search-box-container').addClass('fadeIn');
            setTimeout(function(){
                $('#searchBox').focus();
            }, 300);
        }

    });

    $('.search-box-container span a').on('click', function(){
        $('.search-button-mobile.is-active').removeClass('is-active');
        $('.search-box-container.fadeIn').removeClass('fadeIn');
    });

    /***** Floating Yellow Cart *****/
    $(window).scroll(function(){

        var scrollTop = $(window).scrollTop();
        var messageOffset = $(".message-section").offset().top;
        var messageOuter = $(".message-section").outerHeight();

        var message = messageOffset - messageOuter;

        if((scrollTop > message - 700)) {
            $('.yellow-cart').addClass('stick-cart');
            $('.yellow-cart').css('bottom', '5%');
        }

        else {
            $('.yellow-cart').removeClass('stick-cart');
            $('.yellow-cart').css('bottom', '40%');
        }

    });

    /**** Change image by color pick *****/
    $(".change-item").hover(function(){
        var imageChange = $(this).children().attr('data-image-change');
        $(this).parent().parent().siblings().children().children().children().attr('src', imageChange);
    });

    $(".change-item").click(function(){
        var imageChange = $(this).children().attr('data-image-change');
        $(this).parent().parent().siblings().children().children().children().attr('src', imageChange);
    });

    /**** Description Images *****/
    $('.description-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<a href="javascript:;" class="slick-prev"><img src="images/desc-arrow-left.png" /></a>',
        nextArrow: '<a href="javascript:;" class="slick-next"><img src="images/desc-arrow-right.png" /></a>'
    });


    /***** Register/Login Popup *****/
    $(".click-register").click(function(){
        $('.popup-container').addClass('fadeIn');
        $('.popup-overlay').addClass('fadeIn');
    });

    $(".reg-log-close span").click(function(e){
        e.preventDefault();
        $('.popup-container').removeClass('fadeIn');
        $('.popup-overlay').removeClass('fadeIn');
    });

    $(".popup-overlay").click(function(e){
        e.preventDefault();
        $('.popup-container').removeClass('fadeIn');
        $(this).removeClass('fadeIn');
    });

    /***** Register/Login Popup for Mobile *****/
    $(".register-mobile").click(function(){

        $(".login-mobile").removeClass('reg-log-active');
        $(this).addClass('reg-log-active');

        $('.reg-log-target').removeClass('reg-log-show').removeClass('reg-log-hide');
        $('.reg-log-key').removeClass('reg-log-show').removeClass('reg-log-hide');

        $('.login-inner').addClass('reg-log-hide');
        $('.register-inner').addClass('reg-log-show');
        $('.reg-log-key').addClass('reg-log-hide');

    });

    $(".login-mobile").click(function(){

        $(".register-mobile").removeClass('reg-log-active');
        $(this).addClass('reg-log-active');

        $('.reg-log-target').removeClass('reg-log-show').removeClass('reg-log-hide');
        $('.reg-log-key').removeClass('reg-log-show').removeClass('reg-log-hide');

        $('.register-inner').addClass('reg-log-hide');
        $('.login-inner').addClass('reg-log-show');
        $('.reg-log-key').addClass('reg-log-show');

    });

    /***** Quick Purchase Popup *****/
    $(".fig").click(function(){
        $('#quick-purchase-popup').addClass('fadeIn');
        $('.popup-overlay').addClass('fadeIn');
    });

    $(".quick-purhcase-close span").click(function(e){
        e.preventDefault();
        $('#quick-purchase-popup').removeClass('fadeIn');
        $('.popup-overlay').removeClass('fadeIn');
    });

    $(".popup-overlay").click(function(e){
        e.preventDefault();
        $('#quick-purchase-popup').removeClass('fadeIn');
        $(this).removeClass('fadeIn');
    });

    /***** Quick Purchase Image Slider*****/
    $('.quick-image-selected').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.quick-sub-choices'
    });

    $('.quick-sub-choices').slick({
        arrows: true,
        prevArrow: '<button class="slick-prev"><</button>',
        nextArrow: '<button class="slick-next">></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.quick-image-selected',
        infinite: true,
        focusOnSelect: true
    });

    /***** Category Popup *****/
    $(".click-category").click(function(){
        $('#cat-popup').addClass('fadeIn');
        $('.popup-overlay').addClass('fadeIn');
    });

    $(".cat-dd-close span").click(function(e){
        e.preventDefault();
        $('#cat-popup').removeClass('fadeIn');
        $('.popup-overlay').removeClass('fadeIn');
    });

    $(".popup-overlay").click(function(e){
        e.preventDefault();
        $('#cat-popup').removeClass('fadeIn');
        $(this).removeClass('fadeIn');
    });

    $('#first').carousel({
      interval: 30000
    });

    $('#second').carousel({
      interval: 35000
    });

    $('#third').carousel({
      interval: 8000
    });

    $('#fourth').carousel({
      interval: 150000
    });

    $('#last').carousel({
      interval: 25000
    });

    $('#first-2').carousel({
      interval: 30000
    });

    $('#second-2').carousel({
      interval: 35000
    });

    $('#third-2').carousel({
      interval: 8000
    });

    $('#fourth-2').carousel({
      interval: 150000
    });

    $('#last-2').carousel({
      interval: 25000
    });

});

$(document).ready(function(){

    // Enlarging the gallery image

    $('.gallery-image').click(function() {
        $('.gallery-enlarger').addClass('enlarge-show');
        $('.popup-overlay').addClass('fadeIn');
    });

    $('.cat-enlarge').click(function() {
        $('.gallery-enlarger').addClass('enlarge-show');
        $('.popup-overlay').addClass('fadeIn');
    });


    $(".popup-overlay").click(function() {
        $('.gallery-enlarger').removeClass('enlarge-show');
        $('.popup-overlay').removeClass('fadeIn');
    });

    $(".close-big").click(function() {
        $('.gallery-enlarger').removeClass('enlarge-show');
        $('.popup-overlay').removeClass('fadeIn');
    });

    // Enlargin Clicking ELements

    $('img.thumb').click(function() {
        $('.enlarge-position>img').replaceWith(this);
    });

    // Caching The Scroll Top Element

    var scrollButton = $('#scroll-top');

    $(window).scroll(function () {
//         console.log( $(this).scrollTop() );

        $(this).scrollTop() >= 700 ?  scrollButton.show() :  scrollButton.hide();

    });
        // Click on button to scroll top

        scrollButton.click(function () {
            $('html,body').animate({ scrollTop : 0}, 800);
        });

    // Category Size

    $('.cat-size li').click(function () {
       if ( $(this).hasClass('scalling-li') ) {
           $(this).removeClass('scalling-li');
       } else {
           $(this).addClass('scalling-li');
       }
    });

    // Faq

    $('.g-1').click(function(){
      if($('.ga-1').hasClass('hide-answer')){
        $('.ga-1').removeClass('hide-answer')
      } else{
        $('.ga-1').addClass('hide-answer')
      }
      $('.g-1 i').toggleClass('rotate');
    });

    $('.g-2').click(function(){
      if($('.ga-2').hasClass('hide-answer')){
        $('.ga-2').removeClass('hide-answer')
      } else{
        $('.ga-2').addClass('hide-answer')
      }
      $('.g-2 i').toggleClass('rotate');
    });

    $('.g-3').click(function(){
      if($('.ga-3').hasClass('hide-answer')){
        $('.ga-3').removeClass('hide-answer')
      } else{
        $('.ga-3').addClass('hide-answer')
      }
      $('.g-3 i').toggleClass('rotate');
    });

    $('.g-4').click(function(){
      if($('.ga-4').hasClass('hide-answer')){
        $('.ga-4').removeClass('hide-answer')
      } else{
        $('.ga-4').addClass('hide-answer')
      }
      $('.g-4 i').toggleClass('rotate');
    });

    $('.g-5').click(function(){
      if($('.ga-5').hasClass('hide-answer')){
        $('.ga-5').removeClass('hide-answer')
      } else{
        $('.ga-5').addClass('hide-answer')
      }
      $('.g-5 i').toggleClass('rotate');
    });

    $('.g-6').click(function(){
      if($('.ga-6').hasClass('hide-answer')){
        $('.ga-6').removeClass('hide-answer')
      } else{
        $('.ga-6').addClass('hide-answer')
      }
      $('.g-6 i').toggleClass('rotate');
    });

    $('.g-7').click(function(){
      if($('.ga-7').hasClass('hide-answer')){
        $('.ga-7').removeClass('hide-answer')
      } else{
        $('.ga-7').addClass('hide-answer')
      }
      $('.g-7 i').toggleClass('rotate');
    });

    $('.g-8').click(function(){
      if($('.ga-8').hasClass('hide-answer')){
        $('.ga-8').removeClass('hide-answer')
      } else{
        $('.ga-8').addClass('hide-answer')
      }
      $('.g-8 i').toggleClass('rotate');
    });

    $('.sh-1').click(function(){
      if($('.sha-1').hasClass('hide-answer')){
        $('.sha-1').removeClass('hide-answer')
      } else{
        $('.sha-1').addClass('hide-answer')
      }
      $('.sh-1 i').toggleClass('rotate');
    });

    $('.sh-2').click(function(){
      if($('.sha-2').hasClass('hide-answer')){
        $('.sha-2').removeClass('hide-answer')
      } else{
        $('.sha-2').addClass('hide-answer')
      }
      $('.sh-2 i').toggleClass('rotate');
    });

    $('.sh-3').click(function(){
      if($('.sha-3').hasClass('hide-answer')){
        $('.sha-3').removeClass('hide-answer')
      } else{
        $('.sha-3').addClass('hide-answer')
      }
      $('.sh-3 i').toggleClass('rotate');
    });

    $('.sh-4').click(function(){
      if($('.sha-4').hasClass('hide-answer')){
        $('.sha-4').removeClass('hide-answer')
      } else{
        $('.sha-4').addClass('hide-answer')
      }
      $('.sh-4 i').toggleClass('rotate');
    });

    $('.sh-5').click(function(){
      if($('.sha-5').hasClass('hide-answer')){
        $('.sha-5').removeClass('hide-answer')
      } else{
        $('.sha-5').addClass('hide-answer')
      }
      $('.sh-5 i').toggleClass('rotate');
    });

    $('.sh-6').click(function(){
      if($('.sha-6').hasClass('hide-answer')){
        $('.sha-6').removeClass('hide-answer')
      } else{
        $('.sha-6').addClass('hide-answer')
      }
      $('.sh-6 i').toggleClass('rotate');
    });

    $('.pu-1').click(function(){
      if($('.pua-1').hasClass('hide-answer')){
        $('.pua-1').removeClass('hide-answer')
      } else{
        $('.pua-1').addClass('hide-answer')
      }
      $('.pu-1 i').toggleClass('rotate');
    });

    $('.pu-2').click(function(){
      if($('.pua-2').hasClass('hide-answer')){
        $('.pua-2').removeClass('hide-answer')
      } else{
        $('.pua-2').addClass('hide-answer')
      }
      $('.pu-2 i').toggleClass('rotate');
    });

    $('.pu-3').click(function(){
      if($('.pua-3').hasClass('hide-answer')){
        $('.pua-3').removeClass('hide-answer')
      } else{
        $('.pua-3').addClass('hide-answer')
      }
      $('.pu-3 i').toggleClass('rotate');
    });

    $('.pu-4').click(function(){
      if($('.pua-4').hasClass('hide-answer')){
        $('.pua-4').removeClass('hide-answer')
      } else{
        $('.pua-4').addClass('hide-answer')
      }
      $('.pu-4 i').toggleClass('rotate');
    });

    $('.pu-5').click(function(){
      if($('.pua-5').hasClass('hide-answer')){
        $('.pua-5').removeClass('hide-answer')
      } else{
        $('.pua-5').addClass('hide-answer')
      }
      $('.pu-5 i').toggleClass('rotate');
    });

    $('.re-1').click(function(){
      if($('.rea-1').hasClass('hide-answer')){
        $('.rea-1').removeClass('hide-answer')
      } else{
        $('.rea-1').addClass('hide-answer')
      }
      $('.re-1 i').toggleClass('rotate');
    });

    $('.re-2').click(function(){
      if($('.rea-2').hasClass('hide-answer')){
        $('.rea-2').removeClass('hide-answer')
      } else{
        $('.rea-2').addClass('hide-answer')
      }
      $('.re-2 i').toggleClass('rotate');
    });

    $('.re-3').click(function(){
      if($('.rea-3').hasClass('hide-answer')){
        $('.rea-3').removeClass('hide-answer')
      } else{
        $('.rea-3').addClass('hide-answer')
      }
      $('.re-3 i').toggleClass('rotate');
    });



    // Add in-cart

    $('.add-cart').click(function () {
        $(this).next().addClass('in-cart-show');
        $(this).addClass('click-pop');
    });

    // Close in-cart

    $('.x-close').click(function () {
        $(this).parent().removeClass('in-cart-show');
        $('.add-cart').removeClass('click-pop');
    });

    //  Item select

    $('.non-selected').click(function () {
        $(this).css('display', 'none');
        $(this).next().css('display', 'block');
    });

    $('.selected').click(function () {
        $(this).css('display', 'none');
        $(this).prev().css('display', 'block');
    });

    // form submit

    $('#submit').click(function () {
        $('.contact-form-container').addClass('jump-up');
        $('.thanks').css('display', 'block');
    });

    // swipe funciotn
    $('.cat-side').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingers)
            {
                if (phase=="move" && direction =="right") {
                    $('.cat-side').addClass('cat-side-show');
                    $('.side').addClass('side-show');
                    $('.tab-arrow').addClass('tab-arrow-open');
                        return false;
                }
                if (phase=="move" && direction =="left") {
                    $(".cat-side").removeClass('cat-side-show');
                    $('.side').removeClass('side-show');
                    $('.tab-arrow').removeClass('tab-arrow-open');
                        return false;
                }
            }
    });
});
