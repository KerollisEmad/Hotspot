"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MenuItem } from "@/types/menu";
import { MENU_ITEM_PLACEHOLDER } from "@/lib/menuImages";
import FavoriteButton from "@/components/menu/FavoriteButton";

export default function MenuCard({
  item,
  featured = false,
}: {
  item: MenuItem;
  featured?: boolean;
}) {
  const { language, dir } = useLanguage();
  const itemName = language === "ar" ? item.nameAr : item.name;
  // const description = language === "ar" ? item.descriptionAr : item.description;
  const formattedPrice = new Intl.NumberFormat(
    language === "ar" ? "ar-EG" : "en-US",
  ).format(item.price);
  const price =
    language === "ar" ? `${formattedPrice} ج.م` : `EGP ${formattedPrice}`;
  const imageSrc = item.image?.trim() ? item.image : MENU_ITEM_PLACEHOLDER;
  const favLabel = language === "ar" ? "إضافة للمفضلة" : "Add to favorites";

  if (featured) {
    return (
      <article
        dir={dir}
        className="relative min-h-[210px] overflow-hidden rounded-3xl bg-[#000000] shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
      >
        <Image
          src={imageSrc}
          alt={itemName}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent rtl:bg-gradient-to-l"
        />

        <div className="relative z-10 flex min-h-[210px] w-[62%] flex-col justify-between gap-2 p-4">
          <span className="relative flex w-fit items-center gap-1.5 overflow-hidden rounded-full bg-[#ED2527] py-1 ps-1.5 pe-3 text-[11px] font-extrabold uppercase tracking-wide text-[#FFFFFF] shadow-[0_0_18px_rgba(237,37,39,0.65)] ring-1 ring-white/40">
            {/* لمعة بتعدّي على الـ badge */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.4s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent rtl:translate-x-full"
            />

            {/* دايرة بيضا فيها اللهب */}
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF]">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 animate-pulse text-[#ED2527]"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2c.6 3.2-1 4.9-2.6 6.7C7.9 10.4 6.5 12 6.5 14.6A5.5 5.5 0 0 0 12 20.5a5.5 5.5 0 0 0 5.5-5.9c0-2.3-1.2-3.9-2.3-5.1-.3 1.1-.9 1.8-1.7 2.2.5-3.4-.3-6.6-1.5-9.7z" />
              </svg>
            </span>

            <span className="relative">
              {language === "ar" ? "الأكثر طلباً" : "Most Popular"}
            </span>
          </span>

          <div className="flex flex-col gap-1">
            <h3 className="line-clamp-2 text-2xl font-black leading-tight text-[#FFFFFF]">
              {itemName}
            </h3>
            {/* {description && (
              <p className="line-clamp-2 text-xs leading-snug text-[#FFFFFF]/85">
                {description}
              </p>
            )} */}
          </div>

          <div className="flex items-center gap-3">
            <p className="text-lg font-black text-[#ED2527]">{price}</p>
            <FavoriteButton label={favLabel} variant="solid" />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      dir={dir}
      className="flex items-center gap-3 rounded-xl border border-[#ED2527]/15 bg-[#FFFFFF] p-2 shadow-[0_6px_18px_rgba(237,37,39,0.10)] transition-transform duration-200 active:scale-[0.98]"
    >
      <div className="relative aspect-[3/2] w-[40%] shrink-0 overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={itemName}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 46vw, 240px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-black sm:text-base lg:text-lg">
          {itemName}
        </h3>
        {/* {description && (
          <p className="line-clamp-2 text-xs leading-snug text-[#ED2527]/60">
            {description}
          </p>
        )} */}
        <p className="mt-1 text-sm font-black tracking-tight text-[#ED2527]">
          {price}
        </p>
      </div>

      <FavoriteButton label={favLabel} variant="outline" />
    </article>
  );
}
