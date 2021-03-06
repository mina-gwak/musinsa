import React from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@assets/styles/GlobalStyle';
import { theme } from '@assets/styles/theme';
import { BASE_URL } from '@constants/baseUrl';
import { worker } from '@mocks/browser';

import App from './App';

worker.start({
  serviceWorker: {
    url: `${BASE_URL}/mockServiceWorker.js`,
  },
});

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
