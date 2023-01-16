//import key from '../../key';

const key = 'fe3c13f29af6b190fd92e964b563046e';

const getMovie = async (title) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title
    .toLocaleLowerCase()
    .split(' ')
    .join('+')}`;
  const response = await fetch(url);
  const search = await response.json();
  const movieSample = await search.results.filter(
    (movie) => movie.original_title === title,
  );

  if (movieSample.length === 0) {
    return null;
  }

  const { id } = movieSample[0];
};

getMovie('The Matrix');
