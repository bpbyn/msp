'use client';
import { navList } from '@/constants/nav-list';
import { Button } from '../ui/button';
import useUserAction from '@/hooks/use-user-action';
import Link from 'next/link';

export default function SideNavMenu() {
  const { activeTab, setActiveTab } = useUserAction();

  return (
    <div className="flex flex-col gap-2 py-4 pt-8 transition-all duration-700">
      <div className="text-xs text-muted-foreground pl-4">MENU</div>
      {navList.map(({ label, route, asset }, i) => (
        <Link href={route} key={`${label}-page-i`}>
          <Button
            key={`nav-list-${i}`}
            className={`flex justify-start items-center gap-2 transition-all duration-300 text-muted-foreground ${
              activeTab === label ? 'bg-accent text-accent-foreground' : ''
            }`}
            variant="ghost"
            onClick={() => setActiveTab(label)}
          >
            <div>{asset}</div>
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
