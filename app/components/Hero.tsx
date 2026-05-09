const stats = [
  { value: "51 YDS", label: "Field Goal Long" },
  { value: "81.6%", label: "Touchback Rate" },
  { value: "4.5", label: "GPA" },
];

const rankings = [
  { rank: "#33", position: "Kicker Nationally", org: "Kohl's Professional Camps" },
  { rank: "#4", position: "Punter Nationally", org: "Chris Sailer Kicking" },
];

export default function Hero() {
  return (
    <section className="relative pt-16">
      {/* Hero photo */}
      <div className="w-full min-h-[55vh] md:min-h-[65vh] overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/594349_746258352b524361ba79285cd548c495~mv2.jpg/v1/fill/w_2042,h_2584,al_c,q_90/noah_abela.jpg"
          alt="Noah Abela - Kicker/Punter, Class of 2026"
          className="w-full h-full object-cover object-top min-h-[55vh] md:min-h-[65vh]"
        />
      </div>

      {/* Content */}
      <div className="bg-charcoal py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Noah Abela
          </h1>

          {/* Subtitle */}
          <p className="text-white/50 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-12">
            Kicker&nbsp;·&nbsp;Punter&nbsp;·&nbsp;Class of 2026&nbsp;·&nbsp;Pearland, TX
          </p>

          {/* Stat pills — always 3 in a row */}
          <div className="flex flex-row justify-center gap-3 sm:gap-6 mb-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 max-w-[140px] sm:max-w-[180px] border border-charcoal-light px-3 sm:px-6 py-5"
              >
                <div className="text-gold text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                  {s.value}
                </div>
                <div className="text-muted text-[10px] sm:text-xs uppercase tracking-widest mt-1 font-medium leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Ranking badges */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
            {rankings.map((r) => (
              <div
                key={r.position}
                className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-2 bg-charcoal-mid border border-charcoal-light px-5 py-3"
              >
                <span className="text-gold font-bold text-lg leading-none">{r.rank}</span>
                <span className="text-white text-sm font-medium">{r.position}</span>
                <span className="text-muted text-xs">— {r.org}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#film"
            className="inline-block bg-gold text-white font-bold text-sm uppercase tracking-widest px-10 py-4 hover:bg-gold-hover transition-colors"
          >
            Watch Film ↓
          </a>
        </div>
      </div>
    </section>
  );
}
