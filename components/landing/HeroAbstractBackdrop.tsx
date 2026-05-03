/** Soft abstract mesh — no photo; subtle AU-adjacent teal + sage + cool gray */
export function HeroAbstractBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
      <div className="absolute inset-0 bg-[#f4f6f5]" />
      <div className="absolute -right-[20%] -top-[30%] h-[85%] w-[75%] rounded-full bg-gradient-to-bl from-teal-600/[0.09] via-emerald-500/[0.05] to-transparent blur-3xl" />
      <div className="absolute -bottom-[25%] -left-[15%] h-[75%] w-[65%] rounded-full bg-gradient-to-tr from-slate-500/[0.07] via-cyan-800/[0.04] to-transparent blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,transparent_45%,rgba(248,250,249,0.6)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='1' cy='1' r='0.9' fill='%2394a3b8' fill-opacity='0.35'/%3E%3C/svg%3E")`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
