function DashboardHeader() {
  return (
    <section className="rounded-[2rem] bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 p-8 text-white shadow-2xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-100">
            Panel Profesional
          </p>

          <h1 className="mt-3 text-4xl font-black">
            ¡Buenos días, Rodrigo! 👋
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-green-50">
            Bienvenido nuevamente a TécnicoPy. ORION analizó tu actividad y
            preparó un resumen para ayudarte a conseguir más clientes.
          </p>
        </div>

        <div className="rounded-3xl bg-white/15 px-8 py-6 backdrop-blur-md">
          <p className="text-sm font-bold text-green-100">
            Índice ORION
          </p>

          <p className="mt-2 text-6xl font-black">
            98
          </p>

          <p className="mt-2 font-semibold text-green-100">
            Nivel de confianza Excelente
          </p>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;