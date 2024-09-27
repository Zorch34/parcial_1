import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl'; // Importar IntlProvider
import LoginForm from './componentes/LoginForm';
import RobotList from './componentes/RobotList';
import RobotDetail from './componentes/RobotDetail';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLocale = navigator.language || navigator.userLanguage;

// Seleccionar el conjunto de mensajes según el idioma del navegador
const messages = userLocale.startsWith('es') ? localeEsMessages : localeEnMessages;

const App = () => {
  return (
    <IntlProvider locale={userLocale} messages={messages}> 
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/robots" element={<RobotList />} />
          <Route path="/robots/:robotId" element={<RobotDetail />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
};

export default App;