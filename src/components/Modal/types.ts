import type { PropsWithChildren } from "react";

export type Button = { label: string; cb?: () => void; isDisabled: boolean };

export type ModalProps = {
  show: boolean;
  title: string;
  onClose: () => void;
  validateButton: Button;
  optionalButton?: Button;
} & PropsWithChildren;
