import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Databases created via dev-mode push before migrations existed already have this schema
  const { rows } = await db.execute(sql`SELECT to_regclass('public.support') AS "exists"`)
  if (rows[0]?.exists) {
    payload.logger.info('Baseline schema already present, skipping')
    return
  }

  await db.execute(sql`
   CREATE TYPE "public"."enum_home_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_about_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__about_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_updates_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__updates_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_team_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__team_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_press_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__press_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contact_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__contact_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_support_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__support_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "uploads" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xl_url" varchar,
  	"sizes_xl_width" numeric,
  	"sizes_xl_height" numeric,
  	"sizes_xl_mime_type" varchar,
  	"sizes_xl_filesize" numeric,
  	"sizes_xl_filename" varchar
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"uploads_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_id" integer,
  	"_status" "enum_home_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_home_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_id" integer,
  	"version__status" "enum__home_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "about_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'About',
  	"lede" jsonb,
  	"body" jsonb,
  	"_status" "enum_about_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_about_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_about_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar DEFAULT 'About',
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"version__status" "enum__about_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "updates_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"blurb" jsonb,
  	"url" varchar,
  	"date" timestamp(3) with time zone
  );
  
  CREATE TABLE "updates" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Updates',
  	"lede" jsonb,
  	"body" jsonb,
  	"_status" "enum_updates_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_updates_v_version_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"blurb" jsonb,
  	"url" varchar,
  	"date" timestamp(3) with time zone,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_updates_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar DEFAULT 'Updates',
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"version__status" "enum__updates_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "team_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"role" varchar,
  	"url" varchar,
  	"body" jsonb
  );
  
  CREATE TABLE "team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Team',
  	"lede" jsonb,
  	"body" jsonb,
  	"_status" "enum_team_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_team_v_version_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"role" varchar,
  	"url" varchar,
  	"body" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_team_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar DEFAULT 'Team',
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"version__status" "enum__team_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "press_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"source" varchar,
  	"title" varchar,
  	"url" varchar,
  	"date" timestamp(3) with time zone
  );
  
  CREATE TABLE "press" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Press',
  	"lede" jsonb,
  	"body" jsonb,
  	"_status" "enum_press_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_press_v_version_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"source" varchar,
  	"title" varchar,
  	"url" varchar,
  	"date" timestamp(3) with time zone,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_press_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar DEFAULT 'Press',
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"version__status" "enum__press_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Contact',
  	"lede" jsonb,
  	"body" jsonb,
  	"_status" "enum_contact_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_contact_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar DEFAULT 'Contact',
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"version__status" "enum__contact_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "support_groups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"url" varchar
  );
  
  CREATE TABLE "support_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "support" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Support',
  	"lede" jsonb,
  	"body" jsonb,
  	"_status" "enum_support_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_support_v_version_groups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_v_version_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar DEFAULT 'Support',
  	"version_lede" jsonb,
  	"version_body" jsonb,
  	"version__status" "enum__support_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_uploads_fk" FOREIGN KEY ("uploads_id") REFERENCES "public"."uploads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_hero_id_uploads_id_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_hero_id_uploads_id_fk" FOREIGN KEY ("version_hero_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_sections" ADD CONSTRAINT "about_sections_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_sections" ADD CONSTRAINT "about_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_version_sections" ADD CONSTRAINT "_about_v_version_sections_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_v_version_sections" ADD CONSTRAINT "_about_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "updates_items" ADD CONSTRAINT "updates_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."updates"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_updates_v_version_items" ADD CONSTRAINT "_updates_v_version_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_updates_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_items" ADD CONSTRAINT "team_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_items" ADD CONSTRAINT "team_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_v_version_items" ADD CONSTRAINT "_team_v_version_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v_version_items" ADD CONSTRAINT "_team_v_version_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "press_items" ADD CONSTRAINT "press_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."press"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_press_v_version_items" ADD CONSTRAINT "_press_v_version_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_press_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_groups_items" ADD CONSTRAINT "support_groups_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "support_groups_items" ADD CONSTRAINT "support_groups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_groups" ADD CONSTRAINT "support_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_v_version_groups_items" ADD CONSTRAINT "_support_v_version_groups_items_image_id_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."uploads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_support_v_version_groups_items" ADD CONSTRAINT "_support_v_version_groups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_v_version_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_v_version_groups" ADD CONSTRAINT "_support_v_version_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "uploads_updated_at_idx" ON "uploads" USING btree ("updated_at");
  CREATE INDEX "uploads_created_at_idx" ON "uploads" USING btree ("created_at");
  CREATE UNIQUE INDEX "uploads_filename_idx" ON "uploads" USING btree ("filename");
  CREATE INDEX "uploads_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "uploads" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "uploads_sizes_small_sizes_small_filename_idx" ON "uploads" USING btree ("sizes_small_filename");
  CREATE INDEX "uploads_sizes_medium_sizes_medium_filename_idx" ON "uploads" USING btree ("sizes_medium_filename");
  CREATE INDEX "uploads_sizes_large_sizes_large_filename_idx" ON "uploads" USING btree ("sizes_large_filename");
  CREATE INDEX "uploads_sizes_xl_sizes_xl_filename_idx" ON "uploads" USING btree ("sizes_xl_filename");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_uploads_id_idx" ON "payload_locked_documents_rels" USING btree ("uploads_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_hero_idx" ON "home" USING btree ("hero_id");
  CREATE INDEX "home__status_idx" ON "home" USING btree ("_status");
  CREATE INDEX "_home_v_version_version_hero_idx" ON "_home_v" USING btree ("version_hero_id");
  CREATE INDEX "_home_v_version_version__status_idx" ON "_home_v" USING btree ("version__status");
  CREATE INDEX "_home_v_created_at_idx" ON "_home_v" USING btree ("created_at");
  CREATE INDEX "_home_v_updated_at_idx" ON "_home_v" USING btree ("updated_at");
  CREATE INDEX "_home_v_latest_idx" ON "_home_v" USING btree ("latest");
  CREATE INDEX "_home_v_autosave_idx" ON "_home_v" USING btree ("autosave");
  CREATE INDEX "about_sections_order_idx" ON "about_sections" USING btree ("_order");
  CREATE INDEX "about_sections_parent_id_idx" ON "about_sections" USING btree ("_parent_id");
  CREATE INDEX "about_sections_image_idx" ON "about_sections" USING btree ("image_id");
  CREATE INDEX "about__status_idx" ON "about" USING btree ("_status");
  CREATE INDEX "_about_v_version_sections_order_idx" ON "_about_v_version_sections" USING btree ("_order");
  CREATE INDEX "_about_v_version_sections_parent_id_idx" ON "_about_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_about_v_version_sections_image_idx" ON "_about_v_version_sections" USING btree ("image_id");
  CREATE INDEX "_about_v_version_version__status_idx" ON "_about_v" USING btree ("version__status");
  CREATE INDEX "_about_v_created_at_idx" ON "_about_v" USING btree ("created_at");
  CREATE INDEX "_about_v_updated_at_idx" ON "_about_v" USING btree ("updated_at");
  CREATE INDEX "_about_v_latest_idx" ON "_about_v" USING btree ("latest");
  CREATE INDEX "_about_v_autosave_idx" ON "_about_v" USING btree ("autosave");
  CREATE INDEX "updates_items_order_idx" ON "updates_items" USING btree ("_order");
  CREATE INDEX "updates_items_parent_id_idx" ON "updates_items" USING btree ("_parent_id");
  CREATE INDEX "updates__status_idx" ON "updates" USING btree ("_status");
  CREATE INDEX "_updates_v_version_items_order_idx" ON "_updates_v_version_items" USING btree ("_order");
  CREATE INDEX "_updates_v_version_items_parent_id_idx" ON "_updates_v_version_items" USING btree ("_parent_id");
  CREATE INDEX "_updates_v_version_version__status_idx" ON "_updates_v" USING btree ("version__status");
  CREATE INDEX "_updates_v_created_at_idx" ON "_updates_v" USING btree ("created_at");
  CREATE INDEX "_updates_v_updated_at_idx" ON "_updates_v" USING btree ("updated_at");
  CREATE INDEX "_updates_v_latest_idx" ON "_updates_v" USING btree ("latest");
  CREATE INDEX "_updates_v_autosave_idx" ON "_updates_v" USING btree ("autosave");
  CREATE INDEX "team_items_order_idx" ON "team_items" USING btree ("_order");
  CREATE INDEX "team_items_parent_id_idx" ON "team_items" USING btree ("_parent_id");
  CREATE INDEX "team_items_image_idx" ON "team_items" USING btree ("image_id");
  CREATE INDEX "team__status_idx" ON "team" USING btree ("_status");
  CREATE INDEX "_team_v_version_items_order_idx" ON "_team_v_version_items" USING btree ("_order");
  CREATE INDEX "_team_v_version_items_parent_id_idx" ON "_team_v_version_items" USING btree ("_parent_id");
  CREATE INDEX "_team_v_version_items_image_idx" ON "_team_v_version_items" USING btree ("image_id");
  CREATE INDEX "_team_v_version_version__status_idx" ON "_team_v" USING btree ("version__status");
  CREATE INDEX "_team_v_created_at_idx" ON "_team_v" USING btree ("created_at");
  CREATE INDEX "_team_v_updated_at_idx" ON "_team_v" USING btree ("updated_at");
  CREATE INDEX "_team_v_latest_idx" ON "_team_v" USING btree ("latest");
  CREATE INDEX "_team_v_autosave_idx" ON "_team_v" USING btree ("autosave");
  CREATE INDEX "press_items_order_idx" ON "press_items" USING btree ("_order");
  CREATE INDEX "press_items_parent_id_idx" ON "press_items" USING btree ("_parent_id");
  CREATE INDEX "press__status_idx" ON "press" USING btree ("_status");
  CREATE INDEX "_press_v_version_items_order_idx" ON "_press_v_version_items" USING btree ("_order");
  CREATE INDEX "_press_v_version_items_parent_id_idx" ON "_press_v_version_items" USING btree ("_parent_id");
  CREATE INDEX "_press_v_version_version__status_idx" ON "_press_v" USING btree ("version__status");
  CREATE INDEX "_press_v_created_at_idx" ON "_press_v" USING btree ("created_at");
  CREATE INDEX "_press_v_updated_at_idx" ON "_press_v" USING btree ("updated_at");
  CREATE INDEX "_press_v_latest_idx" ON "_press_v" USING btree ("latest");
  CREATE INDEX "_press_v_autosave_idx" ON "_press_v" USING btree ("autosave");
  CREATE INDEX "contact__status_idx" ON "contact" USING btree ("_status");
  CREATE INDEX "_contact_v_version_version__status_idx" ON "_contact_v" USING btree ("version__status");
  CREATE INDEX "_contact_v_created_at_idx" ON "_contact_v" USING btree ("created_at");
  CREATE INDEX "_contact_v_updated_at_idx" ON "_contact_v" USING btree ("updated_at");
  CREATE INDEX "_contact_v_latest_idx" ON "_contact_v" USING btree ("latest");
  CREATE INDEX "_contact_v_autosave_idx" ON "_contact_v" USING btree ("autosave");
  CREATE INDEX "support_groups_items_order_idx" ON "support_groups_items" USING btree ("_order");
  CREATE INDEX "support_groups_items_parent_id_idx" ON "support_groups_items" USING btree ("_parent_id");
  CREATE INDEX "support_groups_items_image_idx" ON "support_groups_items" USING btree ("image_id");
  CREATE INDEX "support_groups_order_idx" ON "support_groups" USING btree ("_order");
  CREATE INDEX "support_groups_parent_id_idx" ON "support_groups" USING btree ("_parent_id");
  CREATE INDEX "support__status_idx" ON "support" USING btree ("_status");
  CREATE INDEX "_support_v_version_groups_items_order_idx" ON "_support_v_version_groups_items" USING btree ("_order");
  CREATE INDEX "_support_v_version_groups_items_parent_id_idx" ON "_support_v_version_groups_items" USING btree ("_parent_id");
  CREATE INDEX "_support_v_version_groups_items_image_idx" ON "_support_v_version_groups_items" USING btree ("image_id");
  CREATE INDEX "_support_v_version_groups_order_idx" ON "_support_v_version_groups" USING btree ("_order");
  CREATE INDEX "_support_v_version_groups_parent_id_idx" ON "_support_v_version_groups" USING btree ("_parent_id");
  CREATE INDEX "_support_v_version_version__status_idx" ON "_support_v" USING btree ("version__status");
  CREATE INDEX "_support_v_created_at_idx" ON "_support_v" USING btree ("created_at");
  CREATE INDEX "_support_v_updated_at_idx" ON "_support_v" USING btree ("updated_at");
  CREATE INDEX "_support_v_latest_idx" ON "_support_v" USING btree ("latest");
  CREATE INDEX "_support_v_autosave_idx" ON "_support_v" USING btree ("autosave");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "uploads" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "_home_v" CASCADE;
  DROP TABLE "about_sections" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "_about_v_version_sections" CASCADE;
  DROP TABLE "_about_v" CASCADE;
  DROP TABLE "updates_items" CASCADE;
  DROP TABLE "updates" CASCADE;
  DROP TABLE "_updates_v_version_items" CASCADE;
  DROP TABLE "_updates_v" CASCADE;
  DROP TABLE "team_items" CASCADE;
  DROP TABLE "team" CASCADE;
  DROP TABLE "_team_v_version_items" CASCADE;
  DROP TABLE "_team_v" CASCADE;
  DROP TABLE "press_items" CASCADE;
  DROP TABLE "press" CASCADE;
  DROP TABLE "_press_v_version_items" CASCADE;
  DROP TABLE "_press_v" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "_contact_v" CASCADE;
  DROP TABLE "support_groups_items" CASCADE;
  DROP TABLE "support_groups" CASCADE;
  DROP TABLE "support" CASCADE;
  DROP TABLE "_support_v_version_groups_items" CASCADE;
  DROP TABLE "_support_v_version_groups" CASCADE;
  DROP TABLE "_support_v" CASCADE;
  DROP TYPE "public"."enum_home_status";
  DROP TYPE "public"."enum__home_v_version_status";
  DROP TYPE "public"."enum_about_status";
  DROP TYPE "public"."enum__about_v_version_status";
  DROP TYPE "public"."enum_updates_status";
  DROP TYPE "public"."enum__updates_v_version_status";
  DROP TYPE "public"."enum_team_status";
  DROP TYPE "public"."enum__team_v_version_status";
  DROP TYPE "public"."enum_press_status";
  DROP TYPE "public"."enum__press_v_version_status";
  DROP TYPE "public"."enum_contact_status";
  DROP TYPE "public"."enum__contact_v_version_status";
  DROP TYPE "public"."enum_support_status";
  DROP TYPE "public"."enum__support_v_version_status";`)
}
