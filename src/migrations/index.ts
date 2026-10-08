import * as migration_20261007_195740_baseline from './20261007_195740_baseline';
import * as migration_20261007_195839_localization from './20261007_195839_localization';
import * as migration_20261007_220331_remove_autosave from './20261007_220331_remove_autosave';
import * as migration_20261008_015302_add_home_lede from './20261008_015302_add_home_lede';

export const migrations = [
  {
    up: migration_20261007_195740_baseline.up,
    down: migration_20261007_195740_baseline.down,
    name: '20261007_195740_baseline',
  },
  {
    up: migration_20261007_195839_localization.up,
    down: migration_20261007_195839_localization.down,
    name: '20261007_195839_localization',
  },
  {
    up: migration_20261007_220331_remove_autosave.up,
    down: migration_20261007_220331_remove_autosave.down,
    name: '20261007_220331_remove_autosave',
  },
  {
    up: migration_20261008_015302_add_home_lede.up,
    down: migration_20261008_015302_add_home_lede.down,
    name: '20261008_015302_add_home_lede'
  },
];
