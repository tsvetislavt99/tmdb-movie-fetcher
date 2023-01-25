import key from 'key';

export default function getMovieById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  return fetch(url)
    .then((response) => response.json())
    .then((movie) => {
      return {
        id: movie.id,
        title: movie.original_title,
        poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        overview: movie.overview,
        releaseDate: movie.release_date,
        runtime: movie.runtime,
        genres: movie.genres.map((genre) => genre.name),
        rating: movie.vote_average,
      };
    });
}
