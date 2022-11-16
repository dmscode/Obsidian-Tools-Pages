import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

const Home = lazy(() => import('./routes/Home'));
const QuickNote = lazy(() => import('./routes/QuickNote'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quick-note" element={<QuickNote />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
