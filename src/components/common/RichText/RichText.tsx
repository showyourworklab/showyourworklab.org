"use client";
import { hasText } from "@payloadcms/richtext-lexical/shared";
import { RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export interface RichTextProps {
	data?: SerializedEditorState | null;
}

export default function RichText({
	data,
	className,
	...props
} : RichTextProps & React.HTMLAttributes<HTMLDivElement>) {
	return (
		hasText(data) ?
			<RichTextConverter
				data={data}
				className={className}
				{...props}
				// converters={jsxConverter}
			/>
		: null
	);
};