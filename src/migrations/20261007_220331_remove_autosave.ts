import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "_home_v_autosave_idx";
  DROP INDEX "_about_v_autosave_idx";
  DROP INDEX "_updates_v_autosave_idx";
  DROP INDEX "_team_v_autosave_idx";
  DROP INDEX "_press_v_autosave_idx";
  DROP INDEX "_contact_v_autosave_idx";
  DROP INDEX "_support_v_autosave_idx";
  ALTER TABLE "_home_v" DROP COLUMN "autosave";
  ALTER TABLE "_about_v" DROP COLUMN "autosave";
  ALTER TABLE "_updates_v" DROP COLUMN "autosave";
  ALTER TABLE "_team_v" DROP COLUMN "autosave";
  ALTER TABLE "_press_v" DROP COLUMN "autosave";
  ALTER TABLE "_contact_v" DROP COLUMN "autosave";
  ALTER TABLE "_support_v" DROP COLUMN "autosave";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "_home_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_about_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_updates_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_team_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_press_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_contact_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_support_v" ADD COLUMN "autosave" boolean;
  CREATE INDEX "_home_v_autosave_idx" ON "_home_v" USING btree ("autosave");
  CREATE INDEX "_about_v_autosave_idx" ON "_about_v" USING btree ("autosave");
  CREATE INDEX "_updates_v_autosave_idx" ON "_updates_v" USING btree ("autosave");
  CREATE INDEX "_team_v_autosave_idx" ON "_team_v" USING btree ("autosave");
  CREATE INDEX "_press_v_autosave_idx" ON "_press_v" USING btree ("autosave");
  CREATE INDEX "_contact_v_autosave_idx" ON "_contact_v" USING btree ("autosave");
  CREATE INDEX "_support_v_autosave_idx" ON "_support_v" USING btree ("autosave");`)
}
