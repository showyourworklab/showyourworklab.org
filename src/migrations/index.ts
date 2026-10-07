import * as migration_20261007_195740_baseline from './20261007_195740_baseline';
import * as migration_20261007_195839_localization from './20261007_195839_localization';

export const migrations = [
  {
    up: migration_20261007_195740_baseline.up,
    down: migration_20261007_195740_baseline.down,
    name: '20261007_195740_baseline',
  },
  {
    up: migration_20261007_195839_localization.up,
    down: migration_20261007_195839_localization.down,
    name: '20261007_195839_localization'
  },
];
