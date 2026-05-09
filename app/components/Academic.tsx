export default function Academic() {
  return (
    <section id="academic" className="bg-charcoal py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          In the Classroom
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          {/* GPA */}
          <div className="text-center border border-charcoal-light px-10 py-8 min-w-[180px]">
            <div className="text-gold text-5xl font-bold mb-2">4.5</div>
            <div className="text-muted text-xs uppercase tracking-widest font-medium">
              GPA
            </div>
          </div>

          {/* SAT/ACT placeholder */}
          <div className="text-center border border-dashed border-charcoal-light px-10 py-8 min-w-[180px]">
            <div className="text-muted text-3xl font-bold mb-2">—</div>
            <div className="text-muted text-xs uppercase tracking-widest font-medium">
              SAT / ACT
            </div>
            <div className="text-muted/50 text-xs mt-1">Coming soon</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted text-sm mb-2">
            Dawson High School · Pearland, TX
          </p>
          <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
            Noah takes the classroom as seriously as the field — built for
            programs that demand both.
          </p>
        </div>
      </div>
    </section>
  );
}
