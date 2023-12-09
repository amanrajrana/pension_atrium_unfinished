import React from "react";
import { cn } from "@/lib/utils";

const H1 = ({ className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xlg 2xl:text-4xl 3xl:text-5xl font-bold leading-normal",
        className
      )}
      {...props}
    />
  );
};

const H2 = ({ className, ...props }) => {
  return (
    <h2
      className={cn(
        "text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold leading-normal",
        className
      )}
      {...props}
    />
  );
};

export { H1, H2 };
