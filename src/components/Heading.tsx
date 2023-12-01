import type { ElementType, ReactNode } from 'react';
import cx from 'classnames';

const SIZES = {
  xsmall: 'text-xs',
  small: 'text-sm',
  base: 'text-base',
  large: 'text-lg',
  xlarge: 'text-xl',
  xxlarge: 'text-2xl',
  xxxlarge: 'text-3xl',
  xxxxlarge: 'text-4xl',
  xxxxxlarge: 'text-5xl',
} as const;

const COLORS = {
  primary: 'text-green-400',
} as const;

interface Props<T extends ElementType> {
  is: T;
  children: ReactNode;
  size: keyof typeof SIZES;
  color: keyof typeof COLORS;
}

export default function Heading<T extends ElementType = 'h2'>({
  is,
  children,
  size = 'large',
  color = 'primary',
}: Props<T>) {
  const Element = is ? is : 'h2';

  return (
    <Element
      className={cx('pb-2 mb-3', {
        [SIZES[size]]: size,
        [COLORS[color]]: color,
      })}
    >
      {children}
    </Element>
  );
}
