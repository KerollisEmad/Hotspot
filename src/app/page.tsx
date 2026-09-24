"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/types/menu";

export default function WelcomePage() {
  const router = useRouter();
  const { setLanguage } = useLanguage();

  const handleSelectLanguage = (lang: Language) => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(25);
    }
    setLanguage(lang);
    router.push("/menu");
  };

  return (
    <main className="relative w-full h-[100dvh] flex flex-col justify-between overflow-hidden select-none px-6 py-4">
      {/* ─── BACKGROUND LAYER 1: White blob ambient glows ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Large top-left blob */}
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-[60%_40%_55%_45%] bg-white opacity-[0.07] blur-3xl" />
        {/* Mid-right blob */}
        <div className="absolute top-[28%] -right-24 w-80 h-72 rounded-[45%_55%_40%_60%] bg-white opacity-[0.06] blur-3xl" />
        {/* Center-left blob */}
        <div className="absolute top-[45%] -left-20 w-64 h-64 rounded-[50%_50%_65%_35%] bg-white opacity-[0.05] blur-2xl" />
        {/* Bottom-center blob */}
        <div className="absolute bottom-16 left-[20%] w-72 h-52 rounded-[55%_45%_40%_60%] bg-white opacity-[0.06] blur-2xl" />
        {/* Small top-right blob */}
        <div className="absolute top-12 right-10 w-36 h-36 rounded-[65%_35%_50%_50%] bg-white opacity-[0.05] blur-xl" />
      </div>

      {/* ─── BACKGROUND LAYER 2: Halftone dot + stripe pattern ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-10"
      >
        <svg
          className="w-full h-full object-cover"
          fill="none"
          viewBox="0 0 400 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#FFFFFF" />
            </pattern>
            <pattern
              id="stripes"
              width="40"
              height="40"
              patternTransform="rotate(45)"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#FFFFFF"
                strokeWidth="4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="35%" fill="url(#dotPattern)" />
          <rect y="35%" width="100%" height="30%" fill="url(#stripes)" />
          <rect y="65%" width="100%" height="35%" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* ─── BACKGROUND LAYER 3: Floating food doodle icons ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]"
      >
        <svg
          className="absolute"
          style={{ top: "8%", left: "5%", width: 44, height: 44 }}
          viewBox="0 0 44 44"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Burger */}
          <rect x="8" y="26" width="28" height="5" rx="2.5" />
          <rect x="10" y="20" width="24" height="6" rx="1" />
          <rect x="10" y="14" width="24" height="6" rx="1" />
          <path d="M8 31 Q22 36 36 31" />
          <path d="M12 13 Q22 8 32 13" />
        </svg>

        <svg
          className="absolute"
          style={{ top: "15%", right: "8%", width: 38, height: 38 }}
          viewBox="0 0 38 38"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Coffee cup */}
          <path d="M8 14 L10 30 Q10 32 12 32 L26 32 Q28 32 28 30 L30 14 Z" />
          <path d="M30 17 Q36 17 36 22 Q36 27 30 27" />
          <path d="M14 10 Q14 6 17 6 Q17 10 20 10 Q20 6 23 6 Q23 10 26 10" />
        </svg>

        <svg
          className="absolute"
          style={{ bottom: "30%", left: "8%", width: 42, height: 42 }}
          viewBox="0 0 42 42"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Pizza slice */}
          <path d="M21 4 L6 36 L36 36 Z" />
          <path d="M14 22 Q21 18 28 22" />
          <circle cx="16" cy="28" r="2" fill="white" opacity="0.5" />
          <circle cx="25" cy="26" r="1.5" fill="white" opacity="0.5" />
          <circle cx="21" cy="32" r="1.5" fill="white" opacity="0.5" />
        </svg>

        <svg
          className="absolute"
          style={{ top: "55%", right: "6%", width: 36, height: 36 }}
          viewBox="0 0 36 36"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Fries */}
          <rect x="6" y="18" width="24" height="14" rx="2" />
          <line x1="12" y1="18" x2="10" y2="6" />
          <line x1="18" y1="18" x2="18" y2="4" />
          <line x1="24" y1="18" x2="26" y2="6" />
        </svg>

        <svg
          className="absolute"
          style={{ bottom: "15%", right: "12%", width: 34, height: 34 }}
          viewBox="0 0 34 34"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Ice cream */}
          <path d="M17 20 L9 30 L25 30 Z" />
          <circle cx="17" cy="13" r="8" />
          <path d="M11 13 Q14 9 17 13 Q20 9 23 13" />
        </svg>
      </div>

      {/* ─── BACKGROUND LAYER 4: Rotating radar ring ─── */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/4 pointer-events-none opacity-10 w-96 h-96 flex items-center justify-center"
      >
        <div
          className="w-96 h-96 rounded-full border-4 border-dashed border-current animate-spin"
          style={{ animationDuration: "40s" }}
        />
      </div>

      {/* ══════════════════════════════════════════════
          TOP BAR: CAFÉ & RESTAURANT
      ══════════════════════════════════════════════ */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center pt-3"
      >
        <span
          style={{ fontFamily: "var(--font-display)" }}
          className="text-lg uppercase tracking-[0.35em] font-medium opacity-95 text-center drop-shadow-sm"
        >
          CAFÉ & RESTAURANT
        </span>

        {/* Creative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-3 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-current opacity-40" />

          <span className="relative flex items-center justify-center">
            <span className="absolute h-5 w-5 rounded-full border border-current opacity-20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-current opacity-80" />
          </span>

          <span className="h-px w-12 bg-current opacity-40" />
        </motion.div>
      </motion.header>

      {/* ══════════════════════════════════════════════
          CENTER CORE: Logo + Curved HOTSPOT
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 flex flex-col items-center justify-center my-auto w-full text-center">
        {/* Concentric Pulsing Halo + Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-1"
        >
          <div
            className="absolute w-60 h-60 rounded-full border-2 border-current opacity-25 animate-ping"
            style={{
              animationDuration: "3s",
              animationIterationCount: "infinite",
            }}
          />
          <div className="absolute w-68 h-68 rounded-full border border-current opacity-20 animate-pulse" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <img
              src="/images/logo.w.r.PNG"
              alt="Hotspot"
              className="h-auto  object-contain w-64"
            />
          </motion.div>
        </motion.div>

        {/* ─── Equalizer accent ─── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-hidden="true"
          className="flex items-center gap-1 my-2 py-1"
        >
          <span
            className="w-1 h-3 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          />
          <span
            className="w-1 h-5 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
          <span
            className="w-1 h-7 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="w-1 h-4 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
          <span className="w-1.5 h-1.5 bg-current rounded-full mx-1" />
          <span
            className="w-1 h-4 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
          <span
            className="w-1 h-7 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          />
          <span
            className="w-1 h-5 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.25s" }}
          />
          <span
            className="w-1 h-3 bg-current rounded-full animate-bounce"
            style={{ animationDelay: "0.45s" }}
          />
        </motion.div>

        {/* ─── Slogan ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 border-y border-dashed border-current/60 py-1.5 px-3 max-w-[320px]"
        >
          <svg
            className="w-3.5 h-3.5 opacity-80 shrink-0 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <p className="text-[14px] font-black uppercase tracking-[0.25em] leading-tight select-none">
            TASTE CONNECTED SUCCESSFULLY
          </p>
          <svg
            className="w-3.5 h-3.5 opacity-80 shrink-0 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM: MENU + Language Buttons
      ══════════════════════════════════════════════ */}
      <footer className="relative z-10 w-full flex flex-col items-center gap-3 pb-2">
        {/* MENU divider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full flex items-center justify-center gap-2 px-2"
        >
          <div className="h-0.5 flex-1 bg-current opacity-30" />
          <h2
            role="button"
            tabIndex={0}
            onClick={() => handleSelectLanguage("en")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleSelectLanguage("en");
              }
            }}
            aria-label="Open the menu in English"
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-black uppercase tracking-[0.2em] text-center px-4 whitespace-nowrap leading-none select-none drop-shadow-md cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            MENU
          </h2>
          <div className="h-0.5 flex-1 bg-current opacity-30" />
        </motion.div>

        {/* Dual Language Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full flex flex-col gap-2.5"
        >
          {/* ENGLISH */}
          <button
            id="btn-lang-en"
            type="button"
            onClick={() => handleSelectLanguage("en")}
            aria-label="Continue in English"
            className="w-full h-14 bg-[#FFFFFF] text-[#ED2527] rounded-xl flex items-center justify-between px-6 transition-all active:scale-[0.97] focus:outline-none shadow-lg group cursor-pointer"
          >
            <span className="text-xl tracking-wider leading-none font-bold">
              ENGLISH
            </span>
            <div className="w-9 h-9 rounded-full bg-[#ED2527] text-[#FFFFFF] flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>

          {/* ARABIC */}
          <button
            id="btn-lang-ar"
            type="button"
            onClick={() => handleSelectLanguage("ar")}
            aria-label="المتابعة باللغة العربية"
            style={{
              boxShadow: "inset 0 0 0 2px #FFFFFF",
              fontFamily: "var(--font-arabic)",
            }}
            className="w-full h-14 bg-[#ED2527] text-[#FFFFFF] rounded-xl flex items-center justify-between px-6 transition-all active:scale-[0.97] focus:outline-none shadow-lg group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#FFFFFF] text-[#ED2527] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <span className="text-2xl tracking-wide leading-none font-bold">
              العربية
            </span>
          </button>
        </motion.div>
      </footer>
    </main>
  );
}
