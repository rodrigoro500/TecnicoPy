function GalleryItem({ item }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-green-400/40">
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-green-500 px-4 py-2 text-xs font-black text-white shadow-lg shadow-green-500/30">
          Trabajo verificado
        </span>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-2 text-sm font-semibold text-green-300">
            📍 {item.city} · {item.type}
          </p>
        </div>
      </div>
    </article>
  );
}

export default GalleryItem;