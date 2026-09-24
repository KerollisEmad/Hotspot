"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MenuItem } from "@/types/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  const { language, dir } = useLanguage();
  const itemName = language === "ar" ? item.nameAr : item.name;
  const formattedPrice = new Intl.NumberFormat(
    language === "ar" ? "ar-EG" : "en-US",
  ).format(item.price);

  return (
    <article className="rounded-[1.5rem] border border-white/20 bg-white/5 p-3 shadow-md transition hover:bg-white/10">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lg font-black uppercase text-white/90">
          {itemName.slice(0, 2)}
        </div>

        <button
          type="button"
          aria-label={
            language === "ar" ? `إضافة ${itemName}` : `Add ${itemName}`
          }
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold text-[var(--bg-color)]"
        >
          +
        </button>
      </div>

      <div dir={dir} className="space-y-1">
        <h3 className="text-base font-bold leading-snug">{itemName}</h3>
        <p className="text-sm font-medium opacity-80">
          {language === "ar"
            ? `${formattedPrice} ج.م`
            : `EGP ${formattedPrice}`}
        </p>
      </div>
    </article>
  );
}
