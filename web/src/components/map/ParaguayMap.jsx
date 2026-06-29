function ParaguayMap() {
  const cities = [
    { name: "Asunción", x: "52%", y: "56%" },
    { name: "Caacupé", x: "58%", y: "60%" },
    { name: "Ciudad del Este", x: "78%", y: "58%" },
    { name: "Encarnación", x: "60%", y: "80%" },
    { name: "Coronel Oviedo", x: "64%", y: "68%" },
    { name: "Concepción", x: "50%", y: "34%" },
  ];

  return (
    <div className="relative h-[620px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-green-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00d95f22,transparent_55%)]" />

      <div className="absolute left-1/2 top-1/2 h-[470px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_50%_50%] border-2 border-green-400/80 bg-green-500/10 shadow-[0_0_90px_#00d95f66]">
        <div className="absolute inset-6 rounded-[42%_58%_50%_50%] border border-green-400/20" />

        {cities.map((city) => (
          <div
            key={city.name}
            className="absolute"
            style={{ left: city.x, top: city.y }}
          >
            <span className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 shadow-[0_0_30px_#00d95f]" />
            <span className="absolute left-4 top-[-10px] whitespace-nowrap text-sm font-black text-white">
              {city.name}
            </span>
          </div>
        ))}

        <div className="absolute left-[52%] top-[56%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-green-400 shadow-[0_0_50px_#00d95f]" />
      </div>

      <div className="absolute right-6 top-8 rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl backdrop-blur">
        <p className="text-xl font-black text-white">⚡ Electricistas</p>
        <p className="text-green-300">Asunción</p>
        <p className="mt-2 text-sm text-slate-300">⭐ 4.9 · Verificado</p>
      </div>

      <div className="absolute left-6 top-60 rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl backdrop-blur">
        <p className="text-xl font-black text-white">📹 Cámaras</p>
        <p className="text-green-300">Caacupé</p>
        <p className="mt-2 text-sm text-slate-300">⭐ 4.9 · Verificado</p>
      </div>

      <div className="absolute bottom-8 right-10 rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl backdrop-blur">
        <p className="text-xl font-black text-white">🔧 Plomeros</p>
        <p className="text-green-300">Cordillera</p>
        <p className="mt-2 text-sm text-slate-300">⭐ 4.8 · Verificado</p>
      </div>
    </div>
  );
}

export default ParaguayMap;