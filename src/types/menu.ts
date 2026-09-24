export type Language = 'en' | 'ar';

export type ThemeMode = 'standard' | 'inverted';

export interface MenuItem {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  image?: string; // placeholder for now, filled in later
  isVisible: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameAr: string;
  order: number;
  isVisible: boolean;
  items: MenuItem[];
}

export interface MenuGroup {
  id: string; // "food" | "drinks" | "dessert"
  name: string;
  nameAr: string;
  order: number;
  categories: MenuCategory[];
}

export interface ContactInfo {
  phone: string;
}

export interface MenuData {
  groups: MenuGroup[];
  contact?: ContactInfo;
}
