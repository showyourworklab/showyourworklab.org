import { HTMLProps } from "react";
import { default as ReactMarkdown } from "react-markdown";
import { isExternalUrl } from "@/utils/helpers";

export interface MarkdownProps extends HTMLProps<HTMLDivElement> {
	tag?: "div" | "span" | "section";
};

export default function Markdown({
	tag,
	children,
	...props
} : MarkdownProps) {

	const Tag = tag ?? "div";
	
	function LinkRenderer({
		href,
		children,
		...props
	} : HTMLProps<HTMLAnchorElement>) {
		return (
			<a
				href={href}
				target={href && isExternalUrl(href) ? "_blank" : undefined}
			>
				{children}
			</a>
		);
	};
	
	return (
		<Tag
			{...props}
		>
			<ReactMarkdown
				components={{
					a: LinkRenderer
				}}
			>
				{children ? String(children) : ""}
			</ReactMarkdown>
		</Tag>
	);
}
