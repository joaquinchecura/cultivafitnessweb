// src/lib/blog.ts
export interface BlogPost {
  slug: string;
  title: string;
  category: 'entrenamiento' | 'nutricion' | 'neurociencias' | 'salud';
  date: string;
  readTime: string;
  image: string;
  paperUrl: string;
  videoUrl: string;
  excerpt: string;
  content: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  entrenamiento: '#a78bfa',      // cultiva-purple
  nutricion: '#4ADE80',            // cultiva-green
  neurociencias: '#60A5FA',        // cultiva-blue
  salud: '#f472b6',                // cultiva-pink
};

const CATEGORY_LABELS: Record<string, string> = {
  entrenamiento: 'ENTRENAMIENTO',
  nutricion: 'NUTRICIÓN',
  neurociencias: 'NEUROCIENCIAS',
  salud: 'SALUD',
};

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || '#60A5FA';
}

export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category.toUpperCase();
}

export function parseMarkdownPost(content: string, slug: string): BlogPost {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    throw new Error(`Invalid markdown format for ${slug}`);
  }

  const [, frontmatter, markdownContent] = frontmatterMatch;
  
  const meta: Record<string, string> = {};
  frontmatter.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      meta[key.trim()] = value;
    }
  });

  return {
    slug,
    title: meta.title || '',
    category: meta.category as BlogPost['category'],
    date: meta.date || '',
    readTime: meta.readTime || '',
    image: meta.image || '',
    paperUrl: meta.paperUrl || '',
    videoUrl: meta.videoUrl || '',
    excerpt: meta.excerpt || '',
    content: markdownContent.trim(),
  };
}

const blogModules = import.meta.glob('/src/content/blog/*.md', { as: 'raw', eager: true });

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  
  Object.entries(blogModules).forEach(([path, content]) => {
    const slug = path.replace('/src/content/blog/', '').replace('.md', '');
    const post = parseMarkdownPost(content as string, slug);
    posts.push(post);
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count);
}

export function getAllCategories(): string[] {
  return ['entrenamiento', 'nutricion', 'neurociencias', 'salud'];
}