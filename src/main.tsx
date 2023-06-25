import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import Question from './pages/question';
import SubCategory from './pages/question/SubCategory';
import Main from '@/pages/main';
import HobbyOptions from './pages/question/HobbyOptions';
import Keywords from './pages/question/Keywords';

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
        path: 'question/step1/:id',
        element: <SubCategory />,
      },
      {
        path: 'question/step2/:id',
        element: <HobbyOptions />,
      },
      {
        path: 'question/step3/:id',
        element: <Keywords />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
