import React from 'react';

export default function LandingLayout() {
  const [movies, setMovies] = React.useState(null);

  const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result.trim();
      const movies = text.split('\n');
      setMovies(movies);
    };
    reader.readAsText(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movies);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="mx-4 lg:mx-12 lg:basis-1/2 text-white max-lg:mb-5">
        <h1 className="text-4xl lg:text-6xl font-bold  max-lg:mb-3">
          Hey there, we can help you get information on the movies you like.
        </h1>
        <hr className="h-px my-4 bg-gray-100 hidden lg:block " />
        <p>
          Let's get you started by uploading a{' '}
          <code className=" bg-gray-400 bg-opacity-50 p-[3px] rounded-lg">
            .txt
          </code>{' '}
          file with a list of Movies you are intereseted in.
        </p>
      </div>
      <div className="mx-4 lg:mx-12 lg:basis-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center border border-white rounded-lg bg-gray-400 bg-opacity-50 h-full">
          <p className="w-3/4 mx-auto text-gray-100 my-4">
            Please keep in mind that the txt file should be formatted as
            follows:
          </p>
          <pre className="w-3/4 mx-auto bg-gray-600 text-white p-4 rounded-lg mb-4">
            <code>
              {`Movie 1
Movie 2
etc...`}
            </code>
          </pre>
          <input
            onChange={handleFileChange}
            className="block h-9 w-3/4 mx-auto text-sm text-gray-100 border border-gray-700 rounded-lg cursor-pointer bg-gray-600 focus:outline-none file:h-full file:bg-gray-400 file:text-gray-900 file:border-gray-600 file:cursor-pointer file:border-none  file:rounded-tl-lg file:rounded-bl-lg"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            accept=".txt"
          />
          <p
            className=" text-xs text-gray-300 w-3/4 mx-auto mb-4"
            id="file_input_help">
            .txt files only
          </p>
          <button
            className="block  text-white mx-auto mb-4 px-10 py-2 rounded-lg border border-white bg-gradient-to-r from-[#730A82] via-[#4B0A74] to-black hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
            type="submit"
            disabled={!movies}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
