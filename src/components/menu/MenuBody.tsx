"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MenuData } from "@/types/menu";
import { DEFAULT_NAV_KEY, NAV_KEY_TO_CATEGORY_ID } from "@/lib/categoryNavMap";
import CategoryNav from "@/components/menu/CategoryNav";
import Items from "@/components/menu/Items";
import { EntranceReveal } from "@/components/menu/MenuMotion";

export default function MenuBody({ menu }: { menu: MenuData }) {
  const [activeNavKey, setActiveNavKey] = useState(DEFAULT_NAV_KEY);
  // بيزيد مع كل ضغطة على الناف، عشان النزول يشتغل حتى لو دست على نفس القسم
  const [scrollTick, setScrollTick] = useState(0);
  const itemsRef = useRef<HTMLDivElement>(null);

  const activeCategory = useMemo(() => {
    const categoryId = NAV_KEY_TO_CATEGORY_ID[activeNavKey];
    if (!categoryId) return null;

    for (const group of menu.groups) {
      const match = group.categories.find((c) => c.id === categoryId);
      if (match) return match;
    }
    return null;
  }, [menu, activeNavKey]);

  const handleSelect = (key: string) => {
    setActiveNavKey(key);
    setScrollTick((t) => t + 1);
  };

  // بعد ما الأصناف تتعرض، انزل لها (مش بينزل في أول تحميل للصفحة)
  useEffect(() => {
    if (scrollTick === 0) return;
    itemsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [scrollTick]);

  return (
    <>
      <EntranceReveal delay={0.24}>
        <CategoryNav activeKey={activeNavKey} onSelect={handleSelect} />
      </EntranceReveal>
      <div ref={itemsRef} className="scroll-mt-3">
        <Items category={activeCategory} />
      </div>
    </>
  );
}
