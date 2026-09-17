export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Decorative Shapes */}
      <div
        className="
          absolute
          -left-32 -top-32
          h-96 w-96
          rounded-full
          border border-slate-700
        "
      />

      <div
        className="
          absolute
          -bottom-48 -right-48
          h-150 w-150
          rounded-full
          border border-slate-800
        "
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Label */}
        <div
          className="
            mb-6
            inline-flex
            items-center
            gap-3
            rounded-full
            border border-slate-700
            bg-slate-800/70
            px-4 py-2
          "
        >
          <span className="h-2 w-2 rounded-full bg-white" />

          <span className="text-sm font-medium text-slate-300">من نحن</span>
        </div>

        {/* Heading */}
        <h1
          className="
            mb-6
            text-4xl
            font-black
            leading-tight
            tracking-tight
            text-white
            md:text-5xl
            lg:text-6xl
          "
        >
          مهمتنا هي <span className="text-slate-400">الإعلام والإلهام</span>
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
            md:text-xl
          "
        >
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
          ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
          المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        {/* Statistics */}
        <div
          className="
            mx-auto
            grid
            max-w-4xl
            grid-cols-2
            gap-3
            md:grid-cols-4
          "
        >
          {/* Readers */}
          <div
            className="
              rounded-2xl
              border border-slate-700
              bg-slate-800/60
              p-6
            "
          >
            <div className="mb-2 text-3xl font-black text-white">+2مليون</div>

            <div className="text-sm text-slate-500">قارئ شهرياً</div>
          </div>

          {/* Articles */}
          <div
            className="
              rounded-2xl
              border border-slate-700
              bg-slate-800/60
              p-6
            "
          >
            <div className="mb-2 text-3xl font-black text-white">+500</div>

            <div className="text-sm text-slate-500">مقالة منشورة</div>
          </div>

          {/* Writers */}
          <div
            className="
              rounded-2xl
              border border-slate-700
              bg-slate-800/60
              p-6
            "
          >
            <div className="mb-2 text-3xl font-black text-white">+50</div>

            <div className="text-sm text-slate-500">كاتب خبير</div>
          </div>

          {/* Categories */}
          <div
            className="
              rounded-2xl
              border border-slate-700
              bg-slate-800/60
              p-6
            "
          >
            <div className="mb-2 text-3xl font-black text-white">+15</div>

            <div className="text-sm text-slate-500">تصنيف</div>
          </div>
        </div>
      </div>
    </section>
  );
}
