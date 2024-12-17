import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";


export default function Home() {
  return (
    <>
      <main className="py-8">
        <section className="container">
          <Header />
          <EventList />
        </section>
      </main>
    </>
  );
}
