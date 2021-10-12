/*--GLOBAL--*/
var GLOBAL = GLOBAL || {};
GLOBAL.widthWindow = GLOBAL.widthWindow || {};
GLOBAL.FORMERROR = GLOBAL.FORMERROR || {};
GLOBAL.FORMERROR.REQUIRED = GLOBAL.FORMERROR.REQUIRED || '';
GLOBAL.FORMERROR.EMAIL = GLOBAL.FORMERROR.EMAIL || '';
GLOBAL.mobile = GLOBAL.mobile || 720;
GLOBAL.tablet = GLOBAL.tablet || 992;

GLOBAL.parseData = function parseData(data) {
    try {
        data = JSON.parse(data.replace(/'/gim, '"'));
    } catch(e) {
        data = {};
    }
    return data;
};


GLOBAL.owl = GLOBAL.owl || {};
GLOBAL.owl.common = GLOBAL.owl.common || {};
GLOBAL.owl.common.loop = true;
GLOBAL.owl.common.dots = false;
GLOBAL.owl.common.margin = 0;
GLOBAL.owl.common.responsiveClass = true;
GLOBAL.owl.common.autoHeight = true;
GLOBAL.owl.common.mouseDrag = true;
GLOBAL.owl.common.nav = false;
/*--/global--*/

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

function initDropdown() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-Dropdown').not('.JS-Dropdown-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initMobileMenu() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-MobileMenu').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initMenu() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-Menu').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initMenuContacts() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-MenuContacts').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initMenuCall() {
    $('.js-menuCall-burger').each(function(){
        $(this).on('click', function(e) {
            var local = GLOBAL.parseData(jQuery('.JS-Menu').data('mobilemenu'));
            new MobileMenu('.JS-Menu', jQuery.extend({}, local))._open();
        });
    });
}


function initScroll() {
    $('.js-custom-scroll').each(function(){
        var customScroll = this;
        new SimpleBar(customScroll, {
            autoHide: false
        });
    });
}

function initFix() {
    if (typeof(Fix) === 'undefined' || !jQuery.isFunction(Fix)) {
        return false;
    }

    var common = {
        update: function (){
        }
    };

    $('.JS-Fix').not('.JS-Fix-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('fix'));
        new Fix(this, jQuery.extend({}, common, local));
    });
}

function initSliderAwards() {
    $(".js-slider-awards").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item');

        if ($item.length > 1) {
            $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
                autoHeight: false,
                smartSpeed: 500,
                responsive: {
                    0: {
                        items: 1,
                    },
                    720: {
                        items: 2,
                        mouseDrag: true,
                    },
                    992: {
                        items: 3,
                        autoWidth: true,
                    },
                },
            }));
            $prev.click(function(){
                $list.trigger("prev.owl.carousel");
            });
            $next.click(function(){
                $list.trigger("next.owl.carousel");
            });
        } else {
            $buttons.remove();
        }
    });
}

function initSliderClients() {
    $(".js-slider-clients").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item');

        if ($item.length > 1) {
            $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
                smartSpeed: 500,
                responsive: {
                    0: {
                        items: 1,
                    },
                    720: {
                        items: 3,
                        mouseDrag: true,
                    },
                    992: {
                        items: 4,
                        slideBy: 4,
                    },
                },
            }));
            $prev.click(function(){
                $list.trigger("prev.owl.carousel");
            });
            $next.click(function(){
                $list.trigger("next.owl.carousel");
            });
        } else {
            $buttons.remove();
        }
    });
}

function initSliderBlog() {
    $(".js-slider-blog").each(function(){
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
                    items: 3,
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

function initSliderAbout() {
    $(".js-slider-about").each(function(){
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
                    items: 3,
                },
                1308: {
                    items: 4,
                },
                1600: {
                    items: 5,
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
        $list.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                $list.trigger('next.owl');
            } else {
                $list.trigger('prev.owl');
            }
            e.preventDefault();
        });
    });
}

function initAnimateSection() {
    var wow = new WOW(
        {
            boxClass:     'js-animate-section',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true,
            callback:     function(box) {

            },
            scrollContainer: null,
            resetAnimation: false,
        }
    );
    wow.init();
}

