window.onload = init;


function init() {
    console.log("init");

    var userId = false;

    $(document).ready(function () {
        $("#btn_connexion").click(function (e) {
            // e.preventDefault();
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/findByName/' + $('#name').val(),
                success: function (data) {
                    userId = data._id;

                    console.log(userId);

                    var socket = io.connect("http://localhost:3000/", { query: "userId=" + userId });
                    socket.on("cnx_etat", function (res) {
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
