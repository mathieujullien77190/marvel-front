import { cn } from "@/helpers/cn";
import { useState } from "react";
import type { ImageLoaderProps } from "./types";

export const ImageLoader = ({ image, className }: ImageLoaderProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className={cn(className, "bg-gray-200 relative")}>
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      <img
        src={image}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          loading ? "opacity-0" : "opacity-100",
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};
