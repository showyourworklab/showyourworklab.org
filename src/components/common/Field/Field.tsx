import { HTMLProps, ReactNode } from "react";
import { Field as ArkField } from "@ark-ui/react/field";
import { cn } from "@/utils/helpers";

export interface FieldProps extends Omit<HTMLProps<HTMLDivElement>, "label"> {
	value?: string | undefined;
	label?: string | ReactNode;
	helper?: string | ReactNode;
	error?: string | ReactNode;
	placeholder?: string;
};

export default function Field({
	value,
	label,
	helper,
	error,
	placeholder,
	className,
	children,
	...props
} : FieldProps) {
	
	return (
		<ArkField.Root
			invalid={Boolean(error)}
			className={cn(
				"FieldRoot",
				className
			)}
			{...props}
		>
			{label ?
				<ArkField.Label
					className={"FieldLabel"}
				>
					{label}
				</ArkField.Label>
			: null}
			<ArkField.Input
				value={value}
				placeholder={placeholder}
				className={"FieldInput"}
			/>
			{helper ?
				<ArkField.HelperText
					className={"FieldHelperText"}
				>
					{helper}
				</ArkField.HelperText>
			: null}
			{error ?
				<ArkField.ErrorText
					className={"FieldErrorText"}
				>
					{error}
				</ArkField.ErrorText>
			: null}
		</ArkField.Root>
	)
};