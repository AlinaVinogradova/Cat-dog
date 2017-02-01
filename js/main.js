  $(window).load(function() {
    setTimeout(function() {
      $('#preloader').fadeOut();
    }, 1000);
  });

$(document).ready(function() {
    
    // PRELOADER FOR LEFT MENU
    $('.main_left-column_uls .checkbox').click(function(){
        $('#preloader-checkbox').css('display', 'block')
        setTimeout(function() {
            
          $('#preloader-checkbox').fadeOut();
        }, 800);
    });
    
    
// OWL CAROUSEL    
      $("#owl-demo").owlCarousel({
          items : 4,
          slideSpeed : 300,
          paginationSpeed : 400,
          pagination : false,
          paginationNumbers: false,
          navigation : true,
          navigationText : [" "," "],
          rewindNav : true,
          scrollPerPage : false,
      });

 
      $("#owl-demo2").owlCarousel({
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          pagination: false
      });
    
    $("#owl-demo3").owlCarousel({
          items : 3,
          slideSpeed : 300,
          paginationSpeed : 400,
          pagination : false,
          paginationNumbers: false,
          navigation : true,
          navigationText : [" "," "],
          rewindNav : true,
          scrollPerPage : false,
      });
    $("#owl-demo4").owlCarousel({
          items : 3,
          slideSpeed : 300,
          paginationSpeed : 400,
          pagination : false,
          paginationNumbers: false,
          navigation : true,
          navigationText : [" "," "],
          rewindNav : true,
          scrollPerPage : false,
      });
    $(".owl-demo5").owlCarousel({
      navigation : false, // показывать кнопки next и prev 
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
  });
    $(".owl-demo6").owlCarousel({
      items : 2,
      slideSpeed : 300,
      paginationSpeed : 400,
      pagination : false,
      paginationNumbers: false,
      navigation : true,
      navigationText : [" "," "],
      rewindNav : true,
      scrollPerPage : false,
  });
    $(".owl-demo7").owlCarousel({
      navigation : false, // показывать кнопки next и prev 
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
  });
    $(".owl-demo8").owlCarousel({
      items : 2,
      slideSpeed : 300,
      paginationSpeed : 400,
      pagination : false,
      paginationNumbers: false,
      navigation : true,
      navigationText : [" "," "],
      rewindNav : true,
      scrollPerPage : false,
  });
            
//FIXED MENU
//    var sw = window.innerWidth;
//    if(sw > 992){
//        var $menu = $(".fixed_menu");
//    $(window).scroll(function(){
//            if ( $(this).scrollTop() > 1 && $menu.hasClass("default") ){
//              $menu.removeClass("default").addClass("fixed");
//            } else if($(this).scrollTop() <= 1 && $menu.hasClass("fixed")) {
//                $menu.removeClass("fixed").addClass("default");
//            }
//        });//scroll
//    }
        



//MOBILE MENU
    $('.to-nav-menu').click(function(){
                $(".nav-menu").animate({top:0},350);
                $('#over-menu').fadeIn();
        
        }); 
         
//  $( "#over-menu" ).click(function() {
//      $(".nav-menu").animate({top:-507},350);
//      $('#over-menu').fadeOut();
//});
    $( ".menu-mobile_close" ).click(function() {
        var height = $('#menu-mobile').innerHeight();
      $(".nav-menu").animate({top: -height},350);
      $('#over-menu').fadeOut();
});
    
    $('ul.menu-mobile_main li.menu-item-has-children > a').on('click', function(event){
        event.preventDefault();
        let parent = $(this).parent('li');
        parent.toggleClass('active');
        parent.children('.menu-mobile_submenu')
            .toggleClass('active')
            .slideToggle(300);
    });

            
//SCROLL LEFT NAV
function leftNav(){
var a = document.querySelector('.main_left-column_sticky'), b = null, P = 0;
if(a){
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.watched-products').getBoundingClientRect().top);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
    var sw = window.innerWidth;
    if(sw > 992){
      if ((Ra.top - P) <= 100) {
        if ((Ra.top - P) <= (R+100)) {
          b.className = 'stop';
          b.style.top = - R-60 +'px';
        } else {
          b.className = 'sticky';
          b.style.top = 100 + 'px';
        }
      } else {
        b.className = '';
        b.style.top = '';
      }
    } else{
        b.className = '';
        b.style.top = '';
    }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
}
}leftNav()
            
//SCROLL PERSONAL AACCOUNT NAV
function accountNav(){
var a = document.querySelector('.personal-account-main_left-column_sticky'), b = null, P = 0;
if(a){
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.footer').getBoundingClientRect().top);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
    var sw = window.innerWidth;
    if(sw > 992){
      if ((Ra.top - P) <= 140) {
        if ((Ra.top - P) <= (R+140)) {
          b.className = 'stop';
          b.style.top = - R-60 +'px';
        } else {
          b.className = 'sticky';
          b.style.top = 140 + 'px';
        }
      } else {
        b.className = '';
        b.style.top = '';
      }
    } else{
        b.className = '';
        b.style.top = '';
    }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
}
}accountNav()


//NiceSelect
$('.personal-account-pet-main_content-info_select-type').niceSelect();           
var selectLine = '<div class="select-line-current">'
$('.single-product_main_select  span.current').html(selectLine);
    
    $('select.single-product_main_select').niceSelect();           
var selectLine = '<div class="select-line-current">'
$('.single-product_main_select  span.current').html(selectLine);
            
            
//Single product TAB
$('div.about-single-product div').click(function(){
      var id = $(this).data('id');
      $('div.about-single-product div').removeClass('active');
      $(this).addClass('active');
      $('.tabs_content').hide();
      $('#tab_'+ id).fadeIn(400);
});
    
    
//Account menu TAB
$('div.account-menu-btn div').click(function(){
      var id = $(this).data('id');
     $('div.account-menu-btn div').removeClass('active');
      $(this).addClass('active');
      $('.account-menu_content').hide();
      $('#account-menu-tab_'+ id).fadeIn(100);
});
$('.account-menu').hover(function(){
    }, function(){
    $('.account-menu_content').css("display", "none");
    $('div.account-menu-btn div').removeClass('active');
});
    
    //BASKET PLUS MINUS
    $('.minus').click(function () {
                    var $input = $(this).parent().find('input');
                    var count = parseInt($input.val()) - 1;
                    count = count < 1 ? 1 : count;
                    $input.val(count);
                    $input.change();
                    return false;
                });
                $('.plus').click(function () {
                    var $input = $(this).parent().find('input');
                    $input.val(parseInt($input.val()) + 1);
                    $input.change();
                    return false;
            });
    //BASKET HIPE SINGLE PRODUCT
    $('.personal-account-basket-main_content-inside_single-product-hide').click(function(){
                    $(this).parent('.personal-account-basket-main_content-inside_single-product').hide();
                })
    
//Comment rating (Stars)
    $('.tabs_your_comment_top_stars span').hover( function(){
        $('.tabs_your_comment_top_stars span').removeClass('tabs_your_comment_top_star-img_hover');
        $(this).addClass('tabs_your_comment_top_star-img_hover');
        $(this).prevAll().addClass('tabs_your_comment_top_star-img_hover');
    }, function() {
        if($(this).hasClass('tabs_your_comment_top_star-img_background-position')){
        } else{
            $(this).removeClass('tabs_your_comment_top_star-img_hover');
            $(this).prevAll().removeClass('tabs_your_comment_top_star-img_hover');
        }
  });
    $('.tabs_your_comment_top_stars span').click(function(){
        $('.tabs_your_comment_top_stars span').removeClass('tabs_your_comment_top_star-img_background-position');
        $(this).toggleClass('tabs_your_comment_top_star-img_background-position');
        $(this).prevAll().toggleClass('tabs_your_comment_top_star-img_background-position');
    })
    
    
//Отправка заказа на почту (single product)
    $('.single-product_main-buy').click(function(event){
        event.preventDefault();

        if ($('.nice-select .current div').hasClass('select-line-current')) {
          }
        else{
            var title = $('.single-product_main').data('title'),
                id = $('.single-product_main').data('id'),
                price = $('.single-product_main_price').html(),
                data = $('.single-product_main_selects div:first-child .nice-select li.selected').data('value'),
                data2 = $('.single-product_main_selects div:nth-child(2) .nice-select li.selected').data('value'),
                data3= $('.single-product_main_selects div:nth-child(3) .nice-select li.selected').data('value');
            jQuery.ajax({
                method: 'POST',
                url: "",
                data: {data, data2, data3, title, id},
                error: function(){
                    $(".nice-select .current").html("<div class='select-line-current'></div>");
                    },
                success: function(data){
                    $(".nice-select .current").html("<div class='select-line-current'></div>");
                    $('.header-top_set>ul>li:last-child img+span.top-backet-span').css('display', 'inline-block');
                }
            });
          }
    });
    
    
    
//POP UP
    function PopUpHide(){
        $(".b-popup").css('display', 'none');
    }
    $('.index_main_btn-mag').click(function(){
      $(this).next().fadeIn(200);
   });
    $( ".popup-overlay" ).click(function() {
        $(".b-popup").css('display', 'none');
    });
    $('.pop-up_about-booking_content-hide').click(function() {
      $('.pop-up_about-booking_block').fadeOut(200);
    });


 
    
    $('.header-top_set_registration').click(function(event){
        event.preventDefault();
		jQuery.ajax({
			url: '../pop-up/registration.html',
            cache: false, 
			success: function(html){
				$('.b-popup-regist').html(html).css('display', 'block');
                $( ".popup-overlay" ).click(function() {
                    $('.b-popup.b-popup-regist').css('display', 'none');
    });
			}
		});
    });
    
    
    $('.header-top_set_enter').click(function(event){
        event.preventDefault();
		jQuery.ajax({
			url: '../pop-up/enter.html',
            cache: false, 
			success: function(html){
				$('.b-popup-enter').html(html).css('display', 'block');
                $( ".popup-overlay" ).click(function() {
                    $('.b-popup.b-popup-enter').css('display', 'none');
    });
			}
		});
    });
    
    $('.header-top_set_basket').click(function(event){
        event.preventDefault();
		jQuery.ajax({
			url: '../pop-up/basket.html',
            cache: false, 
			success: function(html){
				$('.b-popup-basket').html(html).css('display', 'block');
                $( ".popup-overlay, .pop-up_basket-hide" ).click(function() {
                    $('.b-popup.b-popup-basket').css('display', 'none');
                });
                //Pop up корзина (количество)
                $('.minus').click(function () {
                    var $input = $(this).parent().find('input');
                    var count = parseInt($input.val()) - 1;
                    count = count < 1 ? 1 : count;
                    $input.val(count);
                    $input.change();
                    return false;
                });
                $('.plus').click(function () {
                    var $input = $(this).parent().find('input');
                    $input.val(parseInt($input.val()) + 1);
                    $input.change();
                    return false;
            });
                $('.pop-up_basket-inside_single-product-hide').click(function(){
                    $(this).parent('.pop-up_basket-inside_single-product').hide();
                })
			}
		});
    });
    
    $('.buy-click').click(function(event){
        event.preventDefault();
		jQuery.ajax({
			url: '../pop-up/booking.html',
            cache: false, 
			success: function(html){
				$('.b-popup-booking').html(html).css('display', 'block');
                 var script = '<script src="js/tcal.js"></script>';
                $('head').append(script);
                f_tcalInit();
                $( ".popup-overlay" ).click(function() {
                      $('.b-popup.b-popup-booking').css('display', 'none');
                    });
                $('.pop-up_about-booking').click(function(){
                      $('.pop-up_about-booking_block').css('display', 'block');
                      $('#tcal').css('visibility' , 'hidden');
                    });
                $('.pop-up_about-booking_content-hide').click(function(){
                      $('.pop-up_about-booking_block').css('display', 'none');
                    });
                //PopUp TAB
                $('div.popup-tabs-btn div').click(function(){
                      var id = $(this).data('id');
                      $('div.popup-tabs-btn div').removeClass('active');
                      $('#tcal').css('visibility' , 'hidden');
                      $(this).addClass('active');
                      $('.popup-tabs_content').hide();
                      $('#popup-tab_'+ id).fadeIn(400);
                });
                //Регулярные выражения для проверки времени
                $('.popup-tabs_content_submit').click(function(){
                var hour1 = $('.popup-tabs_content_right-col_time-input input:first-child').val(),
                    hour2 = $('.popup-tabs_content_right-col_time-input input:nth-child(2)').val(),
                    minutes1 = $('.popup-tabs_content_right-col_time-input input:nth-child(4)').val(),
                    minutes2 = $('.popup-tabs_content_right-col_time-input input:nth-child(5)').val(),
                    hour12 = $('.popup-tabs_content2_left-col_time-input input:first-child').val(),
                    hour22 = $('.popup-tabs_content2_left-col_time-input input:nth-child(2)').val(),
                    minutes12 = $('.popup-tabs_content2_left-col_time-input input:nth-child(4)').val(),
                    minutes22 = $('.popup-tabs_content2_left-col_time-input input:nth-child(5)').val(),
                    hour1_pattern = /[0-1]{1}/,
                    hour2_pattern = /\d{1}/,
                    minutes1_pattern = /\d{1}/,
                    minutes2_pattern = /\d{1}/;
                var prov1 = hour1_pattern.test(hour1);
                var prov2 = hour2_pattern.test(hour2);
                var prov3 = minutes1_pattern.test(minutes1);
                var prov4 = minutes2_pattern.test(minutes2);
                var prov12 = hour1_pattern.test(hour12);
                var prov22 = hour2_pattern.test(hour22);
                var prov32 = minutes1_pattern.test(minutes12);
                var prov42 = minutes2_pattern.test(minutes22);
                    if (prov1==true && prov2==true && prov3==true && prov4==true || prov12==true && prov22==true && prov32==true && prov42==true) {
                            alert("Вы зарегистрированы!");
                      }
                        else{
                            alert("Введенные данные некорректны!");
                      }
                });
                //Pop up бронь (время)
                $('.popup-tabs_content_right-col_time-input input, .popup-tabs_content2_left-col_time-input input').keyup(function(){
                  if($(this).val().match(/^\d{1}$/)){
                    $(this).next('input').focus();
                  }else{
                    $(this).val('');
                  }
                });
			}
            

		});
    });

    var redact = $('.personal-account-main_content-info>div>span:last-child, .personal-account-pet-main_content-info>div>span:last-child, .personal-account-kennel-main_content-info>div>span:last-child');
    
    redact.click(function(){
        var redacted_input = $(this).siblings('.account_show-input').val(),
            redacted_input2 = $(this).siblings('.account_hidden-input').val(),
            redact_val = $(this).siblings('span').text();
        
       
        $(this).siblings('.account_hidden-input').val(redact_val);
        $(this).siblings('span').text(redacted_input).toggle();
        $(this).siblings('.account_hidden-input').toggleClass('account_show-input');
    });

//FOR BASKET PAGE
//Pop up корзина (количество)
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
});
    $('.basket-inside_single-product-hide').click(function(){
        $(this).parent('.basket-inside_single-product').hide();
    })    
    
    
    
});