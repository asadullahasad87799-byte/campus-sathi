# CampusSathi

CampusSathi is a student opportunities board for India. It brings verified internships, scholarships, hackathons, research programs, workshops, and competitions into one searchable page, with eligibility, deadlines, source links, and a last-verified date.

## What works today

- Search listings by title and filter by category
- Read opportunities from Supabase on the server
- Keep public access read-only through row-level security
- Show clearly labelled demo listings if Supabase is not configured
- Track the source link and verification date for every listing

The starter listings in `supabase/seed.sql` were checked against their official sources on 23 November 2026. They are a dated snapshot, not an automatically updated feed. Verify each source again before applying, and update or expire listings when deadlines pass.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connect Supabase

1. Create a Supabase project.
2. In **SQL Editor**, run `supabase/migrations/20261123000000_create_opportunities.sql`.
3. Run `supabase/migrations/20261123000001_expand_opportunity_categories.sql`.
4. Run `supabase/seed.sql` to load the curated listings.
5. In the project's API/Connect details, copy the **Project URL** and **Publishable key**.
6. Copy `.env.example` to `.env.local` and enter those values:

   ```env
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
   ```

7. Restart the development server. The opportunities page should now read the published listings from Supabase.

Keep `.env.local` on your computer; it is ignored by Git. Do not use a Supabase secret/service-role key in this app. The migration enables RLS and gives visitors read access to published rows only.

## Updating opportunities

Use Supabase's Table Editor or a reviewed SQL change to add or update listings. Check the official source, audience, deadline and application status before changing `status` to `published`. Keep `verified_at` current. A listing with `pending` or `expired` status is hidden from visitors.

Submissions, moderator tools, authentication, saved listings, and automatic deadline expiry are future milestones.
