export default function Film() {
  return (
    <section id="film" className="bg-charcoal-mid py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Watch the Film
        </h2>

        {/* Hudl embed placeholder */}
        <div className="aspect-video bg-charcoal border-2 border-dashed border-charcoal-light flex items-center justify-center mb-8">
          <div className="text-center px-6">
            <div className="text-muted text-sm font-semibold uppercase tracking-widest mb-2">
              Hudl Highlight Reel
            </div>
            <div className="text-muted/60 text-xs mb-4">
              Replace this block with the Hudl iframe embed code
            </div>
            <code className="text-muted/50 text-xs bg-charcoal-light px-3 py-1 rounded">
              {`<iframe src="https://www.hudl.com/embed/video/..." .../>`}
            </code>
          </div>
        </div>

        {/* Hudl profile link */}
        <div className="text-center">
          <a
            href="https://www.hudl.com/profile/18607604/Noah-Abela"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
          >
            View Full Hudl Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
