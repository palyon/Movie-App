//ES6
function Movie(movieData) {
  //this is the constructor
  this.movieData = movieData;
}

Movie.prototype.like = function() {

}

Movie.prototype.dislike = function() {

}

Movie.prototype.generateHTML = function() {
  var div = $('<div></div>');
  div.html(this.movieData.Title)
  return div;
}

Movie.prototype.addToWatchList = function() {
  // Add this movie instance to local storage
  var watchlist = localStorage.getItem('myWatchList');
  watchlist = JSON.parse(watchlist);

  if (!watchlist) {
    watchlist = {};
  }

  watchlist[this.movieData.imbdID] = this.movieData

  var stringifiedWatchlist = JSON.stringify('myWatchList');
  localStorage.setItem('myWatchList', stringifiedWatchlist);
}

Movie.prototype.removeFromWatchList = function() {

}

// ES5
// class Movie {
//   constructor(movieData) {
//     this.movieData = movieData;
//   }
//
//   like() {
//
//   }
//
//   dislike() {
//
//   }
//
//   generateHTML() {
//
//   }
//
//   addToWatchList() {
//
//   }
//
//   removeFromWatchList () {
//
//   }
// }
