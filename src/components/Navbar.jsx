import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <>
        {/* Navbar */}
        <header className="w-full border-b border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-24">
              {/* Logo / Brand */}
              <a href="/" className="flex items-center gap-4 group">
                {/* Logo Image */}
                <div
                  className="w-11 h-11 rounded-full overflow-hidden border-2 border-slate-900
           group-hover:rotate-6 transition-transform duration-300"
                >
                  <img
                    src="logo.png"
                    alt="Photography Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Brand Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl font-black text-slate-900">
                    عدسة
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    عالم التصوير الفوتوغرافي
                  </span>
                </div>
              </a>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <NavLink
                  to="/3dasa"
                  className="relative py-2 text-sm font-semibold text-slate-500
    hover:text-slate-900 transition-colors
    after:absolute after:right-0 after:bottom-0
    after:w-0 after:h-0.5 after:bg-slate-900
    hover:after:w-full after:transition-all"
                >
                  الرئيسية
                </NavLink>

                <NavLink
                  to="/3dasa/blogs"
                  className="relative py-2 text-sm font-semibold text-slate-500
    hover:text-slate-900 transition-colors
    after:absolute after:right-0 after:bottom-0
    after:w-0 after:h-0.5 after:bg-slate-900
    hover:after:w-full after:transition-all"
                >
                  المدونة
                </NavLink>

                <NavLink
                  to="/3dasa/about"
                  className="relative py-2 text-sm font-semibold text-slate-500
    hover:text-slate-900 transition-colors
    after:absolute after:right-0 after:bottom-0
    after:w-0 after:h-0.5 after:bg-slate-900
    hover:after:w-full after:transition-all"
                >
                  من نحن
                </NavLink>
              </nav>
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-3">
                {/* Search */}
                <button
                  type="button"
                  aria-label="البحث"
                  className="w-11 h-11 flex items-center justify-center
           rounded-full border border-slate-200
           text-slate-500
           hover:text-slate-900
           hover:border-slate-900
           transition-all duration-200"
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                {/* CTA */}
                <a
                  href="/blog"
                  className="px-6 py-3 rounded-lg
           bg-slate-900 text-white
           text-sm font-semibold
           hover:bg-slate-700
           transition-colors duration-200"
                >
                  ابدأ القراءة
                </a>
              </div>
              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label="فتح القائمة"
                className="md:hidden w-11 h-11
         flex items-center justify-center
         rounded-lg
         border border-slate-200
         text-slate-700
         hover:border-slate-900
         hover:text-slate-900
         transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </>
    </>
  );
}
