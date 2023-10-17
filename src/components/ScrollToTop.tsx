import { useLayoutEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.getElementById("root")?.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
