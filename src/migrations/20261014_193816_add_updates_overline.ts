import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "updates_items" ADD COLUMN "overline" varchar;
  ALTER TABLE "_updates_v_version_items" ADD COLUMN "overline" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "updates_items" DROP COLUMN "overline";
  ALTER TABLE "_updates_v_version_items" DROP COLUMN "overline";`)
}
