import { useMemo, useState } from "react";
import postsData from "../../posts.json";
import BlogCard from "./BlogCard";

const categories = [
  "الكل",
  "إضاءة",
  "بورتريه",
  "مناظر طبيعية",
  "تقنيات",
  "معدات",
];

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    return postsData.posts.filter((post) => {
      const matchesCategory = category === "الكل" || post.category === category;

      const searchValue = search.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        post.title.toLowerCase().includes(searchValue) ||
        post.excerpt.toLowerCase().includes(searchValue) ||
        post.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const currentPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage,
  );

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      {/* Hero */}
      <header className="border-b border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-slate-400">
              ARCHIVE / 01
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              مساحة للأفكار
              <span className="block text-slate-400">والصور.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              دروس وتجارب وأفكار عملية تساعدك على فهم التصوير وتطوير رؤيتك خلف
              الكاميرا.
            </p>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative w-full lg:order-2 lg:w-80">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="ابحث عن مقال..."
                className="h-12 w-full border-b-2 border-slate-200 bg-transparent pr-4 pl-11 text-slate-900 outline-none transition focus:border-slate-900"
              />

              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m21 21-4.35-4.35m2.1-5.15a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
                />
              </svg>
            </div>

            {/* Categories */}
            <div className="flex-1 overflow-x-auto lg:order-1">
              <div className="flex min-w-max items-center gap-2">
                {categories.map((item) => {
                  const active = category === item;

                  return (
                    <button
                      key={item}
                      onClick={() => handleCategoryChange(item)}
                      className={`px-5 py-2.5 text-sm font-medium transition ${
                        active
                          ? "bg-slate-900 text-white"
                          : "border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900"
                      }`}
                    >
                      {item === "الكل" ? "جميع المقالات" : item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-slate-400">
              ARTICLES
            </p>

            <p className="text-slate-600">
              عدد النتائج{" "}
              <span className="font-bold text-slate-900">
                {filteredPosts.length}
              </span>
            </p>
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-2 border border-slate-200 bg-white p-1">
            <button
              type="button"
              title="عرض شبكي"
              onClick={() => setView("grid")}
              className={`flex h-10 w-10 items-center justify-center transition ${
                view === "grid"
                  ? "bg-slate-900 text-white"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  d="M4 5.5A1.5 1.5 0 0 1 5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5v-4ZM13 5.5A1.5 1.5 0 0 1 14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 9.5 20h-4A1.5 1.5 0 0 1 4 18.5v-4ZM13 14.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4Z"
                />
              </svg>
            </button>

            <button
              type="button"
              title="عرض قائمة"
              onClick={() => setView("list")}
              className={`flex h-10 w-10 items-center justify-center transition ${
                view === "list"
                  ? "bg-slate-900 text-white"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="1.8"
                  d="M5 6h14M5 12h14M5 18h14"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Articles */}
        <div
          className={
            view === "grid"
              ? "grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
              : "space-y-8"
          }
        >
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} view={view} />
          ))}
        </div>

        {/* Empty State */}
        {currentPosts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg font-semibold text-slate-900">
              لا توجد مقالات مطابقة
            </p>

            <p className="mt-2 text-sm text-slate-500">
              جرّب كلمة بحث مختلفة أو اختر تصنيفًا آخر.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
            >
              السابق
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    className={`h-10 w-10 text-sm font-medium transition ${
                      page === pageNumber
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-900"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ),
              )}
            </div>

            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
            >
              التالي
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
