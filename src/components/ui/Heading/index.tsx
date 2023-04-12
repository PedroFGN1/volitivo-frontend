"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const headingVariants = cva("inline-block transition-colors font-bold m-0", {
  variants: {
    size: {
      sm: "text-lg",
      default: "text-xl",
      lg: "text-2xl ",
      xl: "text-3xl",
      "2xl": "text-4xl",
      "3xl": "text-5xl",
      "4xl": "text-6xl",
      "5xl": "text-7xl",
      "6xl": "text-8xl",
      "7xl": "text-9xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, ...props }, ref) => {
    const Component = props.asChild ? Slot : "h1";
    return (
      <Component
        className={cn(headingVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
