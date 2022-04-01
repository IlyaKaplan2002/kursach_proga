import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views';
import FirstView from 'views/FirstView';
import FourthFirstView from 'views/Fourth/FourthFirstView';
import FourthFourthView from 'views/Fourth/FourthFourthView';
import FourthSecondView from 'views/Fourth/FourthSecondView';
import FourthThirdView from 'views/Fourth/FourthThirdView';
import FourthView from 'views/FourthView';
import NotFoundView from 'views/NotFoundView';
import SecondView from 'views/SecondView';
import ThirdView from 'views/ThirdView';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/1" element={<FirstView />} />
      <Route path="/2" element={<SecondView />} />
      <Route path="/3" element={<ThirdView />} />
      <Route path="/4" element={<FourthView />} />
      <Route path="/4/1" element={<FourthFirstView />} />
      <Route path="/4/2" element={<FourthSecondView />} />
      <Route path="/4/3" element={<FourthThirdView />} />
      <Route path="/4/4" element={<FourthFourthView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default App;
