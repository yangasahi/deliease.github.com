var scrollTo;scrollTo=function(o,e,s){var r,i;return 0>=s?void 0:(r=e-o.scrollTop,i=r/s*10,setTimeout(function(){return o.scrollTop=o.scrollTop+i,o.scrollTop!==e?scrollTo(o,e,s-10):void 0},10))},$(function(){return window.screenshots=new Swipe($("#screen")[0],{speed:300,auto:3e3}),$("<div />",{"class":"swipe",id:"slider"}).insertBefore($(".features")),$(".features ul").clone().addClass("swipe-wrap").appendTo(slider),window.features=new Swipe($("#slider")[0],{speed:300,auto:os.phone?0:3e3,transitionEnd:function(o){return $(".dot").removeClass("active"),$(".dot").eq(o).addClass("active")}}),$(".top").on("click",function(){return scrollTo(document.body,0,100)}),os.ios&&$(".android").hide(),os.android?$(".ios").hide():void 0});