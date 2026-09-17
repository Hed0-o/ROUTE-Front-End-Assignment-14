import React from "react";

export default function Values() {
  return (
    <>
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-end mb-14">
            <div>
              <p className="text-sm font-semibold tracking-widest text-slate-400 mb-4">
                مبادئنا
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                كيف نبني
                <br />
                <span className="text-slate-400">محتوى عدسة؟</span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 leading-8 max-w-2xl">
              المبادئ التي توجه طريقة اختيار المحتوى وكتابته، من أول فكرة وحتى
              وصولها إلى القارئ.
            </p>
          </div>
          {/* Values */}
          <div className="border-t border-stone-300">
            {/* Value 01 */}
            <div className="group grid md:grid-cols-[90px_1fr_1.5fr] gap-6 md:gap-10 items-center py-8 border-b border-stone-200 hover:bg-stone-50 transition px-3 md:px-5">
              <span className="text-sm font-mono text-slate-400">01</span>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={12} r={8} strokeWidth="1.7" />
                    <circle cx={12} cy={12} r={2} strokeWidth="1.7" />
                    <path
                      strokeWidth="1.7"
                      d="M12 4v3M20 12h-3M12 20v-3M4 12h3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition">
                  الجودة أولاً
                </h3>
              </div>
              <p className="text-slate-500 leading-7">
                محتوى مدروس ومكتوب بخبرة، يركز على تقديم معلومة واضحة وقابلة
                للاستفادة بدلًا من مجرد زيادة كمية المقالات.
              </p>
            </div>
            {/* Value 02 */}
            <div className="group grid md:grid-cols-[90px_1fr_1.5fr] gap-6 md:gap-10 items-center py-8 border-b border-stone-200 hover:bg-stone-50 transition px-3 md:px-5">
              <span className="text-sm font-mono text-slate-400">02</span>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition">
                  تركيز عملي
                </h3>
              </div>
              <p className="text-slate-500 leading-7">
                أمثلة واقعية وتقنيات يمكن للمصور تطبيقها مباشرة أثناء التصوير،
                بعيدًا عن الشرح النظري غير القابل للاستخدام.
              </p>
            </div>
            {/* Value 03 */}
            <div className="group grid md:grid-cols-[90px_1fr_1.5fr] gap-6 md:gap-10 items-center py-8 border-b border-stone-200 hover:bg-stone-50 transition px-3 md:px-5">
              <span className="text-sm font-mono text-slate-400">03</span>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition">
                  المجتمع
                </h3>
              </div>
              <p className="text-slate-500 leading-7">
                نؤمن بأن أفضل رحلة تعلم تحدث عندما يتشارك المصورون الخبرات
                والأفكار ويتعلمون من تجارب بعضهم البعض.
              </p>
            </div>
            {/* Value 04 */}
            <div className="group grid md:grid-cols-[90px_1fr_1.5fr] gap-6 md:gap-10 items-center py-8 hover:bg-stone-50 transition px-3 md:px-5">
              <span className="text-sm font-mono text-slate-400">04</span>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M20 11a8.1 8.1 0 0 1-8 8 8 8 0 1 1 7.2-11.5M20 4v5h-5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition">
                  دائماً محدث
                </h3>
              </div>
              <p className="text-slate-500 leading-7">
                نتابع أحدث الاتجاهات والتقنيات وأفضل الممارسات حتى يظل المحتوى
                مواكبًا لتطور عالم التصوير.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
