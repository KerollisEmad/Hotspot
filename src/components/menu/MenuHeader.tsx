import Image from "next/image";
export default function MenuHeader() {
  return (
    <nav
      className="flex w-full items-cente justify-between px-5 py-1  bg-[var(--bg-color)] text-[var(--text-color)]"
      data-purpose="top-navigation"
    >
      {" "}
      <button
        aria-label="Menu"
        className="text-white focus:outline-none"
        type="button"
      >
        {" "}
        <svg
          className="h-7 w-7 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.3"
          viewBox="0 0 24 24"
        >
          {" "}
          <line x1="3" x2="21" y1="6" y2="6" />{" "}
          <line x1="3" x2="16" y1="12" y2="12" />{" "}
          <line x1="3" x2="21" y1="18" y2="18" />{" "}
        </svg>{" "}
      </button>{" "}
      <div className="flex flex-col items-center justify-center">
        {" "}
        <Image
          src="/images/logo.w.r.png"
          alt="Hotspot logo"
          height={42}
          width={42}
          className="h-25 w-50 object-contain"
          priority
        />{" "}
      </div>{" "}
      <button
        aria-label="Search"
        className="text-white focus:outline-none"
        type="button"
      >
        {" "}
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
          viewBox="0 0 24 24"
        >
          {" "}
          <circle cx="11" cy="11" r="7" />{" "}
          <line x1="16.5" x2="21.5" y1="16.5" y2="21.5" />{" "}
        </svg>{" "}
      </button>{" "}
    </nav>
  );
}
