export interface CollectionMapItem {
  categoryId: string;
  title: string;
  route: string;
}

export const COLLECTION_TO_CATEGORY_MAP: Record<string, CollectionMapItem> = {
  'All': { categoryId: 'prince', title: 'All Furniture Collections', route: '/#categories-catalog' },
  'Living': { categoryId: 'sofa', title: 'Sofa & Modular Series', route: '/category/sofa' },
  'Dining': { categoryId: 'dining', title: 'Dining Series', route: '/category/dining' },
  'Office': { categoryId: 'executive', title: 'Executive Series', route: '/category/executive' },
  'Outdoor': { categoryId: 'cafe', title: 'Cafe & Bistro Series', route: '/category/cafe' },
  'Hospitality': { categoryId: 'lounge', title: 'Lounge & Accent Series', route: '/category/lounge' },
  'Commercial': { categoryId: 'highcounter', title: 'High Counter & Bar Stools', route: '/category/highcounter' },
  'Custom Furniture': { categoryId: 'tables', title: 'Table & Stand Series', route: '/category/tables' },
};

export function normalizeCategoryId(id: string): string {
  const map: Record<string, string> = {
    'new-arrivals': 'prince',
    'deal-zone': 'prince',
    'living': 'sofa',
    'dining': 'dining',
    'office': 'executive',
    'outdoor': 'cafe',
    'hospitality': 'lounge',
    'commercial': 'highcounter',
    'custom-furniture': 'tables',
    'custom furniture': 'tables',
    'storage': 'sofa',
    'stands': 'dining',
    'bifma': 'prince',
    'exclusive': 'prince',
  };
  const key = id.toLowerCase().trim();
  return map[key] || map[id] || id;
}
