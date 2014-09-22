$(function() {
    var agent = navigator.userAgent,
        is_ipad = agent.match(/iPad/i) !== null,
        is_iphone = !is_ipad && ((agent.match(/iPhone/i) !== null) || (agent.match(/iPod/i) !== null)),
        is_ios = is_ipad || is_iphone,
        is_android = !is_ios && agent.match(/android/i) !== null,
        is_mobile = is_ios || is_android;

    $('a').click(function( event ) {
        if (is_mobile) {
            var href = $(this).attr('href');
            var app_link = $(this).attr('data-app');
            if (typeof app_link !== typeof undefined && app_link !== false) {
                setTimeout(function () {
                    if (new Date().getTime() - event.timeStamp < 150) {
                        window.location = href;
                    }
                }, 100);
                window.location = app_link;
            }
            event.preventDefault();
        }
    });
});


