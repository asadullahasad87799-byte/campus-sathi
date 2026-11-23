import { SAMPLE_OPPORTUNITIES, type Opportunity } from "../app/data";

type DatabaseOpportunity = {
  id: string;
  title: string;
  category: Opportunity["category"];
  organization: string;
  deadline: string;
  eligibility: string;
  source_url: string;
  verified_at: string;
};

type OpportunityData = {
  opportunities: Opportunity[];
  notice: string | null;
};

const demoNotice =
  "Demo listings are showing. Connect Supabase and publish opportunities to load live data.";

export async function getOpportunityData(): Promise<OpportunityData> {
  const projectUrl = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!projectUrl || !publishableKey) {
    return { opportunities: SAMPLE_OPPORTUNITIES, notice: demoNotice };
  }

  try {
    const endpoint = new URL("/rest/v1/opportunities", projectUrl);
    endpoint.search = new URLSearchParams({
      select:
        "id,title,category,organization,deadline,eligibility,source_url,verified_at",
      status: "eq.published",
      order: "deadline.asc",
    }).toString();

    const response = await fetch(endpoint, {
      headers: {
        apikey: publishableKey,
        Authorization: `Bearer ${publishableKey}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Supabase opportunities request failed:", response.status);
      return {
        opportunities: SAMPLE_OPPORTUNITIES,
        notice: "Supabase could not load listings. Demo listings are showing.",
      };
    }

    const rows = (await response.json()) as DatabaseOpportunity[];
    const opportunities = rows.map((row) => ({
      id: row.id,
      title: row.title,
      category: row.category,
      organization: row.organization,
      deadline: row.deadline,
      eligibility: row.eligibility,
      link: row.source_url,
      lastVerified: row.verified_at,
    }));

    return { opportunities, notice: null };
  } catch (error) {
    console.error("Could not reach Supabase:", error);
    return {
      opportunities: SAMPLE_OPPORTUNITIES,
      notice: "Supabase could not be reached. Demo listings are showing.",
    };
  }
}
