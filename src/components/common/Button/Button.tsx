import { useMemo, forwardRef, HTMLProps, ReactNode } from "react";
import { cn } from "@/utils/helpers";

export interface ButtonProps extends HTMLProps<HTMLButtonElement & HTMLAnchorElement> {
	href?: string;
	variant?: "default";
	color?: "primary" | "secondary" | "tertiary" | "quaternary" | "explorer-primary" | "explorer-secondary";
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
	variant = "default",
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
				`Button_${variant}`,
				color ? `Button_${color}` : null,
				filled ? "Button_filled" : null,
				outlined ? "Button_outlined" : null,
				square ? "Button_square" : null,
				small ? "Button_small" : null,
				before ? "Button_before" : null,
				after ? "Button_after" : null,
				external ? "Button_external" : null,
				className
			)}
			tabIndex={0}
			{...buttonProps}
			{...props}
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
		</Tag>
	)
});