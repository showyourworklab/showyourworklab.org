import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "about_sections_locales" ADD COLUMN "prompt" varchar;
  ALTER TABLE "_about_v_version_sections_locales" ADD COLUMN "prompt" varchar;
  ALTER TABLE "about_sections" DROP COLUMN "prompt";
  ALTER TABLE "_about_v_version_sections" DROP COLUMN "prompt";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "about_sections" ADD COLUMN "prompt" varchar;
  ALTER TABLE "_about_v_version_sections" ADD COLUMN "prompt" varchar;
  ALTER TABLE "about_sections_locales" DROP COLUMN "prompt";
  ALTER TABLE "_about_v_version_sections_locales" DROP COLUMN "prompt";`)
}
