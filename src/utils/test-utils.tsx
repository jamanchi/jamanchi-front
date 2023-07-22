import { vi } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { queryClient, routesConfig } from '@/main';

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = vi
  .fn()
  .mockImplementation(intersectionObserverMock);

export const RenderByURL = (url: string) => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [url],
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
