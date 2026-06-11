import type { PropsWithChildren } from "react";

type WrapperProps = { className?: string } & PropsWithChildren;

export const Wrapper = ({ className = "", children }: WrapperProps) => (
  <div className={`mx-auto max-w-screen-xl ${className}`}>{children}</div>
);
