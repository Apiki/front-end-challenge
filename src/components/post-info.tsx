import { LucideIcon } from 'lucide-react';

interface PostInfoProps {
  icon: LucideIcon;
  text: string;
}

export function PostInfo({ icon: Icon, text }: PostInfoProps) {
  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <Icon className="h-4 w-4" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
