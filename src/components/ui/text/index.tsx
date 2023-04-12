"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const textVariants = cva("inline-block font-medium text-black", {
  variants: {
    size: {
      sm: "text-sm",
      default: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, ...props }, ref) => {
    const Component = props.asChild ? Slot : "p";

    return (
      <Component
        ref={ref}
        className={cn(textVariants(props), className)}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
