

// Cuando el documento carga carga todo lo demás (se muestra en consola).
$( document ).ready(function() {
    console.log( "cargado!" );



    //MENU

    const hamburguesa = $('#ham');
    const linea1 = $('.linea1');
    const linea2 = $('.linea2');
    const linea3 = $('.linea3');
    const enlaces = $('#enlaces');

    enlaces.hide();

    $('#ham').click(() => {

      if (linea1.hasClass('active')) {
        linea1.removeClass('active');
        linea2.removeClass('active');
        linea3.removeClass('active');
        enlaces.hide();


      } else {
        linea1.addClass('active');
        linea2.addClass('active');
        linea3.addClass('active');
        enlaces.show();
      }

    });








    //FIN MENU




//fIN DE CARGA
});
