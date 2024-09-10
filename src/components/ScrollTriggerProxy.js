import gsap from "gsap";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!scroll) return; // Ensure the scroll instance is available

    const element = scroll.el;

    // Set up ScrollTrigger scrollerProxy
    ScrollTrigger.scrollerProxy(element, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: element.style.transform ? "transform" : "fixed",
    });

    // Register scroll event listener
    scroll.on("scroll", ScrollTrigger.update);

    // Refresh ScrollTrigger after setup
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    // Cleanup function to remove event listeners and ScrollTriggers on component unmount
    return () => {
      if (scroll) {
        scroll.off("scroll", ScrollTrigger.update);
        ScrollTrigger.removeEventListener("refresh", () => scroll.update());
      }
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
