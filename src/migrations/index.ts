import * as migration_20261007_195740_baseline from './20261007_195740_baseline';
import * as migration_20261007_195839_localization from './20261007_195839_localization';
import * as migration_20261007_220331_remove_autosave from './20261007_220331_remove_autosave';
import * as migration_20261008_015302_add_home_lede from './20261008_015302_add_home_lede';
import * as migration_20261008_131105_add_updates_image from './20261008_131105_add_updates_image';
import * as migration_20261014_191424_add_press_image from './20261014_191424_add_press_image';
import * as migration_20261014_193816_add_updates_overline from './20261014_193816_add_updates_overline';
import * as migration_20261015_180148_remove_generated_image_sizes from './20261015_180148_remove_generated_image_sizes';
import * as migration_20261019_174801_locale_more_fields from './20261019_174801_locale_more_fields';
import * as migration_20261019_222452_locale_more_fields_2 from './20261019_222452_locale_more_fields_2';

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
    name: '20261008_015302_add_home_lede',
  },
  {
    up: migration_20261008_131105_add_updates_image.up,
    down: migration_20261008_131105_add_updates_image.down,
    name: '20261008_131105_add_updates_image',
  },
  {
    up: migration_20261014_191424_add_press_image.up,
    down: migration_20261014_191424_add_press_image.down,
    name: '20261014_191424_add_press_image',
  },
  {
    up: migration_20261014_193816_add_updates_overline.up,
    down: migration_20261014_193816_add_updates_overline.down,
    name: '20261014_193816_add_updates_overline',
  },
  {
    up: migration_20261015_180148_remove_generated_image_sizes.up,
    down: migration_20261015_180148_remove_generated_image_sizes.down,
    name: '20261015_180148_remove_generated_image_sizes',
  },
  {
    up: migration_20261019_174801_locale_more_fields.up,
    down: migration_20261019_174801_locale_more_fields.down,
    name: '20261019_174801_locale_more_fields',
  },
  {
    up: migration_20261019_222452_locale_more_fields_2.up,
    down: migration_20261019_222452_locale_more_fields_2.down,
    name: '20261019_222452_locale_more_fields_2'
  },
];
