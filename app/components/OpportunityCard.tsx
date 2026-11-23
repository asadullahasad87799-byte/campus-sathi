import { Opportunity } from "../data";

export default function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="border border-zinc-200 rounded-lg p-5 flex flex-col gap-3 hover:border-zinc-300 transition-colors bg-white" role="listitem">
      <div className="flex justify-between items-start gap-2">
        <h2 className="font-semibold text-lg text-zinc-900">{opportunity.title}</h2>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-zinc-100 text-zinc-600 whitespace-nowrap">
          {opportunity.category}
        </span>
      </div>
      <p className="text-sm text-zinc-600">{opportunity.organization}</p>

      <dl className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm mt-2 sm:grid-cols-2">
        <div>
          <dt className="text-zinc-500 text-xs">Deadline</dt>
          <dd className="font-medium text-zinc-900">{opportunity.deadline}</dd>
        </div>
        <div>
          <dt className="text-zinc-500 text-xs">Eligibility</dt>
          <dd className="font-medium text-zinc-900">{opportunity.eligibility}</dd>
        </div>
      </dl>

      <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-between items-center text-xs text-zinc-600">
        <span>Verified: {opportunity.lastVerified}</span>
        <a
          href={opportunity.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1"
        >
          View Source
        </a>
      </div>
    </article>
  );
}
