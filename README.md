This is the website for [Show Your Work Lab](https://showyourworklab.org) built on [Next.js](https://nextjs.org).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CMS

The site runs on [Payload CMS](https://payloadcms.com) using [Neon DB](https://neon.tech/). You can access the CMS locally at [http://localhost:3000/admin](http://localhost:3000/admin) using the staging database set in `.env.local`.

### Changing the schema

1. Edit CMS fields in `src/cms/*`.
2. Create a migration with `npm run migrate:create -- <name>`.
3. Apply it to the staging database with `npm run migrate:push`.
4. Test locally with `npm run dev`.
5. Commit your changes, including everything in `src/migrations/`, and push to `staging`.
6. Merge to `main`. The production build runs the migration.

New fields show "Nothing found" in the admin until steps 2 and 3 are done. Run `npm run migrate:status` to see which migrations have been applied.