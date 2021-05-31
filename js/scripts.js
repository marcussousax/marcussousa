jQuery(function ($) {

    'use strict';
    
    // PreLoader
    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


    // Tooltip
    (function () {
        $(".social-icon li").tooltip();
    }());


});