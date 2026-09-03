export function normalizeCategoryId(id: string): string {
  const map: Record<string, string> = {
    'new-arrivals': 'prince',
    'deal-zone': 'prince',
    'storage': 'sofa',
    'stands': 'dining',
    'bifma': 'prince',
    'exclusive': 'prince',
  };
  return map[id] || id;
}
