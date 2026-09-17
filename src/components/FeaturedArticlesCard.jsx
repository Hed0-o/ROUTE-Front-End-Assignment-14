import { NavLink } from "react-router-dom";

export default function FeaturedArticleCard({ post }) {
  return (
    <>
      <article className="group">
        <NavLink to={`/3dasa/blogs/${post.slug}`} className="block">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl bg-slate-100 lg:col-span-7">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                />

                {post.featured && (
                  <div className="absolute right-5 top-5">
                    <span
                      className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/95
                      px-4 py-2
                      text-xs
                      font-bold
                      text-slate-800
                      shadow-sm
                      backdrop-blur-sm
                    "
                    >
                      <span className="h-2 w-2 rounded-full bg-slate-900" />
                      مميز
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 lg:pr-4">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-900">
                  {post.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="text-sm text-slate-400">{post.readTime}</span>
              </div>

              <h3
                className="
                mb-5
                text-3xl
                font-bold
                leading-tight
                text-slate-900
                transition-colors
                duration-300
                group-hover:text-slate-500
                md:text-4xl
              "
              >
                {post.title}
              </h3>

              <p className="mb-8 text-base leading-8 text-slate-500">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {post.author.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">{post.date}</p>
                  </div>
                </div>

                <span
                  className="
                  border-b
                  border-slate-900
                  pb-1
                  text-sm
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  group-hover:pr-2
                "
                >
                  اقرأ المقال
                </span>
              </div>
            </div>
          </div>
        </NavLink>
      </article>
    </>
  );
}
