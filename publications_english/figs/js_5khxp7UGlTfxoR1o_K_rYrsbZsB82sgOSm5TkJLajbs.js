/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*!
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008-2012 M. Alsup
 * Version: 1.6 (02-MAY-2012)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($) {
"use strict";

var ver = 'Lite-1.6';

$.fn.cycle = function(options) {
    return this.each(function() {
        options = options || {};
        
        if (this.cycleTimeout) clearTimeout(this.cycleTimeout);

        this.cycleTimeout = 0;
        this.cyclePause = 0;
        
        var $cont = $(this);
        var $slides = options.slideExpr ? $(options.slideExpr, this) : $cont.children();
        var els = $slides.get();
        if (els.length < 2) {
            if (window.console)
                console.log('terminating; too few slides: ' + els.length);
            return; // don't bother
        }

        // support metadata plugin (v1.0 and v2.0)
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
        if (meta)
            opts = $.extend(opts, meta);
            
        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];
        opts.after.unshift(function(){ opts.busy=0; });
            
        // allow shorthand overrides of width, height and timeout
        var cls = this.className;
        opts.width = parseInt((cls.match(/w:(\d+)/)||[])[1], 10) || opts.width;
        opts.height = parseInt((cls.match(/h:(\d+)/)||[])[1], 10) || opts.height;
        opts.timeout = parseInt((cls.match(/t:(\d+)/)||[])[1], 10) || opts.timeout;

        if ($cont.css('position') == 'static') 
            $cont.css('position', 'relative');
        if (opts.width) 
            $cont.width(opts.width);
        if (opts.height && opts.height != 'auto') 
            $cont.height(opts.height);

        var first = 0;
        $slides.css({position: 'absolute', top:0}).each(function(i) {
            $(this).css('z-index', els.length-i);
        });
        
        $(els[first]).css('opacity',1).show(); // opacity bit needed to handle reinit case
        if ($.browser.msie) els[first].style.removeAttribute('filter');

        if (opts.fit && opts.width) 
            $slides.width(opts.width);
        if (opts.fit && opts.height && opts.height != 'auto') 
            $slides.height(opts.height);
        if (opts.pause) 
            $cont.hover(function(){this.cyclePause=1;}, function(){this.cyclePause=0;});

        var txFn = $.fn.cycle.transitions[opts.fx];
        if (txFn)
            txFn($cont, $slides, opts);
        
        $slides.each(function() {
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : $el.height();
            this.cycleW = (opts.fit && opts.width) ? opts.width : $el.width();
        });

        if (opts.cssFirst)
            $($slides[first]).css(opts.cssFirst);

        if (opts.timeout) {
            // ensure that timeout and speed settings are sane
            if (opts.speed.constructor == String)
                opts.speed = {slow: 600, fast: 200}[opts.speed] || 400;
            if (!opts.sync)
                opts.speed = opts.speed / 2;
            while((opts.timeout - opts.speed) < 250)
                opts.timeout += opts.speed;
        }
        opts.speedIn = opts.speed;
        opts.speedOut = opts.speed;

        opts.slideCount = els.length;
        opts.currSlide = first;
        opts.nextSlide = 1;

        // fire artificial events
        var e0 = $slides[first];
        if (opts.before.length)
            opts.before[0].apply(e0, [e0, e0, opts, true]);
        if (opts.after.length > 1)
            opts.after[1].apply(e0, [e0, e0, opts, true]);
        
        if (opts.click && !opts.next)
            opts.next = opts.click;
        if (opts.next)
            $(opts.next).unbind('click.cycle').bind('click.cycle', function(){return advance(els,opts,opts.rev?-1:1);});
        if (opts.prev)
            $(opts.prev).unbind('click.cycle').bind('click.cycle', function(){return advance(els,opts,opts.rev?1:-1);});

        if (opts.timeout)
            this.cycleTimeout = setTimeout(function() {
                go(els,opts,0,!opts.rev);
            }, opts.timeout + (opts.delay||0));
    });
};

function go(els, opts, manual, fwd) {
    if (opts.busy) 
        return;
    var p = els[0].parentNode, curr = els[opts.currSlide], next = els[opts.nextSlide];
    if (p.cycleTimeout === 0 && !manual) 
        return;

    if (manual || !p.cyclePause) {
        if (opts.before.length)
            $.each(opts.before, function(i,o) { o.apply(next, [curr, next, opts, fwd]); });
        var after = function() {
            if ($.browser.msie)
                this.style.removeAttribute('filter');
            $.each(opts.after, function(i,o) { o.apply(next, [curr, next, opts, fwd]); });
            queueNext(opts);
        };

        if (opts.nextSlide != opts.currSlide) {
            opts.busy = 1;
            $.fn.cycle.custom(curr, next, opts, after);
        }
        var roll = (opts.nextSlide + 1) == els.length;
        opts.nextSlide = roll ? 0 : opts.nextSlide+1;
        opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
    } else {
      queueNext(opts);
    }

    function queueNext(opts) {
        if (opts.timeout)
            p.cycleTimeout = setTimeout(function() { go(els,opts,0,!opts.rev); }, opts.timeout);
    }
}

// advance slide forward or back
function advance(els, opts, val) {
    var p = els[0].parentNode, timeout = p.cycleTimeout;
    if (timeout) {
        clearTimeout(timeout);
        p.cycleTimeout = 0;
    }
    opts.nextSlide = opts.currSlide + val;
    if (opts.nextSlide < 0) {
        opts.nextSlide = els.length - 1;
    }
    else if (opts.nextSlide >= els.length) {
        opts.nextSlide = 0;
    }
    go(els, opts, 1, val>=0);
    return false;
}

$.fn.cycle.custom = function(curr, next, opts, cb) {
    var $l = $(curr), $n = $(next);
    $n.css(opts.cssBefore);
    var fn = function() {$n.animate(opts.animIn, opts.speedIn, opts.easeIn, cb);};
    $l.animate(opts.animOut, opts.speedOut, opts.easeOut, function() {
        $l.css(opts.cssAfter);
        if (!opts.sync)
            fn();
    });
    if (opts.sync)
        fn();
};

$.fn.cycle.transitions = {
    fade: function($cont, $slides, opts) {
        $slides.not(':eq(0)').hide();
        opts.cssBefore = { opacity: 0, display: 'block' };
        opts.cssAfter  = { display: 'none' };
        opts.animOut = { opacity: 0 };
        opts.animIn = { opacity: 1 };
    },
    fadeout: function($cont, $slides, opts) {
        opts.before.push(function(curr,next,opts,fwd) {
            $(curr).css('zIndex',opts.slideCount + (fwd === true ? 1 : 0));
            $(next).css('zIndex',opts.slideCount + (fwd === true ? 0 : 1));
        });
        $slides.not(':eq(0)').hide();
        opts.cssBefore = { opacity: 1, display: 'block', zIndex: 1 };
        opts.cssAfter  = { display: 'none', zIndex: 0 };
        opts.animOut = { opacity: 0 };
        opts.animIn = { opacity: 1 };
    }
};

$.fn.cycle.ver = function() { return ver; };

// @see: http://malsup.com/jquery/cycle/lite/
$.fn.cycle.defaults = {
    animIn:        {},
    animOut:       {},
    fx:           'fade',
    after:         null,
    before:        null,
    cssBefore:     {},
    cssAfter:      {},
    delay:         0,
    fit:           0,
    height:       'auto',
    metaAttr:     'cycle',
    next:          null,
    pause:         false,
    prev:          null,
    speed:         1000,
    slideExpr:     null,
    sync:          true,
    timeout:       4000
};

})(jQuery);
;
/*! http://tinynav.viljamis.com v1.05 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var d=a.extend({active:"selected",header:""},j);return this.each(function(){g++;var h=a(this),e="tinynav"+g,f=".l_"+e,b=a("<select/>").addClass("tinynav "+e);if(h.is("ul,ol")){""!==d.header&&b.append(a("<option/>").text(d.header));var c="";h.addClass("l_"+e).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});b.append(c);d.header||b.find(":eq("+
a(f+" li").index(a(f+" li."+d.active))+")").attr("selected",!0);b.change(function(){i.location.href=a(this).val()});a(f).after(b)}})}})(jQuery,this,0);;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 600,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: true,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
/*custom.min*/
	
