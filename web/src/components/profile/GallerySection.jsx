import gallery from "../../data/gallery";
import GalleryItem from "./GalleryItem";

function GallerySection() {
  return (
    <section className="bg-[#020817] px-6 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-green-300">
              Trabajos realizados
            </p>

            <h2 className="mt-4 text-4xl font-black">
              La mejor forma de conocer a un profesional es ver su trabajo.
            </h2>
          </div>

          <button className="rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:border-green-400 hover:text-green-300">
            Ver todas las fotografías
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;