import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "updates_locales" (
  	"title" varchar DEFAULT 'Updates',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_updates_v_locales" (
  	"version_title" varchar DEFAULT 'Updates',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "updates_locales" ADD CONSTRAINT "updates_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."updates"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_updates_v_locales" ADD CONSTRAINT "_updates_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_updates_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "updates_locales_locale_parent_id_unique" ON "updates_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_updates_v_locales_locale_parent_id_unique" ON "_updates_v_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "updates" DROP COLUMN "title";
  ALTER TABLE "_updates_v" DROP COLUMN "version_title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "updates_locales" CASCADE;
  DROP TABLE "_updates_v_locales" CASCADE;
  ALTER TABLE "updates" ADD COLUMN "title" varchar DEFAULT 'Updates';
  ALTER TABLE "_updates_v" ADD COLUMN "version_title" varchar DEFAULT 'Updates';`)
}
