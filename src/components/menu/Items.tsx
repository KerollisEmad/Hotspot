"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MenuCategory } from "@/types/menu";
import MenuCard from "@/components/menu/MenuCard";

export default function Items({ category }: { category: MenuCategory | null }) {
  const { language, dir } = useLanguage();

  if (!category) {
    return (
      <section className="bg-hotspot-white px-4 py-8 text-center text-hotspot-red">
        {language === "ar"
          ? "لا توجد أصناف في هذا القسم."
          : "No items in this category."}
      </section>
    );
  }

  const title = language === "ar" ? category.nameAr : category.name;

  return (
    <section
      className="bg-hotspot-white px-3 pb-6 pt-2 sm:px-4"
      data-purpose="menu-items"
      aria-labelledby="active-category-title"
    >
      <div dir={dir} className="mb-4 px-0.5 pt-2">
        <div className="flex items-center gap-3">
          {/* شريط أحمر جنب العنوان */}
          <span
            aria-hidden
            className="h-9 w-1.5 shrink-0 rounded-full bg-[#ED2527]"
          />

          <h2
            id="active-category-title"
            className={`relative isolate inline-block text-3xl font-black text-black sm:text-4xl ${
              language === "ar" ? "tracking-normal" : "uppercase tracking-tight"
            }`}
          >
            {/* هايلايت أحمر مائل ورا الكلمة */}
            <span
              aria-hidden
              className="absolute inset-x-[-6px] bottom-0.5 -z-10 h-3 -skew-x-12 rounded-sm bg-[#ED2527]/25 rtl:skew-x-12"
            />
            {title}
          </h2>
        </div>

        {/* خطوط صغيرة تحت العنوان */}
        <div aria-hidden className="mt-2.5 flex items-center gap-1.5">
          <span className="h-1 w-14 rounded-full bg-[#ED2527]" />
          <span className="h-1 w-4 rounded-full bg-[#ED2527]/60" />
          <span className="h-1 w-1.5 rounded-full bg-[#ED2527]/30" />
        </div>
      </div>

      <div dir={dir} className="flex flex-col gap-3">
        {category.items.map((item, index) => (
          <MenuCard key={item.id} item={item} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}
