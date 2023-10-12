jQuery(function ($) { "use strict";
    $( document ).ready(function() {
    
    // AOS Config
    AOS.init({
        once: true,
        duration: 700,
    });

    // Smooth Scrolling
    var scroll = new SmoothScroll('a[href*="#"]');


    // Link hover effects
    $("#navbar a, #small-navbar a, .swiper-button-prev, .swiper-button-next").hover(function(){
        $(this).css("color","#319da5")
    }, function(){
        $(this).css("color","rgb(214, 214, 214)")
    })

    $("#dsslogo").delay(200).fadeIn(700);
    $("#navbar").delay(200).fadeIn(700);
    $("#fsulogo").delay(200).fadeIn(700);
    
    //Hide Navigation Bar on scroll
    var prev = 0;
    var $window = $(window);
    var nav = $('#navbar');
    var smallnav = $('#small-navbar');

    $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    smallnav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
    })

    //All Publications show more/less buttons
    var patentsbtn = $("#patents-btn");
    var patentsrow = $("#patents-row");
    var booksbtn = $("#books-btn");
    var booksrow = $("#books-row");
    var journalsbtn = $("#journals-btn");
    var journalsrow = $("#journals-row");
    var conferencesbtn = $("#conferences-btn");
    var conferencesrow = $("#conferences-row");
    var miscbtn = $("#misc-btn");
    var miscrow = $("#misc-row");

    patentsbtn.click(function(){
        patentsrow.toggleClass("expand");
        if (patentsrow.hasClass("expand")){
            patentsbtn.text("Show Less");
        } else {
            patentsbtn.text("Show All");
        }
    })

    booksbtn.click(function(){
        booksrow.toggleClass("expand");
        if (booksrow.hasClass("expand")){
            booksbtn.text("Show Less");
        } else {
            booksbtn.text("Show All");
        }
    })

    journalsbtn.click(function(){
        journalsrow.toggleClass("expand");
        if (journalsrow.hasClass("expand")){
            journalsbtn.text("Show Less");
        } else {
            journalsbtn.text("Show All");
        }
    })

    conferencesbtn.click(function(){
        conferencesrow.toggleClass("expand");
        if (conferencesrow.hasClass("expand")){
            conferencesbtn.text("Show Less");
        } else {
            conferencesbtn.text("Show All");
        }
    })

    miscbtn.click(function(){
        miscrow.toggleClass("expand");
        if (miscrow.hasClass("expand")){
            miscbtn.text("Show Less");
        } else {
            miscbtn.text("Show All");
        }
    })
    
    });
});
