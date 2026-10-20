import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "uploads_sizes_small_sizes_small_filename_idx";
  DROP INDEX "uploads_sizes_medium_sizes_medium_filename_idx";
  DROP INDEX "uploads_sizes_large_sizes_large_filename_idx";
  DROP INDEX "uploads_sizes_xl_sizes_xl_filename_idx";
  ALTER TABLE "uploads" DROP COLUMN "sizes_small_url";
  ALTER TABLE "uploads" DROP COLUMN "sizes_small_width";
  ALTER TABLE "uploads" DROP COLUMN "sizes_small_height";
  ALTER TABLE "uploads" DROP COLUMN "sizes_small_mime_type";
  ALTER TABLE "uploads" DROP COLUMN "sizes_small_filesize";
  ALTER TABLE "uploads" DROP COLUMN "sizes_small_filename";
  ALTER TABLE "uploads" DROP COLUMN "sizes_medium_url";
  ALTER TABLE "uploads" DROP COLUMN "sizes_medium_width";
  ALTER TABLE "uploads" DROP COLUMN "sizes_medium_height";
  ALTER TABLE "uploads" DROP COLUMN "sizes_medium_mime_type";
  ALTER TABLE "uploads" DROP COLUMN "sizes_medium_filesize";
  ALTER TABLE "uploads" DROP COLUMN "sizes_medium_filename";
  ALTER TABLE "uploads" DROP COLUMN "sizes_large_url";
  ALTER TABLE "uploads" DROP COLUMN "sizes_large_width";
  ALTER TABLE "uploads" DROP COLUMN "sizes_large_height";
  ALTER TABLE "uploads" DROP COLUMN "sizes_large_mime_type";
  ALTER TABLE "uploads" DROP COLUMN "sizes_large_filesize";
  ALTER TABLE "uploads" DROP COLUMN "sizes_large_filename";
  ALTER TABLE "uploads" DROP COLUMN "sizes_xl_url";
  ALTER TABLE "uploads" DROP COLUMN "sizes_xl_width";
  ALTER TABLE "uploads" DROP COLUMN "sizes_xl_height";
  ALTER TABLE "uploads" DROP COLUMN "sizes_xl_mime_type";
  ALTER TABLE "uploads" DROP COLUMN "sizes_xl_filesize";
  ALTER TABLE "uploads" DROP COLUMN "sizes_xl_filename";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "uploads" ADD COLUMN "sizes_small_url" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_small_width" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_small_height" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_small_mime_type" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_small_filesize" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_small_filename" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_medium_url" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_medium_width" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_medium_height" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_medium_mime_type" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_medium_filesize" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_medium_filename" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_large_url" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_large_width" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_large_height" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_large_mime_type" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_large_filesize" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_large_filename" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_xl_url" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_xl_width" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_xl_height" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_xl_mime_type" varchar;
  ALTER TABLE "uploads" ADD COLUMN "sizes_xl_filesize" numeric;
  ALTER TABLE "uploads" ADD COLUMN "sizes_xl_filename" varchar;
  CREATE INDEX "uploads_sizes_small_sizes_small_filename_idx" ON "uploads" USING btree ("sizes_small_filename");
  CREATE INDEX "uploads_sizes_medium_sizes_medium_filename_idx" ON "uploads" USING btree ("sizes_medium_filename");
  CREATE INDEX "uploads_sizes_large_sizes_large_filename_idx" ON "uploads" USING btree ("sizes_large_filename");
  CREATE INDEX "uploads_sizes_xl_sizes_xl_filename_idx" ON "uploads" USING btree ("sizes_xl_filename");`)
}
