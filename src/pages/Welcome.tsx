import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[80vh]">
      <img
        src="https://images.unsplash.com/photo-1710381571465-717979441b68?q=80&w=2070&auto=format&fit=crop"
        alt="Hero"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/100 px-10 py-4 backdrop-blur-sm">
        <h1 className="text-[#FFD700] text-4xl font-bold">TREVFLIX</h1>

        <div className="flex gap-6 text-[#FFD700] ">
           <button
            className="bg-[#FFD700] text-black font-bold px-7 py-3 rounded"
            onClick={() => navigate("/home")}
          >
            Login in
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
      <div className="absolute bottom-20 left-8 max-w-lg">
        <h1 className="text-white text-5xl font-bold mb-3 leading-tight">
          Unlimited movies & shows
        </h1>
        <p className="text-gray-300 text-base mb-6">
          Watch anywhere. Cancel anytime.
        </p>
        <div className="flex gap-3">
          <button
            className="bg-[#FFD700] text-black font-bold px-7 py-3 rounded"
            onClick={() => navigate("/home")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
