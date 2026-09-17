import { NavLink } from "react-router-dom";

export default function BlogCard({ post, view }) {
  if (view === "list") {
    return (
      <article className="group border-b border-slate-200 pb-8">
        <NavLink
          to={`/3dasa/blogs/${post.slug}`}
          className="grid gap-6 md:grid-cols-[280px_1fr]"
        >
          <div className="aspect-[4/3] overflow-hidden bg-slate-200">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{post.readTime}</span>
            </div>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-slate-900 transition group-hover:text-slate-500">
              {post.title}
            </h2>

            <p className="mb-5 max-w-2xl text-sm leading-7 text-slate-500">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-9 w-9 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {post.author.name}
                </p>

                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>
          </div>
        </NavLink>
      </article>
    );
  }

  return (
    <article className="group">
      <NavLink to={`/3dasa/blogs/${post.slug}`} className="block">
        <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-slate-200">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
            {post.category}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
          <span>{post.date}</span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span>{post.readTime}</span>
        </div>

        <h2 className="mb-3 text-xl font-bold leading-8 text-slate-900 transition group-hover:text-slate-500">
          {post.title}
        </h2>

        <p className="mb-5 text-sm leading-7 text-slate-500">{post.excerpt}</p>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-9 w-9 rounded-full object-cover"
            />

            <div>
              <p className="text-sm font-medium text-slate-800">
                {post.author.name}
              </p>

              <p className="text-xs text-slate-400">{post.author.role}</p>
            </div>
          </div>

          <span className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
            ←
          </span>
        </div>
      </NavLink>
    </article>
  );
}
