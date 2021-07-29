export function init(callback) {
    window.fbAsyncInit = function() {
        FB.init({
            appId: '526657901885346',
            cookie: true,
            xfbml: true,
            version: 'v11.0'
        });

        // FB.AppEvents.logPageView();

        // FB.getLoginStatus(function (response) {
        //     console.log(response);
        // });

        callback(FB);
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}