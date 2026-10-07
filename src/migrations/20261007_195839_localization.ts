import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'no');
  CREATE TYPE "public"."enum__home_v_published_locale" AS ENUM('en', 'no');
  CREATE TYPE "public"."enum__about_v_published_locale" AS ENUM('en', 'no');
  CREATE TYPE "public"."enum__updates_v_published_locale" AS ENUM('en', 'no');
  CREATE TYPE "public"."enum__team_v_published_locale" AS ENUM('en', 'no');
  CREATE TYPE "public"."enum__press_v_published_locale" AS ENUM('en', 'no');
  CREATE TYPE "public"."enum__contact_v_published_locale" AS ENUM('en', 'no');
  CREATE TYPE "public"."enum__support_v_published_locale" AS ENUM('en', 'no');
  CREATE TABLE "uploads_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "about_sections_locales" (
  	"title" varchar,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "about_locales" (
  	"lede" jsonb,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_about_v_version_sections_locales" (
  	"title" varchar,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_about_v_locales" (
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "updates_items_locales" (
  	"title" varchar,
  	"blurb" jsonb,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_updates_v_version_items_locales" (
  	"title" varchar,
  	"blurb" jsonb,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "team_items_locales" (
  	"role" varchar,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_team_v_version_items_locales" (
  	"role" varchar,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "press_locales" (
  	"lede" jsonb,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_press_v_locales" (
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "contact_locales" (
  	"lede" jsonb,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_contact_v_locales" (
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "support_groups_items_locales" (
  	"title" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "support_groups_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "support_locales" (
  	"lede" jsonb,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_support_v_version_groups_items_locales" (
  	"title" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_support_v_version_groups_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_support_v_locales" (
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "_home_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_home_v" ADD COLUMN "published_locale" "enum__home_v_published_locale";
  ALTER TABLE "_about_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_about_v" ADD COLUMN "published_locale" "enum__about_v_published_locale";
  ALTER TABLE "_updates_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_updates_v" ADD COLUMN "published_locale" "enum__updates_v_published_locale";
  ALTER TABLE "_team_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_team_v" ADD COLUMN "published_locale" "enum__team_v_published_locale";
  ALTER TABLE "_press_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_press_v" ADD COLUMN "published_locale" "enum__press_v_published_locale";
  ALTER TABLE "_contact_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_contact_v" ADD COLUMN "published_locale" "enum__contact_v_published_locale";
  ALTER TABLE "_support_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_support_v" ADD COLUMN "published_locale" "enum__support_v_published_locale";
  ALTER TABLE "uploads_locales" ADD CONSTRAINT "uploads_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uploads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_sections_locales" ADD CONSTRAINT "about_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_locales" ADD CONSTRAINT "about_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_version_sections_locales" ADD CONSTRAINT "_about_v_version_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_v_version_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_locales" ADD CONSTRAINT "_about_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "updates_items_locales" ADD CONSTRAINT "updates_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."updates_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_updates_v_version_items_locales" ADD CONSTRAINT "_updates_v_version_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_updates_v_version_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_items_locales" ADD CONSTRAINT "team_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_v_version_items_locales" ADD CONSTRAINT "_team_v_version_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_v_version_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "press_locales" ADD CONSTRAINT "press_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."press"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_press_v_locales" ADD CONSTRAINT "_press_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_press_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_locales" ADD CONSTRAINT "contact_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_v_locales" ADD CONSTRAINT "_contact_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contact_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_groups_items_locales" ADD CONSTRAINT "support_groups_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_groups_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_groups_locales" ADD CONSTRAINT "support_groups_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_locales" ADD CONSTRAINT "support_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_v_version_groups_items_locales" ADD CONSTRAINT "_support_v_version_groups_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_v_version_groups_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_v_version_groups_locales" ADD CONSTRAINT "_support_v_version_groups_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_v_version_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_v_locales" ADD CONSTRAINT "_support_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "uploads_locales_locale_parent_id_unique" ON "uploads_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "about_sections_locales_locale_parent_id_unique" ON "about_sections_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "about_locales_locale_parent_id_unique" ON "about_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_about_v_version_sections_locales_locale_parent_id_unique" ON "_about_v_version_sections_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_about_v_locales_locale_parent_id_unique" ON "_about_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "updates_items_locales_locale_parent_id_unique" ON "updates_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_updates_v_version_items_locales_locale_parent_id_unique" ON "_updates_v_version_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "team_items_locales_locale_parent_id_unique" ON "team_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_team_v_version_items_locales_locale_parent_id_unique" ON "_team_v_version_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "press_locales_locale_parent_id_unique" ON "press_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_press_v_locales_locale_parent_id_unique" ON "_press_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "contact_locales_locale_parent_id_unique" ON "contact_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_contact_v_locales_locale_parent_id_unique" ON "_contact_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "support_groups_items_locales_locale_parent_id_unique" ON "support_groups_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "support_groups_locales_locale_parent_id_unique" ON "support_groups_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "support_locales_locale_parent_id_unique" ON "support_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_support_v_version_groups_items_locales_locale_parent_id_uni" ON "_support_v_version_groups_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_support_v_version_groups_locales_locale_parent_id_unique" ON "_support_v_version_groups_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_support_v_locales_locale_parent_id_unique" ON "_support_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_home_v_snapshot_idx" ON "_home_v" USING btree ("snapshot");
  CREATE INDEX "_home_v_published_locale_idx" ON "_home_v" USING btree ("published_locale");
  CREATE INDEX "_about_v_snapshot_idx" ON "_about_v" USING btree ("snapshot");
  CREATE INDEX "_about_v_published_locale_idx" ON "_about_v" USING btree ("published_locale");
  CREATE INDEX "_updates_v_snapshot_idx" ON "_updates_v" USING btree ("snapshot");
  CREATE INDEX "_updates_v_published_locale_idx" ON "_updates_v" USING btree ("published_locale");
  CREATE INDEX "_team_v_snapshot_idx" ON "_team_v" USING btree ("snapshot");
  CREATE INDEX "_team_v_published_locale_idx" ON "_team_v" USING btree ("published_locale");
  CREATE INDEX "_press_v_snapshot_idx" ON "_press_v" USING btree ("snapshot");
  CREATE INDEX "_press_v_published_locale_idx" ON "_press_v" USING btree ("published_locale");
  CREATE INDEX "_contact_v_snapshot_idx" ON "_contact_v" USING btree ("snapshot");
  CREATE INDEX "_contact_v_published_locale_idx" ON "_contact_v" USING btree ("published_locale");
  CREATE INDEX "_support_v_snapshot_idx" ON "_support_v" USING btree ("snapshot");
  CREATE INDEX "_support_v_published_locale_idx" ON "_support_v" USING btree ("published_locale");
  -- Copy existing (non-localized) content into the new locale tables as the default locale before the source columns are dropped
  INSERT INTO "uploads_locales" ("alt", "caption", "_locale", "_parent_id") SELECT "alt", "caption", 'en', "id" FROM "uploads";
  INSERT INTO "about_sections_locales" ("title", "body", "_locale", "_parent_id") SELECT "title", "body", 'en', "id" FROM "about_sections";
  INSERT INTO "about_locales" ("lede", "body", "_locale", "_parent_id") SELECT "lede", "body", 'en', "id" FROM "about";
  INSERT INTO "_about_v_version_sections_locales" ("title", "body", "_locale", "_parent_id") SELECT "title", "body", 'en', "id" FROM "_about_v_version_sections";
  INSERT INTO "_about_v_locales" ("version_lede", "version_body", "_locale", "_parent_id") SELECT "version_lede", "version_body", 'en', "id" FROM "_about_v";
  INSERT INTO "updates_items_locales" ("title", "blurb", "url", "_locale", "_parent_id") SELECT "title", "blurb", "url", 'en', "id" FROM "updates_items";
  INSERT INTO "_updates_v_version_items_locales" ("title", "blurb", "url", "_locale", "_parent_id") SELECT "title", "blurb", "url", 'en', "id" FROM "_updates_v_version_items";
  INSERT INTO "team_items_locales" ("role", "body", "_locale", "_parent_id") SELECT "role", "body", 'en', "id" FROM "team_items";
  INSERT INTO "_team_v_version_items_locales" ("role", "body", "_locale", "_parent_id") SELECT "role", "body", 'en', "id" FROM "_team_v_version_items";
  INSERT INTO "press_locales" ("lede", "body", "_locale", "_parent_id") SELECT "lede", "body", 'en', "id" FROM "press";
  INSERT INTO "_press_v_locales" ("version_lede", "version_body", "_locale", "_parent_id") SELECT "version_lede", "version_body", 'en', "id" FROM "_press_v";
  INSERT INTO "contact_locales" ("lede", "body", "_locale", "_parent_id") SELECT "lede", "body", 'en', "id" FROM "contact";
  INSERT INTO "_contact_v_locales" ("version_lede", "version_body", "_locale", "_parent_id") SELECT "version_lede", "version_body", 'en', "id" FROM "_contact_v";
  INSERT INTO "support_groups_items_locales" ("title", "url", "_locale", "_parent_id") SELECT "title", "url", 'en', "id" FROM "support_groups_items";
  INSERT INTO "support_groups_locales" ("title", "_locale", "_parent_id") SELECT "title", 'en', "id" FROM "support_groups";
  INSERT INTO "support_locales" ("lede", "body", "_locale", "_parent_id") SELECT "lede", "body", 'en', "id" FROM "support";
  INSERT INTO "_support_v_version_groups_items_locales" ("title", "url", "_locale", "_parent_id") SELECT "title", "url", 'en', "id" FROM "_support_v_version_groups_items";
  INSERT INTO "_support_v_version_groups_locales" ("title", "_locale", "_parent_id") SELECT "title", 'en', "id" FROM "_support_v_version_groups";
  INSERT INTO "_support_v_locales" ("version_lede", "version_body", "_locale", "_parent_id") SELECT "version_lede", "version_body", 'en', "id" FROM "_support_v";
  ALTER TABLE "uploads" DROP COLUMN "alt";
  ALTER TABLE "uploads" DROP COLUMN "caption";
  ALTER TABLE "about_sections" DROP COLUMN "title";
  ALTER TABLE "about_sections" DROP COLUMN "body";
  ALTER TABLE "about" DROP COLUMN "lede";
  ALTER TABLE "about" DROP COLUMN "body";
  ALTER TABLE "_about_v_version_sections" DROP COLUMN "title";
  ALTER TABLE "_about_v_version_sections" DROP COLUMN "body";
  ALTER TABLE "_about_v" DROP COLUMN "version_lede";
  ALTER TABLE "_about_v" DROP COLUMN "version_body";
  ALTER TABLE "updates_items" DROP COLUMN "title";
  ALTER TABLE "updates_items" DROP COLUMN "blurb";
  ALTER TABLE "updates_items" DROP COLUMN "url";
  ALTER TABLE "_updates_v_version_items" DROP COLUMN "title";
  ALTER TABLE "_updates_v_version_items" DROP COLUMN "blurb";
  ALTER TABLE "_updates_v_version_items" DROP COLUMN "url";
  ALTER TABLE "team_items" DROP COLUMN "role";
  ALTER TABLE "team_items" DROP COLUMN "body";
  ALTER TABLE "_team_v_version_items" DROP COLUMN "role";
  ALTER TABLE "_team_v_version_items" DROP COLUMN "body";
  ALTER TABLE "press" DROP COLUMN "lede";
  ALTER TABLE "press" DROP COLUMN "body";
  ALTER TABLE "_press_v" DROP COLUMN "version_lede";
  ALTER TABLE "_press_v" DROP COLUMN "version_body";
  ALTER TABLE "contact" DROP COLUMN "lede";
  ALTER TABLE "contact" DROP COLUMN "body";
  ALTER TABLE "_contact_v" DROP COLUMN "version_lede";
  ALTER TABLE "_contact_v" DROP COLUMN "version_body";
  ALTER TABLE "support_groups_items" DROP COLUMN "title";
  ALTER TABLE "support_groups_items" DROP COLUMN "url";
  ALTER TABLE "support_groups" DROP COLUMN "title";
  ALTER TABLE "support" DROP COLUMN "lede";
  ALTER TABLE "support" DROP COLUMN "body";
  ALTER TABLE "_support_v_version_groups_items" DROP COLUMN "title";
  ALTER TABLE "_support_v_version_groups_items" DROP COLUMN "url";
  ALTER TABLE "_support_v_version_groups" DROP COLUMN "title";
  ALTER TABLE "_support_v" DROP COLUMN "version_lede";
  ALTER TABLE "_support_v" DROP COLUMN "version_body";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "uploads_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_sections_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_about_v_version_sections_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_about_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "updates_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_updates_v_version_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "team_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_team_v_version_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "press_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_press_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_contact_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "support_groups_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "support_groups_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "support_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_support_v_version_groups_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_support_v_version_groups_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_support_v_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "uploads_locales" CASCADE;
  DROP TABLE "about_sections_locales" CASCADE;
  DROP TABLE "about_locales" CASCADE;
  DROP TABLE "_about_v_version_sections_locales" CASCADE;
  DROP TABLE "_about_v_locales" CASCADE;
  DROP TABLE "updates_items_locales" CASCADE;
  DROP TABLE "_updates_v_version_items_locales" CASCADE;
  DROP TABLE "team_items_locales" CASCADE;
  DROP TABLE "_team_v_version_items_locales" CASCADE;
  DROP TABLE "press_locales" CASCADE;
  DROP TABLE "_press_v_locales" CASCADE;
  DROP TABLE "contact_locales" CASCADE;
  DROP TABLE "_contact_v_locales" CASCADE;
  DROP TABLE "support_groups_items_locales" CASCADE;
  DROP TABLE "support_groups_locales" CASCADE;
  DROP TABLE "support_locales" CASCADE;
  DROP TABLE "_support_v_version_groups_items_locales" CASCADE;
  DROP TABLE "_support_v_version_groups_locales" CASCADE;
  DROP TABLE "_support_v_locales" CASCADE;
  DROP INDEX "_home_v_snapshot_idx";
  DROP INDEX "_home_v_published_locale_idx";
  DROP INDEX "_about_v_snapshot_idx";
  DROP INDEX "_about_v_published_locale_idx";
  DROP INDEX "_updates_v_snapshot_idx";
  DROP INDEX "_updates_v_published_locale_idx";
  DROP INDEX "_team_v_snapshot_idx";
  DROP INDEX "_team_v_published_locale_idx";
  DROP INDEX "_press_v_snapshot_idx";
  DROP INDEX "_press_v_published_locale_idx";
  DROP INDEX "_contact_v_snapshot_idx";
  DROP INDEX "_contact_v_published_locale_idx";
  DROP INDEX "_support_v_snapshot_idx";
  DROP INDEX "_support_v_published_locale_idx";
  ALTER TABLE "uploads" ADD COLUMN "alt" varchar;
  ALTER TABLE "uploads" ADD COLUMN "caption" varchar;
  ALTER TABLE "about_sections" ADD COLUMN "title" varchar;
  ALTER TABLE "about_sections" ADD COLUMN "body" jsonb;
  ALTER TABLE "about" ADD COLUMN "lede" jsonb;
  ALTER TABLE "about" ADD COLUMN "body" jsonb;
  ALTER TABLE "_about_v_version_sections" ADD COLUMN "title" varchar;
  ALTER TABLE "_about_v_version_sections" ADD COLUMN "body" jsonb;
  ALTER TABLE "_about_v" ADD COLUMN "version_lede" jsonb;
  ALTER TABLE "_about_v" ADD COLUMN "version_body" jsonb;
  ALTER TABLE "updates_items" ADD COLUMN "title" varchar;
  ALTER TABLE "updates_items" ADD COLUMN "blurb" jsonb;
  ALTER TABLE "updates_items" ADD COLUMN "url" varchar;
  ALTER TABLE "_updates_v_version_items" ADD COLUMN "title" varchar;
  ALTER TABLE "_updates_v_version_items" ADD COLUMN "blurb" jsonb;
  ALTER TABLE "_updates_v_version_items" ADD COLUMN "url" varchar;
  ALTER TABLE "team_items" ADD COLUMN "role" varchar;
  ALTER TABLE "team_items" ADD COLUMN "body" jsonb;
  ALTER TABLE "_team_v_version_items" ADD COLUMN "role" varchar;
  ALTER TABLE "_team_v_version_items" ADD COLUMN "body" jsonb;
  ALTER TABLE "press" ADD COLUMN "lede" jsonb;
  ALTER TABLE "press" ADD COLUMN "body" jsonb;
  ALTER TABLE "_press_v" ADD COLUMN "version_lede" jsonb;
  ALTER TABLE "_press_v" ADD COLUMN "version_body" jsonb;
  ALTER TABLE "contact" ADD COLUMN "lede" jsonb;
  ALTER TABLE "contact" ADD COLUMN "body" jsonb;
  ALTER TABLE "_contact_v" ADD COLUMN "version_lede" jsonb;
  ALTER TABLE "_contact_v" ADD COLUMN "version_body" jsonb;
  ALTER TABLE "support_groups_items" ADD COLUMN "title" varchar;
  ALTER TABLE "support_groups_items" ADD COLUMN "url" varchar;
  ALTER TABLE "support_groups" ADD COLUMN "title" varchar;
  ALTER TABLE "support" ADD COLUMN "lede" jsonb;
  ALTER TABLE "support" ADD COLUMN "body" jsonb;
  ALTER TABLE "_support_v_version_groups_items" ADD COLUMN "title" varchar;
  ALTER TABLE "_support_v_version_groups_items" ADD COLUMN "url" varchar;
  ALTER TABLE "_support_v_version_groups" ADD COLUMN "title" varchar;
  ALTER TABLE "_support_v" ADD COLUMN "version_lede" jsonb;
  ALTER TABLE "_support_v" ADD COLUMN "version_body" jsonb;
  ALTER TABLE "_home_v" DROP COLUMN "snapshot";
  ALTER TABLE "_home_v" DROP COLUMN "published_locale";
  ALTER TABLE "_about_v" DROP COLUMN "snapshot";
  ALTER TABLE "_about_v" DROP COLUMN "published_locale";
  ALTER TABLE "_updates_v" DROP COLUMN "snapshot";
  ALTER TABLE "_updates_v" DROP COLUMN "published_locale";
  ALTER TABLE "_team_v" DROP COLUMN "snapshot";
  ALTER TABLE "_team_v" DROP COLUMN "published_locale";
  ALTER TABLE "_press_v" DROP COLUMN "snapshot";
  ALTER TABLE "_press_v" DROP COLUMN "published_locale";
  ALTER TABLE "_contact_v" DROP COLUMN "snapshot";
  ALTER TABLE "_contact_v" DROP COLUMN "published_locale";
  ALTER TABLE "_support_v" DROP COLUMN "snapshot";
  ALTER TABLE "_support_v" DROP COLUMN "published_locale";
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum__home_v_published_locale";
  DROP TYPE "public"."enum__about_v_published_locale";
  DROP TYPE "public"."enum__updates_v_published_locale";
  DROP TYPE "public"."enum__team_v_published_locale";
  DROP TYPE "public"."enum__press_v_published_locale";
  DROP TYPE "public"."enum__contact_v_published_locale";
  DROP TYPE "public"."enum__support_v_published_locale";`)
}
