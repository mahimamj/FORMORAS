export function normalizeCategoryId(id: string): string {
  const map: Record<string, string> = {
    'new-arrivals': 'prince',
    'deal-zone': 'executive',
    'storage': 'tables',
    'stands': 'tables',
    'bifma': 'executive',
    'exclusive': 'executive',
  };
  return map[id] || id;
}
