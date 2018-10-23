/*
 * (c) worthapost 
 */

(function ($) {
    $('.sidebar .more-link a').addClass("btn btn-theme btn-mini");
})(jQuery);



(function ($) {
    $(document).ready(function() {
        
        // animate icons
        $('.animateIcons [class^="icon-social-"]').hover(function() {
            $(this).animate({
                marginTop: '-9px',
            },{
                queue: false,
            });
        },
        
        function(){
            $(this).animate({
                marginTop: '0',
            },{
                 queue: false,
            });
        });
        
        
        // show/hide tagline icons
        var SocialWidth = $('.social-container').css('width');
         $('#social-tagline').css({
            width: SocialWidth,
         })
         
        $('.animateIcons').hover(function() {
            $('#social-tagline').fadeToggle();
        });
        
        
        // Misc
        
        //add class to titles
        $('#contentAndSidebars .page-title').addClass(' plain-title ');
        
        // remove right margin from last views item
        $('.view-display-id-home_portfolio .portfolio-container .views-row:last-child').css('margin-right', '0px')
        
        
        // prepend div in portfolio image
        var maskWidth = $('.portfolio-container .views-field-field-image .field-content').css('width');
        var maskHeight = $('.portfolio-container .views-field-field-image .field-content').css('height');
        $('<div>', {
            'class': 'img-mask',
            css: {
                position: 'absolute',
                width: maskWidth,
                height: maskHeight,
            }
        }).prependTo('.portfolio-container .views-field-field-image .field-content');
        
        // move colored mask in image 
        $('.img-mask-hover').css({
            position: 'absolute',
            width: maskWidth,
            height: maskHeight,
        });
        
       $('.img-mask-hover').hide();
        
       $('.img-mask-hover').each(function() { 
           $(this).siblings('.views-field-field-image').children('.field-content').prepend(this);
       });
       
  
        
        // portfolio mouseover  home page   
        $('.view-display-id-home_portfolio .portfolio-container .views-field-field-image .field-content').hover(function(){         
            $(this).children(".img-mask-hover").show();         		
            $(this).children(".img-mask-hover").animate({
                            top: '0px'
            }, {duration: 200, queue: false});         
        }, function(){          
            $(this).children(".img-mask-hover").animate({
                            top: '-160px'
            }, {duration: 200, queue: false});             
        })
               
        // research portfolio     
        $('.research-container .views-field-field-image .field-content').hover(function(){         
            $(this).children(".img-mask-hover").show();         		
            $(this).children(".img-mask-hover").animate({
				top: '0px'
            }, {duration: 200, queue: false});         
        }, function(){          
            $(this).children(".img-mask-hover").animate({
				top: '-165px'
            }, {duration: 200, queue: false});             
        })
        
        // portfolio 4 cols     
        $('.view-display-id-portfolio4 .portfolio-container .views-field-field-image .field-content').hover(function(){         
            $(this).children(".img-mask-hover").show();         		
            $(this).children(".img-mask-hover").animate({
				opacity:'1'
            });         
        }, function(){          
            $(this).children(".img-mask-hover").animate({
				opacity:'0'
            });             
        })

        
    });
})(jQuery);

// jquery cycle
(function ($) {
    $('.comment-pop').cycle({
        fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
        after: setHeight,
    });
    
    function setHeight(curr, next, opts, fwd) {
        var $heigt = $(this).height();
        
        // set the container's height
        $(this).parent().animate({height: $heigt});
    } 
})(jQuery);

// sticky nav
(function ($) {
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() > 280) {
                $('#stickyHeader').slideDown(400, 'easeOutCirc');   
            } else {
                $('#stickyHeader').slideUp(400, 'easeOutCirc');
            }
        });        
    });
})(jQuery);


// search box
(function ($) {
    $(document).ready(function(){
        
        // hide block title
        $('#searchFormSkifi .blocktitle').hide();
        
        // hide search form on mobile devices
        $('#searchFormSkifi #block-search-form').addClass('hidden-phone');
        
        // animate
        $('#searchFormSkifi .form-text').focusin(function() {
           $(this).animate({
               width: 200,
           })
        });
        
        $('#searchFormSkifi .form-text').focusout(function() {
           $(this).animate({
               width: 120,
           })
        });

    });
})(jQuery);