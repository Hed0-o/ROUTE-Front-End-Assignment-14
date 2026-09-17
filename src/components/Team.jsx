export default function Team() {
  return (
    <>
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-sm font-semibold tracking-widest text-slate-400 mb-4">
                فريقنا
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                تعرف على
                <span className="text-slate-400">كتابنا</span>
              </h2>
            </div>
            <p className="text-slate-500 leading-7 max-w-xl">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم
              وخبراتهم مع مجتمع التصوير.
            </p>
          </div>
          {/* Team */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Member 01 */}
            <div className="group border border-stone-200 bg-stone-50 p-5 hover:bg-white hover:border-slate-300 transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="سالم أحمد"
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <span className="absolute bottom-3 right-3 bg-white px-2 py-1 text-[10px] font-bold text-slate-900">
                  01
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">سالم أحمد</h3>
              <p className="text-sm text-slate-500 mt-1 mb-5">مصور محترف</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7.678 1.338.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Member 02 */}
            <div className="group border border-stone-200 bg-stone-50 p-5 hover:bg-white hover:border-slate-300 transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
                  alt="محمد علي"
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <span className="absolute bottom-3 right-3 bg-white px-2 py-1 text-[10px] font-bold text-slate-900">
                  02
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">محمد علي</h3>
              <p className="text-sm text-slate-500 mt-1 mb-5">مصور بورتريه</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">X</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">GH</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
              </div>
            </div>
            {/* Member 03 */}
            <div className="group border border-stone-200 bg-stone-50 p-5 hover:bg-white hover:border-slate-300 transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="إبراهيم حسن"
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <span className="absolute bottom-3 right-3 bg-white px-2 py-1 text-[10px] font-bold text-slate-900">
                  03
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">إبراهيم حسن</h3>
              <p className="text-sm text-slate-500 mt-1 mb-5">مصور طبيعة</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">X</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">GH</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
              </div>
            </div>
            {/* Member 04 */}
            <div className="group border border-stone-200 bg-stone-50 p-5 hover:bg-white hover:border-slate-300 transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                  alt="داود خالد"
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <span className="absolute bottom-3 right-3 bg-white px-2 py-1 text-[10px] font-bold text-slate-900">
                  04
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">داود خالد</h3>
              <p className="text-sm text-slate-500 mt-1 mb-5">مدرب تصوير</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">X</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">GH</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-stone-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
