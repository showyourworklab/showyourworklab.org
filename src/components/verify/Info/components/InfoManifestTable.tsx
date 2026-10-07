import { cn } from "@/utils/helpers";
import { getValue } from "@/utils/selectors";
import InfoManifestTableRow from "./InfoManifestTableRow";

export const MANIFEST_TABLE_ROW_KEYS = [
	'timestamp',
	'producer',
	'signator',
	'generator',
];

export default function InfoManifestTable({
	data
} : {
	data: any;
}) {
	return (
		<dl
			className={cn('InfoManifestTable')}
		>
			{MANIFEST_TABLE_ROW_KEYS.map(key =>
				<InfoManifestTableRow
					key={key}
					type={key}
					value={getValue(key, data)}
				/>
			)}
		</dl>
	);
}