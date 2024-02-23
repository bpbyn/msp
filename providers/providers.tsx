import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import UserActionProvider from './user-action-provider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <UserActionProvider>{children}</UserActionProvider>
    </ThemeProvider>
  );
};
