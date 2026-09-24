import { MenuData, MenuGroup } from '@/types/menu';
import { hotspotMenu, hotspotContact } from './menu';

/**
 * Access layer for menu data.
 * Filters out all items and categories where `isVisible === false`.
 * All pages and components must consume menu data exclusively through this function.
 */
export async function getVisibleMenu(): Promise<MenuData> {
  const visibleGroups: MenuGroup[] = hotspotMenu.map((group) => ({
    ...group,
    categories: group.categories
      .filter((category) => category.isVisible)
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => item.isVisible),
      })),
  }));

  return {
    groups: visibleGroups,
    contact: hotspotContact,
  };
}
