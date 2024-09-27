import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import LoginForm from './componentes/LoginForm';
import RobotList from './componentes/RobotList';
import RobotDetail from './componentes/RobotDetail';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLocale = navigator.language || navigator.userLanguage;

const messages = userLocale.startsWith('en') ? localeEsMessages : localeEnMessages;

const App = () => {
  return (
    <IntlProvider locale={userLocale} messages={messages}> 
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/robots" element={<RobotList />} />
            <Route path="/robots/:robotId" element={<RobotDetail />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
};

export default App;
