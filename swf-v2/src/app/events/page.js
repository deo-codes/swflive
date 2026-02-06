import EventsHero from '@/components/sections/EventsHero';
import EventCard from '@/components/ui/EventCard';
import { events } from '@/data/events';

export default function EventsPage() {
  // Feature the first event for now
  const featuredEvent = events[0];

  return (
    <>
      {/* HERO */}
      <EventsHero />

      {/* EVENT SPOTLIGHT */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT: EVENT POSTER + CTA */}
            <EventCard
              title={featuredEvent.title}
              date={featuredEvent.date}
              location={featuredEvent.location}
              poster={featuredEvent.poster}
              link={featuredEvent.link}
            />

            {/* RIGHT: EVENT DETAILS */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
                {featuredEvent.title}
              </h2>

              <p className="mt-4 text-gray-400">
                {featuredEvent.date}
              </p>

              <div className="mt-8 space-y-6 text-gray-300">

                <div>
                  <span className="block uppercase text-sm tracking-widest text-gray-500">
                    Venue
                  </span>
                  <p>{featuredEvent.location}</p>
                </div>

                <div>
                  <span className="block uppercase text-sm tracking-widest text-gray-500">
                    Schedule
                  </span>
                  <p>Doors Open: 4:00 PM</p>
                  <p>Bell Time: 5:00 PM</p>
                </div>

                <div>
                  <span className="block uppercase text-sm tracking-widest text-gray-500">
                    Ticket Prices
                  </span>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>General Admission - $30.00</li>
                    <li>First Row - $35.00</li>
                    <li>Second Row - $35.00</li>
                    <li>Family Pack - $110.00</li>
                    <li>Card subject to change</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

