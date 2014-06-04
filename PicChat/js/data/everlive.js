define([], function () {

    var el = new Everlive('your-api-key-here');
    el.Users.login('jsmith', // username
        '111111', // password
        function (data) {
            alert(JSON.stringify(data));
        },
        function (error) {
            alert(JSON.stringify(error));
        });

});