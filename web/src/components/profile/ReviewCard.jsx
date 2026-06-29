function ReviewCard({ review }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:border-green-400/40">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 text-yellow-400">★★★★★</div>

          <h3 className="text-xl font-black text-white">{review.name}</h3>

          <p className="mt-1 text-sm font-semibold text-green-300">
            📍 {review.city}
          </p>
        </div>

        {review.verified && (
          <span className="rounded-full bg-green-500/20 px-4 py-2 text-xs font-black text-green-300">
            Opinión verificada
          </span>
        )}
      </div>

      <div className="mb-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
        <p className="text-sm font-bold text-slate-400">Servicio realizado</p>
        <p className="mt-1 font-black text-white">{review.service}</p>
        <p className="mt-2 text-sm text-slate-400">{review.date}</p>
      </div>

      <p className="text-base leading-7 text-slate-200">
        “{review.comment}”
      </p>

      <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
        <p className="text-sm font-black text-green-300">
          Respuesta de RR Visión HD
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-200">
          “{review.response}”
        </p>
      </div>
    </article>
  );
}

export default ReviewCard;