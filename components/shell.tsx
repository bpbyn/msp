import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ShellProps {
  className?: string;
  children: ReactNode;
}

export default function Shell({ className, children }: ShellProps) {
  return <main className={cn('pr-4', className)}>{children}</main>;
}
