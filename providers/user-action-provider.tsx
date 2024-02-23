'use client';

import { Page } from '@/types/types';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export interface IUserAction {
  sideNav: boolean;
  toggleSideNav: Dispatch<SetStateAction<boolean>>;
  activeTab: Page;
  setActiveTab: Dispatch<SetStateAction<Page>>;
}

export const UserActionContext = createContext<IUserAction | undefined>(
  undefined
);

export default function UserActionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sideNav, toggleSideNav] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<Page>('Home');

  const userActionContext = { sideNav, toggleSideNav, activeTab, setActiveTab };

  return (
    <UserActionContext.Provider value={userActionContext}>
      {children}
    </UserActionContext.Provider>
  );
}
