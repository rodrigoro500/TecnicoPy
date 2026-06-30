import ORION from "../services/orion";
import OrionInsights from "../components/dashboard/OrionInsights";
import StatsCards from "../components/dashboard/StatsCards";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import rrVisionHD from "../data/profiles/rrVisionHD";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import AnalyticsCards from "../components/dashboard/AnalyticsCards";
import AnalyticsCharts from "../components/dashboard/AnalyticsCharts";
function ProfessionalDashboard() {
  const analysis = ORION.analyze(rrVisionHD);

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader />

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-900">🤖 ORION</h2>

          <p className="mt-4 text-lg text-slate-600">{analysis.welcome}</p>

          <div className="mt-6">
            <h3 className="font-black text-slate-900">Recomendaciones</h3>

            <ul className="mt-4 grid gap-4">
  {analysis.recommendations.map((item) => (
    <li
      key={item.priority}
      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
    >
      <h4 className="text-lg font-black text-slate-900">
        ✅ {item.title}
      </h4>

      <p className="mt-2 text-slate-600">
        {item.description}
      </p>
    </li>
  ))}
</ul>
          </div>
        </div>

        <StatsCards />
        <AnalyticsCards />
        <AnalyticsCharts />
        <OrionInsights />
        <ActivityTimeline />
      </div>
    </main>
  );
}

export default ProfessionalDashboard;