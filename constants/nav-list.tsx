import { NavigationList } from '@/types/types';
import {
  BookUserIcon,
  CreditCardIcon,
  HomeIcon,
  PlusSquareIcon,
  SettingsIcon,
} from 'lucide-react';

export const navList: NavigationList[] = [
  {
    label: 'Home',
    route: '/',
    asset: <HomeIcon size={16} />,
  },
  {
    label: 'Create Contract',
    route: '/create-contract',
    asset: <PlusSquareIcon size={16} />,
  },
  {
    label: 'Contracts',
    route: '/contracts',
    asset: <BookUserIcon size={16} />,
  },
  {
    label: 'Payments',
    route: '/payments',
    asset: <CreditCardIcon size={16} />,
  },
  {
    label: 'Settings',
    route: '/settings',
    asset: <SettingsIcon size={16} />,
  },
];
