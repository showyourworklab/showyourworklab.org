import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "team_locales" (
  	"title" varchar DEFAULT 'Team',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_team_v_locales" (
  	"version_title" varchar DEFAULT 'Team',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "about_locales" ADD COLUMN "title" varchar DEFAULT 'About';
  ALTER TABLE "_about_v_locales" ADD COLUMN "version_title" varchar DEFAULT 'About';
  ALTER TABLE "updates_items_locales" ADD COLUMN "overline" varchar;
  ALTER TABLE "_updates_v_version_items_locales" ADD COLUMN "overline" varchar;
  ALTER TABLE "press_locales" ADD COLUMN "title" varchar DEFAULT 'Press';
  ALTER TABLE "_press_v_locales" ADD COLUMN "version_title" varchar DEFAULT 'Press';
  ALTER TABLE "contact_locales" ADD COLUMN "title" varchar DEFAULT 'Contact';
  ALTER TABLE "_contact_v_locales" ADD COLUMN "version_title" varchar DEFAULT 'Contact';
  ALTER TABLE "support_locales" ADD COLUMN "title" varchar DEFAULT 'Support';
  ALTER TABLE "_support_v_locales" ADD COLUMN "version_title" varchar DEFAULT 'Support';
  ALTER TABLE "team_locales" ADD CONSTRAINT "team_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_v_locales" ADD CONSTRAINT "_team_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "team_locales_locale_parent_id_unique" ON "team_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_team_v_locales_locale_parent_id_unique" ON "_team_v_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "about" DROP COLUMN "title";
  ALTER TABLE "_about_v" DROP COLUMN "version_title";
  ALTER TABLE "updates_items" DROP COLUMN "overline";
  ALTER TABLE "_updates_v_version_items" DROP COLUMN "overline";
  ALTER TABLE "team" DROP COLUMN "title";
  ALTER TABLE "_team_v" DROP COLUMN "version_title";
  ALTER TABLE "press" DROP COLUMN "title";
  ALTER TABLE "_press_v" DROP COLUMN "version_title";
  ALTER TABLE "contact" DROP COLUMN "title";
  ALTER TABLE "_contact_v" DROP COLUMN "version_title";
  ALTER TABLE "support" DROP COLUMN "title";
  ALTER TABLE "_support_v" DROP COLUMN "version_title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "team_locales" CASCADE;
  DROP TABLE "_team_v_locales" CASCADE;
  ALTER TABLE "about" ADD COLUMN "title" varchar DEFAULT 'About';
  ALTER TABLE "_about_v" ADD COLUMN "version_title" varchar DEFAULT 'About';
  ALTER TABLE "updates_items" ADD COLUMN "overline" varchar;
  ALTER TABLE "_updates_v_version_items" ADD COLUMN "overline" varchar;
  ALTER TABLE "team" ADD COLUMN "title" varchar DEFAULT 'Team';
  ALTER TABLE "_team_v" ADD COLUMN "version_title" varchar DEFAULT 'Team';
  ALTER TABLE "press" ADD COLUMN "title" varchar DEFAULT 'Press';
  ALTER TABLE "_press_v" ADD COLUMN "version_title" varchar DEFAULT 'Press';
  ALTER TABLE "contact" ADD COLUMN "title" varchar DEFAULT 'Contact';
  ALTER TABLE "_contact_v" ADD COLUMN "version_title" varchar DEFAULT 'Contact';
  ALTER TABLE "support" ADD COLUMN "title" varchar DEFAULT 'Support';
  ALTER TABLE "_support_v" ADD COLUMN "version_title" varchar DEFAULT 'Support';
  ALTER TABLE "about_locales" DROP COLUMN "title";
  ALTER TABLE "_about_v_locales" DROP COLUMN "version_title";
  ALTER TABLE "updates_items_locales" DROP COLUMN "overline";
  ALTER TABLE "_updates_v_version_items_locales" DROP COLUMN "overline";
  ALTER TABLE "press_locales" DROP COLUMN "title";
  ALTER TABLE "_press_v_locales" DROP COLUMN "version_title";
  ALTER TABLE "contact_locales" DROP COLUMN "title";
  ALTER TABLE "_contact_v_locales" DROP COLUMN "version_title";
  ALTER TABLE "support_locales" DROP COLUMN "title";
  ALTER TABLE "_support_v_locales" DROP COLUMN "version_title";`)
}
