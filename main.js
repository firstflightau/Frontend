import jQuery from "jquery";
import Swiper from "swiper";

(function ($) {
  /*----------------------------------------------
        :: Sticky And Scroll Up
    -----------------------------------------------*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
      $(".header-sticky").removeClass("sticky-bar");
      $("#back-top").fadeOut(300);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $("#back-top").fadeIn(300);
    }
  });

  /*-------------------------------------------------
        :: Nav tab
    -------------------------------------------------*/

  $(".tab-section-one").show();
  $(".tab-btn a").on("click", function () {
    $(".tab-btn a").removeClass("active");
    $(this).addClass("active");
    $(".tab-section").hide();
    var tabId = $(this).data("tab-id");
    $("#" + tabId).show();
  });

  /*-----------------------------------------------
        :: Slick Nav [ Mobile Menu ]
    -----------------------------------------------*/
  var slickNavInitialized = false;
  $(document).ready(function () {
    if (!slickNavInitialized) {
      var menu = $("#navigation");
      var filterMenu = $("#filterMenu");
      // console.log(menu, "filter menu");
      if (menu.length) {
        menu?.slicknav({
          prependTo: ".mobile_menu",
          closedSymbol: "+",
          openedSymbol: "-",
        });
        slickNavInitialized = true;
      }
      if (filterMenu.length) {
        filterMenu.slicknav({
          label: "Filter",
          duplicate: true,
          duration: 200,
          easingOpen: "swing",
          easingClose: "swing",
          closedSymbol: "&#9658;",
          openedSymbol: "&#9660;",
          prependTo: ".filter_menu",
        });
        slickNavInitialized = true;
      }
    }
  });

  /*------------------------------------------------
        :: Filter side nav
    ------------------------------------------------*/
  $(document).ready(function () {
    $(document).on("click", "#hamburger", function (e) {
      e.stopPropagation();
      $(".search-filter-section").toggleClass("sidenav-active");
      $(".cover").addClass("cover-active");
    });
    $(document).on("click", function (e) {
      if (
        !$(e.target).closest(".search-filter-section").length &&
        !$(e.target).is("#hamburger")
      ) {
        $(".search-filter-section").removeClass("sidenav-active");
        $(".cover").removeClass("cover-active");
      }
    });
    $(document).on("click", ".close-btn", function (e) {
      $(".search-filter-section").removeClass("sidenav-active");
      $(".cover").removeClass("cover-active");
    });
  });

  /*-------------------------------------------------
        :: Play video Slider
    -------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var videos = document.querySelectorAll(".hero-slider-video");
    videos.forEach(function (video) {
      video.controls = false;
      ["mousedown", "mouseup", "click"].forEach(function (eventType) {
        video.addEventListener(eventType, function (event) {
          event.preventDefault();
        });
      });
    });
  });
  function togglePlay(event) {
    event.preventDefault();
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  /*-----------------------------------
        OFF inspections
    -----------------------------------*/
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
  };
})(jQuery);
