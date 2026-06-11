import type { PropsWithChildren } from "react";

type WrapperProps = { className?: string } & PropsWithChildren;

export const Wrapper = ({ className = "", children }: WrapperProps) => (
  <div className={`bg-canvas w-full p-6 ${className}`}>{children}</div>
);
