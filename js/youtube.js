$(document).ready(function(){

  $('#_container .chacha').on('click',function(e){
    e.preventDefault();
    var u = $(this).attr('vid');
     
    if($(window).width() > 800 && !u.includes('playlist')){

      var i = u.substring(u.search('=')+1,u.length);

      $('#mPlayer DIV').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + i + '" frameborder="0" allowfullscreen></iframe>');

      $('#mPlayer').fadeIn(500);

    }
    else
    {
      window.open(u, '_blank');
    }
  }); 

  $('#mPlayer').on('click',function(e){

    $('#mPlayer').fadeOut(500);

    $('#mPlayer DIV').empty();

  });
});
