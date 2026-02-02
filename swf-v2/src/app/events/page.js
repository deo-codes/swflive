import EventsHero from '@/components/sections/EventsHero';
import EventCard from '@/components/ui/EventCard';
import { events } from '@/data/events';

export default function EventsPage() {
  return (
    <>
      <EventsHero />

      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                poster={event.poster}
                link={event.link}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

