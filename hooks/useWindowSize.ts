import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const breakpoints = {
  "2xs": 260,
  xs: 412,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({ width: undefined, height: undefined });

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      let size;

      switch (true) {
        case width >= breakpoints["2xl"] && width < breakpoints["3xl"]:
          size = breakpoints["2xl"];
          break;
        case width >= breakpoints.xl && width < breakpoints["2xl"]:
          size = breakpoints.xl;
          break;
        case width >= breakpoints.lg && width < breakpoints.xl:
          size = breakpoints.lg;
          break;
        case width >= breakpoints.md && width < breakpoints.lg:
          size = breakpoints.md;
          break;
        case width >= breakpoints.sm && width < breakpoints.md:
          size = breakpoints.sm;
          break;
        case width >= breakpoints.xs && width < breakpoints.sm:
          size = breakpoints.xs;
          break;
        case width >= breakpoints["2xs"] && width < breakpoints.xs:
          size = breakpoints["2xs"];
          break;
        default: {
          if (width >= breakpoints["3xl"]) {
            size = breakpoints["3xl"];
          }
          if (width < breakpoints["2xs"]) {
            size = breakpoints["2xs"];
          }
        }
      }

      if (windowDimensions.width !== size) {
        setWindowDimensions({ width: size, height });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions.width]);

  return windowDimensions;
}
