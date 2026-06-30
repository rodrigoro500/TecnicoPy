import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import analyticsHistory from "../../data/analytics/analyticsHistory";

function AnalyticsCharts() {
  return (
    <section className="mt-10">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-green-500">
        Gráficos ORION
      </p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        Evolución semanal
      </h2>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-6 shadow-lg">
          <h3 className="mb-6 text-xl font-black text-slate-900">
            Visitas al perfil
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsHistory}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#22c55e"
                  fill="#bbf7d0"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-lg">
          <h3 className="mb-6 text-xl font-black text-slate-900">
            Índice ORION
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsHistory}>
                <XAxis dataKey="day" />
                <YAxis domain={[90, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#16a34a"
                  strokeWidth={4}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsCharts;