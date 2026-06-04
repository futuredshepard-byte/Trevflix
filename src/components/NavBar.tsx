export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/80 px-10 py-4 backdrop-blur-sm">
      <h1 className="text-3xl font-bold text-red-600">
        TREVFLIX
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/search">Search</a>
      </div>
    </nav>
  );
}