$(function() {
    var agent = navigator.userAgent,
        is_ipad = agent.match(/iPad/i) !== null,
        is_iphone = !is_ipad && ((agent.match(/iPhone/i) !== null) || (agent.match(/iPod/i) !== null)),
        is_ios = is_ipad || is_iphone,
        is_android = !is_ios && agent.match(/android/i) !== null,
        is_mobile = is_ios || is_android,
        browser_hidden = function () {
            if (typeof document.hidden !== 'undefined') {
              return document.hidden;
            } else if (typeof document.mozHidden !== 'undefined') {
              return document.mozHidden;
            } else if (typeof document.msHidden !== 'undefined') {
              return document.msHidden;
            } else if (typeof document.webkitHidden !== 'undefined') {
              return document.webkitHidden;
            }
            return false;
        };

    $('a').click(function( event ) {
        if (is_mobile) {
            var href = $(this).attr('href');
            var app_link = $(this).attr('data-app');
            if (typeof app_link !== typeof undefined && app_link !== false) {
                setTimeout(function () {
                    if (!browser_hidden()){
                        window.location = href;
                    }
                }, 25);
                window.location = app_link;
            }
            event.preventDefault();
        }
    });
});


