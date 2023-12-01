import type { ElementType, ReactNode } from 'react';

interface Props<T extends ElementType> {
  is: T | string;
  children: ReactNode;
}
export default function Section<T extends ElementType = 'div'>({
  is = 'div',
  children,
}: Props<T>) {
  const Element = is;

  return <Element>{children}</Element>;
}
