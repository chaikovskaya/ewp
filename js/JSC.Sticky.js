!function(global) {
  'use strict';

  function Sticky(elem, params) {
    this.$element = jQuery(elem);
    this.params = params || {};

    this.onInit = this.params.onInit || null;
    this.classReady = this.params.classReady || 'JS-Sticky-ready';
    this.classActive = this.params.classActive || 'sticky-active';
    this.classBottom = this.params.classBottom || 'sticky-bottom';
    this._update = this.params.update|| {};

    this.__construct();
  };

    Sticky.prototype.__construct = function __construct() {
    this.$document = jQuery(document.body);
    this.$item = this.$element.find('.JS-Sticky-Item');
    this.elementPosition = this.$element.offset().top;
    this.heightElement = this.$element.height();
    this.heightItem = this.$item.height();

    this._init();
  };

    Sticky.prototype._init = function _init() {
    var _this = this;

    if( jQuery.isFunction(this.onInit) ){
      this.onInit.apply(window, []);
    }

    this._build();

    $(window).on('scroll', function(e, data) {
        _this._build.apply(_this, []);
    });

    this.$item.removeClass(this.classBottom);

    this._ready();
  };

    Sticky.prototype._ready = function _ready() {
    this.$element
      .addClass('JS-Sticky-ready')
      .addClass(this.classReady);
  };

    Sticky.prototype._update = function _update() {
    }

    Sticky.prototype._build = function _build() {
      let windowPosition = $(window).scrollTop(),
          elementPosition = this.$element.offset().top;

      if (windowPosition >= elementPosition ) {
          if (!this.$item.hasClass(this.classActive)) {
              this.$item.addClass(this.classActive);
          }
      } else {
          this.$item.removeClass(this.classActive);
      }

      let H = this.heightElement - this.heightItem,
          P = this.$item.offset().top - this.$element.offset().top;
      if ( P >= H ) {
         if (!this.$item.hasClass(this.classBottom)) {
           this.$item.addClass(this.classBottom);
         }
      }
      if ( windowPosition <  this.$item.offset().top) {
          this.$item.removeClass(this.classBottom);
      }

      this._update();
  }
  /*--/Sticky--*/

  global.Sticky = Sticky;
}(this);
