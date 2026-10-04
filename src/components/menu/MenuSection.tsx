"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MenuCategory } from "@/types/menu";
import MenuCard from "./MenuCard";

export default function MenuSection({ category }: { category: MenuCategory }) {
  const { language, dir } = useLanguage();

  return (
    <section
      id={category.id}
      className="scroll-mt-24 rounded-[2rem]  bg-[var(--bg-color)] text-[var(--text-color)] border border-white/15 bg-white/5 p-4"
    >
      <div dir={dir} className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-70">
            {language === "ar" ? "قسم" : "Category"}
          </p>
          <h2 className="text-2xl font-black uppercase tracking-wide">
            {language === "ar" ? category.nameAr : category.name}
          </h2>
        </div>

        <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-bold uppercase">
          {category.items.length}
        </span>
      </div>

      <div dir={dir} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
