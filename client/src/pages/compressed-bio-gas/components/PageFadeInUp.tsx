import FadeInUp from "@/components/common/FadeInUp";
import type { ComponentProps } from "react";

/** Gentler scroll reveal for the compressed bio-gas page only. */
export default function PageFadeInUp(props: ComponentProps<typeof FadeInUp>) {
  return (
    <FadeInUp
      duration={0.38}
      translateHidden="16px"
      threshold={0.88}
      {...props}
    />
  );
}
