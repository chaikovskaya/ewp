/*--GLOBAL--*/
var GLOBAL = GLOBAL || {};
GLOBAL.widthWindow = GLOBAL.widthWindow || {};
GLOBAL.FORMERROR = GLOBAL.FORMERROR || {};
GLOBAL.FORMERROR.REQUIRED = GLOBAL.FORMERROR.REQUIRED || '';
GLOBAL.FORMERROR.EMAIL = GLOBAL.FORMERROR.EMAIL || '';
GLOBAL.mobile = GLOBAL.mobile || 720;
GLOBAL.tablet = GLOBAL.tablet || 992;
GLOBAL.columnsStartLength = GLOBAL.columnsStartLength || 0;

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

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
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
    var swiper = new Swiper(".js-slider-about", {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 30,
        mousewheel: {
            invert: true,
            releaseOnEdges: true,
        },
        pagination: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1308: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 5,
            },
        },
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
    $('.js-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        "tabThrough": true,
        "showMaskOnHover": false,
    });

    $('.js-mask-email').inputmask({
        alias: "email",
        "tabThrough": true,
        "showMaskOnHover": false,
    });
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
                    initForm();

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
            heightParent = parseInt($block.css('min-height'),10) || 39,
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

function initColumns() {
    if (typeof(Columns) === 'undefined' || !jQuery.isFunction(Columns)) {
        return false;
    }

    var common = {
        'update': function() {
        }
    };

    jQuery('.JS-Columns').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('columns'));
        new Columns(this, jQuery.extend({}, common, local));
    });
}

function initAjaxMorePortfolio() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        success: function () {
            setTimeout(initColumns, 200);
        },
        isPushState: true
    };

    $('.JS-AjaxMore-Portfolio').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initForm() {
    jQuery('.js-form').each(function() {
        var $checkbox = $(this).find('.js-form-checkbox'),
            $button = $(this).find('.js-form-button'),
            classDisabled = $(this).data('form-disabled');

        if ($checkbox.is(':checked')) {
            $button.removeClass(classDisabled);
        } else {
            $button.addClass(classDisabled);
        }

        $checkbox.on("change", function(e) {
            e.stopPropagation();
            if ($checkbox.is(':checked')) {
                $button.prop("disabled", false);
                $button.removeClass(classDisabled);
            } else {
                $button.prop("disabled", true);
                $button.addClass(classDisabled);
            }
        });
    });
}

function initPopupImg() {
    $(".js-popup-img").fancybox({
        loop: true,
        infobar: false,
        toolbar  : false,
        smallBtn : true,
        arrows : false,
        animationEffect: "fade",
        btnTpl: {
            smallBtn:
                '<span data-fancybox-close class="fancybox-close fancybox-close_simple">' +
                '<i class="fancybox-close-icon las la-times"></i>' +
                "</span>",
        },
        beforeClose: function (instance) {
        },
        afterLoad: function(instance, current) {
            if ( instance.group.length > 1 && current.$content ) {
                current.$content.append('' +
                    '<div class="fancybox-nav-block">' +
                    '<button class="fancybox-button fancybox-button--arrow_left prev" data-fancybox-prev>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_left las la-arrow-left"></i></button>' +
                    '<button class="fancybox-button fancybox-button--arrow_right next" data-fancybox-next>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_right las la-arrow-right"></i></button>' +
                    '</div>'
                );
            }
        }
    });
}

function setHeightWindow() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', '' + vh + 'px');
}

function initAdaptiveMenu() {
    $('.js-adaptivemenu').each(function() {
        var $navItemMore = $(this).find('.js-adaptivemenu-more'),
            $navItems = $(this).find('.js-adaptivemenu-item'),
            targetClass = '.js-adaptivemenu-target',
            navItemWidthMore = $navItemMore.width(),
            windowWidth = $(this).width(),
            navItemWidth = 0;

        $navItemMore.before($(targetClass + ' > .js-adaptivemenu-item'));

        $navItems.each(function () {
            navItemWidth += $(this).outerWidth();
        });

        navItemWidth > windowWidth ? $navItemMore.show() : $navItemMore.hide();

        while (navItemWidth > windowWidth) {
            navItemWidth -= $navItems.last().width();
            $navItems.last().prependTo(targetClass);
            $navItems.splice(-1, 1);
        }
    });
}

