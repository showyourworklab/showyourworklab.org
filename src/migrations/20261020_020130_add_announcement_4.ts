import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "announcement_locales" ADD COLUMN "prompt" varchar;
  ALTER TABLE "announcement_locales" ADD COLUMN "url" varchar;
  ALTER TABLE "_announcement_v_locales" ADD COLUMN "version_prompt" varchar;
  ALTER TABLE "_announcement_v_locales" ADD COLUMN "version_url" varchar;
  ALTER TABLE "announcement" DROP COLUMN "prompt";
  ALTER TABLE "announcement" DROP COLUMN "url";
  ALTER TABLE "_announcement_v" DROP COLUMN "version_prompt";
  ALTER TABLE "_announcement_v" DROP COLUMN "version_url";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "announcement" ADD COLUMN "prompt" varchar;
  ALTER TABLE "announcement" ADD COLUMN "url" varchar;
  ALTER TABLE "_announcement_v" ADD COLUMN "version_prompt" varchar;
  ALTER TABLE "_announcement_v" ADD COLUMN "version_url" varchar;
  ALTER TABLE "announcement_locales" DROP COLUMN "prompt";
  ALTER TABLE "announcement_locales" DROP COLUMN "url";
  ALTER TABLE "_announcement_v_locales" DROP COLUMN "version_prompt";
  ALTER TABLE "_announcement_v_locales" DROP COLUMN "version_url";`)
}
