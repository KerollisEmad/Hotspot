"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MenuCategory } from "@/types/menu";

export default function SidesRow({
  categories,
}: {
  categories: MenuCategory[];
}) {
  const { language, dir } = useLanguage();

  return (
    <section className="rounded-[2rem] border border-white/15 bg-white/5 p-4">
      <div dir={dir} className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-black uppercase tracking-wide">
          {language === "ar" ? "مميزتنا" : "Featured Picks"}
        </h2>
      </div>

      <div dir={dir} className="grid gap-3 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-[1.5rem] border border-white/15 bg-white/5 p-3"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              <h3 className="text-lg font-bold uppercase">
                {language === "ar" ? category.nameAr : category.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.slice(0, 4).map((item) => (
                <span
                  key={item.id}
                  className="rounded-full border border-white/15 bg-[var(--bg-color)]/80 px-3 py-1 text-xs font-semibold text-[var(--text-color)]"
                >
                  {language === "ar" ? item.nameAr : item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
