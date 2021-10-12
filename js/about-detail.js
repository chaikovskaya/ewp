
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
            autoHeight: false,
            smartSpeed: 500,
            margin: 30,
            center: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                720: {
                    items: 2,
                    mouseDrag: true,
                },
                992: {
                    items: 2,

                },
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
    });
}

$(document).ready(function () {
    initSliderCompany();
});