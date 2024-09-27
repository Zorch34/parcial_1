import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './componentes/LoginForm';
import RobotList from './componentes/RobotList';
import RobotDetail from './componentes/RobotDetail';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLocale = navigator.language || navigator.userLanguage;

const messages = userLocale.startsWith('en') ? localeEsMessages : localeEnMessages;


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} locale={userLocale} messages={messages} />
        <Route path="/robots" element={<RobotList />} locale={userLocale}  messages={messages}/>
        <Route path="/robots/:robotId" element={<RobotDetail />}  locale={userLocale} messages={messages} />
      </Routes>
    </Router>
  );
};

export default App;