'use client';

import useUserAction from '@/hooks/use-user-action';
import SideNavUser from './side-nav-user';
import SideNavMenu from './side-nav-menu';
import { Button } from '../ui/button';

export default function SideNav() {
  const { sideNav } = useUserAction();
  return (
    <div
      className={`flex flex-col justify-between h-full p-4 overflow-hidden transition-all ease ${
        sideNav ? 'w-[250px] duration-1000' : 'w-0 pr-0 duration-700'
      }`}
      // className={`flex flex-col justify-between h-full p-4 overflow-hidden transition-all ease`}
    >
      <div>
        <SideNavUser />
        <SideNavMenu />
      </div>
      <div className={`px-6`}>
        <Button className="px-8">Create Contract</Button>
      </div>
    </div>
  );
}
