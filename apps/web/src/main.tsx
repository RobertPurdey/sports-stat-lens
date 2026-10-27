
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LocaleProvider from '@/app/providers/locale-provider';
import QueryProvider from '@/app/providers/query-provider';
import App from './app';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <LocaleProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </LocaleProvider>
  </StrictMode>,
);
