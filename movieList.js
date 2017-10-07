$(function(){

  $('form').submit(function(e){
    e.preventDefault();
    var search = $('.search-bar').val();
    var url = 'http://www.omdbapi.com/?apikey=3430a78&s=' + search;

    $.get(url, function(data){
      $('.card-columns').empty();
      data.Search.forEach(function(movie){
        var newHtml = $('<div class="card" style="width: 20rem;"></div>')
        $('.some-div').append(newHtml);
      })
    })
  })
})
