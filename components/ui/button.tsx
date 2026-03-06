import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-brand-primary text-text-inverse hover:bg-brand-primary/90 focus-visible:ring-brand-primary',
        destructive:
          'bg-state-destructive text-text-inverse hover:bg-state-destructive/90 focus-visible:ring-state-destructive',
        outline:
          'border border-border-input bg-surface-card hover:bg-brand-accent hover:text-text-inverse focus-visible:ring-brand-primary',
        secondary:
          'bg-surface-muted text-text-primary hover:bg-surface-muted/80 focus-visible:ring-brand-primary',
        ghost:
          'hover:bg-brand-accent/10 hover:text-text-primary focus-visible:ring-brand-primary',
        link: 'text-brand-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-14 rounded-md px-10 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const mergedClassName = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.Children.only(children)) {
      const child = children as React.ReactElement;
      return React.cloneElement(child, {
        ...child.props,
        className: cn(mergedClassName, child.props?.className),
        ref,
      });
    }

    return (
      <button
        className={mergedClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
