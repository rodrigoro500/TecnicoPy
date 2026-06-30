const stats = [
  {
    title: "Visitas al perfil",
    value: "326",
    change: "+18%",
    icon: "👁️",
    color: "text-blue-500",
  },
  {
    title: "Solicitudes",
    value: "12",
    change: "+4",
    icon: "📬",
    color: "text-green-500",
  },
  {
    title: "Calificación",
    value: "4.9",
    change: "★★★★★",
    icon: "⭐",
    color: "text-yellow-500",
  },
  {
    title: "Trabajos publicados",
    value: "34",
    change: "+3 este mes",
    icon: "📸",
    color: "text-purple-500",
  },
];

function StatsCards() {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-[2rem] bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <span className="text-4xl">{stat.icon}</span>

            <span className={`font-black ${stat.color}`}>
              {stat.change}
            </span>
          </div>

          <h3 className="mt-6 text-4xl font-black text-slate-900">
            {stat.value}
          </h3>

          <p className="mt-2 font-semibold text-slate-500">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default StatsCards;