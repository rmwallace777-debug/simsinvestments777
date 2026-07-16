import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/Animations';
import { getBlogPost, getRelatedPosts } from '@/lib/blog';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import AuditForm from '@/components/AuditForm';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const categoryLabels: Record<string, string> = {
    'lead-generation': 'Lead Generation',
    'reputation-management': 'Reputation Management',
    'ai-for-business': 'AI for Business',
  };

  // Simple MDX rendering - convert markdown to basic HTML
  function renderContent(content: string): string {
    let html = content
      // Headers
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h2>$1</h2>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Links
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-teal-400 underline">$1</a>')
      // Lists
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      // Paragraphs (double newlines)
      .replace(/\n\n/g, '</p><p>')
      // Wrap in paragraphs
      .replace(/^(.+)$/gm, (match) => {
        if (match.startsWith('<')) return match;
        return match;
      });

    // Wrap consecutive <li> in <ul>
    html = html.replace(/((?:<li>.*?<\/li>\n?)+)/g, '<ul>$1</ul>');

    return `<p>${html}</p>`;
  }

  return (
    <div className="pt-24 pb-16">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <FadeIn>
              <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-teal-400 mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
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

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">{post.title}</h1>

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{post.author}</p>
                  <p className="text-slate-500 text-xs">Sims Investment Management</p>
                </div>
              </div>

              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />
            </FadeIn>

            {/* In-content CTA */}
            <FadeIn>
              <div className="glass-card rounded-2xl p-8 mt-10 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to Get More Leads?</h3>
                <p className="text-sm text-slate-400 mb-4">
                  Apply the strategies from this article with expert help. Get your free pipeline audit today.
                </p>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
                >
                  Free Pipeline Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Related Posts */}
            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                      <div className="glass-card rounded-xl p-4 h-full">
                        <span className="text-[10px] text-teal-400 block mb-2">{categoryLabels[rp.category] || rp.category}</span>
                        <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">{rp.title}</h3>
                        <p className="text-xs text-slate-500">{rp.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Lead Capture */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-1">Get 5 Free Leads</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Enter your info and we will send you 5 verified B2B leads in your area.
                </p>
                <AuditForm source={`blog-post-${slug}`} />
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
                      <Link href={cat.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">{cat.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-sm mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-white/[0.06] text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
