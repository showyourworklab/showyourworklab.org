import { useMemo } from 'react'
import { BadgeInfo, Camera, Check, Ellipsis, SquarePen, Sparkles, TriangleAlert, ImageOff, X, LucideProps } from 'lucide-react'
import { cn } from '@/utils/helpers';
import { getValue } from '@/utils/selectors';

export const ICONS = {
	origin: BadgeInfo,
	validating: Ellipsis,
	trusted: Check,
	valid: Check,
	invalid: X,
	unknown: TriangleAlert,
	camera: Camera,
	edit: SquarePen,
	ai: Sparkles,
	missing: ImageOff,
	close: X,
};

export interface IconProps extends LucideProps {
	type: string;
	strokeWidth?: number;	
};

const Icon = ({
	type,
	size = 24,
	strokeWidth = 2,
	className
} : IconProps) => {

	const IconComponent = useMemo(() =>
		(type ? getValue(type, ICONS) : undefined) ?? ICONS["validating"]
	, [type]);

	return (
		IconComponent ?
			<IconComponent
				size={size}
				strokeWidth={strokeWidth}
				className={cn(
					'Icon',
					`Icon_${type}`,
					className
				)}
			/>
		: null
	)
};

export default Icon;