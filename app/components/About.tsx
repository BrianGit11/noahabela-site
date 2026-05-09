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
              src="https://reporternewssports.com/images/650-_dsc4813_dxo_noah%20abela%20lines%20up%20his%20winning%20fg%20in%20the%202nd%20overtime(1).jpg"
              alt="Noah Abela - Dawson Eagles Kicker/Punter, Class of 2026"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-4">
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Noah Abela is a Class of 2026 kicker and punter from Dawson High
              School in Pearland, Texas. A two-way specialist, he has competed
              at Kohl&apos;s Professional Camps since 2022 and trained with
              Chris Sailer Kicking since 2023 — currently ranked #33 nationally
              as a kicker and #4 nationally as a punter in his class.
            </p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Noah came up playing soccer, and the footwork shows. His kickoff
              package features a 67-yard big ball with 3.74 seconds of hang
              time, and his 81.6% touchback rate ranked among the best in the
              state. He hit the game-winning field goal in double overtime
              against Shadow Creek this season — a moment that earned him 2nd
              Team All-State recognition from the Blue Bell/TSWA in Class 6A
              Texas.
            </p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Off the field, Noah carries a 4.5 GPA and is the kind of teammate
              and student every program wants in the room. He is actively
              seeking a college opportunity where he can compete at the highest
              level and contribute both on the field and in the classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
