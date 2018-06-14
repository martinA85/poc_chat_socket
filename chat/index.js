window.onload = init;


function init() {
    console.log("init");

    var userId = false;

    $(document).ready(function () {
        $("#form_connexion").submit(function (e) {
            e.preventDefault();
            $.ajax({
                url: 'http://localhost:3000/auth',
                type: 'POST',
                data: $('#form_connexion').serialize(),
                dataType: 'json',
                success: function (data) {
                    userId = data._id;

                    console.log(userId);

                    var connectionOptions = {
                        "force new connection": true,
                        "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
                        "timeout": 10000,                  //before connect_error and connect_timeout are emitted.
                        "transports": ["websocket"],
                        "query": "userId=" + userId
                    };

                    var socket = io.connect("http://localhost:8080", connectionOptions);
                    // socket.connect("http://localhost:3000/", { query: "userId=" + userId });
                    console.log(socket);
                    socket.on("cnx_state", function (res) {
                        console.log(res);
                        if (res.success) {
                            console.log(res);
                        } else {
                            console.log(res);
                        }
                    });
                }
            });
        });
    });

}
