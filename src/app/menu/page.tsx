import { getVisibleMenu } from "@/lib/getMenu";
import Footer from "@/components/menu/Footer";
import HeroBanner from "@/components/menu/HeroBanner";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuBody from "@/components/menu/MenuBody";
import { EntranceReveal, MenuMotion } from "@/components/menu/MenuMotion";

export default async function MenuPage() {
  const menu = await getVisibleMenu();

  return (
    <MenuMotion>
      <main className="min-h-screen w-full overflow-x-hidden bg-hotspot-white text-text-color">
        <div className="mx-auto w-full max-w-6xl overflow-hidden bg-hotspot-white ">
          {/* Top Red Section with Rounded Bottom */}
          <div
            className="w-full  rounded-b-4xl sm:rounded-b-[2.5rem] 
        shadow-sm overflow-hidden bg-hotspot-red"
          >
            <EntranceReveal>
              <MenuHeader />
            </EntranceReveal>

            <EntranceReveal delay={0.12}>
              <HeroBanner />
            </EntranceReveal>
          </div>
          <MenuBody menu={menu} />
          <EntranceReveal delay={0.12}>
            <Footer />
          </EntranceReveal>
        </div>
      </main>
    </MenuMotion>
  );
}
