import postsData from "../../posts.json";
import FeaturedArticleCard from "./FeaturedArticlesCard";

export default function FeaturedArticles() {
  const featuredPosts = postsData.posts
    .filter((post) => post.featured)
    .slice(0, 3);

  return (
    <>
      <section className="bg-white py-24" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-slate-900" />
                <span className="text-sm font-semibold tracking-wide text-slate-500">
                  مختاراتنا
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                مقالات تستحق
                <span className="block text-slate-400">وقتك</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
                محتوى منتقى بعناية لبدء رحلة تعلمك واكتشاف عالم التصوير
                الفوتوغرافي.
              </p>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center gap-3 self-start md:self-auto
         px-6 py-3 rounded-full
         border border-slate-300
         text-slate-800 font-semibold
         hover:bg-slate-900 hover:text-white
         transition-all duration-300"
            >
              <span>عرض جميع المقالات</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          {/* FeaturedArticles */}
          <div className="space-y-10">
            {/* Articles */}
            <div className="space-y-10">
              {featuredPosts.map((post) => (
                <FeaturedArticleCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
