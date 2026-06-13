import { useEffect, useState } from "react";

export enum DEVICE {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
  osef = "osef",
}

export const useDevice = (): DEVICE => {
  const getDevice = (): DEVICE => {
    const width = window.innerWidth;

    if (width < 640) return DEVICE.mobile;
    if (width < 768) return DEVICE.tablet;
    return DEVICE.desktop;
  };

  const [device, setDevice] = useState<DEVICE>(() =>
    typeof window !== "undefined" ? getDevice() : DEVICE.desktop,
  );

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDevice());
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // init

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
