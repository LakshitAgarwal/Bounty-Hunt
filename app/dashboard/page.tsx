export default function DashboardHome() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/60">New this week</div>
          <div className="text-2xl font-semibold">128</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/60">Total rewards</div>
          <div className="text-2xl font-semibold">$42,500</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/60">Active applications</div>
          <div className="text-2xl font-semibold">3</div>
        </div>
      </section>

      <section className="mt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <input
            className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder-white/40"
            placeholder="Filter: keyword"
          />
          <select className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm">
            <option>Sort: Newest</option>
            <option>Sort: Amount</option>
          </select>
          <select className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm">
            <option>Any currency</option>
            <option>USD</option>
            <option>USDC</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Improve search relevance</h3>
                  <p className="text-sm text-white/60">
                    vercel/next.js • React, TypeScript
                  </p>
                </div>
                <div className="rounded-md bg-emerald-500/10 text-emerald-300 text-xs px-2 py-1 border border-emerald-500/20">
                  Funded
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-white/80">$1,000 • Medium</div>
                <div className="flex gap-2">
                  <button className="rounded-md border border-white/15 px-3 py-1.5 text-sm">
                    Details
                  </button>
                  <button className="rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium">
                    Apply
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
