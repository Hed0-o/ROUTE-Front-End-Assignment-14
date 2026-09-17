import { NavLink } from "react-router-dom";

export default function LatestArticleCard({ post }) {
  return (
    <article className="group">
      <NavLink to={`/3dasa/blogs/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden bg-slate-100">
          <div className="aspect-[4/3] overflow-hidden">
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
          </div>

          {/* Category */}
          <span
            className="
              absolute
              right-4
              top-4
              bg-white
              px-3 py-1.5
              text-xs
              font-bold
              text-slate-800
              shadow-sm
            "
          >
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="pt-5">
          {/* Meta */}
          <div
            className="
              mb-3
              flex
              items-center
              gap-3
              text-xs
              text-slate-400
            "
          >
            <span>{post.readTime}</span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span>{post.date}</span>
          </div>

          {/* Title */}
          <h3
            className="
              mb-3
              text-xl
              font-bold
              leading-snug
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-slate-500
            "
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-6 text-sm leading-7 text-slate-500">
            {post.excerpt}
          </p>

          {/* Author */}
          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-slate-200
              pt-4
            "
          >
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="
                  h-9
                  w-9
                  rounded-full
                  object-cover
                "
              />

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {post.author.name}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <span
              className="
                flex
                h-9 w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-slate-700
                transition-all
                duration-300
                group-hover:border-slate-900
                group-hover:bg-slate-900
                group-hover:text-white
              "
            >
              <svg
                className="h-4 w-4 rotate-180"
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
            </span>
          </div>
        </div>
      </NavLink>
    </article>
  );
}
