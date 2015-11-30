/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */

var librs = librs || {};
librs.ui = {};
librs.ui = function () {

    var fetch = function (confidenceName) {

        if (confidenceName.localeCompare("Confidence in Writing a Thesis") {
            console.log('0');
            newChart(0);
        }
        else if (confidenceName.localeCompare("Confidence in Using Scholarly Information") {
            console.log('1');
            newChart(1);
        }
        else if (confidenceName.localeCompare("Confidence in Evaluating the Authority of a Source") {
            console.log('2');
            newChart(2);
        }
        else if (confidenceName.localeCompare("Confidence Understanding the Ethics of Using Information") {
            console.log('3');
            newChart(3);
        }
    }

    var initialize = function () {

        console.log('Initialize!');

        $('.dropdown-menu li').on('click', function () {
            $('#dropdown_title').html($(this).find('a').html());
            console.log($(this).find('a').html() + " clicked");
            fetch($(this).find('a').html()); //pass in name of confidence level clicked
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