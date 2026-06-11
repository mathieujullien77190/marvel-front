import type { PropsWithChildren } from "react";

type WrapperProps = { className?: string } & PropsWithChildren;

export const Wrapper = ({ className = "", children }: WrapperProps) => (
  <div className={`bg-canvas w-full px-6 pb-6 ${className}`}>{children}</div>
);
