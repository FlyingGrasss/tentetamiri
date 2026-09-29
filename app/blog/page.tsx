import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { blogPosts, formatDate } from "@/lib/blog-content";

const siteUrl = "https://tentelisa.com";

export const metadata: Metadata = {
  title: "Blog | Tente ve Pergola Rehberi — Tentelisa Esenler",
  description:
    "Tente bakımı, pergola sistemleri, branda onarımı ve yerel servis hakkında pratik bilgiler. Tentelisa'nın uzman içerikleri.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Tente ve Pergola Rehberi — Tentelisa",
    description: "Tente bakımı, pergola sistemleri ve branda onarımı hakkında pratik rehberler.",
    url: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="seo-page">
        <section className="seo-page-hero">
          <div className="container seo-page-hero-grid">
            <div>
              <p className="section-label section-label-light">
                <span>01</span> Tentelisa Blog
              </p>
              <h1>
                Tente &amp; Pergola<br />
                <em>Rehberi.</em>
              </h1>
            </div>
            <p>
              Bakım, onarım ve sistem seçimi hakkında pratik bilgiler. Tentenizden daha fazla verim almak için doğru kaynakta olduğunuz yerdesiniz.
            </p>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-meta-right">
                      <Calendar size={12} aria-hidden="true" />
                      {formatDate(post.date)}
                      <Clock size={12} aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <strong>
                    Devamını oku <ArrowUpRight size={14} aria-hidden="true" />
                  </strong>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
