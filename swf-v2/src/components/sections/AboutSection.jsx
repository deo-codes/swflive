export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            About SWF
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Superstars of Wrestling Live (SWF) is an New Jersey-based independent professional wrestling
            promotion delivering hard-hitting action, compelling stories, and
            unforgettable live events. Built on passion and community, SWF brings
            fans closer to the action with every show.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            From rising stars to seasoned veterans, SWF showcases elite talent
            in an electric atmosphere where anything can happen. Whether you’re
            a lifelong wrestling fan or attending your first live event, SWF
            guarantees an unforgettable experience.
          </p>
        </div>

        {/* VISUAL / CALLOUT */}
        <div className="bg-gray-900 p-8 border border-gray-800">
          <h3 className="text-xl font-semibold uppercase">
            Why Fans Love SWF
          </h3>

          <ul className="mt-6 space-y-4 text-gray-300">
            <li>🔥 High-energy live events</li>
            <li>🤼 Independent wrestling talent</li>
            <li>🎟 Affordable, fan-first shows</li>
            <li>🏟 Intimate venues — no bad seats</li>
            <li>🤝 Meet & greets with wrestlers</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
