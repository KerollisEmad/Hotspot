import { getVisibleMenu } from "@/lib/getMenu";
import CategoryNav from "@/components/menu/CategoryNav";
import Footer from "@/components/menu/Footer";
import HeroBanner from "@/components/menu/HeroBanner";
import MenuHeader from "@/components/menu/MenuHeader";
import Items from "@/components/menu/Items";

export default async function MenuPage() {
  const menu = await getVisibleMenu();

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="mx-auto max-w-6xl">
        <MenuHeader />
        <HeroBanner />
        <CategoryNav />
        <Items />
        <Footer />
      </div>
    </main>
  );
}
