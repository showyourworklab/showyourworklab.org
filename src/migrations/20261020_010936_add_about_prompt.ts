import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "about_sections_items" CASCADE;
  DROP TABLE "about_sections_items_locales" CASCADE;
  DROP TABLE "_about_v_version_sections_items" CASCADE;
  DROP TABLE "_about_v_version_sections_items_locales" CASCADE;
  ALTER TABLE "about_sections" ADD COLUMN "prompt" varchar;
  ALTER TABLE "about_sections" ADD COLUMN "url" varchar;
  ALTER TABLE "_about_v_version_sections" ADD COLUMN "prompt" varchar;
  ALTER TABLE "_about_v_version_sections" ADD COLUMN "url" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "about_sections_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "about_sections_items_locales" (
  	"title" varchar,
  	"prompt" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_about_v_version_sections_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_about_v_version_sections_items_locales" (
  	"title" varchar,
  	"prompt" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "about_sections_items" ADD CONSTRAINT "about_sections_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_sections_items_locales" ADD CONSTRAINT "about_sections_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_sections_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_version_sections_items" ADD CONSTRAINT "_about_v_version_sections_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_v_version_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_version_sections_items_locales" ADD CONSTRAINT "_about_v_version_sections_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_v_version_sections_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "about_sections_items_order_idx" ON "about_sections_items" USING btree ("_order");
  CREATE INDEX "about_sections_items_parent_id_idx" ON "about_sections_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "about_sections_items_locales_locale_parent_id_unique" ON "about_sections_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_about_v_version_sections_items_order_idx" ON "_about_v_version_sections_items" USING btree ("_order");
  CREATE INDEX "_about_v_version_sections_items_parent_id_idx" ON "_about_v_version_sections_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_about_v_version_sections_items_locales_locale_parent_id_uni" ON "_about_v_version_sections_items_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "about_sections" DROP COLUMN "prompt";
  ALTER TABLE "about_sections" DROP COLUMN "url";
  ALTER TABLE "_about_v_version_sections" DROP COLUMN "prompt";
  ALTER TABLE "_about_v_version_sections" DROP COLUMN "url";`)
}
