"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MenuData, MenuItem, MenuCategory } from "@/types/menu";
import Image from "next/image";

interface Props {
  menu: MenuData;
}

type CartState = Record<string, { item: MenuItem; qty: number }>;

export default function MenuClient({ menu }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartState>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Build a flat list of categories and items
  const categories = useMemo(() => {
    return menu.groups.flatMap((g) =>
      g.categories.map((c) => ({ group: g, category: c })),
    );
  }, [menu]);

  const allItems = useMemo(() => {
    return categories.flatMap((c) =>
      c.category.items.map((it) => ({
        ...it,
        categoryId: c.category.id,
        categoryName: c.category.name,
      })),
    );
  }, [categories]);

  // refs for scrolling
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const focusedCategory = useRef<string | null>(null);

  useEffect(() => {
    // close search when term cleared
    if (!searchTerm) return;
  }, [searchTerm]);

  function scrollToCategory(categoryId: string) {
    const el = sectionRefs.current[categoryId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setDrawerOpen(false);
    }
  }

  function addToCart(item: MenuItem, qty = 1) {
    setCart((prev) => {
      const existing = prev[item.id];
      const next = { ...prev };
      next[item.id] = { item, qty: (existing ? existing.qty : 0) + qty };
      return next;
    });
  }

  function updateQty(itemId: string, qty: number) {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[itemId];
      } else {
        const entry = next[itemId];
        if (entry) entry.qty = qty;
      }
      return next;
    });
  }

  const cartCount = useMemo(
    () => Object.values(cart).reduce((s, e) => s + e.qty, 0),
    [cart],
  );
  const cartTotal = useMemo(
    () => Object.values(cart).reduce((s, e) => s + e.qty * e.item.price, 0),
    [cart],
  );

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return null;
    const byCategory: Record<string, MenuItem[]> = {};
    for (const it of allItems) {
      if (
        it.name.toLowerCase().includes(term) ||
        (it.nameAr && it.nameAr.toLowerCase().includes(term))
      ) {
        byCategory[it.categoryId] = byCategory[it.categoryId] || [];
        byCategory[it.categoryId].push(it);
      }
    }
    return byCategory;
  }, [searchTerm, allItems]);

  const quickNav = [
    { id: "pizza", label: "Pizza" },
    { id: "smash-burger", label: "Burgers" },
    { id: "snacks", label: "Sides" },
    { id: "soft-drinks", label: "Drinks" },
    { id: "dessert", label: "Desserts" },
  ];

  return (
    <main className="flex min-h-screen items-start justify-center bg-[#B21217] text-white antialiased">
      <div className="relative flex min-h-screen w-full max-w-[980px] flex-col overflow-x-hidden bg-[#CE181E] shadow-2xl">
        {/* Header */}
        <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-[#CE181E] px-6 pb-2 pt-3">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                <line x1="3" y1="12" x2="16" y2="12" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
              </svg>
            </button>
            <div className="flex flex-col text-center">
              <img
                src="/images/logo.w.r.png"
                alt="Hotspot"
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <line
                  x1="16.5"
                  y1="16.5"
                  x2="21.5"
                  y2="21.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              aria-label="Open cart"
              onClick={() => setDrawerOpen(true)}
              className="relative text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
                aria-hidden="true"
              >
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                  stroke="#fff"
                  strokeWidth="1.2"
                  fill="none"
                />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#CE181E]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Category quick nav */}
        <nav className="px-4 py-3">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {quickNav.map((q) => (
              <button
                key={q.id}
                onClick={() => scrollToCategory(q.id)}
                className="flex h-14 min-w-[74px] shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-[#B21217] text-white px-3 text-sm font-semibold"
              >
                {q.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content */}
        <div className="px-4 pb-6">
          {categories.map(({ group, category }) => (
            <section
              key={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              id={category.id}
              className="mb-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-extrabold tracking-tight text-white">
                  {category.name}
                </h3>
                <button className="text-xs font-bold text-white/90">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {category.items.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-xl border border-white/20 bg-[#B21217] p-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-16 w-16 shrink-0 rounded-md bg-white/10 flex items-center justify-center text-sm font-black">
                        {item.name
                          .split(" ")
                          .slice(0, 2)
                          .map((p) => p[0]?.toUpperCase() ?? "")
                          .join("")}
                      </div>

                      <div className="flex flex-1 flex-col">
                        <h4 className="text-sm font-bold leading-tight">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-[13px] text-white/80">
                          EGP {item.price}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQty(
                                item.id,
                                Math.max((cart[item.id]?.qty || 0) - 1, 0),
                              )
                            }
                            className="h-8 w-8 rounded-md bg-white/10"
                            aria-label={`Decrease ${item.name}`}
                          >
                            -
                          </button>
                          <div className="min-w-[36px] text-center">
                            {cart[item.id]?.qty ?? 0}
                          </div>
                          <button
                            onClick={() => addToCart(item, 1)}
                            className="ml-auto rounded-md bg-white px-3 py-1 text-[#CE181E] font-bold"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="mt-auto bg-white px-6 pb-6 pt-5 text-[#CE181E]"
          style={{
            borderTopLeftRadius: "50% 18px",
            borderTopRightRadius: "50% 18px",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="mb-3 flex -mt-1 flex-col items-center justify-center">
              <span className="text-xs font-medium italic text-[#CE181E]/80">
                Life is better with
              </span>
              <div className="-mt-1 flex items-baseline gap-1.5">
                <span
                  className="text-3xl font-bold italic text-[#CE181E]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Hotspot
                </span>
              </div>
            </div>

            <div className="flex w-full items-center justify-between border-t border-[#CE181E]/20 pt-1 text-xs">
              <div className="flex items-center gap-3.5 text-[#CE181E]">
                <a aria-label="Instagram" href="#" className="hover:opacity-80">
                  IG
                </a>
                <a aria-label="Facebook" href="#" className="hover:opacity-80">
                  FB
                </a>
                <a aria-label="TikTok" href="#" className="hover:opacity-80">
                  TT
                </a>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-medium text-[#CE181E]">
                <span className="tracking-wide">Hotspot</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Search overlay */}
        {searchOpen && (
          <div className="fixed inset-0 z-60 flex items-start justify-center bg-black/60 p-4">
            <div className="w-full max-w-[680px] rounded-lg bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <input
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-md border border-white/20 bg-transparent p-2 text-white outline-none"
                  placeholder="Search menu..."
                />
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSearchOpen(false);
                  }}
                  className="text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 max-h-[60vh] overflow-auto">
                {filtered ? (
                  Object.keys(filtered).length === 0 ? (
                    <div className="text-white/80">No results</div>
                  ) : (
                    Object.entries(filtered).map(([catId, items]) => (
                      <div key={catId} className="mb-4">
                        <h4 className="text-sm font-bold">
                          {
                            categories.find((c) => c.category.id === catId)
                              ?.category.name
                          }
                        </h4>
                        <div className="mt-2 space-y-2">
                          {items.map((it) => (
                            <div
                              key={it.id}
                              className="flex items-center justify-between rounded-md border border-white/10 p-2"
                            >
                              <div>
                                <div className="font-bold">{it.name}</div>
                                <div className="text-sm text-white/80">
                                  EGP {it.price}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => addToCart(it, 1)}
                                  className="rounded-md bg-white px-3 py-1 text-[#CE181E] font-bold"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )
                ) : (
                  <div className="text-white/80">Type to search the menu</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Drawer (hamburger + cart combined) */}
        {drawerOpen && (
          <div className="fixed inset-0 z-70 flex">
            <div className="w-[320px] max-w-[80vw] bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold">Menu</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="text-white/90"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <h5 className="text-sm font-bold text-white/90">
                    Categories
                  </h5>
                  <div className="mt-2 space-y-1">
                    {categories.map((c) => (
                      <button
                        key={c.category.id}
                        onClick={() => scrollToCategory(c.category.id)}
                        className="block text-left w-full rounded-md p-2 text-white/90"
                      >
                        {c.category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-white/90">Cart</h5>
                  <div className="mt-2 space-y-2">
                    {Object.values(cart).length === 0 ? (
                      <div className="text-white/80">Cart is empty</div>
                    ) : (
                      Object.values(cart).map((entry) => (
                        <div
                          key={entry.item.id}
                          className="flex items-center justify-between rounded-md border border-white/10 p-2"
                        >
                          <div>
                            <div className="font-bold">{entry.item.name}</div>
                            <div className="text-sm text-white/80">
                              EGP {entry.item.price}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQty(entry.item.id, entry.qty - 1)
                              }
                              className="h-8 w-8 rounded-md bg-white/10"
                            >
                              -
                            </button>
                            <div className="min-w-[28px] text-center">
                              {entry.qty}
                            </div>
                            <button
                              onClick={() =>
                                updateQty(entry.item.id, entry.qty + 1)
                              }
                              className="h-8 w-8 rounded-md bg-white/10"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="font-bold">Total</div>
                      <div className="font-bold">EGP {cartTotal}</div>
                    </div>

                    <div className="mt-2">
                      <button className="w-full rounded-md bg-white px-3 py-2 text-[#CE181E] font-bold">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1" onClick={() => setDrawerOpen(false)} />
          </div>
        )}
      </div>
    </main>
  );
}
