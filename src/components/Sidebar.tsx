"use client";
import { useContext, createContext } from "react";

import type { ElementType, ReactNode } from "react";

const context = createContext({ foo: "bar" });

interface SidebarWrapperOptions<IsType extends ElementType> {
  is?: IsType;
  children: ReactNode;
}

export function SidebarWrapper<IsType extends ElementType = "div">({
  children,
  is,
}: SidebarWrapperOptions<IsType>) {
  const Element = is ? is : "div";
  const myContext = useContext(context);

  return <Element className="flex max-w-7xl m-auto">{children}</Element>;
}

interface SidebarOptions<IsType extends ElementType> {
  is?: IsType;
  children: ReactNode;
}

export default function Sidebar<IsType extends ElementType = "div">({
  children,
  is,
}: SidebarOptions<IsType>) {
  const Element = is ? is : "div";

  return <Element className="w-80">{children}</Element>;
}

Sidebar.Wrapper = SidebarWrapper;

interface SidebarContentOptions<IsType extends ElementType> {
  is?: IsType;
  children: ReactNode;
}

export function SidebarContent<IsType extends ElementType = "div">({
  children,
  is,
}: SidebarContentOptions<IsType>) {
  const Element = is ? is : "div";

  return <Element className="flex-grow">{children}</Element>;
}
