import { getVisibleMenu } from '@/lib/getMenu';
import MenuClient from '../../components/MenuClient';

export default async function MenuPage() {
  const menu = await getVisibleMenu();

  return (
    <div>
      {/* Server component fetches menu data and hands it to a client component */}
      <MenuClient menu={menu} />
    </div>
  );
}