jQuery(document).ready(function($){
	//portfolio - show link
	$('.fdw-background').hover(
		function () {
			$(this).animate({opacity:'1'});
		},
		function () {
			$(this).animate({opacity:'0'});
		}
	);	
});
;
// ColorBox v1.3.20.1 - jQuery lightbox plugin
// (c) 2012 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(e,t,n){function G(n,r,i){var o=t.createElement(n);return r&&(o.id=s+r),i&&(o.style.cssText=i),e(o)}function Y(e){var t=T.length,n=(U+e)%t;return n<0?t+n:n}function Z(e,t){return Math.round((/%/.test(e)?(t==="x"?tt():nt())/100:1)*parseInt(e,10))}function et(e){return B.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(e)}function tt(){return n.innerWidth||N.width()}function nt(){return n.innerHeight||N.height()}function rt(){var t,n=e.data(R,i);n==null?(B=e.extend({},r),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},n);for(t in B)e.isFunction(B[t])&&t.slice(0,2)!=="on"&&(B[t]=B[t].call(R));B.rel=B.rel||R.rel||"nofollow",B.href=B.href||e(R).attr("href"),B.title=B.title||R.title,typeof B.href=="string"&&(B.href=e.trim(B.href))}function it(t,n){e.event.trigger(t),n&&n.call(R)}function st(){var e,t=s+"Slideshow_",n="click."+s,r,i,o;B.slideshow&&T[1]?(r=function(){M.text(B.slideshowStop).unbind(n).bind(f,function(){if(B.loop||T[U+1])e=setTimeout(J.next,B.slideshowSpeed)}).bind(a,function(){clearTimeout(e)}).one(n+" "+l,i),g.removeClass(t+"off").addClass(t+"on"),e=setTimeout(J.next,B.slideshowSpeed)},i=function(){clearTimeout(e),M.text(B.slideshowStart).unbind([f,a,l,n].join(" ")).one(n,function(){J.next(),r()}),g.removeClass(t+"on").addClass(t+"off")},B.slideshowAuto?r():i()):g.removeClass(t+"off "+t+"on")}function ot(t){V||(R=t,rt(),T=e(R),U=0,B.rel!=="nofollow"&&(T=e("."+o).filter(function(){var t=e.data(this,i),n;return t&&(n=t.rel||this.rel),n===B.rel}),U=T.index(R),U===-1&&(T=T.add(R),U=T.length-1)),W||(W=X=!0,g.show(),B.returnFocus&&e(R).blur().one(c,function(){e(this).focus()}),m.css({opacity:+B.opacity,cursor:B.overlayClose?"pointer":"auto"}).show(),B.w=Z(B.initialWidth,"x"),B.h=Z(B.initialHeight,"y"),J.position(),d&&N.bind("resize."+v+" scroll."+v,function(){m.css({width:tt(),height:nt(),top:N.scrollTop(),left:N.scrollLeft()})}).trigger("resize."+v),it(u,B.onOpen),H.add(A).hide(),P.html(B.close).show()),J.load(!0))}function ut(){!g&&t.body&&(Q=!1,N=e(n),g=G(K).attr({id:i,"class":p?s+(d?"IE6":"IE"):""}).hide(),m=G(K,"Overlay",d?"position:absolute":"").hide(),L=G(K,"LoadingOverlay").add(G(K,"LoadingGraphic")),y=G(K,"Wrapper"),b=G(K,"Content").append(C=G(K,"LoadedContent","width:0; height:0; overflow:hidden"),A=G(K,"Title"),O=G(K,"Current"),_=G(K,"Next"),D=G(K,"Previous"),M=G(K,"Slideshow").bind(u,st),P=G(K,"Close")),y.append(G(K).append(G(K,"TopLeft"),w=G(K,"TopCenter"),G(K,"TopRight")),G(K,!1,"clear:left").append(E=G(K,"MiddleLeft"),b,S=G(K,"MiddleRight")),G(K,!1,"clear:left").append(G(K,"BottomLeft"),x=G(K,"BottomCenter"),G(K,"BottomRight"))).find("div div").css({"float":"left"}),k=G(K,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),H=_.add(D).add(O).add(M),e(t.body).append(m,g.append(y,k)))}function at(){return g?(Q||(Q=!0,j=w.height()+x.height()+b.outerHeight(!0)-b.height(),F=E.width()+S.width()+b.outerWidth(!0)-b.width(),I=C.outerHeight(!0),q=C.outerWidth(!0),g.css({"padding-bottom":j,"padding-right":F}),_.click(function(){J.next()}),D.click(function(){J.prev()}),P.click(function(){J.close()}),m.click(function(){B.overlayClose&&J.close()}),e(t).bind("keydown."+s,function(e){var t=e.keyCode;W&&B.escKey&&t===27&&(e.preventDefault(),J.close()),W&&B.arrowKey&&T[1]&&(t===37?(e.preventDefault(),D.click()):t===39&&(e.preventDefault(),_.click()))}),e("."+o,t).live("click",function(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),ot(this))})),!0):!1}var r={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p=!e.support.opacity&&!e.support.style,d=p&&!n.XMLHttpRequest,v=s+"_IE6",m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K="div",Q;if(e.colorbox)return;e(ut),J=e.fn[i]=e[i]=function(t,n){var s=this;t=t||{},ut();if(at()){if(!s[0]){if(s.selector)return s;s=e("<a/>"),t.open=!0}n&&(t.onComplete=n),s.each(function(){e.data(this,i,e.extend({},e.data(this,i)||r,t))}).addClass(o),(e.isFunction(t.open)&&t.open.call(s)||t.open)&&ot(s[0])}return s},J.position=function(e,t){function f(e){w[0].style.width=x[0].style.width=b[0].style.width=e.style.width,b[0].style.height=E[0].style.height=S[0].style.height=e.style.height}var n,r=0,i=0,o=g.offset(),u,a;N.unbind("resize."+s),g.css({top:-9e4,left:-9e4}),u=N.scrollTop(),a=N.scrollLeft(),B.fixed&&!d?(o.top-=u,o.left-=a,g.css({position:"fixed"})):(r=u,i=a,g.css({position:"absolute"})),B.right!==!1?i+=Math.max(tt()-B.w-q-F-Z(B.right,"x"),0):B.left!==!1?i+=Z(B.left,"x"):i+=Math.round(Math.max(tt()-B.w-q-F,0)/2),B.bottom!==!1?r+=Math.max(nt()-B.h-I-j-Z(B.bottom,"y"),0):B.top!==!1?r+=Z(B.top,"y"):r+=Math.round(Math.max(nt()-B.h-I-j,0)/2),g.css({top:o.top,left:o.left}),e=g.width()===B.w+q&&g.height()===B.h+I?0:e||0,y[0].style.width=y[0].style.height="9999px",n={width:B.w+q,height:B.h+I,top:r,left:i},e===0&&g.css(n),g.dequeue().animate(n,{duration:e,complete:function(){f(this),X=!1,y[0].style.width=B.w+q+F+"px",y[0].style.height=B.h+I+j+"px",B.reposition&&setTimeout(function(){N.bind("resize."+s,J.position)},1),t&&t()},step:function(){f(this)}})},J.resize=function(e){W&&(e=e||{},e.width&&(B.w=Z(e.width,"x")-q-F),e.innerWidth&&(B.w=Z(e.innerWidth,"x")),C.css({width:B.w}),e.height&&(B.h=Z(e.height,"y")-I-j),e.innerHeight&&(B.h=Z(e.innerHeight,"y")),!e.innerHeight&&!e.height&&(C.css({height:"auto"}),B.h=C.height()),C.css({height:B.h}),J.position(B.transition==="none"?0:B.speed))},J.prep=function(t){function o(){return B.w=B.w||C.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function u(){return B.h=B.h||C.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(!W)return;var n,r=B.transition==="none"?0:B.speed;C.remove(),C=G(K,"LoadedContent").append(t),C.hide().appendTo(k.show()).css({width:o(),overflow:B.scrolling?"auto":"hidden"}).css({height:u()}).prependTo(b),k.hide(),e(z).css({"float":"none"}),d&&e("select").not(g.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(l,function(){this.style.visibility="inherit"}),n=function(){function y(){p&&g[0].style.removeAttribute("filter")}var t,n,o=T.length,u,a="frameBorder",l="allowTransparency",c,d,v,m;if(!W)return;c=function(){clearTimeout($),L.detach().hide(),it(f,B.onComplete)},p&&z&&C.fadeIn(100),A.html(B.title).add(C).show();if(o>1){typeof B.current=="string"&&O.html(B.current.replace("{current}",U+1).replace("{total}",o)).show(),_[B.loop||U<o-1?"show":"hide"]().html(B.next),D[B.loop||U?"show":"hide"]().html(B.previous),B.slideshow&&M.show();if(B.preloading){t=[Y(-1),Y(1)];while(n=T[t.pop()])m=e.data(n,i),m&&m.href?(d=m.href,e.isFunction(d)&&(d=d.call(n))):d=n.href,et(d)&&(v=new Image,v.src=d)}}else H.hide();B.iframe?(u=G("iframe")[0],a in u&&(u[a]=0),l in u&&(u[l]="true"),u.name=s+ +(new Date),B.fastIframe?c():e(u).one("load",c),u.src=B.href,B.scrolling||(u.scrolling="no"),e(u).addClass(s+"Iframe").appendTo(C).one(h,function(){u.src="//about:blank"})):c(),B.transition==="fade"?g.fadeTo(r,1,y):y()},B.transition==="fade"?g.fadeTo(r,0,function(){J.position(0,n)}):J.position(r,n)},J.load=function(t){var n,r,i=J.prep;X=!0,z=!1,R=T[U],t||rt(),it(h),it(a,B.onLoad),B.h=B.height?Z(B.height,"y")-I-j:B.innerHeight&&Z(B.innerHeight,"y"),B.w=B.width?Z(B.width,"x")-q-F:B.innerWidth&&Z(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=Z(B.maxWidth,"x")-q-F,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=Z(B.maxHeight,"y")-I-j,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,$=setTimeout(function(){L.show().appendTo(b)},100),B.inline?(G(K).hide().insertBefore(e(n)[0]).one(h,function(){e(this).replaceWith(C.children())}),i(e(n))):B.iframe?i(" "):B.html?i(B.html):et(n)?(e(z=new Image).addClass(s+"Photo").error(function(){B.title=!1,i(G(K,"Error").html(B.imgError))}).load(function(){var e;z.onload=null,B.scalePhotos&&(r=function(){z.height-=z.height*e,z.width-=z.width*e},B.mw&&z.width>B.mw&&(e=(z.width-B.mw)/z.width,r()),B.mh&&z.height>B.mh&&(e=(z.height-B.mh)/z.height,r())),B.h&&(z.style.marginTop=Math.max(B.h-z.height,0)/2+"px"),T[1]&&(B.loop||T[U+1])&&(z.style.cursor="pointer",z.onclick=function(){J.next()}),p&&(z.style.msInterpolationMode="bicubic"),setTimeout(function(){i(z)},1)}),setTimeout(function(){z.src=n},1)):n&&k.load(n,B.data,function(t,n,r){i(n==="error"?G(K,"Error").html(B.xhrError):e(this).contents())})},J.next=function(){!X&&T[1]&&(B.loop||T[U+1])&&(U=Y(1),J.load())},J.prev=function(){!X&&T[1]&&(B.loop||U)&&(U=Y(-1),J.load())},J.close=function(){W&&!V&&(V=!0,W=!1,it(l,B.onCleanup),N.unbind("."+s+" ."+v),m.fadeTo(200,0),g.stop().fadeTo(300,0,function(){g.add(m).css({opacity:1,cursor:"auto"}).hide(),it(h),C.remove(),setTimeout(function(){V=!1,it(c,B.onClosed)},1)}))},J.remove=function(){e([]).add(g).add(m).remove(),g=null,e("."+o).removeData(i).removeClass(o).die()},J.element=function(){return e(R)},J.settings=r})(jQuery,document,this);;
/*

Quicksand 1.2.1

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

*/

