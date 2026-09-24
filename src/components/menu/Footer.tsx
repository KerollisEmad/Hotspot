"use client";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <path d="M14.5 8.5V6.8c0-.8.5-1.3 1.3-1.3h1.2V2.5h-2.2c-2.3 0-3.8 1.6-3.8 3.8v2.2H8.5V12h2.5v9.5h3.5V12h2.4l.6-3.5h-3Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <path d="M14.5 3v10.3a3.7 3.7 0 1 1-3.7-3.7" />
        <path d="M14.5 5.5c.5 2 1.8 3.3 4 3.6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white">
      <style>{`
        @keyframes hs-draw {
          from { stroke-dashoffset: 320; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes hs-heart {
          0%, 100% {
            transform: scale(1) rotate(-6deg);
          }

          50% {
            transform: scale(1.15) rotate(-6deg);
          }
        }

        @keyframes hs-fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hs-pin {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        .hs-underline {
          stroke-dasharray: 320;
          animation: hs-draw 1.4s ease-out 0.4s both;
        }

        .hs-heart {
          animation: hs-heart 1.6s ease-in-out infinite;
          transform-origin: center;
        }

        .hs-fade-up {
          opacity: 0;
          animation: hs-fade-up 0.7s ease-out forwards;
        }

        .hs-pin {
          animation: hs-pin 2s ease-in-out infinite;
        }

        .hs-social {
          transition:
            transform 0.25s ease,
            opacity 0.25s ease,
            color 0.25s ease;
        }

        .hs-social:hover {
          transform: translateY(-4px) scale(1.12);
          opacity: 1 !important;
          color: white;
        }
      `}</style>

      {/* Wavy top edge */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-[45px] w-full sm:h-[70px]"
        >
          <path
            d="M0,50 C180,10 360,80 540,60 C720,40 900,5 1100,35 C1260,58 1360,45 1440,40 L1440,0 L0,0 Z"
            fill="#B21217"
            transform="rotate(180 720 45)"
          />
        </svg>
      </div>

      {/* Red body */}
      <div className="relative bg-[#B21217] px-5 pb-8 pt-5 sm:px-10 sm:pb-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Slogan */}
          <div className="hs-fade-up text-center sm:text-left">
            <p
              className="text-xl italic text-white/90 sm:text-2xl"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Life is better with
            </p>

            <div className="mt-1 flex items-start justify-center gap-1.5 sm:justify-start">
              <h2
                className="text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Hotspot
              </h2>

              {/* Beating heart */}
              <svg
                viewBox="0 0 24 24"
                className="hs-heart mt-1 h-5 w-5 text-white sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20.5C7 16.5 3.5 13.2 3.5 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 2.5c0 3.7-3.5 7-8.5 11Z" />
              </svg>
            </div>

            {/* Hand-drawn underline */}
            <svg
              viewBox="0 0 220 14"
              className="mt-1 h-3.5 w-48 text-white sm:w-56"
              fill="none"
            >
              <path
                d="M4 9 C60 2 150 1 216 7"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="hs-underline"
              />
            </svg>
          </div>

          {/* Socials + location */}
          <div
            className="hs-fade-up flex flex-col items-center gap-4 sm:items-end"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="flex items-center gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="hs-social text-white/80"
                >
                  {s.icon}
                </a>
              ))}

              {/* Location */}
              <a
                href="https://maps.google.com/?q=Hotspot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hotspot location"
                className="hs-social flex items-center gap-1.5 text-white/80"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="hs-pin h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
                  <circle cx="12" cy="10.8" r="2.2" />
                </svg>

                <span className="text-sm font-bold tracking-tight">
                  Hotspot
                </span>
              </a>
            </div>

            <p className="text-[11px] font-medium tracking-wide text-white/60">
              © {new Date().getFullYear()} Hotspot — All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
