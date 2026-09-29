import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog-content";

const siteUrl = "https://tentelisa.com";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tentelisa Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Tentelisa Tente | Pergola sistemleri",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Tentelisa Tente | Pergola sistemleri",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SiteHeader />
      <main className="seo-detail-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <div className="container seo-detail-wrap">
          <nav className="seo-breadcrumb" aria-label="Sayfa yolu">
            <Link href="/">Ana sayfa</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          <article className="blog-article">
            <header className="blog-article-header">
              <div className="blog-article-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-meta-right">
                  <Calendar size={13} aria-hidden="true" />
                  {formatDate(post.date)}
                  <Clock size={13} aria-hidden="true" />
                  {post.readingTime} okuma
                </span>
              </div>
              <h1>{post.title}</h1>
              <p className="blog-article-lead">{post.intro}</p>
            </header>

            <div className="blog-article-body">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <footer className="blog-article-footer">
              <p>
                <strong>Tentelisa Tente | Pergola Sistemleri</strong> — Esenler, İstanbul
                <br />
                Telefon / WhatsApp: <a href="tel:+905453643144">0545 364 31 44</a>
              </p>
              <Link href="/blog" className="blog-back">
                <ArrowLeft size={15} aria-hidden="true" /> Tüm yazılar
              </Link>
            </footer>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
