import React from 'react';

export default function FilterListItem({ movie, setMovies, datasetIndex }) {
  // toggle the checkbox on `enter` click
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.click();
    }
  };

  const handleCheck = (e) => {
    setMovies((prevMovies) => {
      const newMovies = [...prevMovies];
      newMovies[datasetIndex].checked = e.target.checked;
      document.activeElement.blur();
      return newMovies;
    });
  };

  return (
    <li className="group flex flex-row pl-4 justify-start items-center w-full hover:bg-gray-50 stroke-white hover:stroke-black text-white hover:text-black focus-within:bg-gray-50 focus-within:stroke-black focus-within:text-black">
      <input
        onChange={handleCheck}
        defaultChecked
        onKeyDown={handleKeyDown}
        type="checkbox"
        className="w-6 h-6 mr-4 focus:outline-none focus:ring-0 accent-yellow-400"
      />
      <p className="px-6 py-4">{movie.name}</p>
    </li>
  );
}
