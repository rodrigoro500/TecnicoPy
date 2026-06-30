import rrVisionHDActivity from "../../data/activity/rrVisionHDActivity";

function ActivityTimeline() {
  return (
    <section className="mt-10 rounded-[2rem] bg-white p-8 shadow-lg">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-green-500">
        Actividad reciente
      </p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        🤖 ORION Timeline
      </h2>

      <div className="mt-8 space-y-6">
        {rrVisionHDActivity.map((item) => (
          <div
            key={item.id}
            className="flex gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-green-400 hover:shadow-lg"
          >
            <div className="text-4xl">{item.icon}</div>

            <div>
              <h3 className="text-xl font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.description}
              </p>

              <span className="mt-3 inline-block text-sm font-bold text-green-500">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityTimeline;