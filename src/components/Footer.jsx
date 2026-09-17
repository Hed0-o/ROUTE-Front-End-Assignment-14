export default function Footer() {
  return (
    <>
      <>
        {/* Footer */}
        <footer className="bg-stone-50 text-slate-800">
          {/* Main Footer */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <a
                  href="/"
                  className="inline-flex items-center gap-3 mb-6 group"
                >
                  {/* Logo */}
                  <div
                    className="w-12 h-12 rounded-2xl bg-slate-900
             flex items-center justify-center
             overflow-hidden
             group-hover:-rotate-3
             transition-transform duration-300"
                  >
                    <img
                      src="logo.png"
                      alt="Photography Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Brand */}
                  <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tight text-slate-900">
                      عدسة
                    </span>
                    <span className="text-xs text-slate-500 mt-1">
                      عالم التصوير الفوتوغرافي
                    </span>
                  </div>
                </a>
                <p className="text-sm text-slate-500 leading-7 mb-7 max-w-sm">
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                  المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/adasah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter"
                    className="w-10 h-10 rounded-full
             border border-slate-200
             bg-white
             flex items-center justify-center
             text-slate-500
             hover:bg-slate-900
             hover:text-white
             hover:-translate-y-1
             transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Github */}
                  <a
                    href="https://github.com/adasah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                    className="w-10 h-10 rounded-full
             border border-slate-200
             bg-white
             flex items-center justify-center
             text-slate-500
             hover:bg-slate-900
             hover:text-white
             hover:-translate-y-1
             transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://linkedin.com/company/adasah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                    className="w-10 h-10 rounded-full
             border border-slate-200
             bg-white
             flex items-center justify-center
             text-slate-500
             hover:bg-slate-900
             hover:text-white
             hover:-translate-y-1
             transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>
                  {/* Youtube */}
                  <a
                    href="https://youtube.com/@adasah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                    className="w-10 h-10 rounded-full
             border border-slate-200
             bg-white
             flex items-center justify-center
             text-slate-500
             hover:bg-slate-900
             hover:text-white
             hover:-translate-y-1
             transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Explore */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-6">
                  استكشف
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      className="group flex items-center gap-3
               text-sm text-slate-500
               hover:text-slate-900
               transition-colors duration-200"
                    >
                      <span
                        className="w-5 h-px bg-slate-300
                 group-hover:w-8
                 group-hover:bg-slate-900
                 transition-all duration-300"
                      />
                      الرئيسية
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="group flex items-center gap-3
               text-sm text-slate-500
               hover:text-slate-900
               transition-colors duration-200"
                    >
                      <span
                        className="w-5 h-px bg-slate-300
                 group-hover:w-8
                 group-hover:bg-slate-900
                 transition-all duration-300"
                      />
                      المدونة
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="group flex items-center gap-3
               text-sm text-slate-500
               hover:text-slate-900
               transition-colors duration-200"
                    >
                      <span
                        className="w-5 h-px bg-slate-300
                 group-hover:w-8
                 group-hover:bg-slate-900
                 transition-all duration-300"
                      />
                      من نحن
                    </a>
                  </li>
                </ul>
              </div>
              {/* Categories */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-6">
                  التصنيفات
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/blog?category=إضاءة"
                      className="group flex items-center gap-3
               text-sm text-slate-500
               hover:text-slate-900
               transition-colors duration-200"
                    >
                      <span
                        className="w-5 h-px bg-slate-300
                 group-hover:w-8
                 group-hover:bg-slate-900
                 transition-all duration-300"
                      />
                      إضاءة
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog?category=بورتريه"
                      className="group flex items-center gap-3
               text-sm text-slate-500
               hover:text-slate-900
               transition-colors duration-200"
                    >
                      <span
                        className="w-5 h-px bg-slate-300
                 group-hover:w-8
                 group-hover:bg-slate-900
                 transition-all duration-300"
                      />
                      بورتريه
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog?category=مناظر طبيعية"
                      className="group flex items-center gap-3
               text-sm text-slate-500
               hover:text-slate-900
               transition-colors duration-200"
                    >
                      <span
                        className="w-5 h-px bg-slate-300
                 group-hover:w-8
                 group-hover:bg-slate-900
                 transition-all duration-300"
                      />
                      مناظر طبيعية
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog?category=تقنيات"
                      className="group flex items-center gap-3
               text-sm text-slate-500
               hover:text-slate-900
               transition-colors duration-200"
                    >
                      <span
                        className="w-5 h-px bg-slate-300
                 group-hover:w-8
                 group-hover:bg-slate-900
                 transition-all duration-300"
                      />
                      تقنيات
                    </a>
                  </li>
                </ul>
              </div>
              {/* Newsletter */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-6">
                  ابقى على اطلاع
                </h3>
                <p className="text-sm text-slate-500 leading-6 mb-5">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-4 py-3.5
             bg-white
             border border-slate-200
             rounded-lg
             text-sm text-slate-900
             placeholder:text-slate-400
             focus:outline-none
             focus:border-slate-900
             transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5
             rounded-lg
             bg-slate-900
             text-white
             text-sm font-semibold
             hover:bg-slate-700
             transition-colors duration-200"
                  >
                    اشترك
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div
                className="flex flex-col md:flex-row
         justify-between items-center
         gap-4"
              >
                {/* Copyright */}
                <p className="text-sm text-slate-400 text-center md:text-right">
                  © 2026 عدسة. صنع بكل
                  <span className="text-slate-900">♥</span>
                  جميع الحقوق محفوظة.
                </p>
                {/* Legal Links */}
                <div className="flex items-center gap-6">
                  <a
                    href="/privacy"
                    className="text-sm text-slate-400
             hover:text-slate-900
             transition-colors duration-200"
                  >
                    سياسة الخصوصية
                  </a>
                  <a
                    href="/terms"
                    className="text-sm text-slate-400
             hover:text-slate-900
             transition-colors duration-200"
                  >
                    شروط الخدمة
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}
