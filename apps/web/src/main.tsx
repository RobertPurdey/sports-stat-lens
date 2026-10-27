
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LocaleProvider from '@/app/providers/LocaleProvider';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>,
);
