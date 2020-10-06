/**
 *
 * Validator v0.0.1
 * 폼검증 스크립트를 만들어 봅시다
 * @author ben-log
 * 
 */

(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define(factory);
    } else if ( typeof exports === 'object' ) {
        module.exports = factory;
    } else {
        root.Validator = factory(root);
    }
})(this, function (root) {

    'use strict';

    //
    // 변수
    //

    const exports = {};
    const supports = !!document.querySelector && !!root.addEventListener;

    let defaults = {
        someVar: 123,
        callbackBefore: function () {},
        callbackAfter: function () {}
    };

    //
    // 함수
    //

    /**
     * Initialize
     * @public
     * @param {Object} options 유저 옵션
     */
    exports.init = function ( options ) {

        if ( !supports ) return;

    };

    return exports;

});