import { UserActionContext } from '@/providers/user-action-provider';
import { useContext } from 'react';

export default function useUserAction() {
  const context = useContext(UserActionContext);
  if (!context) {
    throw new Error(
      'useUserActionContext must be used within a UserActionProvider'
    );
  }
  return context;
}
