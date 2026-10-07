"use client";
import { cn } from "@/utils/helpers";
import SywReact from "syw-react";

export default function UiPage() {

	return (
		<div
			className={cn(
				"Ui"
			)}
		>
			<section>
				<SywReact
					src="https://showyourworklab.github.io/c2pa-images/leica-nora-syria-6.jpg"
					caption="Test"
					byline="Test"
				/>
			</section>
		</div>
	);
};