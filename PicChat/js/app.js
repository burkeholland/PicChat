define(['controllers/index'], function (controllers) {

    var start = function (login) {

        var el = new Everlive('your-api-key-here');
        el.Users.login('jsmith', // username
        '111111', // password
        function (data) {
            alert(JSON.stringify(data));
        },
        function (error) {
            alert(JSON.stringify(error));
        });

        new kendo.mobile.Application(document.body, {
            modelScope: controllers
        });
    }

    return {
        start: start
    };
    
});