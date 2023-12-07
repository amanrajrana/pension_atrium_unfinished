import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const buttonVariants = cva(
  "w-full flex justify-center items-center min-w-max py-3 px-4 rounded-lg font-urbanist text-sm font-bold 3xl:text-2xl transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "text-white bg-[#1E3C72] hover:bg-[#1E3C72] hover:text-white",
        outline:
          "text-[#1E3C72] border-[#1E3C72] border-2 hover:bg-[#1E3C72] hover:text-white",
        gradient:
          "text-white bg-gradient-to-r from-btngrad_1 to-btngrad_2 hover:from-btngrad_2 hover:to-btngrad_1",
        customWhite:
          "bg-[#F5F9FC] text-black hover:bg-[#F5F9FC] hover:text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
});

Button.propTypes = {
  className: PropTypes.string,
};

Button.displayName = "button";

export { Button, buttonVariants };
export default Button;
