

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


var request = new XMLHttpRequest()
var api_key = "d611098e2b30fe621e06d63d02723b1c"
var with_genres = 99;
var requestURL = "https://api.themoviedb.org/3/discover/movie?api_key="
  + api_key +"&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" + with_genres;


// Open a new connection, using the GET request on the URL endpoint
request.open('GET', requestURL , true)



request.onload = function () {
  var data = JSON.parse(this.response)

  data.results.forEach((movie, i) => {

        if ( i < 5) {

          //MAÑANA TE ENSEÑO A CREAR UN ELEMENTO EN JS PARA AÑADIR LA PELI Y LA SINOPSIS.

          $('#peli-imagen').append('<img src="https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path + '"/>');
          $('#sinopsis').append(data.results[i].overview)
          i++;
        }  else {
          return;
        }


});


}


// Send request
request.send()



//fIN DE CARGA
});
