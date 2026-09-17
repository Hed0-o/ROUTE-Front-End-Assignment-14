import { NavLink } from "react-router-dom";
import postsData from "../../posts.json";
import LatestArticleCard from "./LatestArticleCard";

export default function LatestArticles() {
  const latestPosts = postsData.posts.slice(3, 6);

  return (
    <section className="bg-white py-24" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-400">
              LATEST
            </p>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              أحدث المقالات
            </h2>

            <p className="mt-4 text-slate-500">محتوى جديد طازج من المطبعة</p>
          </div>

          <NavLink
            to="/3dasa/blogs"
            className="
              group
              inline-flex
              items-center
              gap-3
              border-b
              border-slate-900
              pb-2
              font-semibold
              text-slate-900
              transition-all
              duration-300
              hover:border-slate-400
              hover:text-slate-500
            "
          >
            عرض جميع المقالات
            <svg
              className="
                h-5 w-5
                rotate-180
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NavLink>
        </div>

        {/* Articles */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <LatestArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
