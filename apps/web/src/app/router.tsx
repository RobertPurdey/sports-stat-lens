import { createBrowserRouter } from 'react-router';
import AppLayout from '@/app/AppLayout';
import HomePage from '@/pages/HomePage';

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: '/',
        Component: HomePage
      }
    ],
  },
]);