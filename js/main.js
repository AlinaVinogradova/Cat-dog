  $(window).load(function() {
    setTimeout(function() {
      $('#preloader').fadeOut();
    }, 1000);
  });

$(document).ready(function() {
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
            
//FIXED MENU
        var $menu = $(".fixed_menu");
    $(window).scroll(function(){
            if ( $(this).scrollTop() > 1 && $menu.hasClass("default") ){
              $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 1 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll



//MOBILE MENU
    $('.to-nav-menu').click(function(){
                $(".nav-menu").animate({top:0},350);
                $('#over-menu').fadeIn();
        }); 
         
  $( "#over-menu" ).click(function() {
      $(".nav-menu").animate({top:-507},350);
      $('#over-menu').fadeOut();
});
    $( ".menu-mobile_close" ).click(function() {
      $(".nav-menu").animate({top:-507},350);
      $('#over-menu').fadeOut();
});

            
//SCROLL LEFT NAV
(function(){
var a = document.querySelector('.main_left-column_sticky'), b = null, P = 0;
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
})()


//NiceSelect
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
    
//PopUp TAB
$('div.popup-tabs-btn div').click(function(){
      var id = $(this).data('id');
      $('div.popup-tabs-btn div').removeClass('active');
      $('#tcal').css('visibility' , 'hidden');
      $(this).addClass('active');
      $('.popup-tabs_content').hide();
      $('#popup-tab_'+ id).fadeIn(400);
}); 
    
    
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
            alert("Заполните поля");
          }
        else{
            alert('Поля заполнены');
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
                    alert('error');
                    $(".nice-select .current").html("<div class='select-line-current'></div>");
                    },
                success: function(data){
                    alert('success');
                    $(".nice-select .current").html("<div class='select-line-current'></div>");
                    $('.header-top_set>ul>li:last-child img+span.top-backet-span').css('display', 'inline-block');
                }
            });
          }
    });
    
    
    <!--POP UP-->
    $('.pop-up_btn').click(function(){
      $(this).next().fadeIn(200);
   });
    $('.pop-up_about-booking').click(function(){
      $(this).next().fadeIn(200);
        $('#tcal').css('visibility' , 'hidden');
   });
    
//    function PopUpHide(){
//        $(".b-popup").fadeOut(200);
//    }
//    
//    $( ".popup-overlay" ).click(function() {
//      PopUpHide();
//    });
    $('.pop-up_about-booking_content-hide, .popup-overlay2').click(function() {
      $('.pop-up_about-booking_block').fadeOut(200);
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
    })
    
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

//Pop up бронь (время)
    $('.popup-tabs_content_right-col_time-input input, .popup-tabs_content2_left-col_time-input input').keyup(function(){
      if($(this).val().match(/^\d{1}$/)){
        $(this).next('input').focus();
      }else{
        $(this).val('');
      }
    });
    
    
});