function initScrollUp() {
    $(window).scroll(function(){
        var position = $(window).scrollTop(),
            positionBlock = $('.js-main-content').scrollTop();

        if (position > positionBlock) {
            $('body').addClass('main-content-animate');
        } else {
            $('body').removeClass('main-content-animate');
        }
    });
}

function initAnimateContacts() {
    var $element = document.querySelector('.js-animate-contacts'),
        speed = 80;

    var animate = function(type, name, obj){
        var obj = obj || window;
        var running = false;
        var func = function(){
            if (running){ return; }
            running = true;
            requestAnimationFrame(function(){
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    animate("scroll", "optimizedScroll");


    window.addEventListener("optimizedScroll", function(){
        $element.style.transform = "scale(" + (window.pageYOffset / (speed +3)) / speed + ")";
    })
}

function initFieldText() {
    if (typeof(FieldText) === 'undefined' || !jQuery.isFunction(FieldText)) {
        return false;
    }

    var common = {};

    jQuery('.JS-FieldText').not('.JS-FieldText-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('fieldtext'));
        new FieldText(this, jQuery.extend({}, common, local));
    });
}

function initValidate($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-form-validate');
    }

    $element.each(function() {
        var $element = jQuery(this),
            validator;

        validator = $element.validate({
            errorClass: 'form-error',
            validClass: 'form-success',
        });

        $.validator.messages.required = GLOBAL.FORMERROR.REQUIRED;
        $.validator.messages.email = GLOBAL.FORMERROR.EMAIL;
    });
}

function initMask() {
    $('.js-phone').mask('+7 (999) 999-99-99');
}

function initTextareaSize() {
    $('.js-textarea-size').on('input', function (e) {
        e.target.style.innerHeight = 'auto';
        e.target.style.height = e.target.scrollHeight + "px";
    });
}

function initPopupForm() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-PopupForm').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('popupform'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initScrollTop() {
    var $scrolltop = $('.js-scrolltop'),
        scrolltopActiveClass = $scrolltop.data('scrolltop');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1) {
            $scrolltop.addClass(scrolltopActiveClass);
        } else {
            $scrolltop.removeClass(scrolltopActiveClass);
        }
    });
    $scrolltop.click(function(){
        $('html, body').animate({scrollTop: '0px'}, 500);
        return false;
    });
}

function initPopupFeedback() {
    $('.js-popup-feedback').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initFieldText();
                    initValidate();
                    initMask();
                    initTextareaSize();
                    initScroll();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initExpand() {
    jQuery('.js-expand').each(function() {
        var $element = $(this),
            $block = $element.find('.js-expand-block'),
            $link = $element.find('.js-expand-link'),
            local = GLOBAL.parseData(jQuery(this).data('expand')),
            classActive = local.classActive || 'active',
            classShow = local.classShow || 'show',
            heightParent = parseInt($block.css('min-height'),10) || 38,
            heightChild = $block.height();

        if (heightChild > heightParent) {
            $element.addClass(classActive);

            $link.on("click", function() {
                if (!$element.hasClass(classShow)) {
                    $element.addClass(classShow);
                } else {
                    $element.removeClass(classShow);
                }
            });
        }
    });
}

function initPopupFilter() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-PopupFilter').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initAjaxMore() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        success: function () {
        }
    };

    $('.JS-AjaxMore').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}
/*
function initColumns() {
    if (typeof(Columns) === 'undefined' || !jQuery.isFunction(Columns)) {
        return false;
    }

    var common = {
        'update': function() {
        }
    };

    jQuery('.JS-Columns').not('.JS-Columns-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('columns'));
        new Columns(this, jQuery.extend({}, common, local));
    });
}
 */


function initResizeWindow() {
    var width = $(window).width();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
    } else {
        GLOBAL.widthWindow = '';
        //initAnimateContacts();
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
    });

    initDropdown();
    initMobileMenu();
    initMenu();
    initMenuContacts();
    initMenuCall();
    initScroll();
    initFix();

    initSliderAwards();
    initSliderClients();
    initSliderBlog();
    initSliderAbout();
    initAnimateSection();
    initScrollUp();
    initFieldText();
    initValidate();
    initMask();
    initTextareaSize();
    initPopupFeedback();
    initPopupForm();
    initScrollTop();
    initExpand();
    initPopupFilter();
    initAjaxMore();
    //initColumns();
});
