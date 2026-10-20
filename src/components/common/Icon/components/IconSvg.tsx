import { HTMLProps } from "react";
import { cn } from "@/utils/helpers";

export interface IconSvgProps extends HTMLProps<SVGSVGElement> {
  title?: string;
}
export default function IconSvg({
  ref,
  width = 100,
  height = 100,
  // color = "none",
  title,
  children,
  className,
  ...props
} : IconSvgProps) {

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "IconSvg",
        className
      )}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}
