/**
 *
 * jquery.validator.js
 * 폼 검증 스크립트 - jQuery 버전
 * 
 * @author Ben
 * @since 2020-10-09
 * @version 0.0.1
 * 
 */
(function ($, undefined) {

    "use strict";

    const defaults = {
        email: true,
    };

    /**
     * Validator
     * 
     * @param {Object} element 검증할 대상 폼
     * @param {Object} options 플러그인 옵션
     */
    function Validator(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this.items = {};

        // 플러그인 초기화
        this.init();
    }

    Validator.prototype = {
        init: function() {
            // console.log("jQuery validator init");
            // console.dir(this);

            this.$el = this.setElements();
            this.bindEvents();
        },

        /**
         * Bind Elements
         * 플러그인에 사용 될 엘리먼트를 선언합니다.
         */
        setElements: function() {
            let self = {};

            self.form = $(this.element);

            return self;
        },

        /**
         * Bind Events
         * 엘리먼트에 이벤트를 연결합니다.
         */
        bindEvents: function() {
            this.$el.form.on("submit", this.submit.bind(this));
        },

        /**
         * Submit
         * 폼 검증을 실행합니다.
         */
        submit: function() {
            let elements = this.$el.form[0].elements;
            // console.dir(elements);

            // Do something...
            return false;
        }

    };

    $.fn["validator"] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "validator")) {
                $.data(this, "validator", new Validator( this, options ));
            }
        });
    };

})(jQuery);