interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
     <div className="container-width relative z-10 grid grid-cols-2 items-center gap-10 py-20">

  {/* LEFT — Text */}
  <div>
       <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2">
            <span className="text-sm">✨</span>

            <span className="text-xs font-semibold text-pink-600">
              Build Your Future
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[58px] font-extrabold leading-[1.05] tracking-[-2.8px] text-[#101828] lg:text-[52px] md:text-[45px] sm:text-[38px]">
            Build Your Ideal
            <br />

            <span className="brand-gradient">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[550px] text-[16px] leading-7 text-[#718096] md:text-[15px]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

    <div className="mt-8 flex gap-3">
       <button
              type="button"
              onClick={onExplore}
              className="brand-button group flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Technologies

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>

      <a
              href="#about"
              className="rounded-md border border-[#dfe5ed] bg-white px-7 py-3.5 text-sm font-medium text-[#5d6879] transition-all duration-200 hover:border-[#cbd3df] hover:bg-[#fafbfc] hover:text-[#111827]"
            >
              Learn More
            </a>
    </div>
  </div>

  {/* RIGHT — Your Image */}
  <div className="flex justify-end">
    <img
      src="/assets/banner-stack.png"
      alt="Development technology stack"
      className="w-[470px] max-w-full object-contain"
    />
  </div>

</div>
    </section>
  );
}