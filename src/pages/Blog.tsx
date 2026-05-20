// src/pages/Blog.tsx
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { BlogCard } from '../components/BlogCard';
import { getAllPosts, getPostsByCategory, getAllCategories, getCategoryLabel, getCategoryColor } from '../lib/blog';
import type { BlogPost } from '../lib/blog';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const sectionRef = useRef<<HTMLDivElement>(null);  // ← null explícito
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);  // ← array vacío
  const categories = ['todos', ...getAllCategories()];

  useEffect(() => {
    const allPosts = getAllPosts();
    setPosts(allPosts);
    setFilteredPosts(allPosts);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let result = posts;

    if (activeCategory !== 'todos') {
      result = getPostsByCategory(activeCategory);
    } else {
      result = posts;
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(result);
  }, [activeCategory, searchQuery, posts]);

  useEffect(() => {
    if (!isLoaded || filteredPosts.length === 0) return;

    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length === 0) return;

      gsap.fromTo(
        validCards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredPosts, isLoaded]);

  return (
    <div className="min-h-screen bg-cultiva-bg">
      <div className="bg-cultiva-surface border-b border-cultiva-green/10">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cultiva-muted hover:text-cultiva-text text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Cultiva Fitness
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-3 tracking-tight">
            Blog
          </h1>
          <p className="text-cultiva-secondary text-base sm:text-lg max-w-[640px]">
            Artículos científicos sobre entrenamiento, nutrición, neurociencias y salud. Evidencia aplicada, sin ruido.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cultiva-muted" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-cultiva-surface border border-cultiva-green/10 rounded-xl text-cultiva-text placeholder:text-cultiva-muted focus:outline-none focus:border-cultiva-green/30 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <SlidersHorizontal className="w-4 h-4 text-cultiva-muted mr-1 flex-shrink-0" />
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const color = cat === 'todos' ? '#60A5FA' : getCategoryColor(cat);
              
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-cultiva-muted hover:text-cultiva-text'
                  }`}
                  style={{
                    backgroundColor: isActive ? color : 'transparent',
                    border: `1px solid ${isActive ? color : 'rgba(74, 222, 128, 0.15)'}`,
                  }}
                >
                  {cat === 'todos' ? 'TODOS' : getCategoryLabel(cat)}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-cultiva-muted text-sm mb-6 font-mono">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo' : 'artículos'}
          {activeCategory !== 'todos' && ` en ${getCategoryLabel(activeCategory).toLowerCase()}`}
        </p>

        {filteredPosts.length > 0 ? (
          <div
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post, i) => (
              <div
                key={post.slug}
                ref={(el) => { cardsRef.current[i] = el; }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-cultiva-secondary text-lg">
              No se encontraron artículos con los filtros seleccionados.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
              className="mt-4 text-cultiva-blue hover:text-cultiva-blue/80 text-sm font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}