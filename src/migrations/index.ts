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
import * as migration_20261019_234014_add_about_items from './20261019_234014_add_about_items';
import * as migration_20261020_010936_add_about_prompt from './20261020_010936_add_about_prompt';
import * as migration_20261020_011106_add_about_prompt_2 from './20261020_011106_add_about_prompt_2';
import * as migration_20261020_014930_add_announcement from './20261020_014930_add_announcement';
import * as migration_20261020_015609_add_announcement_2 from './20261020_015609_add_announcement_2';
import * as migration_20261020_020130_add_announcement_4 from './20261020_020130_add_announcement_4';
import * as migration_20261020_030006_add_hero_title from './20261020_030006_add_hero_title';
import * as migration_20261020_032438_add_hero_title_2 from './20261020_032438_add_hero_title_2';
import * as migration_20261020_032623_add_hero_title_3 from './20261020_032623_add_hero_title_3';
import * as migration_20261020_170150_add_localized_about_prompts from './20261020_170150_add_localized_about_prompts';

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
    name: '20261019_222452_locale_more_fields_2',
  },
  {
    up: migration_20261019_234014_add_about_items.up,
    down: migration_20261019_234014_add_about_items.down,
    name: '20261019_234014_add_about_items',
  },
  {
    up: migration_20261020_010936_add_about_prompt.up,
    down: migration_20261020_010936_add_about_prompt.down,
    name: '20261020_010936_add_about_prompt',
  },
  {
    up: migration_20261020_011106_add_about_prompt_2.up,
    down: migration_20261020_011106_add_about_prompt_2.down,
    name: '20261020_011106_add_about_prompt_2',
  },
  {
    up: migration_20261020_014930_add_announcement.up,
    down: migration_20261020_014930_add_announcement.down,
    name: '20261020_014930_add_announcement',
  },
  {
    up: migration_20261020_015609_add_announcement_2.up,
    down: migration_20261020_015609_add_announcement_2.down,
    name: '20261020_015609_add_announcement_2',
  },
  {
    up: migration_20261020_020130_add_announcement_4.up,
    down: migration_20261020_020130_add_announcement_4.down,
    name: '20261020_020130_add_announcement_4',
  },
  {
    up: migration_20261020_030006_add_hero_title.up,
    down: migration_20261020_030006_add_hero_title.down,
    name: '20261020_030006_add_hero_title',
  },
  {
    up: migration_20261020_032438_add_hero_title_2.up,
    down: migration_20261020_032438_add_hero_title_2.down,
    name: '20261020_032438_add_hero_title_2',
  },
  {
    up: migration_20261020_032623_add_hero_title_3.up,
    down: migration_20261020_032623_add_hero_title_3.down,
    name: '20261020_032623_add_hero_title_3',
  },
  {
    up: migration_20261020_170150_add_localized_about_prompts.up,
    down: migration_20261020_170150_add_localized_about_prompts.down,
    name: '20261020_170150_add_localized_about_prompts'
  },
];
