const swiper = new Swiper('.swiper', {
    // Optional parameters
    centeredSlides: true,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function addDelay() {
    var products = document.getElementsByClassName("vehicles-product");
    for (var i = 0; i < products.length; i++) {
        products[i].classList.add(`delay-${i + 1}`);
    }
}
addDelay();

$("#vehicles-list").mCustomScrollbar({
    theme: 'dark',
});

function move(value) {
    $("#vehicles-list").mCustomScrollbar("scrollTo", value, {
        scrollEasing: 'easeOut'
    })
}

$(".vehicles-nav ul li a").click(function () {
    switch ($(this).attr("id")) {
        case "cars-nav":
            move("#cars");
            break;
        case "suv-nav":
            move("#suv");
            break;
        case "truck-nav":
            move("#truck");
            break;
        case "environmental-nav":
            move("#environmental");
            break;
        case "future-nav":
            move("#future");
            break;
    }
})

var idClicked = "";
$("#navbar > a").click(function () {
    if (idClicked === "") {
        idClicked = $(this).attr("id");
        $(this).addClass("active");
        if (idClicked === "vehicles-container") {
            $("#vehicles").removeClass("hide-vehicles");
            $(".vehicles-nav").addClass("animate__fadeInDown");
            $("#vehicles-list").addClass("animate__fadeInUp");
            $("#vehicles-close").addClass("animate__fadeInRight");
        }
    }
    else {
        if (idClicked === $(this).attr("id")) {
            $(this).removeClass("active");
            idClicked = "";
            $(".vehicles-nav").addClass("animate__fadeOutUp");
            $("#vehicles-list").addClass("animate__fadeOutDown");
            $("#vehicles-close").addClass("animate__fadeOutRight");
            setTimeout(function () {
                $("#vehicles").addClass("hide-vehicles");
                $(".vehicles-nav").removeClass("animate__fadeOutUp");
                $("#vehicles-list").removeClass("animate__fadeOutDown");
                $("#vehicles-close").removeClass("animate__fadeOutRight");
            }, 300);
        }
        else {
            $("#navbar > a").removeClass("active");
            $(this).addClass("active");
            idClicked = $(this).attr("id");
            if (idClicked != "vehicles-container") {
                $(".vehicles-nav").addClass("animate__fadeOutUp");
                $("#vehicles-list").addClass("animate__fadeOutDown");
                $("#vehicles-close").addClass("animate__fadeOutRight");
                setTimeout(function () {
                    $("#vehicles").addClass("hide-vehicles");
                    $(".vehicles-nav").removeClass("animate__fadeOutUp");
                    $("#vehicles-list").removeClass("animate__fadeOutDown");
                    $("#vehicles-close").removeClass("animate__fadeOutRight");
                }, 300);
            }
            else {
                $("#vehicles").removeClass("hide-vehicles");
                $(".vehicles-nav").addClass("animate__fadeInDown");
                $("#vehicles-list").addClass("animate__fadeInUp");
                $("#vehicles-close").addClass("animate__fadeInRight");
            }
        }
    }
})

$("#vehicles-close").click(function () {
    $(".vehicles-nav").addClass("animate__fadeOutUp");
    $("#vehicles-list").addClass("animate__fadeOutDown");
    $("#vehicles-close").addClass("animate__fadeOutRight");
    setTimeout(function () {
        $("#vehicles").addClass("hide-vehicles");
        $(".vehicles-nav").removeClass("animate__fadeOutUp");
        $("#vehicles-list").removeClass("animate__fadeOutDown");
        $("#vehicles-close").removeClass("animate__fadeOutRight");
    }, 300);
    $("#navbar > a").removeClass("active");
    idClicked = "";
})
$(".vehicles-product").addClass("animate__animated animate__fadeInUp");

// SHOPPING TOOLS CLICK
$("#tools-container").click(function () {
    var toolsClicked = $("#tools-container").attr("class");
    if (toolsClicked.includes("active")) {
        $("#shopping-tools").removeClass("hide-tools");
        $("#shopping-tools").addClass("animate__fadeInDown");
        toolsClicked = $(this).attr("id");
    }
    else {
        $("#shopping-tools").addClass("animate__fadeOutUp");
        setTimeout(() => {
            $("#shopping-tools").addClass("hide-tools");
            $("#shopping-tools").removeClass("animate__fadeOutUp");
        }, 300);
        toolsClicked = "";
    }
})

// OUR VEHICLES
$('.carousel-indicators-config li').click(function() {
    $('.carousel-indicators-config li').removeClass('active');
    $(this).addClass('active');
})

// OUR VEHICLES MINI CATEGORIES
var isDown = false;
$('.indicators-xs-header').click(function() {
    $('.carousel-indicators-xs ol').slideToggle();
    if(!isDown) {
        $('.indicators-xs-header i').addClass('transform-rotate-180');
        isDown = true;
    }
    else {
        $('.indicators-xs-header i').removeClass('transform-rotate-180');
        isDown = false;
    }
});

$('.carousel-indicators-xs ol li').click(function() {
    $('.indicators-title span').html($(this).html());
    $('.carousel-indicators-xs ol').slideUp();
    $('.indicators-xs-header i').removeClass('transform-rotate-180');
    isDown = false;
})

var count = 0;
$('.carousel-control-prev').click(function() {
    $('.carousel-indicators-config li').removeClass('active');
    if (count == 0) {
        count = 4;
    }
    else {
        count--;
    }
    $('.carousel-indicators-config li').each(function(index) {
        if (index == count) {
            $(this).addClass('active');
            $('.indicators-title span').html($(this).html());
        }
    })
})

$('.carousel-control-next').click(function() {
    $('.carousel-indicators-config li').removeClass('active');
    if (count == 4) {
        count = 0;
    }
    else {
        count++;
    }
    $('.carousel-indicators-config li').each(function(index) {
        if (index == count) {
            $(this).addClass('active');
            $('.indicators-title span').html($(this).html());
        }
    })
})




// BACK TO TOP
$('.back-to-top').click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 1000)
})

// COLLAPSE FOOTER
$(window).resize(function() {
    var width = $(window).width() + 17
    console.log(width)
    $('.footer-collapse').toggleClass('collapse', width < 767.98)
})

$(document).ready(function() {
    var width = $(window).width()
    console.log(width)
    $('.footer-collapse').toggleClass('collapse', width < 767.98)
})