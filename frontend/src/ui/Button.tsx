import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { ButtonProps } from '../helper/types.ts';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      loadingMessage,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors' +
      ' focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2' +
      ' disabled:pointer-events-none disabled:opacity-50';
    const variants = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700',
      secondary:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100' +
        ' dark:hover:bg-gray-700',
      outline:
        'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700' +
        ' dark:text-gray-100 dark:hover:bg-gray-800',
      ghost:
        'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100' +
        ' text-gray-900',
    };
    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-8 text-base',
    };
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            {loadingMessage}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);
Button.displayName = 'Button';
