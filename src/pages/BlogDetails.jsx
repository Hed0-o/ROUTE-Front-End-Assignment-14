import { NavLink, useParams } from "react-router-dom";
import postsData from "../../posts.json";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = postsData.posts.find((item) => item.slug === slug);
  if (!post) {
    return (
      <section
        className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4"
        dir="rtl"
      >
        <div className="text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-slate-400">
            404
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            المقال غير موجود
          </h1>

          <p className="mt-3 text-slate-500">المقال الذي تبحث عنه غير متاح.</p>

          <NavLink
            to="/3dasa/blogs"
            className="mt-7 inline-flex bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            العودة إلى المدونة
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-slate-50 text-slate-900" dir="rtl">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <NavLink
            to="/3dasa/blogs"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-slate-900"
          >
            <span>→</span>
            العودة إلى المدونة
          </NavLink>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="bg-slate-900 px-4 py-2 font-semibold text-white">
              {post.category}
            </span>

            <span className="text-slate-400">{post.date}</span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span className="text-slate-400">{post.readTime}</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-500 md:text-xl">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-7">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold text-slate-900">{post.author.name}</p>

              <p className="mt-1 text-sm text-slate-400">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-slate-200">
          <img
            src={post.image}
            alt={post.title}
            className="h-auto max-h-162.5 w-full object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div>
          {post.content.split("\n").map(
            (paragraph, index) =>
              paragraph.trim() && (
                <p
                  key={index}
                  className="mb-7 text-lg leading-9 text-slate-600"
                >
                  {paragraph}
                </p>
              ),
          )}
        </div>

        {post.tags?.length > 0 && (
          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-400">
              TAGS
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-slate-400">
            KEEP READING
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            اكتشف المزيد من المقالات
          </h2>

          <NavLink
            to="/3dasa/blogs"
            className="mt-7 inline-flex bg-slate-900 px-7 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            تصفح المدونة
          </NavLink>
        </div>
      </section>
    </main>
  );
}
