function OrionInsights() {
  const insights = [
    {
      icon: "📈",
      title: "Tu perfil sigue creciendo",
      text: "Esta semana tu perfil recibió un 18% más de visitas que la semana anterior.",
    },
    {
      icon: "⚡",
      title: "Excelente tiempo de respuesta",
      text: "Responder en menos de 10 minutos aumenta las posibilidades de conseguir nuevos clientes.",
    },
    {
      icon: "📸",
      title: "Consejo de ORION",
      text: "Subí fotografías recientes de tus trabajos. Los perfiles actualizados generan más confianza.",
    },
  ];

  return (
    <section className="mt-10">
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-green-500">
          Inteligencia ORION
        </p>

        <h2 className="mt-3 text-4xl font-black text-slate-900">
          Hoy ORION analizó tu perfil.
        </h2>

        <p className="mt-3 max-w-3xl text-lg text-slate-500">
          Estas recomendaciones están diseñadas para ayudarte a conseguir más
          clientes y mejorar tu reputación dentro de TécnicoPy.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {insights.map((item) => (
          <div
            key={item.title}
            className="rounded-[2rem] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="text-5xl">{item.icon}</div>

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrionInsights;