function ProfessionalCard({ professional }) {
  return (
    <article className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-start gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-4xl">
          👨‍🔧
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-slate-950">{professional.nombre}</h3>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
              Verificado
            </span>
          </div>

          <p className="mt-1 text-sm font-semibold text-green-600">
            {professional.profesion}
          </p>

          <p className="mt-2 text-sm text-slate-500">{professional.ciudad}</p>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm font-bold text-slate-700">{professional.rating}</span>
            <span className="text-sm text-slate-400">{professional.opiniones} opiniones</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {professional.servicios.map((servicio) => (
  <span
    key={servicio}
    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
  >
    {servicio}
  </span>
))}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
 {professional.descripcion}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-100">
          Ver perfil
        </button>

        <button className="rounded-2xl bg-green-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400">
          WhatsApp
        </button>
      </div>
    </article>
  );
}

export default ProfessionalCard;