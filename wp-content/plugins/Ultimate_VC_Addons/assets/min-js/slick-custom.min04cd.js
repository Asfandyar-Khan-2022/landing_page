!function(o){o(document).ready(function(){o(".ult-carousel-wrapper").each(function(){const t=o(this);var e,i,s;t.hasClass("ult_full_width")&&(t.css("left",0),t.css("right",0),e=t.attr("data-rtl"),i=o("html").outerWidth(),s=t.offset().left,s=Math.abs(0-s),"true"===e||!0===e?t.css({position:"relative",right:"-"+s+"px",width:i+"px"}):t.css({position:"relative",left:"-"+s+"px",width:i+"px"}))}),o(".ult-carousel-wrapper").each(function(t,e){var i=o(e).data("gutter"),e=o(e).attr("id");""!=i&&(i="<style>#"+e+" .slick-slide { margin:0 "+i+"px; } </style>",o("head").append(i))}),o(".ult-carousel-wrapper").on("init",function(t){t.preventDefault(),o(".ult-carousel-wrapper .ult-item-wrap.slick-active").each(function(t,e){$this=o(this),$this.addClass($this.data("animation"))})}),o(".ult-carousel-wrapper").on("beforeChange",function(t,e,i){$inViewPort=o("[data-slick-index='"+i+"']"),$inViewPort.siblings().removeClass($inViewPort.data("animation"))}),o(".ult-carousel-wrapper").on("afterChange",function(t,e,i,s){if(slidesScrolled=e.options.slidesToScroll,slidesToShow=e.options.slidesToShow,centerMode=e.options.centerMode,windowWidth=jQuery(window).width(),windowWidth<1025&&(slidesToShow=e.options.responsive[0].settings.slidesToShow),windowWidth<769&&(slidesToShow=e.options.responsive[1].settings.slidesToShow),windowWidth<481&&(slidesToShow=e.options.responsive[2].settings.slidesToShow),$currentParent=e.$slider[0].parentElement.id,slideToAnimate=i+slidesToShow-1,1==slidesScrolled)$inViewPort=1==centerMode?(animate=slideToAnimate-2,o("#"+$currentParent+" [data-slick-index='"+animate+"']")):o("#"+$currentParent+" [data-slick-index='"+slideToAnimate+"']"),$inViewPort.addClass($inViewPort.data("animation"));else for(let t=slidesScrolled+i;0<=t;t--)$inViewPort=o("#"+$currentParent+" [data-slick-index='"+t+"']"),$inViewPort.addClass($inViewPort.data("animation"))}),o(window).resize(function(){o(".ult-carousel-wrapper").each(function(){const t=o(this);var e,i,s;t.hasClass("ult_full_width")&&(e=t.attr("data-rtl"),t.removeAttr("style"),i=o("html").outerWidth(),s=t.offset().left,s=Math.abs(0-s),"true"===e||!0===e?t.css({position:"relative",right:"-"+s+"px",width:i+"px"}):t.css({position:"relative",left:"-"+s+"px",width:i+"px"}))})})}),o(window).on("load",function(){o(".ult-carousel-wrapper").each(function(){const t=o(this);var e,i,s;t.hasClass("ult_full_width")&&(t.css("left",0),t.css("right",0),i=t.offset().left,s=Math.abs(0-i),e=t.attr("data-rtl"),i=o("html").outerWidth(),s=s,"true"===e||!0===e?t.css({position:"relative",right:"-"+s+"px",width:i+"px"}):t.css({position:"relative",left:"-"+s+"px",width:i+"px"}))})}),jQuery(document).on("ultAdvancedTabClickedCarousel",function(t,e){o(e).find(".ult-carousel-wrapper").each(function(){const t=o(this);var e,i,s;t.hasClass("ult_full_width")&&(t.css("left",0),t.css("right",0),i=t.offset().left,s=Math.abs(0-i),e=t.attr("data-rtl"),i=o("html").outerWidth(),s=s,"true"===e||!0===e?t.css({position:"relative",right:"-"+s+"px",width:i+"px"}):t.css({position:"relative",left:"-"+s+"px",width:i+"px"}))})})}(jQuery);