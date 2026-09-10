export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  price: string;
  image: string;
  tag?: 'Popular' | 'Chef Special' | 'New' | 'Bestseller' | 'Healthy';
  isVeg?: boolean;
}

export type MenuCategoryId =
  | 'all'
  | 'breakfast'
  | 'starters'
  | 'burgers'
  | 'sandwiches'
  | 'pizza'
  | 'pasta'
  | 'main-course'
  | 'tea-coffee'
  | 'cold-drinks'
  | 'desserts';

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  iconName: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
