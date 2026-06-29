function OrionTrustCard() {
  const trustItems = [
    "Identidad verificada por TécnicoPy",
    "Excelente reputación con clientes",
    "Responde en menos de 10 minutos",
    "Más de 300 trabajos realizados",
    "Sin reclamos registrados",
    "Perfil 100% completo",
  ];

  return (
    <section className="bg-[#020817] px-6 pb-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-green-500/20 bg-green-500/10 p-8 shadow-2xl shadow-green-500/10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-green-300">
                Informe ORION
              </p>

              <h2 className="mt-4 text-4xl font-black">
                ¿Por qué ORION recomienda este profesional?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                ORION analiza señales de confianza, reputación y comportamiento
                profesional para ayudar al cliente a tomar una mejor decisión.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <div className="mb-6 flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-bold text-slate-400">
                    Índice ORION
                  </p>
                  <p className="text-6xl font-black text-green-400">98</p>
                  <p className="font-black text-white">Excelente</p>
                </div>

                <div className="h-24 w-24 rounded-full border-8 border-green-400 bg-green-500/10 shadow-[0_0_40px_#00d95f55]" />
              </div>

              <div className="mb-6 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full bg-green-400 shadow-[0_0_20px_#00d95f]" />
              </div>

              <div className="grid gap-3">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"
                  >
                    <span className="text-green-400">✔</span>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-green-500 p-5 text-slate-950">
                <p className="font-black">Conclusión de ORION</p>
                <p className="mt-1 font-semibold">
                  Podés contratar con confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrionTrustCard;