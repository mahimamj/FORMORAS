import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FURNITURE_CATEGORIES } from '@/data/categoriesData';
import CategoryPageClient from './CategoryPageClient';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return FURNITURE_CATEGORIES.map((cat) => ({
    id: cat.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = FURNITURE_CATEGORIES.find((c) => c.id === params.id);
  if (!category) {
    return {
      title: 'Category Not Found | FORMORAS Furniture',
    };
  }

  return {
    title: `${category.title} | FORMORAS B2B Contract Furniture Catalogue`,
    description: `${category.subtitle}. ${category.description} Browse official commercial pricelists, fabric swatches & technical BIFMA blueprints.`,
    keywords: [
      category.title,
      `${category.title} contract seating`,
      'FORMORAS B2B furniture',
      category.badge,
      'commercial furniture manufacturer',
      'architectural furniture supplier',
    ],
    openGraph: {
      title: `${category.title} | FORMORAS Contract Furniture`,
      description: category.description,
      type: 'website',
      url: `https://formoras.com/category/${category.id}`,
    },
    alternates: {
      canonical: `https://formoras.com/category/${category.id}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = FURNITURE_CATEGORIES.find((c) => c.id === params.id);

  if (!category) {
    notFound();
  }

  return <CategoryPageClient category={category} />;
}
