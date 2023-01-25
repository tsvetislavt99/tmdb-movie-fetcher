import Spacer from 'Components/Common/Spacer';
import Heading from 'Components/Common/Heading';
import Layout from 'Components/Layout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'Components/Common/Button';

export default function LandingPage() {
  const navigate = useNavigate();
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
    if (movies) {
      navigate('/filter', { state: { movies } });
    }
    // TODO: Implement error handling
    if (!movies) alert('Please upload a file first', 'error');
  };

  return (
    <Layout>
      <>
        <Heading>
          Hey there, we can help you get information on the movies you like.
        </Heading>
        <Spacer />
        <p>
          Let's get you started by uploading a{' '}
          <code className=" bg-gray-400 bg-opacity-50 p-[3px] rounded-lg">
            .txt
          </code>{' '}
          file with a list of Movies you are intereseted in.
        </p>
      </>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center border border-white rounded-lg bg-gray-400 bg-opacity-50 h-full">
        <p className="w-3/4 mx-auto text-gray-100 my-4">
          Please keep in mind that the txt file should be formatted as follows:
        </p>
        <pre className="w-3/4 mx-auto bg-gray-600 text-white p-4 rounded-lg mb-4">
          <code>
            {`The Matrix
Goodfellas
The Godfather
The Matrix: Reloaded
The Matrix: Revolutions
The Dark Knight
The Dark Knight Rises
The Prestige
The Departed
The Wolf of Wall Street
etc...`}
          </code>
        </pre>
        <input
          onChange={handleFileChange}
          className="block h-9 w-3/4 mx-auto text-sm text-gray-100 border border-gray-700 rounded-lg cursor-pointer bg-gray-600 focus:outline-none focus:ring-1 ring-purple-400 file:h-full file:bg-gray-400 file:text-gray-900 file:border-gray-600 file:cursor-pointer file:border-none  file:rounded-tl-lg file:rounded-bl-lg"
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
        <Button disabled={!movies} type="submit">
          Upload
        </Button>
      </form>
    </Layout>
  );
}
