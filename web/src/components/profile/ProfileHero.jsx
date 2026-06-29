function ProfileHero() {
  return (
    <section className="bg-[#020817] text-white">
      {/* Banda superior */}
      <div className="border-b border-green-500/20 bg-green-500/10">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-sm font-semibold text-green-300">
          🛡️ Perfil Certificado TécnicoPy
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">

          {/* Imagen de portada */}
          <div className="h-56 bg-gradient-to-r from-[#0f172a] via-[#0b3b2d] to-[#052e16]" />

          <div className="relative px-8 pb-10">

            {/* Logo */}
            <div className="-mt-16 flex h-32 w-32 items-center justify-center rounded-3xl border-4 border-[#020817] bg-white text-6xl shadow-xl">
              📹
            </div>

            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <span className="rounded-full bg-green-500/20 px-4 py-1 text-sm font-bold text-green-300">
                  ✔ Empresa Verificada
                </span>

                <h1 className="mt-4 text-5xl font-black">
                  RR Visión HD
                </h1>

                <p className="mt-3 text-xl text-green-300">
                  Especialistas en Seguridad Electrónica
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-slate-300">

                  <span>⭐⭐⭐⭐⭐ 4.9 (128 opiniones)</span>

                  <span>📍 Caacupé</span>

                  <span>⚡ Responde en 8 min</span>

                  <span>🏆 Índice ORION 98</span>

                </div>

              </div>

              <div className="flex gap-4">

                <button className="rounded-2xl border border-white/20 px-8 py-4 font-bold transition hover:border-green-400">
                  Compartir Perfil
                </button>

                <button className="rounded-2xl bg-green-500 px-8 py-4 font-bold shadow-lg shadow-green-500/30 transition hover:bg-green-400">
                  Contactar
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProfileHero;