import { NavLink } from "react-router-dom";
import heroPrimary from "../assets/hero-primary.jpg";
import heroSecondary from "../assets/hero-secondary.jpg";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-stone-100">
      {/* Decorative Shape */}
      <div
        className="
          absolute -top-32 -left-32
          h-125 w-125
          rounded-full
          border border-stone-200
          bg-white
        "
      />

      <div
        className="
          absolute top-1/2 -right-48
          h-150 w-150
          rounded-full
          border border-stone-200
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid min-h-[90vh]
            grid-cols-1 items-center
            gap-12
            py-20
            lg:grid-cols-2
          "
        >
          {/* Content */}
          <div className="text-right">
            {/* Label */}
            <div
              className="
                mb-8
                inline-flex items-center gap-3
                rounded-full
                border border-stone-200
                bg-white
                px-4 py-2
              "
            >
              <span className="h-2 w-2 rounded-full bg-slate-900" />

              <span className="text-sm font-medium text-slate-600">
                مرحباً بك في عدسة
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mb-7
                text-5xl font-black
                leading-[1.15]
                tracking-tight
                text-slate-900
                md:text-6xl
                lg:text-7xl
              "
            >
              اكتشف
              <span className="block text-slate-500">فن التصوير</span>
              <span className="block">الفوتوغرافي</span>
            </h1>

            {/* Description */}
            <p
              className="
                mb-10
                max-w-xl
                text-lg
                leading-8
                text-slate-500
                md:text-xl
              "
            >
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            {/* Actions */}
            <div
              className="
                mb-14
                flex
                flex-col
                justify-start
                gap-3
                sm:flex-row
              "
            >
              {/* Primary */}
              <NavLink
                to="/3dasa/blogs"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-slate-900
                  px-7 py-4
                  text-sm font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-slate-700
                "
              >
                <span>استكشف المقالات</span>

                <svg
                  className="h-5 w-5 rotate-180"
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

              {/* Secondary */}
              <NavLink
                to="/3dasa/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border border-stone-300
                  bg-white
                  px-7 py-4
                  text-sm font-semibold
                  text-slate-700
                  transition-colors
                  duration-200
                  hover:border-slate-900
                  hover:text-slate-900
                "
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
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>اعرف المزيد</span>
              </NavLink>
            </div>

            {/* Statistics */}
            <div
              className="
                grid
                max-w-2xl
                grid-cols-2
                gap-0
                border-t border-stone-300
                pt-7
                sm:grid-cols-4
              "
            >
              {/* Articles */}
              <div className="px-4 text-right first:pr-0">
                <div className="text-2xl font-black text-slate-900 md:text-3xl">
                  +50
                </div>

                <p className="mt-1 text-sm text-slate-500">مقالة</p>
              </div>

              {/* Readers */}
              <div
                className="
                  border-r border-stone-300
                  px-4
                  text-right
                "
              >
                <div className="text-2xl font-black text-slate-900 md:text-3xl">
                  +10ألف
                </div>

                <p className="mt-1 text-sm text-slate-500">قارئ</p>
              </div>

              {/* Categories */}
              <div
                className="
                  border-r border-stone-300
                  px-4
                  text-right
                "
              >
                <div className="text-2xl font-black text-slate-900 md:text-3xl">
                  4
                </div>

                <p className="mt-1 text-sm text-slate-500">تصنيفات</p>
              </div>

              {/* Writers */}
              <div
                className="
                  border-r border-stone-300
                  px-4
                  text-right
                "
              >
                <div className="text-2xl font-black text-slate-900 md:text-3xl">
                  6
                </div>

                <p className="mt-1 text-sm text-slate-500">كاتب</p>
              </div>
            </div>
          </div>

          {/* Visual / Photography Area */}
          <div
            className="
              relative
             h-105
             md:h-130
            lg:h-155
            "
          >
            {/* Main Image */}
            <div
              className="
                absolute
                right-4 top-4
                h-[78%] w-[75%]
                overflow-hidden
                rounded-4xl
                bg-slate-900
                shadow-2xl
              "
            >
              <img
                src={heroPrimary}
                alt="Photography"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* Secondary Image */}
            <div
              className="
                absolute
                bottom-4 left-2
                h-[42%] w-[45%]
                overflow-hidden
                rounded-3xl
                border-8 border-stone-100
                bg-white
                shadow-xl
              "
            >
              <img
                src={heroSecondary}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Number */}
            <div
              className="
                absolute
                left-0 top-1/2
                flex
                h-24 w-24
                -translate-y-1/2
                flex-col
                items-center
                justify-center
                rounded-full
                border border-stone-200
                bg-white
                shadow-lg
              "
            >
              <span className="text-2xl font-black text-slate-900">01</span>

              <span className="text-[10px] tracking-widest text-slate-400">
                CAPTURE
              </span>
            </div>

            {/* Small Caption */}
            <div
              className="
                absolute
                bottom-0 right-0
                rounded-tl-2xl
                bg-slate-900
                px-5 py-4
                text-white
              "
            >
              <p className="mb-1 text-xs text-slate-400">عدسة</p>

              <p className="text-sm font-semibold">رؤية مختلفة لكل لحظة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