(function ($) {
    $.fn.quicksand = function (collection, customOptions) {     
        var options = {
            duration: 750,
            easing: 'swing',
            attribute: 'data-id', // attribute to recognize same items within source and dest
            adjustHeight: 'auto', // 'dynamic' animates height during shuffling (slow), 'auto' adjusts it before or after the animation, false leaves height constant
            useScaling: true, // disable it if you're not using scaling effect or want to improve performance
            enhancement: function(c) {}, // Visual enhacement (eg. font replacement) function for cloned elements
            selector: '> *',
            dx: 0,
            dy: 0
        };
        $.extend(options, customOptions);
        
        if ($.browser.msie || (typeof($.fn.scale) == 'undefined')) {
            // Got IE and want scaling effect? Kiss my ass.
            options.useScaling = false;
        }
        
        var callbackFunction;
        if (typeof(arguments[1]) == 'function') {
            var callbackFunction = arguments[1];
        } else if (typeof(arguments[2] == 'function')) {
            var callbackFunction = arguments[2];
        }
    
        
        return this.each(function (i) {
            var val;
            var animationQueue = []; // used to store all the animation params before starting the animation; solves initial animation slowdowns
            var $collection = $(collection).clone(); // destination (target) collection
            var $sourceParent = $(this); // source, the visible container of source collection
            var sourceHeight = $(this).css('height'); // used to keep height and document flow during the animation
            
            var destHeight;
            var adjustHeightOnCallback = false;
            
            var offset = $($sourceParent).offset(); // offset of visible container, used in animation calculations
            var offsets = []; // coordinates of every source collection item            
            
            var $source = $(this).find(options.selector); // source collection items
            
            // Replace the collection and quit if IE6
            if ($.browser.msie && $.browser.version.substr(0,1)<7) {
                $sourceParent.html('').append($collection);
                return;
            }

            // Gets called when any animation is finished
            var postCallbackPerformed = 0; // prevents the function from being called more than one time
            var postCallback = function () {
                
                if (!postCallbackPerformed) {
                    postCallbackPerformed = 1;
                    
                    // hack: 
                    // used to be: $sourceParent.html($dest.html()); // put target HTML into visible source container
                    // but new webkit builds cause flickering when replacing the collections
                    $toDelete = $sourceParent.find('> *');
                    $sourceParent.prepend($dest.find('> *'));
                    $toDelete.remove();
                         
                    if (adjustHeightOnCallback) {
                        $sourceParent.css('height', destHeight);
                    }
                    options.enhancement($sourceParent); // Perform custom visual enhancements on a newly replaced collection
                    if (typeof callbackFunction == 'function') {
                        callbackFunction.call(this);
                    }                    
                }
            };
            
            // Position: relative situations
            var $correctionParent = $sourceParent.offsetParent();
            var correctionOffset = $correctionParent.offset();
            if ($correctionParent.css('position') == 'relative') {
                if ($correctionParent.get(0).nodeName.toLowerCase() == 'body') {

                } else {
                    correctionOffset.top += (parseFloat($correctionParent.css('border-top-width')) || 0);
                    correctionOffset.left +=( parseFloat($correctionParent.css('border-left-width')) || 0);
                }
            } else {
                correctionOffset.top -= (parseFloat($correctionParent.css('border-top-width')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('border-left-width')) || 0);
                correctionOffset.top -= (parseFloat($correctionParent.css('margin-top')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('margin-left')) || 0);
            }
            
            // perform custom corrections from options (use when Quicksand fails to detect proper correction)
            if (isNaN(correctionOffset.left)) {
                correctionOffset.left = 0;
            }
            if (isNaN(correctionOffset.top)) {
                correctionOffset.top = 0;
            }
            
            correctionOffset.left -= options.dx;
            correctionOffset.top -= options.dy;

            // keeps nodes after source container, holding their position
            $sourceParent.css('height', $(this).height());
            
            // get positions of source collections
            $source.each(function (i) {
                offsets[i] = $(this).offset();
            });
            
            // stops previous animations on source container
            $(this).stop();
            var dx = 0; var dy = 0;
            $source.each(function (i) {
                $(this).stop(); // stop animation of collection items
                var rawObj = $(this).get(0);
                if (rawObj.style.position == 'absolute') {
                    dx = -options.dx;
                    dy = -options.dy;
                } else {
                    dx = options.dx;
                    dy = options.dy;                    
                }

                rawObj.style.position = 'absolute';
                rawObj.style.margin = '0';

                rawObj.style.top = (offsets[i].top - parseFloat(rawObj.style.marginTop) - correctionOffset.top + dy) + 'px';
                rawObj.style.left = (offsets[i].left - parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx) + 'px';
            });
                    
            // create temporary container with destination collection
            var $dest = $($sourceParent).clone();
            var rawDest = $dest.get(0);
            rawDest.innerHTML = '';
            rawDest.setAttribute('id', '');
            rawDest.style.height = 'auto';
            rawDest.style.width = $sourceParent.width() + 'px';
            $dest.append($collection);      
            // insert node into HTML
            // Note that the node is under visible source container in the exactly same position
            // The browser render all the items without showing them (opacity: 0.0)
            // No offset calculations are needed, the browser just extracts position from underlayered destination items
            // and sets animation to destination positions.
            $dest.insertBefore($sourceParent);
            $dest.css('opacity', 0.0);
            rawDest.style.zIndex = -1;
            
            rawDest.style.margin = '0';
            rawDest.style.position = 'absolute';
            rawDest.style.top = offset.top - correctionOffset.top + 'px';
            rawDest.style.left = offset.left - correctionOffset.left + 'px';
            
            
    
            

            if (options.adjustHeight === 'dynamic') {
                // If destination container has different height than source container
                // the height can be animated, adjusting it to destination height
                $sourceParent.animate({height: $dest.height()}, options.duration, options.easing);
            } else if (options.adjustHeight === 'auto') {
                destHeight = $dest.height();
                if (parseFloat(sourceHeight) < parseFloat(destHeight)) {
                    // Adjust the height now so that the items don't move out of the container
                    $sourceParent.css('height', destHeight);
                } else {
                    //  Adjust later, on callback
                    adjustHeightOnCallback = true;
                }
            }
                
            // Now it's time to do shuffling animation
            // First of all, we need to identify same elements within source and destination collections    
            $source.each(function (i) {
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    
                    val = options.attribute($(this));
                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                if (destElement.length) {
                    // The item is both in source and destination collections
                    // It it's under different position, let's move it
                    if (!options.useScaling) {
                        animationQueue.push(
                                            {
                                                element: $(this), 
                                                animation: 
                                                    {top: destElement.offset().top - correctionOffset.top, 
                                                     left: destElement.offset().left - correctionOffset.left, 
                                                     opacity: 1.0
                                                    }
                                            });

                    } else {
                        animationQueue.push({
                                            element: $(this), 
                                            animation: {top: destElement.offset().top - correctionOffset.top, 
                                                        left: destElement.offset().left - correctionOffset.left, 
                                                        opacity: 1.0, 
                                                        scale: '1.0'
                                                       }
                                            });

                    }
                } else {
                    // The item from source collection is not present in destination collections
                    // Let's remove it
                    if (!options.useScaling) {
                        animationQueue.push({element: $(this), 
                                             animation: {opacity: '0.0'}});
                    } else {
                        animationQueue.push({element: $(this), animation: {opacity: '0.0', 
                                         scale: '0.0'}});
                    }
                }
            });
            
            $collection.each(function (i) {
                // Grab all items from target collection not present in visible source collection
                
                var sourceElement = [];
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    val = options.attribute($(this));
                    $source.each(function() {
                        if (options.attribute(this) == val) {
                            sourceElement = $(this);
                            return false;
                        }
                    });                 

                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    sourceElement = $source.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                
                var animationOptions;
                if (sourceElement.length === 0) {
                    // No such element in source collection...
                    if (!options.useScaling) {
                        animationOptions = {
                            opacity: '1.0'
                        };
                    } else {
                        animationOptions = {
                            opacity: '1.0',
                            scale: '1.0'
                        };
                    }
                    // Let's create it
                    d = destElement.clone();
                    var rawDestElement = d.get(0);
                    rawDestElement.style.position = 'absolute';
                    rawDestElement.style.margin = '0';
                    rawDestElement.style.top = destElement.offset().top - correctionOffset.top + 'px';
                    rawDestElement.style.left = destElement.offset().left - correctionOffset.left + 'px';
                    d.css('opacity', 0.0); // IE
                    if (options.useScaling) {
                        d.css('transform', 'scale(0.0)');
                    }
                    d.appendTo($sourceParent);
                    
                    animationQueue.push({element: $(d), 
                                         animation: animationOptions});
                }
            });
            
            $dest.remove();
            options.enhancement($sourceParent); // Perform custom visual enhancements during the animation
            for (i = 0; i < animationQueue.length; i++) {
                animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback);
            }
        });
    };
})(jQuery);;
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(q(e){e.7N.1E=q(n){6((53 n).4N("7O|7P")){26 8.1d(q(e){7M t(8,n)})}D{6(n=="7"){j r=e(8).7("3A").g;6(r){26 r}}D{26 8.1d(q(t){j r=e(8).7("3A");6(r){6(!r.g.1T){6(53 n=="7L"){6(n>0&&n<r.g.1v+1&&n!=r.g.1i){r.2A(n)}}D{2l(n){V"1g":r.o.3C();r.1g("3v");W;V"1j":r.o.3M();r.1j("3v");W;V"1n":6(!r.g.1x){r.o.65();r.g.1L=C;r.1n()}W;V"2s":r.d.4B();W}}}6((r.g.1x||!r.g.1x&&r.g.1L)&&n=="K"){r.o.5H();r.g.1L=L;r.g.Z.k(\'1m[I*="2J.2I"], 1m[I*="2H.2t"]\').1d(q(){2O(e(8).7("3j"))});r.K()}}})}}};j t=q(n,r){j i=8;i.$5f=e(n).14("4-1N");i.$5f.7("3A",i);i.1D=q(){i.o=e.5e({},t.6f,r);i.g=e.5e({},t.5R);i.2s();6(e("2Y").k(\'56[4b*="3x"]\').U){i.g.4t=e("2Y").k(\'56[4b*="3x"]\').H("4b").1f("3x")[1]}6(e("2Y").k(\'4e[I*="3W"]\').U){6(e("2Y").k(\'4e[I*="3W"]\').H("I").10("?")!=-1){i.g.4l=e("2Y").k(\'4e[I*="3W"]\').H("I").1f("?")[1].1f("=")[1]}}i.d.1c("7Q 7R 2h 7X 3A",C);i.d.1c("7Y 2E: "+i.g.2E);6(i.g.4l){i.d.1c("7W 2E: "+i.g.4l)}6(i.g.4t){i.d.1c("3x 2E: "+i.g.4t)}i.d.1c("6g 2E: "+e().8e);i.d.1c("6y 6w:",C);2p(j s 57 i.o){i.d.1c(s+": "+i.o[s])}6(!i.o.1y||i.o.1y==""||!i.o.2a||i.o.2a==""){i.d.1c("6u 6H 1y. 6l: 6t 1y 6r / 5o 2a.");i.2z()}D{i.d.1c("6q 6p 1D 6o 1y: "+i.o.1y,C);e(n).14("4-"+i.o.1y);j o=i.o.2a+i.o.1y+"/1y.z";4o=e("5t");6(!e("5t").U){4o=e("2G")}6(3w.5w){3w.5w(o);j u=e(\'5z[1P="\'+o+\'"]\')}D{j u=e(\'<5z 3J="81" 1P="\'+o+\'" 5p="5W/z" />\').X(4o)}u.1D(q(){6(!i.g.2C){i.d.1c("5l.1D(); 40");i.g.2C=C;i.2z()}});e(1W).1D(q(){6(!i.g.2C){i.d.1c("$(1W).1D(); 40");i.g.2C=C;i.2z()}});2g(q(){6(!i.g.2C){i.d.1c("6Y 6X: 6W 5l.1D(); 5o $(1W).1D(); 6Z 40");i.g.2C=C;i.2z()}},71)}};i.2z=q(){i.d.1c("6V 4.2z();",C);i.g.13=q(){26 e(n).A()};i.g.16=q(){26 e(n).G()};6(e(n).k(".4-1a").U==1){i.o.3z=L;i.o.4T=L;i.o.3O=L;i.o.3T=L;i.o.22=0;i.o.3K=L;i.o.29=C;i.o.1h=1;i.o.1B="6U"}i.d.1c("6O 6N 6M 6P: "+e(n).k(".4-1a").U);6(i.o.A){i.g.4q=i.g.1t=""+i.o.A}D{i.g.4q=i.g.1t=e(n)[0].1s.A}i.d.1c("1t: "+i.g.1t);6(i.o.G){i.g.1Q=""+i.o.G}D{i.g.1Q=e(n)[0].1s.G}i.d.1c("1Q: "+i.g.1Q);6(i.g.1t.10("%")==-1&&i.g.1t.10("18")==-1){i.g.1t+="18"}6(i.g.1Q.10("%")==-1&&i.g.1Q.10("18")==-1){i.g.1Q+="18"}6(i.o.62&&i.g.1t.10("18")!=-1&&i.g.1Q.10("18")!=-1){i.g.2b=C}D{i.g.2b=L}e(n).k(\'*[N*="4-s"], *[N*="4-2j"]\').1d(q(){6(!e(8).1w().38("4-1a")){e(8).6Q(e(8).1w())}});e(n).k(".4-1a").1d(q(){e(8).1A(\':6i([N*="4-"])\').1d(q(){e(8).4P()})});e(n).k(\'.4-1a, *[N*="4-s"]\').1d(q(){6(e(8).38("4-1a")){i.d.1c("6T "+(e(8).36()+1)+" 6S:",C)}D{i.d.1c("  <2c>6R "+(e(8).36()+1)+", 5p: "+e(8).1g().73("74")+"</2c>",C);i.d.5S(e(8))}6(e(8).H("3J")||e(8).H("1s")){6(e(8).H("3J")){j t=e(8).H("3J").2R().1f(";")}D{j t=e(8).H("1s").2R().1f(";")}2p(x=0;x<t.U;x++){1C=t[x].1f(":");6(1C[0].10("7g")!=-1){1C[1]=i.55(1C[1])}j n="";6(1C[2]){n=":"+e.2i(1C[2])}6(1C[0]!=" "&&1C[0]!=""){e(8).7(e.2i(1C[0]),e.2i(1C[1])+n);i.d.1c(e.2i(1C[0])+": "+e.2i(1C[1])+n)}}}j r=e(8);r.7("21",r[0].1s.O);r.7("24",r[0].1s.Y);6(e(8).2h("a")&&e(8).1A().U>0){r=e(8).1A()}r.7("1R",r.A());r.7("1F",r.G());r.7("41",r.z("1o-O"));r.7("3Y",r.z("1o-12"));r.7("4n",r.z("1o-Y"));r.7("4a",r.z("1o-Q"));6(r.z("1I-O-A").10("18")==-1){r.7("3g",r[0].1s.5g)}D{r.7("3g",r.z("1I-O-A"))}6(r.z("1I-12-A").10("18")==-1){r.7("3c",r[0].1s.66)}D{r.7("3c",r.z("1I-12-A"))}6(r.z("1I-Y-A").10("18")==-1){r.7("3i",r[0].1s.67)}D{r.7("3i",r.z("1I-Y-A"))}6(r.z("1I-Q-A").10("18")==-1){r.7("3d",r[0].1s.69)}D{r.7("3d",r.z("1I-Q-A"))}r.7("58",r.z("4J-5d"));r.7("59",r.z("4X-G"))});6(3w.5A.5v){2p(j t=0;t<e(n).k(".4-1a").U;t++){6(e(n).k(".4-1a").1Y(t).7("7f")==3w.5A.5v.1f("#")[1]){i.o.1h=t+1}}}e(n).k(\'*[N*="4-46-"]\').1d(q(){j t=e(8).H("N").1f(" ");2p(j r=0;r<t.U;r++){6(t[r].10("4-46-")!=-1){j i=B(t[r].1f("4-46-")[1]);e(8).z({7j:"6L"}).1r(q(t){t.1O();e(n).1E(i)})}}});i.g.1v=e(n).k(".4-1a").U;6(i.o.3H&&i.g.1v>2){i.o.1h=="3V";i.o.4R=L}D{i.o.3H=L}6(i.o.1h=="3V"){i.o.1h=2e.4m(2e.3V()*i.g.1v+1)}i.o.1h=i.o.1h<i.g.1v+1?i.o.1h:1;i.o.1h=i.o.1h<1?1:i.o.1h;i.g.27=1;6(i.o.2D){i.g.27=0}e(n).k(\'1m[I*="2J.2I"]\').1d(q(){6(e(8).1w(\'[N*="4-s"]\')){j t=e(8);e.5h("4Q://7k.5B.4V/7e/5r/7d/"+e(8).H("I").1f("4Z/")[1].1f("?")[0]+"?v=2&77=5q&5n=?",q(e){t.7("3F",B(e["76"]["75$78"]["79$5i"]["7c"])*3S)});j n=e("<R>").14("4-2T").X(e(8).1w());e("<1p>").X(n).14("4-1U").H("I","4Q://1p.5B.4V/7a/"+e(8).H("I").1f("4Z/")[1].1f("?")[0]+"/"+i.o.5E);e("<R>").X(n).14("4-5j");e(8).1w().z({A:e(8).A(),G:e(8).G()}).1r(q(){i.g.1T=C;6(i.g.1X){6(i.o.29!=L){i.g.1X=L}i.g.1L=C}D{i.g.1L=i.g.1x}6(i.o.29!=L){i.K()}i.g.2L=C;e(8).k("1m").H("I",e(8).k("1m").7("2N"));e(8).k(".4-2T").1K(i.g.v.d).20(i.g.v.4E,q(){6(i.o.29=="1k"&&i.g.1L==C){j e=2g(q(){i.1n()},t.7("3F")-i.g.v.d);t.7("3j",e)}i.g.1T=L})});j r="&";6(e(8).H("I").10("?")==-1){r="?"}e(8).7("2N",e(8).H("I")+r+"5k=1");e(8).7("1R",e(8).H("A"));e(8).7("1F",e(8).H("G"));e(8).H("I","")}});e(n).k(\'1m[I*="2H.2t"]\').1d(q(){6(e(8).1w(\'[N*="4-s"]\')){j t=e(8);j n=e("<R>").14("4-2T").X(e(8).1w());e.5h("4Q://2t.4V/5r/6m/5m/"+e(8).H("I").1f("5m/")[1].1f("?")[0]+".5q?5n=?",q(r){e("<1p>").X(n).14("4-1U").H("I",r[0]["6s"]);t.7("3F",B(r[0]["5i"])*3S);e("<R>").X(n).14("4-5j")});e(8).1w().z({A:e(8).A(),G:e(8).G()}).1r(q(){i.g.1T=C;6(i.g.1X){6(i.o.29!=L){i.g.1X=L}i.g.1L=C}D{i.g.1L=i.g.1x}6(i.o.29!=L){i.K()}i.g.2L=C;e(8).k("1m").H("I",e(8).k("1m").7("2N"));e(8).k(".4-2T").1K(i.g.v.d).20(i.g.v.4E,q(){6(i.o.29=="1k"&&i.g.1L==C){j e=2g(q(){i.1n()},t.7("3F")-i.g.v.d);t.7("3j",e)}i.g.1T=L})});j r="&";6(e(8).H("I").10("?")==-1){r="?"}e(8).7("2N",e(8).H("I")+r+"5k=1");e(8).7("1R",e(8).H("A"));e(8).7("1F",e(8).H("G"));e(8).H("I","")}});6(i.o.2D){i.o.1h=i.o.1h-1==0?i.g.1v:i.o.1h-1}i.g.1i=i.o.1h;i.g.Z=e(n).k(".4-1a:1Y("+(i.g.1i-1)+")");e(n).k(".4-1a").6n(\'<R N="4-28"></R>\');6(e(n).z("2k")=="6K"){e(n).z("2k","5s")}e(n).k(".4-28").z({6F:i.o.5L});6(i.o.44){e(n).k(".4-28").z({6E:"2Q("+i.o.44+")"})}6(i.o.4T){e(\'<a N="4-M-1g" 1P="#" />\').1r(q(t){t.1O();e(n).1E("1g")}).X(e(n));e(\'<a N="4-M-1j" 1P="#" />\').1r(q(t){t.1O();e(n).1E("1j")}).X(e(n));6(i.o.68){e(n).k(".4-M-1g, .4-M-1j").z({1l:"1z"});e(n).11(q(){e(n).k(".4-M-1g, .4-M-1j").K(C,C).1V(1J)},q(){e(n).k(".4-M-1g, .4-M-1j").K(C,C).20(1J)})}}6(i.o.3O||i.o.3T){j r=e(\'<R N="4-Q-M-2d" />\').X(e(n));6(i.o.1B=="2o"){r.14("4-52-3L")}6(i.o.3T&&i.o.1B!="2o"){e(\'<2c N="4-Q-2m" />\').X(e(n).k(".4-Q-M-2d"));6(i.o.1B=="11"){j s=e(\'<R N="4-P-11"><R N="4-P-11-28"><R N="4-P-11-2j"></R><R N="4-P-11-1p"><1p></R><2c></2c></R></R>\').X(e(n).k(".4-Q-2m"))}2p(x=1;x<i.g.1v+1;x++){j o=e(\'<a 1P="#" />\').X(e(n).k(".4-Q-2m")).1r(q(t){t.1O();e(n).1E(e(8).36()+1)});6(i.o.1B=="11"){e(n).k(".4-P-11, .4-P-11-1p").z({A:i.o.4w,G:i.o.34});j u=e(n).k(".4-P-11");j a=u.k("1p").z({G:i.o.34});j f=e(n).k(".4-P-11-28").z({1G:"2B",1l:"23"});o.11(q(){j t=e(n).k(".4-1a").1Y(e(8).36());6(t.k(".4-3D").U){j r=t.k(".4-3D").H("I")}D 6(t.k(".4-1U").U){j r=t.k(".4-1U").H("I")}D 6(t.k(".4-2j").U){j r=t.k(".4-2j").H("I")}D{j r=i.o.2a+i.o.1y+"/4H.4I"}e(n).k(".4-P-11-1p").z({O:B(u.z("1o-O")),Y:B(u.z("1o-Y"))});a.1D(q(){6(e(8).A()==0){a.z({2k:"5s",6b:"0 1k",O:"1k"})}D{a.z({2k:"6G",1Z:-e(8).A()/2,O:"50%"})}}).H("I",r);u.z({1l:"23"}).K().1H({O:e(8).2k().O+(e(8).A()-u.6e())/2},4y,"3y");f.z({1l:"1z",1G:"31"}).K().1V(4y)},q(){f.K().20(4y,q(){u.z({1G:"2B",1l:"23"})})})}}6(i.o.1B=="11"){s.X(e(n).k(".4-Q-2m"))}e(n).k(".4-Q-2m a:1Y("+(i.o.1h-1)+")").14("4-M-19")}6(i.o.3O){j l=e(\'<a N="4-M-1n" 1P="#" />\').1r(q(t){t.1O();e(n).1E("1n")}).5y(e(n).k(".4-Q-M-2d"));j c=e(\'<a N="4-M-K" 1P="#" />\').1r(q(t){t.1O();e(n).1E("K")}).X(e(n).k(".4-Q-M-2d"))}D 6(i.o.1B!="2o"){e(\'<2c N="4-M-5x 4-M-6J" />\').5y(e(n).k(".4-Q-M-2d"));e(\'<2c N="4-M-5x 4-M-6D" />\').X(e(n).k(".4-Q-M-2d"))}6(i.o.4u&&i.o.1B!="2o"){r.z({1l:"1z"});e(n).11(q(){r.K(C,C).1V(1J)},q(){r.K(C,C).20(1J)})}}6(i.o.1B=="2o"){j h=e(\'<R N="4-P-2d"></R>\').X(e(n));j s=e(\'<R N="4-P"><R N="4-P-28"><R N="4-P-17-1N"><R N="4-P-17"></R></R></R></R>\').X(h);i.g.3L=e(n).k(".4-P-17-1N").11(q(){e(8).14("4-P-17-11")},q(){e(8).2n("4-P-17-11");i.43()}).6C(q(t){j n=B(t.6x-e(8).6d().O)/e(8).A()*(e(8).A()-e(8).k(".4-P-17").A());e(8).k(".4-P-17").K().z({1Z:n})});e(n).k(".4-1a").1d(q(){j t=e(8).36()+1;6(e(8).k(".4-3D").U){j r=e(8).k(".4-3D").H("I")}D 6(e(8).k(".4-1U").U){j r=e(8).k(".4-1U").H("I")}D 6(e(8).k(".4-2j").U){j r=e(8).k(".4-2j").H("I")}6(r){j s=e(\'<a 1P="#" N="4-1S-\'+t+\'"><1p I="\'+r+\'"></a>\')}D{j s=e(\'<a 1P="#" N="4-4H 4-1S-\'+t+\'"><1p I="\'+i.o.2a+i.o.1y+\'/4H.4I"></a>\')}s.11(q(){e(8).1A().K().3m(1J,i.o.4p/1e)},q(){6(!e(8).1A().38("4-1S-19")){e(8).1A().K().3m(1J,i.o.4s/1e)}}).X(e(n).k(".4-P-17")).1r(q(r){r.1O();e(n).1E(t)})});6(l&&c){j p=e(\'<R N="4-Q-M-2d 4-6B-3L"></R>\').X(e(n));l.54().1r(q(t){t.1O();e(n).1E("1n")}).X(p);c.54().1r(q(t){t.1O();e(n).1E("K")}).X(p)}6(i.o.4u){h.z({1G:"2B"});j d=p.z("1l")=="23"?p:e(n).k(".4-52-3L");d.z({1l:"1z"});e(n).11(q(){h.z({1G:"31",1l:"1z"}).K(C,L).1V(1J);d.K(C,C).1V(1J)},q(){h.K(C,C).20(1J,q(){e(8).z({1G:"2B",1l:"23"})});d.K(C,C).20(1J)})}}j v=e(\'<R N="4-2q"></R>\').X(e(n));v.7("1F",v.G());4Y=4L;2g(q(){6(e(n).k(".4-2q").z("1l")=="23"){e("<1p />").H("I",i.o.2a+i.o.1y+"/2q.4I").X(e(n).k(".4-2q"))}},4Y);6(i.o.5Z&&e(n).k(".4-1a").U>1){e("2G").3X("8b",q(e){6(!i.g.1T){6(e.51==37){i.o.3C(i.g);i.1g("3v")}D 6(e.51==39){i.o.3M(i.g);i.1j("3v")}}})}6("8g"57 1W&&e(n).k(".4-1a").U>1&&i.o.5P){e(n).3X("89",q(e){j t=e.2x?e.2x:e.5c.2x;6(t.U==1){i.g.3N=i.g.2X=t[0].5b}});e(n).3X("83",q(e){j t=e.2x?e.2x:e.5c.2x;6(t.U==1){i.g.2X=t[0].5b}6(2e.5a(i.g.3N-i.g.2X)>45){e.1O()}});e(n).3X("84",q(t){6(2e.5a(i.g.3N-i.g.2X)>45){6(i.g.3N-i.g.2X>0){i.o.3M(i.g);e(n).1E("1j")}D{i.o.3C(i.g);e(n).1E("1g")}}})}6(i.o.5Y==C&&e(n).k(".4-1a").U>1){e(n).k(".4-28").11(q(){i.o.5O(i.g);6(i.g.1x){i.g.1X=C;i.K()}},q(){6(i.g.1X==C){i.1n();i.g.1X=L}})}i.4r();6(i.o.F){i.g.F=e("<1p>").14("4-8j").X(e(n)).H("1s",i.o.5M).z({1G:"2B",1l:"8m"}).1D(q(){j t=0;6(!i.g.F){t=3S}2g(q(){i.g.F.7("1R",i.g.F.A());i.g.F.7("1F",i.g.F.G());6(i.g.F.z("O")!="1k"){i.g.F.7("21",i.g.F[0].1s.O)}6(i.g.F.z("12")!="1k"){i.g.F.7("30",i.g.F[0].1s.12)}6(i.g.F.z("Y")!="1k"){i.g.F.7("24",i.g.F[0].1s.Y)}6(i.g.F.z("Q")!="1k"){i.g.F.7("2K",i.g.F[0].1s.Q)}6(i.o.42!=L){e("<a>").X(e(n)).H("1P",i.o.42).H("8v",i.o.5Q).z({8u:"1z",8x:"1z"}).4F(i.g.F)}i.g.F.z({1l:"1z",1G:"31"});i.4k()},t)}).H("I",i.o.F)}e(1W).8y(q(){i.2W(i.g.Z,q(){26});6(i.g.F){i.4k()}});i.g.6h=C;6(i.o.2D==C){6(i.o.3z){i.g.1x=C;e(n).k(".4-M-1n").14("4-M-1n-19")}D{e(n).k(".4-M-K").14("4-M-K-19")}i.1j()}D{i.2V(i.g.Z,q(){i.g.Z.1V(3S,q(){e(8).14("4-19");6(i.o.3I){e(8).1K(e(8).7("2Z")+25).8z(q(){e(8).k(".4-1U").1r();e(8).63()})}i.g.Z.k(\' > *[N*="4-s"]\').1d(q(){6(e(8).7("3e")>0){i.3k(e(8))}})});i.49(i.g.1i);6(i.o.3z){i.1n()}D{e(n).k(".4-M-K").14("4-M-K-19")}})}i.o.61(e(n))};i.1n=q(){6(i.g.1x){6(i.g.1q=="1g"&&i.o.4R){i.1g()}D{i.1j()}}D{i.g.1x=C;i.4S()}e(n).k(".4-M-1n").14("4-M-1n-19");e(n).k(".4-M-K").2n("4-M-K-19")};i.4S=q(){j t=e(n).k(".4-19").7("3U")?B(e(n).k(".4-19").7("3U")):i.o.4c;6(!i.o.2D&&!e(n).k(".4-19").7("3U")){j r=e(n).k(".4-1a:1Y("+(i.o.1h-1)+")").7("3U");t=r?r:i.o.4c}2O(i.g.32);i.g.32=1W.2g(q(){i.1n()},t)};i.K=q(){6(!i.g.1X&&!i.g.1L){e(n).k(".4-M-K").14("4-M-K-19");e(n).k(".4-M-1n").2n("4-M-1n-19")}2O(i.g.32);i.g.1x=L};i.55=q(t){6(e.2i(t.2R())=="8n"||e.2i(t.2R())=="8o"){26 t.2R()}D{26 t.1u("8p","8B").1u("8q","8k").1u("8i","7Z").1u("80","7z").1u("7y","7B").1u("7C","7F").1u("7E","7D").1u("7x","7w").1u("7q","7p").1u("7o","7r").1u("7s","7v").1u("7u","7t").1u("7G","7H")}};i.1g=q(e){6(i.g.1i<2){i.g.27+=1}6(i.g.27>i.o.22&&i.o.22>0&&!e){i.g.27=0;i.K();6(i.o.3K==L){i.o.22=0}}D{j t=i.g.1i<2?i.g.1v:i.g.1i-1;i.g.1q="1g";i.2A(t,i.g.1q)}};i.1j=q(e){6(!i.o.3H){6(!(i.g.1i<i.g.1v)){i.g.27+=1}6(i.g.27>i.o.22&&i.o.22>0&&!e){i.g.27=0;i.K();6(i.o.3K==L){i.o.22=0}}D{j t=i.g.1i<i.g.1v?i.g.1i+1:1;i.g.1q="1j";i.2A(t,i.g.1q)}}D 6(!e){j t=i.g.1i;j n=q(){t=2e.4m(2e.3V()*i.g.1v)+1;6(t==i.g.1i){n()}D{i.g.1q="1j";i.2A(t,i.g.1q)}};n()}D 6(e){j t=i.g.1i<i.g.1v?i.g.1i+1:1;i.g.1q="1j";i.2A(t,i.g.1q)}};i.2A=q(t,r){6(i.g.2L==C){i.g.2L=L;i.g.1x=i.g.1L;i.g.Z.k(\'1m[I*="2J.2I"], 1m[I*="2H.2t"]\').1d(q(){e(8).1w().k(".4-2T").1V(i.g.v.4O,q(){e(8).1w().k("1m").H("I","")})})}e(n).k(\'1m[I*="2J.2I"], 1m[I*="2H.2t"]\').1d(q(){2O(e(8).7("3j"))});2O(i.g.32);i.g.2M=t;i.g.1b=e(n).k(".4-1a:1Y("+(i.g.2M-1)+")");6(!r){6(i.g.1i<i.g.2M){i.g.1q="1j"}D{i.g.1q="1g"}}j s=0;6(e(n).k(\'1m[I*="2J.2I"], 1m[I*="2H.2t"]\').U>0){s=i.g.v.4O}2g(q(){i.2V(i.g.1b,q(){i.1H()})},s)};i.2V=q(t,n){6(i.o.2V){j r=[];j s=0;6(t.z("2f-2u")!="1z"&&t.z("2f-2u").10("2Q")!=-1){j o=t.z("2f-2u");o=o.4N(/2Q\\((.*)\\)/)[1].1u(/"/5u,"");r.4U(o)}t.k("1p").1d(q(){r.4U(e(8).H("I"))});t.k("*").1d(q(){6(e(8).z("2f-2u")!="1z"&&e(8).z("2f-2u").10("2Q")!=-1){j t=e(8).z("2f-2u");t=t.4N(/2Q\\((.*)\\)/)[1].1u(/"/5u,"");r.4U(t)}});6(r.U==0){i.2W(t,n)}D{2p(x=0;x<r.U;x++){e("<1p>").1D(q(){6(++s==r.U){i.2W(t,n)}}).H("I",r[x])}}}D{i.2W(t,n)}};i.2W=q(t,r,s){6(!s){t.z({1G:"2B",1l:"23"})}i.4r();6(i.o.1B=="2o"){i.6a()}2p(j o=0;o<t.1A().U;o++){j u=t.1A(":1Y("+o+")");j a=u.7("21")?u.7("21"):"0";j f=u.7("24")?u.7("24"):"0";6(u.2h("a")&&u.1A().U>0){u=u.1A()}j l=u.7("1R")?B(u.7("1R"))*i.g.J:"1k";j c=u.7("1F")?B(u.7("1F"))*i.g.J:"1k";j h=u.7("41")?B(u.7("41"))*i.g.J:0;j p=u.7("3Y")?B(u.7("3Y"))*i.g.J:0;j d=u.7("4n")?B(u.7("4n"))*i.g.J:0;j v=u.7("4a")?B(u.7("4a"))*i.g.J:0;j m=u.7("3g")?B(u.7("3g"))*i.g.J:0;j g=u.7("3c")?B(u.7("3c"))*i.g.J:0;j y=u.7("3i")?B(u.7("3i"))*i.g.J:0;j b=u.7("3d")?B(u.7("3d"))*i.g.J:0;j w=u.7("58");j E=u.7("59");6(i.g.2b||i.o.2r>0){6(u.2h("1p")){u.z({A:"1k",G:"1k"});l=u.A();c=u.G();u.z({A:u.A()*i.g.J,G:u.G()*i.g.J})}6(!u.2h("1p")){u.z({A:l,G:c,"4J-5d":B(w)*i.g.J+"18","4X-G":B(E)*i.g.J+"18"})}6(u.2h("R")&&u.k("1m").7("2N")){j S=u.k("1m");S.H("A",B(S.7("1R"))*i.g.J).H("G",B(S.7("1F"))*i.g.J);u.z({A:B(S.7("1R"))*i.g.J,G:B(S.7("1F"))*i.g.J})}u.z({1o:d+"18 "+p+"18 "+v+"18 "+h+"18 ",5g:m+"18",66:g+"18",67:y+"18",69:b+"18"})}6(!u.38("4-2j")){j x=u;6(u.1w().2h("a")){u=u.1w()}j T=i.o.3Z>0?(i.g.13()-i.o.3Z)/2:0;T=T<0?0:T;6(a.10("%")!=-1){u.z({O:i.g.13()/1e*B(a)-x.A()/2-h-m})}D 6(T>0||i.g.2b||i.o.2r>0){u.z({O:T+B(a)*i.g.J})}6(f.10("%")!=-1){u.z({Y:i.g.16()/1e*B(f)-x.G()/2-d-y})}D 6(i.g.2b||i.o.2r>0){u.z({Y:B(f)*i.g.J})}}D{u.z({A:"1k",G:"1k"});l=u.A();c=u.G();u.z({A:l*i.g.J,G:c*i.g.J,1Z:-(l*i.g.J/2)+"18",2y:-(c*i.g.J/2)+"18"})}}6(!s){t.z({1l:"1z",1G:"31"})}e(n).k(".4-2q").z({G:e(n).k(".4-2q").7("1F")*i.g.J});r();e(8).63()};i.4k=q(){i.g.F.z({A:i.g.F.7("1R")*i.g.J,G:i.g.F.7("1F")*i.g.J}).1V(1J);j t=3l=3b=3a="1k";6(i.g.F.7("21")&&i.g.F.7("21").10("%")!=-1){t=i.g.13()/1e*B(i.g.F.7("21"))-i.g.F.A()/2+B(e(n).z("1o-O"))}D{t=B(i.g.F.7("21"))*i.g.J}6(i.g.F.7("30")&&i.g.F.7("30").10("%")!=-1){3l=i.g.13()/1e*B(i.g.F.7("30"))-i.g.F.A()/2+B(e(n).z("1o-12"))}D{3l=B(i.g.F.7("30"))*i.g.J}6(i.g.F.7("24")&&i.g.F.7("24").10("%")!=-1){3b=i.g.16()/1e*B(i.g.F.7("24"))-i.g.F.G()/2+B(e(n).z("1o-Y"))}D{3b=B(i.g.F.7("24"))*i.g.J}6(i.g.F.7("2K")&&i.g.F.7("2K").10("%")!=-1){3a=i.g.16()/1e*B(i.g.F.7("2K"))-i.g.F.G()/2+B(e(n).z("1o-Q"))}D{3a=B(i.g.F.7("2K"))*i.g.J}i.g.F.z({O:t,12:3l,Y:3b,Q:3a})};i.6a=q(){e(n).k(".4-P-17 a").z({A:B(i.o.4w*i.g.J),G:B(i.o.34*i.g.J)});e(n).k(".4-P-17 a:5T").z({6b:0});e(n).k(".4-P-17").z({G:B(i.o.34*i.g.J)});j t=e(n).k(".4-P");j r=i.o.3G.10("%")==-1?B(i.o.3G):B(B(i.g.1t)/1e*B(i.o.3G));t.z({A:r*2e.4m(i.g.J*1e)/1e});6(t.A()>e(n).k(".4-P-17").A()){t.z({A:e(n).k(".4-P-17").A()})}};i.49=q(t){j r=t?t:i.g.2M;e(n).k(".4-P-17 a:6i(.4-1S-"+r+")").1A().1d(q(){e(8).2n("4-1S-19").K().3m(4D,i.o.4s/1e)});e(n).k(".4-P-17 a.4-1S-"+r).1A().14("4-1S-19").K().3m(4D,i.o.4p/1e)};i.43=q(){6(!e(n).k(".4-P-17-1N").38("4-P-17-11")){j t=e(n).k(".4-1S-19").U?e(n).k(".4-1S-19").1w():L;6(t){j r=t.2k().O+t.A()/2;j i=e(n).k(".4-P-17-1N").A()/2-r;i=i>0?0:i;i=i<e(n).k(".4-P-17-1N").A()-e(n).k(".4-P-17").A()?e(n).k(".4-P-17-1N").A()-e(n).k(".4-P-17").A():i;e(n).k(".4-P-17").1H({1Z:i},4G,"3y")}}};i.4r=q(){6(i.g.6h){e(n).z({1G:"31"})}6(i.o.2r>0){6(e(1W).A()<i.o.2r){i.g.2b=C;i.g.1t=i.o.2r+"18"}D{i.g.2b=L;i.g.1t=i.g.4q;i.g.J=1}}6(i.g.2b){j t=e(n).1w();e(n).z({A:t.A()-B(t.z("1o-O"))-B(t.z("1o-12"))-B(e(n).z("1o-O"))-B(e(n).z("1o-12"))});i.g.J=e(n).A()/B(i.g.1t);e(n).z({G:i.g.J*B(i.g.1Q)})}D{i.g.J=1;e(n).z({A:i.g.1t,G:i.g.1Q})}6(e(n).33(".4-2P-2U-1N").U){e(n).33(".4-2P-2U-6c").z({G:e(n).5C(C)});e(n).33(".4-2P-2U-1N").z({G:e(n).5C(C)});e(n).33(".4-2P-2U-6c").z({A:e(1W).A(),O:-e(n).33(".4-2P-2U-1N").6d().O});6(i.g.1t.10("%")!=-1){j r=B(i.g.1t);j s=e("2G").A()/1e*r-(e(n).6e()-e(n).A());e(n).A(s)}}e(n).k(".4-28").z({A:i.g.13(),G:i.g.16()});6(i.g.Z&&i.g.1b){i.g.Z.z({A:i.g.13(),G:i.g.16()});i.g.1b.z({A:i.g.13(),G:i.g.16()})}D{e(n).k(".4-1a").z({A:i.g.13(),G:i.g.16()})}};i.1H=q(){j t=i.g.Z;i.o.5F(i.g);i.g.1T=C;6(i.o.1B=="2o"){i.49();i.43()}i.g.1b.14("4-5J");j r=47=3o=48=3r=4z=3u=4W=3p=7I=3n=7J="1k";j s=4x=i.g.13();j o=4v=i.g.16();j u=i.g.1q=="1g"?i.g.Z:i.g.1b;j a=u.7("1M")?u.7("1M"):i.o.4d;j f=i.g.4C[i.g.1q][a];6(f=="O"||f=="12"){s=3o=4x=3u=0;3n=0}6(f=="Y"||f=="Q"){o=r=4v=3r=0;3p=0}2l(f){V"O":47=3r=0;3p=-i.g.13();W;V"12":r=4z=0;3p=i.g.13();W;V"Y":48=3u=0;3n=-i.g.16();W;V"Q":3o=4W=0;3n=i.g.16();W}i.g.Z.z({O:r,12:47,Y:3o,Q:48});i.g.1b.z({A:4x,G:4v,O:3r,12:4z,Y:3u,Q:4W});6(i.o.2D&&i.g.1v==1){j l=0}D{j l=i.g.Z.7("3t")?B(i.g.Z.7("3t")):i.o.4h;j c=i.g.Z.7("2w")?B(i.g.Z.7("2w")):i.o.3R;j h=i.g.Z.7("2v")?i.g.Z.7("2v"):i.o.3Q;i.g.Z.1K(l+c/15).1H({A:s,G:o},c,h,q(){t.k(\' > *[N*="4-s"]\').K(C,C);i.g.Z=i.g.1b;i.g.1i=i.g.2M;e(n).k(".4-1a").2n("4-19");e(n).k(".4-1a:1Y("+(i.g.1i-1)+")").14("4-19").2n("4-5J");e(n).k(".4-Q-2m a").2n("4-M-19");e(n).k(".4-Q-2m a:1Y("+(i.g.1i-1)+")").14("4-M-19");i.g.1T=L;i.o.5G(i.g);6(i.g.1x){i.4S()}});i.g.Z.k(\' > *[N*="4-s"]\').1d(q(){j t=e(8).7("1M")?e(8).7("1M"):f;j n,r;2l(t){V"O":n=-i.g.13();r=0;W;V"12":n=i.g.13();r=0;W;V"Y":r=-i.g.16();n=0;W;V"Q":r=i.g.16();n=0;W}j s=e(8).7("3f")?e(8).7("3f"):L;2l(s){V"O":n=i.g.13();r=0;W;V"12":n=-i.g.13();r=0;W;V"Y":r=i.g.16();n=0;W;V"Q":r=-i.g.16();n=0;W}j o=i.g.Z.7("3q")?B(i.g.Z.7("3q")):i.o.4f;j u=B(e(8).H("N").1f("4-s")[1])*o;j a=e(8).7("3t")?B(e(8).7("3t")):i.o.4h;j l=e(8).7("2w")?B(e(8).7("2w")):i.o.3R;j c=e(8).7("2v")?e(8).7("2v"):i.o.3Q;6(s=="2F"||!s&&t=="2F"){e(8).1K(a).20(l,c)}D{e(8).K().1K(a).1H({1Z:-n*u,2y:-r*u},l,c)}})}j p=i.g.1b.7("2Z")?B(i.g.1b.7("2Z")):i.o.4i;j d=i.g.1b.7("3s")?B(i.g.1b.7("3s")):i.o.4g;j v=i.g.1b.7("3h")?i.g.1b.7("3h"):i.o.4j;i.g.1b.1K(l+p).1H({A:i.g.13(),G:i.g.16()},d,v);i.g.1b.k(\' > *[N*="4-s"]\').1d(q(){j t=e(8).7("1M")?e(8).7("1M"):f;j n,r;2l(t){V"O":n=-i.g.13();r=0;W;V"12":n=i.g.13();r=0;W;V"Y":r=-i.g.16();n=0;W;V"Q":r=i.g.16();n=0;W;V"2F":r=0;n=0;W}j s=i.g.1b.7("5K")?B(i.g.1b.7("5K")):i.o.5I;j o=B(e(8).H("N").1f("4-s")[1])*s;j u=e(8).7("2Z")?B(e(8).7("2Z")):i.o.4i;j a=e(8).7("3s")?B(e(8).7("3s")):i.o.4g;j c=e(8).7("3h")?e(8).7("3h"):i.o.4j;6(t=="2F"){e(8).z({1l:"1z",1Z:0,2y:0}).1K(l+u).1V(a,c,q(){6(i.o.3I==C){e(8).k(".4-1U").1r()}6(e(8).7("3e")>0){i.3k(e(8))}})}D{e(8).z({1Z:n*o,2y:r*o,1l:"23"}).K().1K(l+u).1H({1Z:0,2y:0},a,c,q(){6(i.o.3I==C){e(8).k(".4-1U").1r()}6(e(8).7("3e")>0){i.3k(e(8))}})}})};i.3k=q(e){j t=i.g.Z;6(i.g.1q!="1g"&&i.g.1b){t=i.g.1b}j n=t.7("1M")?t.7("1M"):i.o.4d;j r=i.g.4C[i.g.1q][n];j s=e.7("1M")?e.7("1M"):r;j o,u;2l(s){V"O":o=-i.g.13();u=0;W;V"12":o=i.g.13();u=0;W;V"Y":u=-i.g.16();o=0;W;V"Q":u=i.g.16();o=0;W}j a=e.7("3f")?e.7("3f"):L;2l(a){V"O":o=i.g.13();u=0;W;V"12":o=-i.g.13();u=0;W;V"Y":u=i.g.16();o=0;W;V"Q":u=-i.g.16();o=0;W}j f=i.g.Z.7("3q")?B(i.g.Z.7("3q")):i.o.4f;j l=B(e.H("N").1f("4-s")[1])*f;j c=B(e.7("3e"));j h=e.7("2w")?B(e.7("2w")):i.o.3R;j p=e.7("2v")?e.7("2v"):i.o.3Q;6(a=="2F"||!a&&s=="2F"){e.1K(c).20(h,p)}D{e.1K(c).1H({1Z:-o*l,2y:-u*l},h,p)}};i.2s=q(){i.d={3E:e("<R>").z({7V:"7S","5W-2q":"1z",7T:\'7U-64, "5N 8r 64", 5N, 8l, 8s\',8t:"5U",8A:"5U",8w:"86","-87-4J-88":"85"}),1c:q(e,t){j n="    ";j r="<3P>";6(t){n="<3P><b>";r="</b><3P><3P>"}i.d.3E.4F(n+e+r)},5S:q(e){i.d.3E.k("2c:5T").11(q(){e.z({1I:"7n 82 8a"})},q(){e.z({1I:"8h"})})},4B:q(){6(!e("2G").k(".4-2s-4A").U){j t=e("<R>").14("4-2s-4A").z({2k:"8f",8c:"8d",Y:"2S",12:"2S",A:"7A",1o:"7l",2f:"6A","1I-6z":"2S",G:e(1W).G()-60,4M:0,4K:4L}).X(e("2G")).1H({4K:0,4M:.9},4G,"3y").1r(q(t){6(t.5V&&t.6k){e(8).1H({4K:4L,4M:0},4G,"3y",q(){e(8).4P()})}});j n=e("<R>").z({A:"1e%",G:"1e%",6v:"1k"}).X(t);j r=e("<R>").z({A:"1e%"}).X(n).4F(i.d.3E)}},6I:q(){e("2G").k(".4-2s-4A").4P()}};e(n).1r(q(e){6(e.5V&&e.6k){i.d.4B()}})};i.1D()};t.5R={2E:"3.5",1X:L,2L:L,1x:L,1T:L,1v:3B,1q:"1j",32:3B,13:3B,16:3B,4C:{1g:{O:"12",12:"O",Y:"Q",Q:"Y"},1j:{O:"O",12:"12",Y:"Y",Q:"Q"}},v:{d:5D,4E:4D,4O:5D}};t.6f={3z:C,1h:1,4R:C,5Z:C,2V:C,4T:C,3O:C,3T:C,1y:"7m",2a:"/3W/7b/",5Y:C,5L:"7i",44:L,2D:C,F:L,5M:"O: -2S; Y: -2S;",42:L,5Q:"7h",5P:C,22:0,3K:C,3I:C,29:"1k",5E:"72.70",62:C,3H:L,2r:0,3Z:0,1B:"11",4w:1e,34:60,3G:"60%",4p:35,4s:1e,68:C,4u:L,61:q(e){},65:q(e){},5H:q(e){},5O:q(e){},5F:q(e){},5G:q(e){},3C:q(e){},3M:q(e){},4d:"12",4c:7K,5I:.45,4f:.45,4g:5X,3R:5X,4j:"6j",3Q:"6j",4i:0,4h:0}})(6g)',62,534,'||||ls||if|data|this|||||||||||var|find||||||function|||||||||css|width|parseInt|true|else||yourLogo|height|attr|src|ratio|stop|false|nav|class|left|thumbnail|bottom|div|||length|case|break|appendTo|top|curLayer|indexOf|hover|right|sliderWidth|addClass||sliderHeight|slide|px|active|layer|nextLayer|add|each|100|split|prev|firstLayer|curLayerIndex|next|auto|display|iframe|start|padding|img|prevNext|click|style|sliderOriginalWidth|replace|layersNum|parent|autoSlideshow|skin|none|children|thumbnailNavigation|param|load|layerSlider|originalHeight|visibility|animate|border|300|delay|originalAutoSlideshow|slidedirection|container|preventDefault|href|sliderOriginalHeight|originalWidth|thumb|isAnimating|videopreview|fadeIn|window|paused|eq|marginLeft|fadeOut|originalLeft|loops|block|originalTop||return|nextLoop|inner|autoPauseSlideshow|skinsPath|responsiveMode|span|wrapper|Math|background|setTimeout|is|trim|bg|position|switch|slidebuttons|removeClass|always|for|shadow|responsiveUnder|debug|vimeo|image|easingout|durationout|touches|marginTop|init|change|hidden|loaded|animateFirstLayer|version|fade|body|player|youtu|www|originalBottom|pausedByVideo|nextLayerIndex|videoSrc|clearTimeout|wp|url|toLowerCase|10px|vpcontainer|fullwidth|imgPreload|makeResponsive|touchEndX|html|delayin|originalRight|visible|slideTimer|closest|tnHeight||index||hasClass||oB|oT|originalBorderRight|originalBorderBottom|showuntil|slideoutdirection|originalBorderLeft|easingin|originalBorderTop|videoTimer|sublayerShowUntil|oR|fadeTo|layerMarginTop|curLayerTop|layerMarginLeft|parallaxout|nextLayerLeft|durationin|delayout|nextLayerTop|clicked|document|WordPress|easeInOutQuad|autoStart|LayerSlider|null|cbPrev|tn|history|videoDuration|tnContainerWidth|randomSlideshow|autoPlayVideos|rel|forceLoopNum|thumbnails|cbNext|touchStartX|navStartStop|br|easingOut|durationOut|1e3|navButtons|slidedelay|random|layerslider|bind|originalPaddingRight|sublayerContainer|fired|originalPaddingLeft|yourLogoLink|scrollThumb|globalBGImage||linkto|curLayerRight|curLayerBottom|changeThumb|originalPaddingBottom|content|slideDelay|slideDirection|script|parallaxOut|durationIn|delayOut|delayIn|easingIn|resizeYourLogo|lswpVersion|floor|originalPaddingTop|cssContainer|tnActiveOpacity|sliderOriginalWidthRU|resizeSlider|tnInactiveOpacity|wpVersion|hoverBottomNav|nextLayerHeight|tnWidth|nextLayerWidth|250|nextLayerRight|console|show|slideDirections|750|fo|append|600|nothumb|png|font|marginRight|150|opacity|match|fi|remove|http|twoWaySlideshow|timer|navPrevNext|push|com|nextLayerBottom|line|shadowTimer|embed||which|above|typeof|clone|ieEasing|meta|in|originalFontSize|originalLineHeight|abs|clientX|originalEvent|size|extend|el|borderLeftWidth|getJSON|duration|playvideo|autoplay|curSkin|video|callback|or|type|json|api|relative|head|gi|hash|createStyleSheet|sides|prependTo|link|location|youtube|outerHeight|500|youtubePreview|cbAnimStart|cbAnimStop|cbStop|parallaxIn|animating|parallaxin|globalBGColor|yourLogoStyle|Helvetica|cbPause|touchNav|yourLogoTarget|global|addFunction|last|normal|shiftKey|text|1500|pauseOnHover|keybNav||cbInit|responsive|dequeue|Light|cbStart|borderRightWidth|borderTopWidth|hoverPrevNext|borderBottomWidth|resizeThumb|margin|helper|offset|outerWidth|options|jQuery|showSlider|not|easeInOutQuint|altKey|Possibilities|v2|wrapAll|with|to|Trying|and|thumbnail_large|mistyped|Loading|overflow|code|pageX|Init|radius|black|below|mousemove|sideright|backgroundImage|backgroundColor|absolute|without|hide|sideleft|static|pointer|layers|of|Number|found|insertBefore|SUBLAYER|properties|LAYER|disabled|FUNCTION|Neither|mode|Fallback|were|jpg|2e3|maxresdefault|prop|tagName|media|entry|alt|group|yt|vi|skins|seconds|videos|feeds|deeplink|easing|_blank|transparent|cursor|gdata|20px|glass|2px|circ|Expo|expo|Circ|elastic|Back|back|Elastic|Sine|sine|quart|Quad|300px|Quart|cubic|Quint|quint|Cubic|bounce|Bounce|layerMarginRight|layerMarginBottom|4e3|number|new|fn|object|undefined|This|site|white|fontFamily|HelveticaNeue|color|WP|running|JS|easeOut|quad|stylesheet|solid|touchmove|touchend|antialiased|14px|webkit|smoothing|touchstart|red|keydown|zIndex|10000000000|jquery|fixed|ontouchstart|0px|easeout|yourlogo|easeIn|Arial|bock|swing|linear|easeinout|easein|Neue|serif|lineHeight|textDecoration|target|fontSize|outline|resize|queue|fontWeight|easeInOut'.split('|'),0,{}))
;
