import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "press_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "_press_v_version_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "press_items" ADD CONSTRAINT "press_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_press_v_version_items" ADD CONSTRAINT "_press_v_version_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "press_items_image_idx" ON "press_items" USING btree ("image_id");
  CREATE INDEX "_press_v_version_items_image_idx" ON "_press_v_version_items" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "press_items" DROP CONSTRAINT "press_items_image_id_uploads_id_fk";
  
  ALTER TABLE "_press_v_version_items" DROP CONSTRAINT "_press_v_version_items_image_id_uploads_id_fk";
  
  DROP INDEX "press_items_image_idx";
  DROP INDEX "_press_v_version_items_image_idx";
  ALTER TABLE "press_items" DROP COLUMN "image_id";
  ALTER TABLE "_press_v_version_items" DROP COLUMN "image_id";`)
}
