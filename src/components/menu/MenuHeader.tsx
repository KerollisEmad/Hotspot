import Image from "next/image";

export default function MenuHeader() {
  return (
    <nav
      className="flex w-full items-center justify-between overflow-hidden px-5 py-1 bg-bg-color text-text-color"
      data-purpose="top-navigation"
    >
      {/* Menu Button */}
      <button
        aria-label="Menu"
        className="text-white focus:outline-none"
        type="button"
      >
        <svg
          className="h-7 w-7 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.3"
          viewBox="0 0 24 24"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="16" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>

      {/* Logo */}
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo.w.r.png"
          alt="Hotspot logo"
          width={420}
          height={420}
          className="h-25 w-25 object-contain sm:h-32 sm:w-42"
          priority
        />
      </div>

      {/* Favorites / Heart Button */}
      <button
        aria-label="Favorites"
        className="text-white focus:outline-none"
        type="button"
      >
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
    </nav>
  );
}
