"use client";

import { useMemo, useState } from "react";
import { MenuData } from "@/types/menu";
import { DEFAULT_NAV_KEY, NAV_KEY_TO_CATEGORY_ID } from "@/lib/categoryNavMap";
import CategoryNav from "@/components/menu/CategoryNav";
import Items from "@/components/menu/Items";

export default function MenuBody({ menu }: { menu: MenuData }) {
  const [activeNavKey, setActiveNavKey] = useState(DEFAULT_NAV_KEY);

  const activeCategory = useMemo(() => {
    const categoryId = NAV_KEY_TO_CATEGORY_ID[activeNavKey];
    if (!categoryId) return null;

    for (const group of menu.groups) {
      const match = group.categories.find((c) => c.id === categoryId);
      if (match) return match;
    }
    return null;
  }, [menu, activeNavKey]);

  return (
    <>
      <CategoryNav activeKey={activeNavKey} onSelect={setActiveNavKey} />
      <Items category={activeCategory} />
    </>
  );
}
