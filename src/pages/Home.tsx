import Navbar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <section className="px-10 py-8">
        <h2 className="mb-4 text-2xl font-bold">
          Trending Now
        </h2>
      </section>
    </>
  );
}