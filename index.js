$(function(){

	function renderMovies(movies) {
		$('.card-columns').empty();

		movies.forEach(function(movie){

			var newCardDiv = $('<div class="card" style="width: 20rem;"></div>');
			var imagePoster = $('<img class="card-img-top"/>');
			var newBodyDiv = $('<div class="card-body"></div>');
			var newCardTitle = $('<h4 class="card-title"></h4>');
			var newCardBadgeYear = $('<span class="badge badge-secondary float-right"></span>');
			var newAnchor = $('<a href="#" data-movie="'+ movie.imbdID +'" class="btn btn-primary addBtn">Add!</a>');


			if (movie.Poster == "N/A") {
				imagePoster.attr('src', "no_image.png");
			} else {
				imagePoster.attr('src', movie.Poster);
			}
			newCardTitle.text(movie.Title);
			newCardBadgeYear.text(movie.Year);

			newCardTitle.append(newCardBadgeYear);
			newBodyDiv.append(newCardTitle, newAnchor);
			newCardDiv.append(imagePoster, newBodyDiv);

			$('.card-columns').append(newCardDiv);
		})
	}

	$('form').submit(function(e){
		e.preventDefault();
		var search = $('.search-bar').val();
		var url = 'http://www.omdbapi.com/?apikey=3430a78&s=' + search;

		$.get(url, function(data){
			renderMovies(data.Search);
		});
	});

  $('.card-columns').on('click', '.addBtn', function(e){
		var addBtn = $(this);
		var movieID = addBtn.data('movie');

		var url = 'http://www.omdbapi.com/?apikey=3430a78&i=' + movieID;
		$.get(url, function(data){
			var movieInstance = new Movie(data);
			movieInstance.addToWatchList();
		})
	})

  $('.watchlist').on('shown.bs.modal', function(){
		var currentWatchlist = localStorage.getItem('watchlist');
		currentWatchlist = JSON.parse(currentWatchlist);

		if (!currentWatchlist) {
			currentWatchlist = {};
		}

		Object.keys(currentWatchlist).forEach(function(imdbID){
			var currentMovieData = currentWatchlist[imdbID];
			var movieInstance = new Movie(currentMovieData);
			var movieHTML = movieInstance.generateHTML();
			$('.modal-body').append(movieHTML);
		});

	})


})
