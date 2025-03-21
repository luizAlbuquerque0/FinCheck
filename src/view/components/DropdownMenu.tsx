import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../app/utils/cn";

function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger className="outline-none" asChild>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          "rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px__rgba(0,0,0,0.10)] data-[side=bottom]:animate-slide-up-and-fade z-[99] data-[side=top]:animate-slideDownAndFade",
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "min-h-[40px] outline-none flex items-center px-4 py-2 text-sm curson-pointer text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors",
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
