// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.inputLabel = function () {

        if(this.is('input, select, textarea')) {
            var id = this.attr('id');

            if (typeof id !== typeof undefined && id !== false) {
                return $('label[for="' + id + '"]');
            } else {
                return null;
            }
        }

        if(this.is('label')) {
            var for_attr = this.attr('for');

            if (typeof for_attr !== typeof undefined && for_attr !== false) {

                var target = $('#' + for_attr);

                if(target.length > 0) {
                    return target;
                } else {
                    return $();
                }

            } else {
                return this.children().first();
            }
        }

        return $();
    };
}));