function OrionAssistant() {
  return (
    <section className="bg-[#020817] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-green-500/10 backdrop-blur lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-[0_0_60px_#00d95f]">
              <span className="text-4xl">◉</span>
            </div>

            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-green-300">
              Asistente inteligente
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Preguntale a{" "}
              <span className="text-green-400">ORION</span>
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-slate-300">
              ORION te ayuda a encontrar el profesional ideal según tu necesidad,
              ciudad, reputación y tiempo de respuesta.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-black shadow-[0_0_30px_#00d95f]">
                O
              </div>
              <div>
                <h3 className="text-xl font-black">ORION</h3>
                <p className="text-sm text-green-300">
                  En línea · listo para ayudarte
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="max-w-xl rounded-3xl bg-white/10 p-5 text-slate-200">
                Hola, soy ORION. ¿Qué necesitás resolver hoy?
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <button className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-bold transition hover:border-green-400 hover:bg-green-400/10">
                  📹 Quiero instalar cámaras
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-bold transition hover:border-green-400 hover:bg-green-400/10">
                  ⚡ Necesito un electricista
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-bold transition hover:border-green-400 hover:bg-green-400/10">
                  🚰 Tengo una pérdida de agua
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-bold transition hover:border-green-400 hover:bg-green-400/10">
                  🔧 Necesito otro servicio
                </button>
              </div>

              <div className="rounded-3xl border border-green-400/20 bg-green-400/10 p-5">
                <p className="font-black text-green-300">
                  Próximamente:
                </p>
                <p className="mt-2 text-slate-300">
                  ORION recomendará profesionales usando reputación, cercanía,
                  ciudad, opiniones verificadas y tiempo de respuesta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrionAssistant;