// src/components/BlogCard.tsx
import { Clock } from 'lucide-react';
import { Link } from 'react-router';
import type { BlogPost } from '../lib/blog';
import { getCategoryColor, getCategoryLabel } from '../lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryColor = getCategoryColor(post.category);
  const categoryLabel = getCategoryLabel(post.category);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-cultiva-surface rounded-2xl border border-cultiva-green/10 overflow-hidden hover:border-cultiva-green/30 hover:-translate-y-1 transition-all duration-300 block"
    >
      {/* Image */}
      <div className="relative h-[180px] overflow-hidden m-4 rounded-xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cultiva-surface/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 pt-2">
        <span
          className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase mb-3"
          style={{ backgroundColor: `${categoryColor}15`, color: categoryColor }}
        >
          {categoryLabel}
        </span>

        <h3 className="text-lg font-semibold text-cultiva-text mb-2 leading-snug group-hover:text-cultiva-green transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-cultiva-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cultiva-muted">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-mono text-xs">{post.readTime} de lectura</span>
          </div>
          <span className="text-cultiva-muted text-xs font-mono">
            {new Date(post.date).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}