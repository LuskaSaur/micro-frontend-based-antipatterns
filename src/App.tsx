import 'moment/locale/pt';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SCREENS } from './utils/screens';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import Catalog from './screens/Catalog';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={SCREENS.LANDING_PAGE}>
            <Route index element={<Navigate to={SCREENS.CATALOG} replace />} />
            <Route path={SCREENS.CATALOG} element={<Catalog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
