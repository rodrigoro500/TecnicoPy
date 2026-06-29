import ParaguayMap from "./map/ParaguayMap";
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#00d95f22,transparent_35%),radial-gradient(circle_at_20%_20%,#0ea5e922,transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-8 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-5 py-3 text-sm font-black text-green-300">
            🛡️ PROFESIONALES VERIFICADOS
          </div>

          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            Conectamos{" "}
            <span className="block text-green-400">Paraguay</span>
            con profesionales de confianza.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Estamos creando la red paraguaya para encontrar profesionales
            verificados, rápidos y confiables en minutos.
          </p>

          <div className="mt-10 grid max-w-sm gap-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="flex items-center gap-5 border-b border-white/10 p-6">
              <div className="rounded-2xl bg-green-500/20 p-4 text-3xl">👥</div>
              <div>
                <p className="text-4xl font-black">250+</p>
                <p className="text-slate-300">Profesionales verificados</p>
              </div>
            </div>

            <div className="flex items-center gap-5 border-b border-white/10 p-6">
              <div className="rounded-2xl bg-green-500/20 p-4 text-3xl">📍</div>
              <div>
                <p className="text-4xl font-black">18</p>
                <p className="text-slate-300">Ciudades cubiertas</p>
              </div>
            </div>

            <div className="flex items-center gap-5 border-b border-white/10 p-6">
              <div className="rounded-2xl bg-green-500/20 p-4 text-3xl">⭐</div>
              <div>
                <p className="text-4xl font-black">4.9/5</p>
                <p className="text-slate-300">Calificación promedio</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6">
              <div className="rounded-2xl bg-green-500/20 p-4 text-3xl">🛡️</div>
              <div>
                <p className="text-4xl font-black">100%</p>
                <p className="text-slate-300">Perfiles verificados</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
    <ParaguayMap />
        </div>
          <div className="absolute right-0 top-10 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur">
            <p className="text-xl font-black">⚡ Electricistas</p>
            <p className="text-green-300">Pedro Juan Caballero</p>
            <p className="mt-2 text-sm">⭐ 4.9 · Verificado</p>
          </div>

          <div className="absolute left-0 top-64 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur">
            <p className="text-xl font-black">💧 Plomeros</p>
            <p className="text-green-300">Salto del Guairá</p>
            <p className="mt-2 text-sm">⭐ 4.8 · Verificado</p>
          </div>

          <div className="absolute bottom-16 right-8 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur">
            <p className="text-xl font-black">📹 Cámaras</p>
            <p className="text-green-300">Ciudad del Este</p>
            <p className="mt-2 text-sm">⭐ 4.9 · Verificado</p>
          </div>

          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-8 rounded-3xl border border-white/10 bg-white/5 px-8 py-5 text-sm font-bold backdrop-blur">
            <span>🛡️ Perfiles verificados</span>
            <span>💬 Respuesta rápida</span>
            <span>⭐ Opiniones reales</span>
          </div>
        </div>
    </section>
  );
}

export default Hero;