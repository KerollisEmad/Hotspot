"use client";

import { ReactNode, useState } from "react";

type Category = {
  key: string;
  label: string;
  icon: ReactNode;
};

type CategoryGridProps = {
  onSelect?: (key: string) => void;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const CATEGORIES: Category[] = [
  {
    key: "burgers",
    label: "Burgers",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M4 10a8 8 0 0 1 16 0v1H4v-1Z" />
        <path d="M3 14c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" />
        <path d="M5 17.5h14a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3Z" />
        <path d="M9 6.5h.01M13 5.5h.01M15.5 7.5h.01" />
      </svg>
    ),
  },
  {
    key: "pizza",
    label: "Pizza",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M12 3 4.5 19.5a1 1 0 0 0 1.3 1.3L22 13 12 3Z" />
        <circle cx="10" cy="12" r="1.2" />
        <circle cx="13.5" cy="13.5" r="1.2" />
        <circle cx="12" cy="9.5" r="1.2" />
      </svg>
    ),
  },
  {
    key: "chicken",
    label: "Chicken",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M15.5 3.5a6 6 0 0 0-6.3 9.4l-5 5a2.1 2.1 0 1 0 3 3l5-5a6 6 0 0 0 9.4-6.3l-3.2 3.2-2.6-.7-.7-2.6 3.2-3.2a6 6 0 0 0-2.8.2Z" />
      </svg>
    ),
  },
  {
    key: "wraps",
    label: "Wraps",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M4 15c0-5 4-9 9-9 4 0 7 2 7 5 0 4-4 7-9 7-4 0-7-1-7-3Z" />
        <path d="M7 14c2-1 4-3.5 5-6" />
        <path d="M11 16c2-1.5 4-4 4.5-6.5" />
      </svg>
    ),
  },
  {
    key: "pasta",
    label: "Pasta",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M4 12h16a8 8 0 0 1-16 0Z" />
        <path d="M7 12c0-2 .5-3.5 1.5-4.5M11 12c0-2.5.5-4 1.5-5M15 12c0-2 .5-3.5 1.5-4.5" />
        <path d="M9 4.5c0 1-1 1-1 2M13 3.5c0 1-1 1-1 2" />
      </svg>
    ),
  },
  {
    key: "salads",
    label: "Salads",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M4 13h16a8 8 0 0 1-16 0Z" />
        <path d="M7 13c0-4 2.5-7 5-7s5 3 5 7" />
        <path d="M12 6V3.5" />
        <path d="M8.5 7.5 7 5.5M15.5 7.5 17 5.5" />
      </svg>
    ),
  },
  {
    key: "hot",
    label: "Hot",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M5 10h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6Z" />
        <path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16" />
        <path d="M8.5 7c0-1.2 1-1.3 1-2.5M12 7c0-1.2.5-1.3.5-2.5" />
      </svg>
    ),
  },
  {
    key: "iced",
    label: "Iced",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M7 8h9l-1 12a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2L7 8Z" />
        <path d="M6 8h11" />
        <path d="M14.5 8l2.5-5" />
        <path d="M9.5 12.5l1 3M13 12.5l-1 3" />
      </svg>
    ),
  },
  {
    key: "fresh",
    label: "Fresh",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M8 9h7l-1 11a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2L8 9Z" />
        <path d="M7 9h9" />
        <path d="M13 9l2-6" />
        <path d="M15.5 3.5a2 2 0 0 1 2.5 2" />
        <circle cx="11" cy="14" r="1" />
      </svg>
    ),
  },
  {
    key: "soft",
    label: "Soft",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M9 3h5l1 2v13a2.5 2.5 0 0 1-2.5 2.5h-2A2.5 2.5 0 0 1 8 18V5l1-2Z" />
        <path d="M8 7.5h7" />
        <path d="M11 11c1.5 1 1.5 2.5 0 3.5" />
      </svg>
    ),
  },
  {
    key: "mojitos",
    label: "Mojitos",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M6 4h12l-6 8-6-8Z" />
        <path d="M12 12v7" />
        <path d="M8 21h8" />
        <path d="M8.5 6.5h7" />
        <path d="M12 2v2" />
        <path d="M9 2.5c1.5 1 4.5 1 6 0" />
      </svg>
    ),
  },
  {
    key: "smoothies",
    label: "Smoothies",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M8 8h8l-1 11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2L8 8Z" />
        <path d="M7 8h10" />
        <path d="M7.5 8a4.5 4.5 0 0 1 9 0" />
        <path d="M14.5 2.5 16 5" />
      </svg>
    ),
  },
  {
    key: "dessert",
    label: "Dessert",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <circle cx="12" cy="13" r="7" />
        <path d="M6.5 10.5c2 1.5 9 1.5 11 0" />
        <path d="M9 6.5 8 4M13 6l.5-2.5" />
        <circle cx="10" cy="13" r="0.8" />
        <circle cx="14" cy="14.5" r="0.8" />
      </svg>
    ),
  },
  {
    key: "snacks",
    label: "Snacks",
    icon: (
      <svg {...iconProps} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <path d="M7 10h10l-1 9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2l-1-9Z" />
        <path d="M6.5 10c0-1 .8-1.5 1.5-1.5M9 8.5C9 7.5 9.8 7 10.5 7M12 8V6" />
        <path d="M9 13.5v4M12 13.5v4M15 13.5v4" />
      </svg>
    ),
  },
];

export default function CategoryGrid({ onSelect }: CategoryGridProps) {
  const [active, setActive] = useState<string>("burgers");

  const handleClick = (key: string) => {
    setActive(key);
    onSelect?.(key);
  };

  return (
    <section
      className="w-full px-3 py-3 sm:px-4 bg-white"
      data-purpose="category-grid"
    >
      <div className="grid grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.key;

          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => handleClick(cat.key)}
              aria-pressed={isActive}
              className={
                "group flex h-15 w-15 flex-col items-center justify-center gap-2 rounded-xl border transition-all duration-200 active:scale-95 " +
                (isActive
                  ? " bg-[#B21217] text-white shadow-sm"
                  : "border-0 bg-[#ebebeb49] text-black hover:border-[#B21217] hover:bg-[#B21217] hover:text-white")
              }
            >
              <span
                className={
                  "flex items-center justify-center transition-transform duration-200 group-hover:scale-105 " +
                  (isActive
                    ? "text-white"
                    : "text-black group-hover:text-white")
                }
              >
                {cat.icon}
              </span>

              <span
                className={
                  "text-[9px] font-bold tracking-tight transition-colors duration-200 sm:text-[11px] lg:text-xs " +
                  (isActive
                    ? "text-white"
                    : "text-black group-hover:text-white")
                }
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
