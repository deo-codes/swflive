export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/never-say-die-banner.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
          SWF No Love Lost
        </h1>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200">
          SWF Live returns to Port Monmouth for February&apos;s event,
          <span className="font-semibold text-white"> No Love Lost</span> on
          <span className="font-semibold text-white"> Saturday, February 15th</span>.
          <br />
          Doors open at 4:00 PM · Bell time 5:00 PM
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://buytickets.at/swflive/1531832"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-4 text-lg font-semibold uppercase tracking-wide"
          >
            Buy Tickets Now
          </a>
        </div>
      </div>
    </section>
  );
}
