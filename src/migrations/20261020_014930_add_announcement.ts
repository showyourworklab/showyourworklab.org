import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_announcement_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__announcement_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__announcement_v_published_locale" AS ENUM('en', 'no');
  CREATE TABLE "announcement" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"prompt" varchar,
  	"url" varchar,
  	"_status" "enum_announcement_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "announcement_locales" (
  	"title" varchar,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_announcement_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_prompt" varchar,
  	"version_url" varchar,
  	"version__status" "enum__announcement_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__announcement_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_announcement_v_locales" (
  	"version_title" varchar,
  	"version_body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "announcement_locales" ADD CONSTRAINT "announcement_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."announcement"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_announcement_v_locales" ADD CONSTRAINT "_announcement_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_announcement_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "announcement__status_idx" ON "announcement" USING btree ("_status");
  CREATE UNIQUE INDEX "announcement_locales_locale_parent_id_unique" ON "announcement_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_announcement_v_version_version__status_idx" ON "_announcement_v" USING btree ("version__status");
  CREATE INDEX "_announcement_v_created_at_idx" ON "_announcement_v" USING btree ("created_at");
  CREATE INDEX "_announcement_v_updated_at_idx" ON "_announcement_v" USING btree ("updated_at");
  CREATE INDEX "_announcement_v_snapshot_idx" ON "_announcement_v" USING btree ("snapshot");
  CREATE INDEX "_announcement_v_published_locale_idx" ON "_announcement_v" USING btree ("published_locale");
  CREATE INDEX "_announcement_v_latest_idx" ON "_announcement_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_announcement_v_locales_locale_parent_id_unique" ON "_announcement_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "announcement" CASCADE;
  DROP TABLE "announcement_locales" CASCADE;
  DROP TABLE "_announcement_v" CASCADE;
  DROP TABLE "_announcement_v_locales" CASCADE;
  DROP TYPE "public"."enum_announcement_status";
  DROP TYPE "public"."enum__announcement_v_version_status";
  DROP TYPE "public"."enum__announcement_v_published_locale";`)
}
