import Link from 'next/link';
import { FadeIn } from '@/components/Animations';
import { getBlogPosts, getCategories } from '@/lib/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AuditForm from '@/components/AuditForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Expert insights on B2B lead generation, Google review management, and AI for local business growth. Tips and strategies for Texas business owners.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const posts = getBlogPosts();
  const categories = getCategories();
  const activeCategory = params.category || 'all';

  const filteredPosts = activeCategory === 'all' ? posts : posts.filter((p) => p.category === activeCategory);

  const categoryLabels: Record<string, string> = {
    'lead-generation': 'Lead Generation',
    'reputation-management': 'Reputation Management',
    'ai-for-business': 'AI for Business',
  };

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Growth <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Actionable tips and strategies for B2B lead generation, reputation management, and growing your Texas business.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Link
                href="/blog"
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === 'all' ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                All Posts
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${cat}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {categoryLabels[cat] || cat}
                </Link>
              ))}
            </div>

            {/* Blog Posts */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <p>No posts in this category yet. Check back soon!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                    <article className="glass-card rounded-2xl p-6 hover:border-teal-500/30 transition-all">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                        <span className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400">
                          {categoryLabels[post.category] || post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-teal-400 group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-3 h-3" />
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lead Capture */}
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-semibold mb-1">Get 5 Free Leads</h3>
              <p className="text-xs text-slate-400 mb-4">
                Enter your info and we will send you 5 verified B2B leads in your area — free.
              </p>
              <AuditForm source="blog-sidebar" />
            </div>

            {/* Categories */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-4">Categories</h3>
              <ul className="space-y-2">
                {[
                  { href: '/blog?category=lead-generation', label: 'Lead Generation' },
                  { href: '/blog?category=reputation-management', label: 'Reputation Management' },
                  { href: '/blog?category=ai-for-business', label: 'AI for Business' },
                ].map((cat) => (
                  <li key={cat.href}>
                    <Link href={cat.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-2xl p-6 text-center">
              <h3 className="text-white font-semibold mb-2">Ready to Grow?</h3>
              <p className="text-xs text-slate-400 mb-4">Get your free pipeline audit and see what is possible.</p>
              <Link
                href="/free-audit"
                className="block px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
              >
                Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
