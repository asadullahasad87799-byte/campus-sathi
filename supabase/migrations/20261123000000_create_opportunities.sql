create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (
    category in ('Internship', 'Scholarship', 'Hackathon', 'Workshop')
  ),
  organization text not null,
  deadline date not null,
  eligibility text not null,
  source_url text not null check (source_url ~ '^https://'),
  verified_at date not null,
  status text not null default 'pending' check (
    status in ('pending', 'published', 'expired')
  ),
  created_at timestamptz not null default now()
);

alter table public.opportunities enable row level security;

revoke all on table public.opportunities from anon, authenticated;
grant select on table public.opportunities to anon, authenticated;

drop policy if exists "Anyone can read published opportunities"
  on public.opportunities;

create policy "Anyone can read published opportunities"
  on public.opportunities
  for select
  to anon, authenticated
  using (status = 'published');
