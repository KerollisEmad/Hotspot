import Image from "next/image";
export default function HeroBanner() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 "
      data-purpose="hero-promotional-banner"
    >
      {" "}
      <div className="relative flex min-h-[160px] items-center justify-between overflow-hidden rounded-2xl border border-white/20 bg-[#B21217] p-4 shadow-sm">
        {" "}
        <div className="absolute inset-0">
          {" "}
          <Image
            src="/images/bg.jfif"
            alt="Hotspot background"
            fill
            className="object-cover opacity-30"
          />{" "}
        </div>{" "}
        <div className="relative z-10 max-w-[55%]">
          {" "}
          <div className="relative inline-block">
            {" "}
            <svg
              className="absolute -top-3 left-10 h-4 w-8 stroke-white"
              fill="none"
              strokeLinecap="round"
              strokeWidth="2"
            >
              {" "}
              <path d="M4 10 L1 2 M8 11 L10 1 M12 11 L16 3" />{" "}
            </svg>{" "}
            <h2 className="text-3xl font-extrabold italic leading-[1.05] tracking-tight text-white">
              {" "}
              Good Food{" "}
            </h2>{" "}
            <h2 className="mt-0.5 text-[34px] font-extrabold italic leading-[1.05] tracking-tight text-white">
              {" "}
              Great Vibes{" "}
            </h2>{" "}
            <svg
              className="mt-0.5 h-2.5 w-28 text-white"
              fill="none"
              viewBox="0 0 120 12"
            >
              {" "}
              <path
                d="M2 7C30 2 80 1 118 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <p className="mt-2 text-[11px] font-medium tracking-wide text-white/80">
            {" "}
            Pizza • Burgers • Drinks • More{" "}
          </p>{" "}
        </div>{" "}
        <div className="relative z-10 ml-auto flex h-full w-[42%] items-center justify-end" />{" "}
      </div>{" "}
    </section>
  );
}
