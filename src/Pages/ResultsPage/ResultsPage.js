import React from 'react';
import { useLocation } from 'react-router-dom';

import Heading from 'Components/Common/Heading';
import Layout from 'Components/Layout';
import Loading from 'Components/Common/Loading';
import Spacer from 'Components/Common/Spacer';
import Button from 'Components/Common/Button';
import ResultListItem from './ResultListItem';

import getMovie from 'utils/getMovie';

export default function ResultsPage() {
  const location = useLocation();
  const [moviesSearchResult, setMoviesSearchResult] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const exactMatches = React.useMemo(() => {
    if (!moviesSearchResult) return [];
    return moviesSearchResult.filter((movie) => movie.isExactMatch);
  }, [moviesSearchResult]);

  const partialMatches = React.useMemo(() => {
    if (!moviesSearchResult) return [];
    return moviesSearchResult.filter((movie) => !movie.isExactMatch);
  }, [moviesSearchResult]);

  React.useEffect(() => {
    const moviesToFetch = location.state.movies.filter(
      (movie) => movie.checked,
    );

    const fetchMovies = async () => {
      const movies = await Promise.all(
        moviesToFetch.map((movie) => getMovie(movie.name)),
      );
      setMoviesSearchResult(movies);
      setLoading(false);
    };

    fetchMovies();
  }, [location.state.movies]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        document.activeElement.blur();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Implement saving movies to database
  };

  if (loading) {
    return (
      <Layout>
        <Heading>Searching for your movies...</Heading>
        <div className="mt-10">
          <Loading />
        </div>
      </Layout>
    );
  }

  console.log(moviesSearchResult);

  return (
    <Layout>
      <>
        <Heading>Your movies:</Heading>
        <Spacer />
        <p className="w-full">
          We found {exactMatches.length} exact match
          {exactMatches.length > 1 ? 'es' : ''}{' '}
          {partialMatches.length > 0 &&
            `and ${partialMatches.length}
          partial match
          ${partialMatches.length > 1 ? 'es' : ''} `}
          for your movies.
        </p>
      </>
      <form onSubmit={handleSave}>
        <ul className="grid xl:grid-cols-2 gap-4 mb-5">
          {moviesSearchResult.map((movie, index) => (
            <ResultListItem
              key={movie.id}
              movie={movie}
              setMovies={setMoviesSearchResult}
            />
          ))}
        </ul>
        <Button color="yellow" type="submit">
          Save
        </Button>
      </form>
    </Layout>
  );
}
