$(document).ready(function(){var s=$("#custom");s.find(".js-custom-image").on("click","i",function(){$("body").addClass("modal-open"),s.find(".is-active").removeClass("is-active"),s.find(".js-custom").addClass("is-open"),$(this).addClass("is-active");var i=$(this).index(".js-focus");s.find(".js-part").eq(i).addClass("is-active")}),s.find(".js-custom-close").click(function(){s.find(".js-custom").removeClass("is-open"),$("body").removeClass("modal-open")}),$(window).on("scroll",function(){$(window).scrollTop()>200?$("#logo").addClass("is-scroll"):$("#logo").removeClass("is-scroll")});var i=$("#mainNav");i.find(".js-menu-icon").click(function(){$(this).hasClass("is-active")?(i.find(".is-active").removeClass("is-active"),$("body").removeClass("modal-open")):($(this).addClass("is-active"),i.children("ul").addClass("is-active"),$("body").addClass("modal-open"))}),i.children("ul").find("a").click(function(){$(this).siblings().hasClass("is-active")?i.find(".is-active").removeClass("is-active"):(i.children("ul").find(".is-active").removeClass("is-active"),$(this).siblings().addClass("is-active"),i.find(".js-menu-back").addClass("is-active"))}),i.find(".js-menu-back").click(function(){i.children("ul").find(".is-active").removeClass("is-active"),i.find(".js-menu-back").removeClass("is-active")}),$(document).mouseup(function(s){var i=$("#mainNav");i.is(s.target)||0!==i.has(s.target).length||i.find(".is-active").removeClass("is-active")})});var fixed=document.getElementById("mainNav");fixed.addEventListener("touchmove",function(s){s.preventDefault()},!1);