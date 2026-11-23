"use client";

import { useState } from "react";
import type { Opportunity, OpportunityCategory } from "../data";
import OpportunityCard from "./OpportunityCard";

type OpportunitiesExplorerProps = {
  opportunities: Opportunity[];
  notice: string | null;
};

export default function OpportunitiesExplorer({
  opportunities,
  notice,
}: OpportunitiesExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<OpportunityCategory | "All">("All");

  const filtered = opportunities.filter((opportunity) => {
    const matchesSearch = opportunity.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "All" || opportunity.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories: Array<OpportunityCategory | "All"> = [
    "All",
    "Internship",
    "Scholarship",
    "Hackathon",
    "Workshop",
    "Research Program",
    "Competition",
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 sm:p-10">
      <main className="mx-auto max-w-4xl text-zinc-900">
        <h1 className="mb-8 text-3xl font-bold text-zinc-900">
          Opportunities
        </h1>

        {notice && (
          <p
            className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
            role="status"
          >
            {notice}
          </p>
        )}

        <div
          className="mb-8 flex flex-col gap-4 sm:flex-row"
          role="search"
          aria-label="Filter opportunities"
        >
          <div className="flex-1">
            <label htmlFor="search-input" className="sr-only">
              Search opportunities
            </label>
            <input
              id="search-input"
              type="search"
              placeholder="Search opportunities..."
              className="w-full rounded-lg border border-zinc-200 px-4 py-2 text-zinc-900 placeholder:text-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search opportunities by title"
            />
          </div>
          <div>
            <label htmlFor="category-filter" className="sr-only">
              Filter by category
            </label>
            <select
              id="category-filter"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as OpportunityCategory | "All")
              }
              aria-label="Filter by category"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="sr-only" role="status" aria-atomic="true">
          {filtered.length} {filtered.length === 1 ? "opportunity" : "opportunities"} found
        </p>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-zinc-500">
            <p className="mb-2 text-lg font-medium">No opportunities found</p>
            <p className="text-sm">
              {search || category !== "All"
                ? "Try adjusting your search or filter criteria."
                : "No published opportunities are available yet."}
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            role="list"
            aria-label="Opportunity listings"
          >
            {filtered.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
