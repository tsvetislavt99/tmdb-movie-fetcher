import { Routes, Route } from 'react-router-dom';

import FilterPage from 'Pages/FilterPage';
import LandingPage from 'Pages/LandingPage';
import ResultsPage from 'Pages/ResultsPage';

function App() {
  return (
    <div className="flex justify-center mt-10 lg:mt-0 lg:items-center min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
