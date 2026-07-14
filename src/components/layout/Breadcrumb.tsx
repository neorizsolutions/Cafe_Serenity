import Link from 'next/link';
import { getBreadcrumbSchema } from '@/utils/seo';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Insert Home page as first element automatically
  const allItems = [{ name: 'Home', path: '/' }, ...items];
  const schema = getBreadcrumbSchema(allItems);

  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-7xl px-6 py-4">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <ol className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium flex-wrap">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <span className="text-[10px] select-none text-muted-foreground/60">/</span>}
              {isLast ? (
                <span className="text-foreground font-semibold" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-foreground transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
