export default function FavoriteButton({
  label,
  variant = "solid",
}: {
  label: string;
  variant?: "solid" | "outline";
}) {
  // الشكل القديم: بيستخدمه كارد الـ Most Popular
  if (variant === "solid") {
    return (
      <button
        type="button"
        aria-label={label}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ED2527] text-[#FFFFFF] shadow-md transition-transform active:scale-90"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      </button>
    );
  }

  // الشكل الجديد للكروت العادية: قلب فاضي، وعند الـ hover يتملي ويكبر
  return (
    <button
      type="button"
      aria-label={label}
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ED2527]/25 bg-[#FFFFFF] text-[#ED2527] transition-all duration-200 hover:scale-110 hover:border-[#ED2527] hover:bg-[#ED2527] hover:text-[#FFFFFF] hover:shadow-[0_4px_12px_rgba(237,37,39,0.35)] active:scale-90"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] fill-transparent transition-all duration-200 group-hover:scale-110 group-hover:fill-current"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    </button>
  );
}
