import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] bg-stone-50 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-slate-400 mb-5">
              ERROR / 404
            </p>

            <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-none mb-6">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              الصفحة غير موجودة
            </h2>

            <p className="text-slate-500 text-lg leading-8 max-w-lg mb-8">
              يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
              يمكنك العودة إلى الصفحة الرئيسية ومتابعة استكشاف عدسة.
            </p>

            <NavLink
              to="/3dasa"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-7 py-4 font-semibold hover:bg-slate-700 transition"
            >
              العودة للرئيسية
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </NavLink>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-white border border-stone-200 p-5">
              <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute w-72 h-72 rounded-full border border-slate-700" />
                <div className="absolute w-48 h-48 rounded-full border border-slate-700" />
                <div className="absolute w-24 h-24 rounded-full border border-slate-600" />

                <div className="relative z-10 w-16 h-16 rounded-full border border-slate-400 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
                    <path
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      d="m20 20-4-4"
                    />
                  </svg>
                </div>

                <span className="relative z-10 mt-6 text-xs tracking-[0.3em] text-slate-500">
                  LOST FRAME
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
