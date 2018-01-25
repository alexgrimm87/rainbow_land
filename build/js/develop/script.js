function burger(){
  var menu = $('.main-menu');
  $('.burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');

    if ($('.burger').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      $(this).addClass('active');
    }
  });

  $(window).resize(function() {
    var menu = $('.main-menu');
    var w = $(window).width();
    if(w > 581) {
      menu.removeAttr('style');
      $('.burger').removeClass('open');
      $('.burger').removeClass('active');
    }
  });
}

function slider(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 641,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-prev').on('click', function(e) {
    e.preventDefault();
    $('.slider').slick('slickPrev');
  });

  $('.slider-next').on('click', function(e) {
    e.preventDefault();
    $('.slider').slick('slickNext');
  });

  $('.slider-item').fancybox({
    openEffect  : 'elastic',
    closeEffect : 'fade',
/*    'nextEffect': 'none',
    'prevEffect': 'none',*/
    autoSize:true,
    maxWidth : '100%',
    wrapCSS:'slider-item-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });
};

function accSlider(){
  $('.acc-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

  $('.acc-slider-prev').on('click', function(e) {
    e.preventDefault();
    $('.acc-slider').slick('slickNext');
  });

  $('.acc-slider-next').on('click', function(e) {
    e.preventDefault();
    $('.acc-slider').slick('slickPrev');
  });
};

function acc1(){
  $('.acc-content').click(function(){
    $(this).siblings('.acc-content').addClass("close").removeClass( "open" );
    $(this).removeClass( "close open" );
    $(this).addClass( "open");
  });

  $('.acc-title1').click(function(){
    $('.section1').css('background', 'url(" '+firstBg+' ") no-repeat center/cover');
  });
  $('.acc-title2').click(function(){
    $('.section1').css('background', 'url(" '+secondBg+' ") no-repeat top/cover');
  });
  $('.acc-title3').click(function(){
    $('.section1').css('background', 'url(" '+thirdBg+' ") no-repeat center/cover');
  });

  $('.acc-overlay-item1').click(function(){
    $('.section1').css('background', 'url(" '+firstBg+' ") no-repeat center/cover');
    $('.acc-content').removeClass( "open close" );
    $('.acc-content1').addClass( "open").siblings('.acc-content').addClass("close");
    $('.accordion-overlay').hide();
  });
  $('.acc-overlay-item2').click(function(){
    $('.section1').css('background', 'url(" '+secondBg+' ") no-repeat top/cover');
    $('.acc-content').removeClass( "open close" );
    $('.acc-content2').addClass( "open").siblings('.acc-content').addClass("close").removeClass( "open" );
    $('.accordion-overlay').hide();
  });
  $('.acc-overlay-item3').click(function(){
    $('.section1').css('background', 'url(" '+thirdBg+' ") no-repeat center/cover');
    $('.acc-content').removeClass( "open close" );
    $('.acc-content3').addClass( "open").siblings('.acc-content').addClass("close").removeClass( "open" );
    $('.accordion-overlay').hide();
  });
};

function acc2(){
  $('.acc2-content').click(function(){
    $(this).siblings('.acc2-content').addClass("close").removeClass( "open" );
    $(this).removeClass( "close open" );
    $(this).addClass( "open");
  });

  $('.acc2-title1').click(function(){
    $('.section3').css('background', 'url(" '+first2Bg+' ") no-repeat right');
  });
  $('.acc2-title2').click(function(){
    $('.section3').css('background', 'url(" '+second2Bg+' ") no-repeat right');
  });
    $('.acc2-title3').click(function(){
      $('.section3').css('background', 'url(" '+third2Bg+' ") no-repeat right');
  });
};

function tabs(){
  $('.tab-item').not(':nth-child(3)').hide();
  $('.js-tab .tab').click(function(){
    $('.js-tab .tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.js-tab .tab-item').hide().eq($(this).index()).fadeIn();
  }).eq(2).addClass('active');
}

function map(){
  ymaps.ready(init);
   
  function init(){       
    var myMap;
 
    myMap = new ymaps.Map("map", {
      center: [55.8721, 48.8821],
      zoom: 16,
      controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.8721, 48.8821] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'images/marker-map.png',
          iconImageSize: [229, 95],
          iconImageOffset: [-225, -100] });       

    myMap.geoObjects.add(myPlacemark);  
  }

  $('.map-link').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 1448,
    height : 701,
    maxWidth : '100%',
    wrapCSS:'map-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });
};


$(document).ready(function(){
  if( $(window).width() > 600 ) {
    acc1();
  } else {
    $('.acc-content').removeClass( "close" );
    $('.acc-title').click(function(){
      $(this).closest('.accordion-wrap').find('.acc-content .acc-item-wrap').slideUp();
      if($(this).next('.acc-item-wrap').css('display') == 'none') {
        $(this).next('.acc-item-wrap').slideDown();
      } else {
        $(this).next('.acc-item-wrap').slideUp();
      }
      $('.acc-slider').slick('unslick');
      accSlider();
    });
  }

  if( $(window).width() > 600 ) {
    acc2();
  } else {
    $('.acc2-title').click(function(){
      $(this).closest('.accordion-wrap').find('.acc2-content .acc2-item-wrap').slideUp();
      if($(this).next('.acc2-item-wrap').css('display') == 'none') {
        $(this).next('.acc2-item-wrap').slideDown();
      } else {
        $(this).next('.acc2-item-wrap').slideUp();
      }
    });
  }
  accSlider();
  tabs();
  slider();
  map();
  burger();

  $('.acc-item').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 413,
    height : 420,
    maxWidth : '100%',
    wrapCSS:'news-wrap',
    'closeBtn' : true,
    fitToView:false,
    padding:'0'
  });

});

$(window).load(function(){

});

$(window).resize(function(){

});