function initAnchorScroll() {
    var $page = $('html, body');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
}

function initSliderProcess() {
    $(".js-slider-process").each(function(){
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
            margin: 0,
            items: 1,
            responsive: {
                0: {
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
function reInitSliderProcess() {
    $(".js-slider-process .js-slider-list").trigger('destroy.owl.carousel');
}

function initSticky() {
    if (typeof(Sticky) === 'undefined' || !jQuery.isFunction(Sticky)) {
        return false;
    }

    var common = {
        update: function (){
        }
    };

    $('.JS-Sticky').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('sticky'));
        new Sticky(this, jQuery.extend({}, common, local));
    });
}

function initSliderSeoInstuments() {
    $(".js-slider-seo-instruments").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 500,
            margin: 0,
            responsive: {
                0: {
                    items: 1,
                },
                720: {
                    items: 5,
                    mouseDrag: itemLength > 5 ? true : false,
                    touchDrag: itemLength > 5 ? true : false,
                    loop: itemLength > 5 ? true : false,
                },
            },
        }));
    });
}

function initSliderSeoStages() {
    $(".js-slider-seo-stages").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    mouseDrag: true,
                    loop: itemLength > 1 ? true : false,
                },
                720: {
                    items: 2,
                    margin: 30,
                    mouseDrag: itemLength > 2 ? true : false,
                    touchDrag: itemLength > 2 ? true : false,
                    loop: itemLength > 2 ? true : false,
                },
            },
        }));
    });
}
function reInitSliderSeoStages() {
    $(".js-slider-seo-stages .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderSeoAdvantages() {
    $(".js-slider-seo-advantages").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    mouseDrag: itemLength > 1 ? true : false,
                    loop: itemLength > 1 ? true : false,
                },
                720: {
                },
            },
        }));
    });
}
function reInitSliderSeoAdvantages() {
    $(".js-slider-seo-advantages .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderSeoPrice() {
    $(".js-slider-seo-price").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    mouseDrag: itemLength > 1 ? true : false,
                },
                720: {
                },
            },
        }));
    });
}
function reInitSliderSeoPrice() {
    $(".js-slider-seo-price .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderSeoServices() {
    $(".js-slider-seo-services").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    mouseDrag: itemLength > 1 ? true : false,
                },
                720: {
                },
            },
        }));
    });
}
function reInitSliderSeoServices() {
    $(".js-slider-seo-services .js-slider-list").trigger('destroy.owl.carousel');
}

function initTab() {
    if (typeof(Tab) === 'undefined' || !jQuery.isFunction(Tab)) {
        return false;
    }

    var common = {};

    jQuery('.JS-Tab').not('.JS-Tab-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new Tab(this, jQuery.extend({}, common, local));
    });
}

function initResizeWindow() {
    var width = $(window).width();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
        initSliderProcess();
        initSliderSeoStages();
        initSliderSeoAdvantages();
        initSliderSeoPrice();
        initSliderSeoServices();
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        reInitSliderProcess();
        initSliderSeoStages();
        reInitSliderSeoAdvantages();
        reInitSliderSeoPrice();
        reInitSliderSeoServices();
    } else {
        GLOBAL.widthWindow = '';
        reInitSliderProcess();
        reInitSliderSeoStages();
        reInitSliderSeoAdvantages();
        reInitSliderSeoPrice();
        reInitSliderSeoServices();
    }
}

$(document).ready(function () {
    initResizeWindow();
    setHeightWindow();
    $(window).resize(function(){
        initResizeWindow();
        initAdaptiveMenu();
        initSticky();
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
    initAjaxMorePortfolio();
    initColumns();
    initForm();
    initPopupImg();
    initAdaptiveMenu();
    initAnchorScroll();
    initSticky();
    initSliderSeoInstuments();
    initTab();
});
