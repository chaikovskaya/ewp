
function initSliderCompany() {
    $(".js-slider-company").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $item = $list.find('.js-slider-item');

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 600,
            autoplayHoverPause: true,
            autoHeight: false,
            smartSpeed: 500,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    autoplay: false,
                },
                720: {
                    items: 2,
                    mouseDrag: true,
                    autoplay: false,
                },
                992: {
                    items: 2,
                    center: true,
                },
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
    });
}

function initSliderReviews() {
    $(".js-slider-reviews").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item');

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 500,
            margin: 30,
            items: 1,
            responsive: {
                0: {
                    margin: 10,
                },
                720: {
                    mouseDrag: true,
                },
                992: {
                },
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
    });
}

$(document).ready(function () {
    initSliderCompany();
    initSliderReviews();
});