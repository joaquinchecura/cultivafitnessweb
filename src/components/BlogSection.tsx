import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { BlogCard } from '../components/BlogCard';
import { getLatestPosts } from '../lib/blog';

export function BlogSection() {
  const latestPosts = getLatestPosts(3);

  return (
    <section
      id="blog"
      className="relative py-28 lg:py-36 px-6 bg-cultiva-bg"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="font-mono-label text-cultiva-teal tracking-[0.2em] block mb-4">
            CONOCIMIENTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            Artículos científicos que transforman
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg max-w-[640px] mx-auto">
            Traducimos la ciencia en acción. Sin charlatanería, sin simplificaciones absurdas. Solo evidencia aplicada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cultiva-blue hover:text-cultiva-blue/80 text-sm font-medium transition-colors duration-300 hover:gap-3"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}