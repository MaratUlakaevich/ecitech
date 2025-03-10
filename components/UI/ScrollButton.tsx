"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { FC, useEffect, useState } from "react";

const ScrollButton: FC = () => {
  const [opacity, setOpacity] = useState(0);
  const isMobile = useIsMobile(1140);

  // Easing function for non-linear transition
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const start = 700;
      const end = 720;

      if (scrollTop >= start && scrollTop <= end) {
        // Calculate progress between 0 and 1
        const progress = (scrollTop - start) / (end - start);
        // Apply easing function
        const easedOpacity = easeInOutQuad(progress);
        setOpacity(easedOpacity);
      } else if (scrollTop < start) {
        setOpacity(0);
      } else if (scrollTop > end) {
        setOpacity(1);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case user is already scrolled
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isMobile ? (
      <button
        style={{ opacity }}
        onClick={scrollToTop}
        className="fixed group hover:bg-white opacity-0 duration-500 rounded-full bg-[#0a0a0a] shadow-[0_0px_40px_-15px_rgba(255,255,255,0.7)] bottom-5 left-[50%] -translate-x-[50%] w-fit px-2 py-1"
      >
        <span className="text-xs text-center -top-[1.5px] relative">Back to top</span>
      </button>
    ) : (
      <button
        style={{ opacity }}
        onClick={scrollToTop}
        className="fixed group hover:bg-white opacity-0 duration-500 rounded-full bg-[#0a0a0a] shadow-[0_0px_40px_-15px_rgba(255,255,255,0.7)] bottom-5 left-5 w-14 h-14"
      >      
        <svg className="m-auto" width="16" height="20" viewBox="0 0 16 20">
          <g fill="none" fillRule="evenodd">
            <g
              fill="#fff"
              className="group-hover:fill-[#06F] duration-500"
              fillRule="nonzero"
            >
              <path
                d="M256 88.667L241.429 88.667 246.179 84 244.143 82 236 90 244.143 98 246.179 96 241.429 91.333 256 91.333z"
                transform="translate(-238 -80) rotate(90 246 90)"
              ></path>
            </g>
          </g>
        </svg> 
      </button>
    )
  );
};

export default ScrollButton;
