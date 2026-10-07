import { HTMLProps, useEffect, useMemo } from "react"
import { Collapsible as ArkCollapsible, useCollapsible as useArkCollapsible } from "@ark-ui/react/collapsible"
import { cn } from "@/utils/helpers"

export interface CollapseProps extends HTMLProps<HTMLElement> {
	open: boolean;
};

const Collapse = ({
	open = false,
	children
}: CollapseProps) => {
	const arkCollapsible = useArkCollapsible()

	const className = useMemo(() =>
		cn(
			"Collapse",
			open ? "Collapse_open" : null,
		)
	, [open])

	useEffect(() => {
		arkCollapsible.setOpen(open)
	}, [open])

	return (
		<ArkCollapsible.RootProvider
			value={arkCollapsible}
			aria-expanded={open}
			className={className}
		>
			<ArkCollapsible.Content
				className={"CollapseInner"}
			>
				{children}
			</ArkCollapsible.Content>
		</ArkCollapsible.RootProvider>
	)
}

export default Collapse