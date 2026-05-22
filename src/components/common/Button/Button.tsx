import { useMemo, forwardRef, HTMLProps, ReactNode } from "react";
import { cn } from "@/utils/helpers";

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement & HTMLAnchorElement>, "size"> {
	href?: string;
	size?: "small" | "base" | "large";
	color?: "primary" | "secondary" | "tertiary";
	filled?: boolean;
	outlined?: boolean;
	small?: boolean;
	square?: boolean;
	external?: boolean;
	before?: ReactNode;
	after?: ReactNode;
	tag?: string;
}

export default forwardRef(function Button({
	href,
	size = "base",
	color = "primary",
	filled,
	outlined,
	small,
	square,
	external,
	before,
	after,
	tag = "button",
	onClick,
	className,
	children,
	...props
} : ButtonProps, ref) {
	const Tag = href ? "a" : tag;

	const buttonProps = useMemo(() => {
		let elemProps;
		
		if(Tag === "a") {
			elemProps = {
				...props,
				href: href
			} as HTMLProps<HTMLAnchorElement>;
			elemProps.href = href;
			elemProps.target = external ? "_blank" : "_self";
		} else if(Tag === "button") {
			elemProps = { ...props } as HTMLProps<HTMLButtonElement>;
		} else {
			elemProps = { ...props } as HTMLProps<HTMLElement>;
		}

		if(onClick) {
			elemProps.onClick = onClick;
		}
		return elemProps;
	}, [href, external, props, onClick, Tag]) as any;

	return (
		<Tag
			ref={ref}
			className={cn(
				"Button",
				size ? `Button_${size}` : null,
				color ? `Button_${color}` : null,
				filled ? "Button_filled" : null,
				outlined ? "Button_outlined" : null,
				square ? "Button_square" : null,
				before ? "Button_before" : null,
				after ? "Button_after" : null,
				external ? "Button_external" : null,
				className
			)}
			tabIndex={0}
			{...buttonProps}
			{...props}
		>
			<span
				className="ButtonInner"
			>
				{before ?
					<span
						className={cn(
							"ButtonIcon",
							"ButtonIcon_before"
						)}
					>
						{before}
					</span>
				: null}
				{children && <span>{children}</span>}
				{after ?
					<span
						className={cn(
							"ButtonIcon",
							"ButtonIcon_after"
						)}
					>
						{after}
					</span>
				: null}
			</span>
		</Tag>
	)
});