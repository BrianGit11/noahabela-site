const stats = [
  { value: "17/22", label: "Field Goals", sub: "77.3%" },
  { value: "51 yds", label: "FG Long", sub: null },
  { value: "44/44", label: "Extra Points", sub: "100%" },
  { value: "49", label: "Kickoffs", sub: null },
  { value: "40", label: "Touchbacks", sub: "81.6%" },
  { value: "18", label: "Punts", sub: null },
  { value: "38 yds", label: "Punt Average", sub: null },
  { value: "3", label: "Punts Inside the 20", sub: null },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-charcoal py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          2025 Season
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-light border border-charcoal-light mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-charcoal px-6 py-8 text-center"
            >
              <div className="text-white text-2xl md:text-3xl font-bold tabular-nums">
                {s.value}
              </div>
              {s.sub && (
                <div className="text-gold text-sm font-semibold mt-0.5">
                  {s.sub}
                </div>
              )}
              <div className="text-muted text-xs uppercase tracking-widest mt-2 font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-charcoal-light pl-6 text-white/90 italic text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          "Hit the game-winning field goal in double overtime vs. No. 23 Shadow
          Creek — 30-27 final."
        </blockquote>
      </div>
    </section>
  );
}
