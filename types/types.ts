import { ReactElement } from 'react';

export interface NavigationList {
  label: Page;
  route: string;
  asset: ReactElement;
}

export type Page =
  | 'Home'
  | 'Create Contract'
  | 'Contracts'
  | 'Payments'
  | 'Settings';
