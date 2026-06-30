function ContactCard2({ profile }) {
  const whatsappMessage = `Hola ${profile.name}. Encontré su Perfil Certificado en TécnicoPy y necesito un presupuesto. ¿Podrían ayudarme?`;

  const whatsappLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-[#020817] px-6 pb-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-green-500/20 bg-gradient-to-r from-green-500/10 via-white/5 to-white/5 shadow-2xl shadow-green-500/10">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-green-300">
                Contacto directo
              </p>

              <h2 className="mt-4 text-4xl font-black">
                ¿Listo para hablar con {profile.name}?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Solicitá tu presupuesto desde TécnicoPy y contactá con un
                profesional verificado en {profile.city}.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm font-bold text-slate-400">Teléfono</p>
                  <p className="mt-1 text-xl font-black">{profile.phone}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm font-bold text-slate-400">Ubicación</p>
                  <p className="mt-1 text-xl font-black">
                    {profile.city}, Paraguay
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm font-bold text-slate-400">Horario</p>
                  <p className="mt-1 text-xl font-black">{profile.schedule}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm font-bold text-slate-400">Respuesta</p>
                  <p className="mt-1 text-xl font-black">
                    Menos de {profile.responseMinutes} min
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <div className="mb-6 rounded-2xl bg-green-500/10 p-5">
                <p className="font-black text-green-300">
                  ORION preparará el mensaje por vos
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  TécnicoPy inicia la conversación de forma clara y profesional.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-500 px-6 py-4 text-center font-black text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-400"
                >
                  💬 Solicitar presupuesto con ORION
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="rounded-2xl border border-white/20 px-6 py-4 text-center font-black text-white transition hover:border-green-400 hover:text-green-300"
                >
                  📞 Llamar ahora
                </a>

                <button className="rounded-2xl border border-white/20 px-6 py-4 font-black text-white transition hover:border-green-400 hover:text-green-300">
                  🔗 Compartir Perfil Certificado
                </button>
              </div>

              <p className="mt-6 text-center text-sm font-semibold text-slate-400">
                Perfil verificado por TécnicoPy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCard2;