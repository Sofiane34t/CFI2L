// Initialisation des datepickers pour les champs d'entrée et de sortie
$( function() {
    $( "#inputCkeckIn" ).datepicker();
    $( "#inputCkeckOut" ).datepicker();

/* Carrousel (Slide) */ 
    $('.level-slider').slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll : 1,
      arrows: true,
    });

/* Gestion de la vidéo */
    function videoToggle(){
      video = $('.level-video').get(0)

      if(video.paused){
        video.play();
        $('.video-control-play').hide();
        $('.video-control-pause').show();
      }else{
        video.pause();
        $('.video-control-pause').hide();
        $('.video-control-play').show();
      }
    }

    $('.video-control-play').click(function(){
      videoToggle();
    })
    $('.video-control-pause').click(function(){
      videoToggle();
    })

  } );
  
/* Fonction pour afficher une alerte lors de l'envoi de message */
  function showAlert() {
    alert("Ce site a été créé dans le cadre de la formation HTML, CSS et JavaScript. La partie 'Envoyer Message' ne sera traitée qu'avec PHP.");
}