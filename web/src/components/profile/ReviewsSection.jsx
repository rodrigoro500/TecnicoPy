import reviews from "../../data/reviews";
import ReviewCard from "./ReviewCard";

function ReviewsSection() {
  return (
    <section className="bg-[#020817] px-6 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-green-300">
              Opiniones verificadas
            </p>

            <h2 className="mt-4 text-4xl font-black">
              La confianza se construye con experiencias reales.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4">
            <p className="text-4xl font-black text-green-400">4.9/5</p>
            <p className="text-sm font-bold text-slate-300">
              128 opiniones verificadas
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;