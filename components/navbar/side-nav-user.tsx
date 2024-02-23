import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function SideNavUser() {
  return (
    <div className="flex justify-start items-center gap-3 px-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>MP</AvatarFallback>
      </Avatar>
      <div className="flex-col justify-start w-[150px]">
        <div className="font-bold break-words">mabs.</div>
        <div className="text-xs text-muted-foreground truncate">
          msp@gmail.com
        </div>
      </div>
    </div>
  );
}
