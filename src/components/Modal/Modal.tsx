import type { ModalProps } from "./types";
import { RiCloseFill } from "react-icons/ri";

export const Modal = ({
  title,
  show,
  onClose,
  validateButton,
  optionalButton,
  children,
}: ModalProps) => {
  return (
    <>
      {show && (
        <div className="fixed w-screen h-screen bg-black/50 flex justify-center items-center top-0 left-0 z-50">
          <div className="w-1/4 bg-white rounded-2xl border border-solid border-ink-light shadow-lg ">
            <div className="flex p-4 justify-between border-b border-solid border-ink-light">
              <h1 className="text-xl font-bold">{title}</h1>
              <span
                className="flex justify-center items-center text-xl cursor-pointer hover:text-lagoon-500"
                onClick={onClose}
              >
                <RiCloseFill />
              </span>
            </div>
            <div className="flex p-4 overflow-auto h-[40vh] justify-center">
              {children}
            </div>

            <div className="flex p-4 justify-between border-t border-solid border-ink-light items-center gap-4">
              {optionalButton && (
                <button
                  className="link transition disabled:cursor-not-allowed disabled:opacity-60 text-sm"
                  onClick={optionalButton.cb}
                  disabled={optionalButton.isDisabled}
                >
                  {optionalButton.label}
                </button>
              )}
              <button
                className="link transition disabled:cursor-not-allowed disabled:opacity-60 text-sm"
                onClick={validateButton.cb}
                disabled={validateButton.isDisabled}
              >
                {validateButton.label}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
