import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Main = ({ children, className }) => {
  return (
    <main
      className={cn(
        "font-urbanist mx-auto max-w-screen-4xl px-4 py-8 lg:px-10",
        className
      )}
    >
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Main;
