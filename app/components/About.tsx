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
          <div className="w-full max-w-[280px] mx-auto md:mx-0 aspect-[3/4] overflow-hidden">
            <img
              src="https://reporternewssports.com/images/650-_dsc4813_dxo_noah%20abela%20lines%20up%20his%20winning%20fg%20in%20the%202nd%20overtime(1).jpg"
              alt="Noah Abela - Dawson Eagles Kicker/Punter, Class of 2026"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              I&apos;m a Class of 2026 kicker and punter from Pearland, Texas.
              I&apos;ve been competing at Kohl&apos;s and Chris Sailer camps
              since 2022 and playing soccer my whole life — the footwork
              translates. I hit the game-winner in double OT in a district
              matchup this season. I&apos;m looking for a program where I can
              compete at the highest level and contribute in the classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
