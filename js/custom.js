/*global $ */
(function($) {
    "use strict";

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.navMenu').toggleClass('show');
        $('.navOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

    //  Open DropDown
    $('.dropToggle').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if($(this).next('.dropDown').hasClass('open')){
            $('.dropDown').removeClass('open');
        } else {
            $('.dropDown').removeClass('open');
            $(this).next('.dropDown').toggleClass('open');
        } 
    });

    //  Close DropDown
    $(document).on('click', function(){
        $('.dropDown').removeClass('open');
    });

    
    // Header OWL 
    let owlHeader = $('.owlHeader');
    owlHeader.owlCarousel({
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });
    $('.owlHeader .owl-dot').each(function () {
        $(this).children('span').text('0' + ($(this).index() + 1));
    });   
    owlHeader.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlHeader.trigger('next.owl');
        } else {
            owlHeader.trigger('prev.owl');
        }
        e.preventDefault();
    });

    // Testimonials OWL 
    $('.owlTestimonials').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: false,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // Partners OWL 
    $('.owlPartners').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Clients OWL 
    $('.owlClients').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Wellness Block
    $('.openDetails').on('click' , function(){
        $(this).parents('.hover').addClass('open');
    });

    $('.closeDetails').on('click' , function(){
        $(this).parents('.hover').removeClass('open');
    });


    // Upload File 
    $('.uploadFile').on('change', function(e) {
        let fileName = e.target.value.split( '\\' ).pop();
        console.log(fileName);
        let files = $(this).parent('.uploadBox').prev('.uploadedFiles');
        files.append(
            '<div class="file">' +
                '<h3 class="fileName">' + fileName  + '</h3>' +
                '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
            '</div>'
        );               
    });

    // Delete File
    $(document).on('click','.deleteFile' , function(){
        $(this).parent('.file').remove();
    });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

