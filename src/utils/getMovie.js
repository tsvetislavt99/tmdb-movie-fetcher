import key from 'key';
import getMovieById from 'utils/getMovieById';
import stripSpecialCharsAndSpaces from 'utils/stripSpecialCharsAndSpaces';

const getMovie = async (title) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title
    .toLocaleLowerCase()
    .split(' ')
    .join('+')}`;
  const response = await fetch(url);
  const search = await response.json();

  if (search.results.length === 0) {
    return { error: `No movie found for title: ${title}` };
  }

  const exactMatch = search.results.find(
    (movie) =>
      stripSpecialCharsAndSpaces(movie.original_title) ===
      stripSpecialCharsAndSpaces(title),
  );

  if (exactMatch) {
    const id = exactMatch.id;
    const movieFullDetails = await getMovieById(id);

    return {
      ...movieFullDetails,
      isExactMatch: true,
      checked: true,
    };
  }

  const id = search.results[0].id;
  const movieFullDetails = await getMovieById(id);

  return {
    ...movieFullDetails,
    isExactMatch: false,
    checked: true,
  };
};

export default getMovie;
