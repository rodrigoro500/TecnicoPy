function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 shadow-lg shadow-green-500/30">
            <span className="text-2xl text-white">🔧</span>
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              Técnico<span className="text-green-400">Py</span>
            </h1>
            <p className="text-xs font-medium text-slate-400">
              Profesionales de confianza
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-200 lg:flex">
          <a className="text-green-400" href="#">Inicio</a>
          <a className="transition hover:text-green-400" href="#">Categorías</a>
          <a className="transition hover:text-green-400" href="#">Profesionales</a>
          <a className="transition hover:text-green-400" href="#">Empresas</a>
          <a className="transition hover:text-green-400" href="#">Cómo funciona</a>
          <a className="transition hover:text-green-400" href="#">Nosotros</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-slate-950">
            Ingresar
          </button>

          <button className="rounded-2xl bg-green-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-400">
            Registrarse
          </button>
        </div>

        <button className="rounded-xl border border-white/20 px-4 py-2 text-white lg:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;