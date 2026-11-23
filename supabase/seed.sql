-- Curated opportunities verified from official organizer or government sources on 2026-11-23.
-- Check the linked source again before applying; deadlines and eligibility can change.
insert into public.opportunities (
  id, title, category, organization, deadline, eligibility, source_url, verified_at, status
)
values
  (
    '11111111-1111-4111-8111-111111111101',
    'C-DOT Paid Internship — Winter 2027',
    'Internship',
    'C-DOT · Government of India',
    '2026-11-30',
    'BTech/BE CSE, ECE or related; current semester 5–8; CGPA at least 7.0/10. Only students at India’s NIRF 2025 top-30 engineering institutes; signed institute NOC and minimum 3-month duration required.',
    'https://cdot.in/cdotweb/assets/docs/curr_openings/adv/Notification_PaidInternship_2027.pdf',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111102',
    'Google Student Researcher — 2027',
    'Internship',
    'Google',
    '2026-12-04',
    'Currently enrolled in a bachelor’s, master’s or PhD in CS or a listed related field, with experience in one CS research area. Research experience is preferred. India remote; reviewed on a rolling basis.',
    'https://www.google.com/about/careers/applications/jobs/results/125423735539671750-student-researcher-2027?hl=en&location=India&q=Internship',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111103',
    'SciX India Hackathon',
    'Hackathon',
    'SciX',
    '2026-11-30',
    'Free and online for STEAM students in Engineering, Pharma, Biotech or Chemical Technology. Individual or teams of 1–4. Stage 1 asks for a 6–8 slide PDF by 11:59 PM IST.',
    'https://scix.in/hackathons/c80a5324-5054-48c2-b187-258e471aa5b1',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111104',
    'PM-USP Central Sector Scholarship (CSSS) — 2026–27',
    'Scholarship',
    'Ministry of Education · National Scholarship Portal',
    '2026-11-30',
    'Fresh applicants: regular degree students above the 80th percentile in their Class XII board stream, family income up to Rs 4.5 lakh/year, and no other scholarship or fee reimbursement. Later-year students can apply for renewal only if previously awarded; renewal criteria apply.',
    'https://scholarships.gov.in/All-Scholarships',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111105',
    'Top Class Scholarship for SC Students — 2026–27',
    'Scholarship',
    'Ministry of Social Justice & Empowerment · NSP',
    '2026-11-30',
    'For SC students at a ministry-notified institution. Fresh awards are for first-year students only; later years may apply for renewal if already selected. Check the current institute list and income rules before applying.',
    'https://scholarships.gov.in/All-Scholarships',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111106',
    'AICTE Pragati Scholarship for Girl Students — Degree',
    'Scholarship',
    'AICTE · National Scholarship Portal',
    '2026-11-30',
    'For girls admitted to year 1 of an AICTE-approved degree, or year 2 via lateral entry; family income up to Rs 8 lakh/year and maximum two girls per family. Continuing students can apply for renewal if already awarded.',
    'https://scholarships.gov.in/All-Scholarships',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111107',
    'ICTS–S. N. Bhatt Memorial Excellence Fellowship — 2027',
    'Research Program',
    'ICTS–TIFR, Bengaluru',
    '2026-12-15',
    'Undergraduate science, mathematics or engineering students who will have completed year 3 or 4 by May 2027; exceptional students completing year 2 may apply. Computer Science is listed. Selected students receive stipend and accommodation; deadline 5:00 PM IST.',
    'https://www.icts.res.in/academic/summer-research-program',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111108',
    'LearningPanda National AI Agents Hackathon — 2026',
    'Hackathon',
    'LearningPanda',
    '2026-12-15',
    'Free for college/university students in India aged 18+. Teams of 2–4; inter-college teams allowed. Build window is 18–25 Dec 2026; prizes are not announced yet. Registration closes 11:59 PM IST.',
    'https://www.learningpanda.ai/hackathon',
    '2026-11-23',
    'published'
  ),
  (
    '11111111-1111-4111-8111-111111111109',
    'Microsoft Imagine Cup — 2027 Student Startup',
    'Competition',
    'Microsoft',
    '2027-02-28',
    'Student Startup path: all founders must be enrolled students during the competition period; each entrant must be 18+. Team limit is 4. Requires a qualifying private, for-profit early-stage legal startup building software with Azure; a class project alone may not qualify. Review official rules; deadline 11:59 PM CST.',
    'https://imaginecup.microsoft.com/Default.aspx',
    '2026-11-23',
    'published'
  )
on conflict (id) do update set
  title = excluded.title,
  category = excluded.category,
  organization = excluded.organization,
  deadline = excluded.deadline,
  eligibility = excluded.eligibility,
  source_url = excluded.source_url,
  verified_at = excluded.verified_at,
  status = excluded.status;
