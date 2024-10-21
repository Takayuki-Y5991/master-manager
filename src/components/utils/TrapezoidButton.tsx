import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const TrapezoidButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      className={cn(
        "relative h-16 w-12 p-0 overflow-hidden group transition-transform hover:translate-x-1",
        className,
      )}
      ref={ref}
      {...props}
    >
      <svg
        viewBox="0 0 100 160"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 L100 20 L100 140 L0 160 Z"
          className="fill-primary transition-colors group-hover:fill-primary-focus"
        />
      </svg>
      <span className="relative z-10 text-primary-foreground">{children}</span>
    </Button>
  );
});
