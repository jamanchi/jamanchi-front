import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Question from './pages/question';
import SubCategory from './pages/question/SubCategory';
import Main from '@/pages/main';

(async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    worker.start();
  }
})();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'question',
        element: <Question />,
      },
      {
        path: 'question/step1',
        element: <SubCategory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
