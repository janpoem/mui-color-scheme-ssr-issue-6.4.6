'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';
import theme from './theme';

export type MuiWrapperProps = {
  children: ReactNode;
};

export default function MuiWrapper({ children }: MuiWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
