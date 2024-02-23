'use client';
import { AlignJustify } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import useUserAction from '@/hooks/use-user-action';

export default function Nav() {
  const { sideNav, toggleSideNav } = useUserAction();
  return (
    <nav className="flex justify-between p-4">
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggleSideNav(!sideNav)}
        >
          <AlignJustify size={16} strokeWidth={1.5} absoluteStrokeWidth />
        </Button>
        <div className="mb-1 text-3xl font-semibold text-primary">msp.</div>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button>Sign In</Button>
      </div>
    </nav>
  );
}
