import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Spacer from 'Components/Common/Spacer';
import Heading from 'Components/Common/Heading';
import Layout from 'Components/Layout';
import FilterListItem from './FilterListItem';
import Button from 'Components/Common/Button';

export default function FilterPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [movies, setMovies] = React.useState(() => {
    const movies = location.state.movies.map((movie) => ({
      name: movie,
      checked: true,
    }));
    return movies;
  });

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        document.activeElement.blur();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedMovies = movies.filter((movie) => movie.checked);
    if (checkedMovies.length > 0) {
      navigate('/results', { state: { movies: checkedMovies } });
    }
  };

  console.log(movies);

  return (
    <Layout>
      <>
        <Heading>Those are the movies we picked up from your file.</Heading>
        <Spacer />
        <p>
          Should we get information about all of them? You can uncheck an item,
          this will keep it on your list but will not fetch any information
          about it.
        </p>
      </>
      <form onSubmit={handleSubmit}>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {movies.map((movie, index) => (
            <FilterListItem
              key={movie + index}
              movie={movie}
              setMovies={setMovies}
              datasetIndex={index}
            />
          ))}
        </ul>
        <Spacer />
        <Button type="submit">Search</Button>
      </form>
    </Layout>
  );
}
