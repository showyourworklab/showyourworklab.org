import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "updates_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "_updates_v_version_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "updates_items" ADD CONSTRAINT "updates_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_updates_v_version_items" ADD CONSTRAINT "_updates_v_version_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "updates_items_image_idx" ON "updates_items" USING btree ("image_id");
  CREATE INDEX "_updates_v_version_items_image_idx" ON "_updates_v_version_items" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "updates_items" DROP CONSTRAINT "updates_items_image_id_uploads_id_fk";
  
  ALTER TABLE "_updates_v_version_items" DROP CONSTRAINT "_updates_v_version_items_image_id_uploads_id_fk";
  
  DROP INDEX "updates_items_image_idx";
  DROP INDEX "_updates_v_version_items_image_idx";
  ALTER TABLE "updates_items" DROP COLUMN "image_id";
  ALTER TABLE "_updates_v_version_items" DROP COLUMN "image_id";`)
}
