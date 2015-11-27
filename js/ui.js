/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */

var librs = librs || {};
librs.ui = {};
librs.ui = function () {

    var fetch = function () {
        //var year = document.getElementById('year');
        //var yearValue = year.value;
        //console.log(yearValue);
        //vizController(yearValue);
    };

    var toggle = function () {

        console.log('About!');

        var text = document.getElementById('about');



    };

    var initialize = function () {

        console.log('Initialize!');
        fetch();

        $('.dropdown-menu li').on('click', function () {
            $('#dropdown_title').html($(this).find('a').html());
            console.log($(this).find('a').html() + " clicked")
        });


    };

    // When this file is included at the bottom of the page,
    // the js is loaded after the DOM is loaded.  It is a
    // good time to initialize the UI elements in the page.
    initialize();

};
// end module

// Invoke module. After invocation, the module’s code is now added to
// the namespace and is accessible through the librs object.
librs.ui();