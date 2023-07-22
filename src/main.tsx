import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Question from './pages/question';
import SubCategory from './pages/question/SubCategory';
import Main from '@/pages/main';
import HobbyOptions from './pages/question/HobbyOptions';
import Keywords from './pages/question/Keywords';
import Result from '@/pages/result';
import Hobby from '@/pages/hobby';
import SimilarHobbies from './pages/similarHobbies';

if (import.meta.env.MODE === 'development') {
  await (async () => {
    const { worker } = await import('./mocks/browser');
    worker.start();
  })();
}

export const routesConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      { path: 'hobby', element: <Hobby /> },
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
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'similarHobbies',
        element: <SimilarHobbies />,
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(
  (document.getElementById('root') as HTMLElement) ||
    document.createElement('div')
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
