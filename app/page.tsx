import { Suspense } from "react";
import { connection } from "next/server";
import OpportunitiesExplorer from "./components/OpportunitiesExplorer";
import { getOpportunityData } from "../lib/opportunities";

async function LiveOpportunities() {
  await connection();
  const { opportunities, notice } = await getOpportunityData();

  return (
    <OpportunitiesExplorer opportunities={opportunities} notice={notice} />
  );
}

function OpportunitiesLoading() {
  return (
    <div className="min-h-screen bg-zinc-50 p-6 sm:p-10">
      <main className="mx-auto max-w-4xl text-zinc-900">
        <h1 className="mb-8 text-3xl font-bold">Opportunities</h1>
        <p className="text-sm text-zinc-600" role="status">
          Loading verified opportunities…
        </p>
      </main>
    </div>
  );
}

export default function OpportunitiesPage() {
  return (
    <Suspense fallback={<OpportunitiesLoading />}>
      <LiveOpportunities />
    </Suspense>
  );
}
