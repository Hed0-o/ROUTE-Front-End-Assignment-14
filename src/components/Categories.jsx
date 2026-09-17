export default function Categories() {
  return (
    <>
      <section className="bg-stone-50 py-24" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                Categories
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                استكشف حسب الموضوع
              </h2>
            </div>
            <p className="text-slate-500 max-w-md leading-8">
              اعثر على محتوى مصمم حسب اهتماماتك، واستكشف مواضيع مختلفة في عالم
              التصوير.
            </p>
          </div>
          {/* Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-300 border border-slate-300">
            {/* Lighting */}
            <a
              href="/blog?category=إضاءة"
              className="group bg-white p-7 min-h-[220px]
         flex flex-col justify-between
         hover:bg-slate-900
         transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 flex items-center justify-center
             border border-slate-200
             rounded-full
             group-hover:border-slate-700
             transition-colors duration-500"
                >
                  <svg
                    className="w-5 h-5 text-slate-700 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={12} r={4} />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                    />
                  </svg>
                </div>
                <span
                  className="text-xs text-slate-400
             group-hover:text-slate-500"
                >
                  01
                </span>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-slate-900
             group-hover:text-white
             transition-colors duration-500"
                >
                  إضاءة
                </h3>
                <p
                  className="mt-2 text-sm text-slate-400
             group-hover:text-slate-500"
                >
                  3 مقالات
                </p>
              </div>
            </a>
            {/* Portrait */}
            <a
              href="/blog?category=بورتريه"
              className="group bg-white p-7 min-h-[220px]
         flex flex-col justify-between
         hover:bg-slate-900
         transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 flex items-center justify-center
             border border-slate-200
             rounded-full
             group-hover:border-slate-700
             transition-colors duration-500"
                >
                  <svg
                    className="w-5 h-5 text-slate-700 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={8} r="3.5" />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6"
                    />
                  </svg>
                </div>
                <span className="text-xs text-slate-400">02</span>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-slate-900
             group-hover:text-white
             transition-colors duration-500"
                >
                  بورتريه
                </h3>
                <p
                  className="mt-2 text-sm text-slate-400
             group-hover:text-slate-500"
                >
                  3 مقالات
                </p>
              </div>
            </a>
            {/* Landscape */}
            <a
              href="/blog?category=مناظر طبيعية"
              className="group bg-white p-7 min-h-[220px]
         flex flex-col justify-between
         hover:bg-slate-900
         transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 flex items-center justify-center
             border border-slate-200
             rounded-full
             group-hover:border-slate-700
             transition-colors duration-500"
                >
                  <svg
                    className="w-5 h-5 text-slate-700 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3 19l6-7 4 4 3-3 5 6H3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth="1.8"
                      d="M8 8h.01"
                    />
                  </svg>
                </div>
                <span className="text-xs text-slate-400">03</span>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-slate-900
             group-hover:text-white
             transition-colors duration-500"
                >
                  مناظر طبيعية
                </h3>
                <p
                  className="mt-2 text-sm text-slate-400
             group-hover:text-slate-500"
                >
                  2 مقالات
                </p>
              </div>
            </a>
            {/* Techniques */}
            <a
              href="/blog?category=تقنيات"
              className="group bg-white p-7 min-h-[220px]
         flex flex-col justify-between
         hover:bg-slate-900
         transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 flex items-center justify-center
             border border-slate-200
             rounded-full
             group-hover:border-slate-700
             transition-colors duration-500"
                >
                  <svg
                    className="w-5 h-5 text-slate-700 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M4 7h16M4 12h16M4 17h16"
                    />
                    <circle cx={8} cy={7} r={2} />
                    <circle cx={15} cy={12} r={2} />
                    <circle cx={11} cy={17} r={2} />
                  </svg>
                </div>
                <span className="text-xs text-slate-400">04</span>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-slate-900
             group-hover:text-white
             transition-colors duration-500"
                >
                  تقنيات
                </h3>
                <p
                  className="mt-2 text-sm text-slate-400
             group-hover:text-slate-500"
                >
                  5 مقالات
                </p>
              </div>
            </a>
            {/* Equipment */}
            <a
              href="/blog?category=معدات"
              className="group bg-white p-7 min-h-[220px]
         flex flex-col justify-between
         hover:bg-slate-900
         transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 flex items-center justify-center
             border border-slate-200
             rounded-full
             group-hover:border-slate-700
             transition-colors duration-500"
                >
                  <svg
                    className="w-5 h-5 text-slate-700 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x={3} y={7} width={18} height={12} rx={2} />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M8 7l1.5-3h5L16 7M8 13h.01M12 13h.01M16 13h.01"
                    />
                  </svg>
                </div>
                <span className="text-xs text-slate-400">05</span>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-slate-900
             group-hover:text-white
             transition-colors duration-500"
                >
                  معدات
                </h3>
                <p
                  className="mt-2 text-sm text-slate-400
             group-hover:text-slate-500"
                >
                  3 مقالات
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
