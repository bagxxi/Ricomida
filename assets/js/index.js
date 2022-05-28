$(document).ready(function(){  
    $(".titlesCard").click(function () {
        $('.textCard').toggle();
    });

    $('[data-toggle="tooltip"]').tooltip()


    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });


    $(".turningRed").on("dblclick", function(){
        $(this).css({
        "color": "red",
        });
    });

});



    
