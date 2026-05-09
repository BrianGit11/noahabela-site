const rankings = [
  {
    rank: "#33",
    position: "Kicker Nationally",
    org: "Kohl's Professional Camps",
    detail: "Class of 2026",
    href: "https://kohlskicking.com",
  },
  {
    rank: "#4",
    position: "Punter Nationally",
    org: "Chris Sailer Kicking",
    detail: "Class of 2026",
    href: "https://chrissailerkicking.com",
  },
];

export default function Rankings() {
  return (
    <section id="rankings" className="bg-charcoal-mid py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          National Rankings
        </h2>

        {/* Ranking cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {rankings.map((r) => (
            <div
              key={r.position}
              className="border border-charcoal-light bg-charcoal p-8 text-center"
            >
              <div className="text-gold text-6xl md:text-7xl font-bold leading-none mb-3">
                {r.rank}
              </div>
              <div className="text-white text-xl font-bold mb-1">
                {r.position}
              </div>
              <div className="text-muted text-sm uppercase tracking-widest mb-6">
                {r.org} · {r.detail}
              </div>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white text-xs uppercase tracking-widest transition-colors"
              >
                View Profile →
              </a>
            </div>
          ))}
        </div>

        {/* Supporting detail */}
        <p className="text-muted text-sm text-center leading-relaxed max-w-2xl mx-auto">
          Kohl&apos;s camp attendee since 2022. Chris Sailer student since 2023.
          Kickoff big ball of{" "}
          <span className="text-white font-semibold">67 yards</span>,{" "}
          <span className="text-white font-semibold">3.74 seconds</span> hang
          time (December 2024).
        </p>
      </div>
    </section>
  );
}
