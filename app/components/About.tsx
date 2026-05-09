export default function About() {
  return (
    <section id="about" className="bg-charcoal-mid py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          About Noah
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Photo */}
          <div className="w-full max-w-[280px] mx-auto md:mx-0 h-[450px] overflow-hidden">
            <img
              src="/media/Noah in Action-23.jpeg"
              alt="Noah Abela - Dawson Eagles Kicker/Punter, Class of 2026"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-4">
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Noah Abela is a Class of 2026 kicker and punter from Dawson High
              School in Pearland, Texas — one of the most competitive football
              environments in the country. A dual-sport athlete with a soccer
              background, Noah brings natural ball-striking mechanics and elite
              footwork to his specialist work.
            </p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              He has competed at Kohl&apos;s and Chris Sailer camps since 2022,
              earning a #4 national punter ranking and #33 national kicker
              ranking in his class. In 2025, he delivered when it mattered —
              drilling the game-winning field goal in double overtime against
              No. 23 Shadow Creek in a district showdown.
            </p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              His range was on full display when a 57-yard field goal attempt
              was iced at the half — the snap went, the kick split the uprights,
              and the opposing coach&apos;s timeout was the only thing that kept
              it off the scoreboard.
            </p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Off the field, Noah carries a 4.5 GPA and a 1270 SAT. He is
              built for programs that demand production on Saturdays and
              excellence in the classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
