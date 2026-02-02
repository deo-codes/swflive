import Image from 'next/image';

export default function EventCard({ title, date, location, poster, link }) {
  return (
    <div
      className="
        bg-gray-900 border border-gray-800 overflow-hidden
        flex flex-col w-full max-w-[320px]
        transition-transform duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* Poster */}
      <div className="relative h-[420px] w-full overflow-hidden">
        <Image
          src={poster}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out hover:scale-105"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold uppercase tracking-wide">
          {title}
        </h3>

        <p className="mt-2 text-gray-400 text-sm">
          {date}
        </p>

        <p className="text-gray-400 text-sm">
          {location}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block text-center bg-red-600 hover:bg-red-700
              transition-colors duration-300
              px-4 py-3 font-semibold uppercase tracking-wide
            "
          >
            Buy Tickets
          </a>
        </div>
      </div>
    </div>
  );
}
