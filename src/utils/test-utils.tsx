import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { queryClient } from '@/main';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
    ...options,
  });

export { customRender as render };
