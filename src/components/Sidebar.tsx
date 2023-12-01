'use client';
import type { ElementType, ReactNode } from 'react';

interface SidebarWrapperOptions<IsType extends ElementType> {
  is?: IsType;
  children: ReactNode;
}

export function SidebarWrapper<IsType extends ElementType = 'div'>({
  children,
  is,
}: SidebarWrapperOptions<IsType>) {
  const Element = is ? is : 'div';

  return <Element className="flex max-w-7xl m-auto">{children}</Element>;
}

interface SidebarOptions<IsType extends ElementType> {
  is?: IsType;
  children: ReactNode;
}

export function Sidebar<IsType extends ElementType = 'div'>({
  children,
  is,
}: SidebarOptions<IsType>) {
  const Element = is ? is : 'div';

  return <Element className="w-80">{children}</Element>;
}

interface SidebarContentOptions<IsType extends ElementType> {
  is?: IsType;
  children: ReactNode;
}

export function SidebarContent<IsType extends ElementType = 'div'>({
  children,
  is,
}: SidebarContentOptions<IsType>) {
  const Element = is ? is : 'div';

  return <Element className="flex-grow">{children}</Element>;
}
