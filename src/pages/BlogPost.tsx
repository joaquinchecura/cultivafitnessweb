// src/pages/BlogPost.tsx
import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Clock, Calendar, ExternalLink, Play, BookOpen } from 'lucide-react';
import { getPostBySlug, getLatestPosts, getCategoryColor, getCategoryLabel } from '../lib/blog';
import { BlogCard } from '../components/BlogCard';
import type { BlogPost } from '../lib/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    
    const foundPost = getPostBySlug(slug);
    
    if (!foundPost) {
      setNotFound(true);
      return;
    }

    setPost(foundPost);
    
    const related = getLatestPosts(10)
      .filter((p) => p.category === foundPost.category && p.slug !== foundPost.slug)
      .slice(0, 3);
    
    if (related.length < 3) {
      const others = getLatestPosts(10)
        .filter((p) => p.slug !== foundPost.slug && !related.find((r) => r.slug === p.slug))
        .slice(0, 3 - related.length);
      setRelatedPosts([...related, ...others]);
    } else {
      setRelatedPosts(related);
    }
  }, [slug]);

  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-cultiva-bg flex items-center justify-center">
        <div className="animate-pulse text-cultiva-muted">Cargando...</div>
      </div>
    );
  }

  const categoryColor = getCategoryColor(post.category);
  const categoryLabel = getCategoryLabel(post.category);

  return (
    <div className="min-h-screen bg-cultiva-bg">
      {/* Header */}
      <div className="bg-cultiva-surface border-b border-cultiva-green/10">
        <div className="max-w-[800px] mx-auto px-6 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cultiva-muted hover:text-cultiva-text text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase"
              style={{ backgroundColor: `${categoryColor}15`, color: categoryColor }}
            >
              {categoryLabel}
            </span>
            <div className="flex items-center gap-2 text-cultiva-muted">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-cultiva-muted">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">{post.readTime} de lectura</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cultiva-text mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-cultiva-secondary text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-[800px] mx-auto px-6 -mt-4">
        <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cultiva-bg/40 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* External Links */}
        <div className="mt-12 pt-8 border-t border-cultiva-green/10">
          <h3 className="text-sm font-mono text-cultiva-muted uppercase tracking-wider mb-4">
            Recursos adicionales
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={post.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-cultiva-surface border border-cultiva-green/10 rounded-xl text-cultiva-text hover:border-cultiva-green/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4 text-cultiva-blue" />
              <span className="text-sm font-medium">Investigación original</span>
              <ExternalLink className="w-3 h-3 text-cultiva-muted" />
            </a>
            
            <a
              href={post.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-cultiva-surface border border-cultiva-green/10 rounded-xl text-cultiva-text hover:border-cultiva-green/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Play className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium">Video relacionado</span>
              <ExternalLink className="w-3 h-3 text-cultiva-muted" />
            </a>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-cultiva-surface border-t border-cultiva-green/10">
          <div className="max-w-[1280px] mx-auto px-6 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-cultiva-text mb-8">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}