const youtubeVideos = [
  { id: "y5Ii-Vw6FVU" },
  { id: "z_9JBlzppFs" },
  { id: "oWVzQ41Imoo" },
];

export default function Film() {
  return (
    <section id="film" className="bg-charcoal-mid py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Watch the Film
        </h2>

        {/* Primary Highlight Reel */}
        <div className="border-l-4 border-gold bg-charcoal p-8 md:p-10 mb-8">
          <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-3">
            Primary Highlight Reel
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Noah Abela — 57-Yd FG &amp; Season Highlights
          </h3>
          <div
            className="relative w-full overflow-hidden border border-charcoal-light mb-4"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/hIgmWXu7LkE?rel=0&modestbranding=1"
              title="Noah Abela — 57-Yd FG & Season Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-muted/60 text-xs">
            Field goals, kickoffs, punting — including the 57-yard attempt iced at the half.
          </p>
        </div>

        {/* Hudl CTA */}
        <div className="bg-charcoal border border-charcoal-light p-10 md:p-14 text-center mb-16">
          <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-3">
            Full Highlight Reel
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Noah Abela on Hudl
          </h3>
          <p className="text-muted text-sm leading-relaxed max-w-md mx-auto mb-8">
            Complete game film, field goals, kickoffs, and punting — all cuts
            available on his Hudl profile.
          </p>
          <a
            href="https://www.hudl.com/profile/18607604/Noah-Abela"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-white font-bold text-sm uppercase tracking-widest px-10 py-4 hover:bg-gold-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch on Hudl
          </a>
        </div>

        {/* Camp Highlights */}
        <h3 className="text-white text-xl md:text-2xl font-bold mb-8 text-center">
          Camp Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {youtubeVideos.map((v) => (
            <div
              key={v.id}
              className="relative w-full overflow-hidden border border-charcoal-light"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                title="Noah Abela camp highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </div>

        <p className="text-muted/60 text-xs text-center">
          Camp footage courtesy of Kohl&apos;s Professional Camps
        </p>
      </div>
    </section>
  );
}
