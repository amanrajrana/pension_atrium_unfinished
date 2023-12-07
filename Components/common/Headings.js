import React from "react";
import { cn } from "@/lib/utils";

const H2 = ({ className, ...props }) => {
  return (
    <h2
      className={cn(
        "xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold leading-normal",
        className
      )}
      {...props}
    />
  );
};

export { H2 };
