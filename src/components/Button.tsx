import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import cx from 'classnames';

interface Props {
  children: ReactNode;
  isFullWidth?: boolean;
  // Attributes from buttons
  autofocus?: boolean;
  autocomplete?: boolean;
  disabled?: boolean;
  form?: string;
  formaction?: string | URL;
  formenctype?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';
  formmethod?: 'post' | 'get' | 'dialog';
  formnovalidate?: boolean;
  formtarget?: '_self' | '_blank' | '_parent' | '_top';
  name?: string;
  popovertarget?: string;
  popovertargetaction?: 'hide' | 'show' | 'toggle';
  type?: 'submit' | 'button';
  value?: string;
  variant?: 'primary' | 'ghost';
}

function getClasses({
  disabled,
  variant,
}: Pick<Props, 'disabled' | 'variant'>) {
  const classes = [];

  if (variant === 'primary') {
    if (disabled) {
      classes.push('bg-gray-200 text-gray-500');
      return classes;
    }
    classes.push(
      'bg-green-400 text-green-800 hover:bg-green-800 hover:text-white shadow-transparent hover:shadow-sm'
    );
  }
  if (variant === 'ghost') {
    if (disabled) {
      classes.push('border-gray-300 text-gray-500');
      return classes;
    }
    classes.push(
      'bg-transparent border-gray-700 shadow-transparent hover:shadow-sm hover:border-green-600 hover:text-green-600'
    );
  }

  return classes;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    isFullWidth,
    children,
    type = 'button',
    variant = 'primary',
    disabled,
    ...props
  },
  ref
) {
  return (
    <button
      className={cx(
        [
          'cursor-pointer py-2 px-4 rounded-md transition-colors a',
          getClasses({ disabled, variant }),
        ],
        {
          'w-full': isFullWidth,
          'cursor-not-allowed': disabled,
          'border-x-2 border-y-2': variant === 'ghost',
        }
      )}
      type={type}
      ref={ref}
      // The Lord's solution
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
