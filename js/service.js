
function initSliderService() {
    $(".js-slider-service").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
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
    });
}
function reInitSliderService() {
    $(".js-slider-service .js-slider-list").trigger('destroy.owl.carousel');
}

function initResizeWindowService() {
    var width = $(window).width();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
        initSliderService();
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        reInitSliderService();
    } else {
        GLOBAL.widthWindow = '';
        reInitSliderService();
    }
}

$(document).ready(function () {
    initResizeWindowService();
    $(window).resize(function(){
        initResizeWindowService();
    });

});