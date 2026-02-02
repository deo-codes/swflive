import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedEvents({ events }) {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Poster */}
        <div className="relative w-full max-w-[420px] mx-auto">
          <div className="relative h-[520px] w-full overflow-hidden border border-gray-800">
            <Image
              src={events[0].poster}
              alt={events[0].title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-red-600 font-semibold uppercase tracking-wide">
            Featured Event
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            {events[0].title}
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            {events[0].date} &mdash; {events[0].location}
          </p>

          <p className="mt-6 text-gray-400 max-w-xl">
            Experience SWF live as the action returns with one of our biggest
            events of the year. Don’t miss the atmosphere, the superstars,
            and the unforgettable moments.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href={events[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 transition px-6 py-3 font-semibold uppercase tracking-wide"
            >
              Buy Tickets
            </a>

            <Link
              href="/events"
              className="border border-gray-700 hover:border-red-600 transition px-6 py-3 font-semibold uppercase tracking-wide"
            >
              View All Events
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
