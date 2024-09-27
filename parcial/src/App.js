import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './componentes/LoginForm';
import RobotList from './componentes/RobotList';
import RobotDetail from './componentes/RobotDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/robots" element={<RobotList />} />
        <Route path="/robots/:robotId" element={<RobotDetail />} />
      </Routes>
    </Router>
  );
};

export default App;