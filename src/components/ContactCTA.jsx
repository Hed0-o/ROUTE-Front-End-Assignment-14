export default function ContactCTA() {
  return (
    <>
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] overflow-hidden border border-stone-200">
            {/* Content */}
            <div className="bg-white p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-semibold tracking-widest text-slate-400 mb-5">
                تواصل معنا
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                لديك أسئلة؟
                <br />
                <span className="text-slate-400">دعنا نتحدث.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-8 max-w-xl mb-10">
                نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد
                المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل معنا.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@adasah.com"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  تواصل معنا
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-stone-300 text-slate-700 font-semibold hover:bg-stone-100 transition"
                >
                  تصفح المقالات
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Visual Side */}
            <div className="bg-slate-900 p-8 sm:p-12 lg:p-10 flex flex-col justify-between min-h-80">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono tracking-widest text-slate-500">
                  ADASAH / 04
                </span>
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-3">
                  هل لديك فكرة أو سؤال؟
                </p>
                <p className="text-white text-2xl font-semibold leading-relaxed">
                  كل رسالة تصل إلينا
                  <br />
                  تستحق أن تُقرأ.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-slate-800">
                <span className="text-sm text-slate-500">hello@adasah.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
