import { DefaultNodeTypes, SerializedBlockNode, SerializedHeadingNode, SerializedLinkNode } from "@payloadcms/richtext-lexical";
import { JSXConverters, JSXConvertersFunction, LinkJSXConverter } from "@payloadcms/richtext-lexical/react"

import { internalDocToHref } from "./internalLink";
import { headingConverter } from "./headingConverter";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode;

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
	...defaultConverters,
	...LinkJSXConverter({ internalDocToHref }),
	...headingConverter,
	blocks: {

	},
})