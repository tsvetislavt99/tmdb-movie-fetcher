import React from 'react';
import cn from 'classnames';

import DeleteIcon from 'Components/Common/DeleteIcon';
import Label from 'Components/Common/Label';

import formatOverview from 'utils/formatOverview';
import formatDuration from 'utils/formatDuration';

export default function ResultListItem({ movie, setMovies }) {
  const [unmounting, setUnmounting] = React.useState(false);
  const [unmounted, setUnmounted] = React.useState(false);

  const classNames = cn({
    'w-full lg:max-w-full lg:flex max-lg:max-w-[320px] text-white border border-white rounded-lg p-1 pr-5  focus:outline-none focus:ring-4 ring-purple-400': true,
    'move-in': !unmounting,
    'slide-out-left': unmounting,
    'hidden lg:hidden': unmounted,
  });

  const handleDelete = (e) => {
    e.preventDefault();
    setUnmounting(true);
    setTimeout(() => {
      setUnmounted(true);
      setMovies((movies) => {
        const movieToUpdate = movies.find((currMovie) => {
          console.log(movie);
          return currMovie.id === movie.id;
        });
        console.log(movieToUpdate);
        movieToUpdate.checked = false;
        return [...movies];
      });
    }, 800);
  };

  return (
    <li tabIndex={0} className={classNames}>
      <img
        className="w-full lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden max-w-[320px] lg:mr-5"
        src={movie.poster ? movie.poster : 'https://via.placeholder.com/150'}
        alt="Movie poster"
      />
      <div className="relative flex flex-col leading-normal">
        <div className="mb-2">
          <div className=" font-bold text-2xl xl:text-xl 2xl:text-2xl mt-2">
            {movie.title ? movie.title : 'No title found'} (
            {new Date(movie.releaseDate).getFullYear()})
          </div>
          <div className="flex text-sm justify-between my-2">
            <span className="font-bold">
              {formatDuration(movie.runtime)} | {movie.genres.join(', ')}
            </span>
            <span className="font-bold"></span>
          </div>
          <hr className="h-px my-2 bg-gray-100 hidden lg:block " />
          <p className=" text-base xl:text-sm 2xl:text-base">
            {movie.overview
              ? formatOverview(movie.overview)
              : 'No overview found'}
          </p>
        </div>
        <div className="absolute bottom-4 flex items-center w-full">
          <div className="text-sm w-full">
            <p className="relative flex items-center gap-2">
              {movie.rating > 7.5 ? (
                <Label>
                  Rating:{' '}
                  <span className="font-semibold">
                    {movie.rating.toFixed(1)}
                  </span>{' '}
                </Label>
              ) : movie.rating > 5.5 ? (
                <Label type="warning">
                  {' '}
                  Rating:{' '}
                  <span className="font-semibold">
                    {movie.rating.toFixed(1)}
                  </span>{' '}
                </Label>
              ) : (
                <Label type="danger">
                  Rating:{' '}
                  <span className="font-semibold">
                    {movie.rating.toFixed(1)}
                  </span>{' '}
                </Label>
              )}{' '}
              {movie.isExactMatch ? (
                <Label> Exact Match</Label>
              ) : (
                <Label type="warning"> Partial Match</Label>
              )}{' '}
              <button onClick={handleDelete} className="absolute right-2">
                <span
                  id={movie.id}
                  className=" inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600 stroke-red-600 hover:text-white hover:stroke-white hover:bg-red-500">
                  <DeleteIcon />
                  Delete
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
