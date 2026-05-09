export default function Recognition() {
  return (
    <section className="bg-charcoal py-8 px-6 border-t border-b border-charcoal-light">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
        {/* All-State */}
        <div className="flex-1 border-l-4 border-gold pl-5 py-1">
          <div className="text-white font-bold text-sm">
            2nd Team All-State Place-Kicker
          </div>
          <div className="text-muted text-xs uppercase tracking-widest mt-0.5">
            Blue Bell / TSWA · Class 6A Texas · 2025
          </div>
        </div>

        {/* Kickoff stat */}
        <div className="flex-1 border-l-4 border-gold pl-5 py-1">
          <div className="text-white font-bold text-sm">
            67-Yard Kickoff · 3.74 Sec Hang Time
          </div>
          <div className="text-muted text-xs uppercase tracking-widest mt-0.5">
            Kohl&apos;s National Camp · December 2024
          </div>
        </div>
      </div>
    </section>
  );
}
