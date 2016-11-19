/* 
 Created on : 20-ene-2014, 19:21:54
 Author     : Julio Cesar Valadez Castañeda
 */
$(document).ready(function() {
    $(function() {
        MathJax.Hub.Config({
            tex2jax: {inlineMath: [["$", "$"], ["\\(", "\\)"]]},
            processEscapes: "true",
            displayAlign: "center",
            displayIndent: "0.1em"
        });
    });
//    $(function () {
//        $('.link').click(function (event) {
//            event.preventDefault();
//            var valor = $(this).attr('href');
//            switch (valor) {
//                case 'GuiaProfesor':
//                    $('#Display').load('Documentacion/' + valor + '.html');
//                    break;
//                case 'GuiaAlumno':
//                    $('#Display').load('Documentacion/' + valor + '.html');
//                    break;
//                case 'Avanzado':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/index.php?Id=1";
//                    $(location).attr('href', url);
//                    break;
//                case 'Intermedio':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/index.php?Id=2";
//                    $(location).attr('href', url);
//                    break;
//                case 'Basico':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/index.php?Id=3";
//                    $(location).attr('href', url);
//                    break;
//            }
//        });
//    });
//    $(function () {
//        $('.link_avz').click(function (event) {
//            event.preventDefault();
//            var valor = $(this).attr('href');
//            switch (valor) {
//                case 'ED':
//                    $('#contenido4').fadeOut('slow');
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido2').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido1').fadeIn('slow');
//                    }, 800);
//                    break;
//                case 'ED_Ord':
//                    $('#contenido4').fadeOut('slow');
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido1').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido2').fadeIn('slow');
//                    }, 1000);
//                    break;
//                case 'ED_Pri_OG':
//                    $('#contenido4').fadeOut('slow');
//                    $('#contenido2').fadeOut('slow');
//                    $('#contenido1').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido3').fadeIn('slow');
//                    }, 1000);
//                    break;
//                case 'Biblio':
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido2').fadeOut('slow');
//                    $('#contenido1').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido4').fadeIn('slow');
//                    }, 1000);
//                    break;
//                case 'Editor_avz':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/Editores/Editor.php?Nivel=Avanzado";
//                    $(location).attr('href', url);
//                    break;
//                case 'Home':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/index.php";
//                    $(location).attr('href', url);
//                    break;
//            }
//        });
//    });
//    $(function () {
//        $('.link_Int').click(function (event) {
//            event.preventDefault();
//            var valor = $(this).attr('href');
//            switch (valor) {
//                case 'ED':
//                    $('#contenido4').fadeOut('slow');
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido2').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido1').fadeIn('slow');
//                    }, 800);
//                    break;
//                case 'ED_Ord':
//                    $('#contenido4').fadeOut('slow');
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido1').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido2').fadeIn('slow');
//                    }, 1000);
//                    break;
//                case 'Biblio':
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido2').fadeOut('slow');
//                    $('#contenido1').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido4').fadeIn('slow');
//                    }, 1000);
//                    break;
//                case 'Editor_Int':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/Editores/Editor.php?Nivel=Intermedio";
//                    $(location).attr('href', url);
//                    break;
//                case 'Home':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/index.php";
//                    $(location).attr('href', url);
//                    break;
//            }
//        });
//    });
//    $(function () {
//        $('.link_Bsc').click(function (event) {
//            event.preventDefault();
//            var valor = $(this).attr('href');
//            switch (valor) {
//                case 'Org_ED':
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido2').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido1').fadeIn('slow');
//                    }, 800);
//                    break;
//                case 'ED_Ord':
//                    $('#contenido3').fadeOut('slow');
//                    $('#contenido1').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido2').fadeIn('slow');
//                    }, 1000);
//                    break;
//                case 'Biblio':
//                    $('#contenido2').fadeOut('slow');
//                    $('#contenido1').fadeOut('slow');
//                    setTimeout(function () {
//                        $('#contenido3').fadeIn('slow');
//                    }, 1000);
//                    break;
//                case 'Editor_Bsc':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/Editores/Editor.php?Nivel=Basico";
//                    $(location).attr('href', url);
//                    break;
//                case 'Home':
//                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/index.php";
//                    $(location).attr('href', url);
//                    break;
//            }
//        });
//    });
    $(function() {
        var inputText = $('#EdtFormulas');
        var ouputText = $('#Resultado');
        var menu = $('#MenuEdtAvz');

        menu.on('click touchstart', function() {
            var expr = inputText.val();
            ouputText.text("$" + expr + "$");
            if (expr == '') {
                ouputText.text('');
            }
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, "Resultado"]);
        });
        inputText.keyup(function() {
            var expr = inputText.val();
            ouputText.text("$" + expr + "$");
            if (expr == '') {
                ouputText.text('');
            }
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, "Resultado"]);
        });
    });
    $(function() {
        $('.btn').on('click touchstart', function() {
            var Val = $(this).attr('value');
            switch (Val) {
                case 'Inicio':
                    var url = "http://cux.uaemex.mx/edic/Editor_de_Ecuaciones/index.php";
                    $(location).attr('href', url);
                    break;
                case 'Guardar':
                    break;
                case 'Borrar':
                    $('#EdtFormulas').val('');
                    $('#Resultado').empty();
                    break;
            }
        });
    });
    $('#IdGuardar').on('click touchstart', function() {
        $('#Box').fadeIn('slow');
    });

    $('.close').on('click touchstart', function() {
        $('#Box').fadeOut('slow');
        $('#IdNombreUser').val("");

    });

    $(function() {
        $('.boton').on('click touchstart', function() {
            $('#EdtFormulas').focus();
        });
    });

//    $(function() {
//        $('#IdGuardar').click(function() {
//            $("#Box").dialog();
//        });
//    });
    $(function() {
        $('#Listo').on('click touchstart', function(event) {
            event.preventDefault();
            var NombreUser = $('#IdNombreUser').val();
            var Formulas = $('#EdtFormulas').val();
            //alert(NombreUser);
            //var Nivel = $('#Nivel').text();
            $.ajax({
                type: "POST",
                url: "php/GuardarDatos.php",
                data: {
                    NombreUser: NombreUser,
                    Formulas: Formulas
                            //Nivel: Nivel
                },
                success: function(data) {
                    alert(data);
//                    alert('Datos guardados exitosamente');
                    var NombreUser = $('#IdNombreUser').val("");
                    var Formulas = $('#EdtFormulas').val("");
                    var Resultado = $('#Resultado').empty();
                    var Box = $('#Box').fadeOut('slow');
                    var Box = $('#Box').dialog('close');
                }
            });
        });
    });
    $(function() {
        $('#IdUser').focus();
        $('.Close').on('click touchstart', function() {
            var url = "http://localhost/Valadez(UAEM)Editor/Administrador/index.php";
            $(location).attr('href', url);
        });
    });
    $(function() {
        $('#Actualizar').on('click touchstart', function() {
            location.reload();
        });
    });
});

//$(function() {
//    $('.boton').on('touchmove', function() {
//        $(this).hover(function() {
//            $(this).css({
//                'background': '#36393D'
//                        //color: '#FFFFFF'
//            });
//        });
//    });
//});