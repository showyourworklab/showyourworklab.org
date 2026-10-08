import { useMemo } from 'react'
import { BadgeInfo, Camera, Check, Ellipsis, SquarePen, Sparkles, TriangleAlert, ImageOff, X, LucideProps, ArrowDown, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/utils/helpers';
import { getValue } from '@/utils/selectors';
import IconSvgSocial from './components/IconSvgSocial';

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
	down: ChevronDown,
	up: ChevronUp,
	social: IconSvgSocial
};

export interface IconProps extends LucideProps {
	type: string;
	variant?: string;
	strokeWidth?: number;	
};

const Icon = ({
	type,
	variant,
	size = 24,
	strokeWidth = 2,
	className
} : IconProps) => {

	const IconComponent = useMemo(() =>
		(type ? getValue(type, ICONS) : undefined)
	, [type]);

	return (
		IconComponent ?
			<IconComponent
				size={size}
				strokeWidth={strokeWidth}
				variant={variant}
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