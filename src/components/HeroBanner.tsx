export default function HeroBanner() {
  return (
    <section className="relative h-[80vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt=""
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      <div className="absolute bottom-20 left-10">
        <h1 className="mb-4 text-6xl font-bold">
          Featured Movie
        </h1>

        <button className="rounded bg-white px-8 py-3 font-semibold text-black">
          ▶ Play
        </button>
      </div>
    </section>
  );
}