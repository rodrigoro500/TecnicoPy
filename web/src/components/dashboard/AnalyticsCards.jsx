import rrVisionHDAnalytics from "../../data/analytics/rrVisionHDAnalytics";

function AnalyticsCards() {
  const analytics = [
    rrVisionHDAnalytics.profileViews,
    rrVisionHDAnalytics.requests,
    rrVisionHDAnalytics.orionScore,
    rrVisionHDAnalytics.responseTime,
  ];

  return (
    <section className="mt-10">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-green-500">
        ORION Analytics
      </p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        Crecimiento del perfil
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {analytics.map((item) => (
          <div
            key={item.label}
            className="rounded-[2rem] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <p className="text-sm font-bold text-slate-500">{item.label}</p>

            <div className="mt-5 flex items-end justify-between gap-4">
              <h3 className="text-4xl font-black text-slate-950">
                {item.value}
              </h3>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-black text-green-700">
                {item.change}
              </span>
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnalyticsCards;