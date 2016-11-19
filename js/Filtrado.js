$(document).ready(function () {
    $.expr[':'].Contains = function (x, y, z) {
        return jQuery(x).text().toLowerCase().indexOf(z[3].toLowerCase()) >= 0;
    };

    $('#search').keyup(function () {
        var search = $('#search').val();
        $('#listar tr').show();
            if(search.length>0){
                $('#listar tr td.nombre').not(":Contains('"+search+"')").parent().hide();
            }
    });

});