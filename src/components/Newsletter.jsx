export default function Newsletter() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2rem bg-stone-100 border border-stone-200">
            {/* Decorative shapes */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-stone-200" />
            <div className="absolute -bottom-32 -left-20 w-64 h-64 rounded-full border-40px border-white" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-12 items-center p-8 md:p-12 lg:p-16">
              {/* Content */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-slate-500">
                    النشرة الأسبوعية
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-5">
                  خلي التصوير جزء منك
                </h2>
                <p className="text-lg leading-8 text-slate-600 max-w-xl">
                  نصائح عملية، تقنيات جديدة، ودروس مختارة تساعدك على تطوير
                  مهاراتك في التصوير، مباشرة إلى بريدك الإلكتروني.
                </p>
              </div>
              {/* Subscription */}
              <div className="w-full lg:w-97.5">
                <form className="space-y-3">
                  <label
                    htmlFor="newsletter-email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    بريدك الإلكتروني
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-stone-300 text-slate-900 placeholder-slate-400 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
                  >
                    اشترك في النشرة
                  </button>
                </form>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span>+10,000 مصور</span>
                  <span className="text-stone-300">•</span>
                  <span>بدون إزعاج</span>
                  <span className="text-stone-300">•</span>
                  <span>إلغاء الاشتراك في أي وقت</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
