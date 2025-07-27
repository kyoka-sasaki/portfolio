jQuery(function(){
    jQuery('ul.item-list li').addClass('icon-chevron-right');
        });

jQuery(function(){
        jQuery('.btn_jump a[href^="#"]').click(function(){
          var adjust = -50;
          var speed = 400;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top + adjust;
          jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
          jQuery('#header-wrap').css('position','unset');
          return false;
        });
      });