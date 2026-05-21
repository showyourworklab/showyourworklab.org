"use client";
import { RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
// import { jsxConverter } from "@/components/common/RichText/converters";

export interface RichTextProps {
	data?: SerializedEditorState | null;
}

export default function RichText({
	data,
	className,
	...props
} : RichTextProps & React.HTMLAttributes<HTMLDivElement>) {
	return (
		data ?
			<RichTextConverter
				data={data}
				className={className}
				{...props}
				// converters={jsxConverter}
			/>
		: null
	);
};