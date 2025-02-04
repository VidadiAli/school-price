import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Girish from './Components/Girish/Girish';
import User from './Components/User/User';

const App = () => {
  return (
    <Routes>
      <Route path="/school-price" element={<Girish />} />
      <Route path="/school-price/:user" element={<User />} />
    </Routes>
  );
};

export default App;
