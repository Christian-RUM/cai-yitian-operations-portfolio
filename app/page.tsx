import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff9f6] px-5 py-6 text-zinc-900 md:px-8 md:py-8">
      {/* ================= FIRST SCREEN ================= */}

      <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-stretch">
        {/* ================= LEFT PROFILE ================= */}

        <aside className="flex h-full flex-col rounded-[28px] border border-[#f1dfd8] bg-white/65 p-5 shadow-[0_8px_30px_rgba(74,42,30,0.04)] backdrop-blur">
          {/* Top */}
          <div>
            {/* Profile Photo */}
            <div className="relative mx-auto w-[138px]">
              <div className="overflow-hidden rounded-full border-4 border-white shadow-sm">
                <Image
                  src="/images/profile.jpg"
                  alt="蔡宜恬个人照片"
                  width={500}
                  height={500}
                  priority
                  className="aspect-square w-full object-cover object-[40%_22%]"
                />
              </div>

              <div className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-[#f47f6b]" />
            </div>

            {/* Identity */}
            <div className="mt-5">
              <div className="flex items-end gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  蔡宜恬
                </h2>

                <span className="-rotate-6 pb-1 font-serif text-sm italic text-[#f47f6b]">
                  Yitian
                </span>
              </div>

              <p className="mt-2 text-sm text-zinc-600">
                Operations Portfolio
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                Content · User · Growth
              </p>
            </div>

            {/* Capability List */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3 rounded-2xl border border-[#f5e5df] bg-white/75 px-3 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0ea] text-xs font-medium text-[#f47f6b]">
                  C
                </div>

                <div>
                  <p className="text-xs font-semibold">CONTENT</p>
                  <p className="mt-0.5 text-[11px] text-zinc-400">
                    内容运营
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#f5e5df] bg-white/75 px-3 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0ea] text-xs font-medium text-[#f47f6b]">
                  U
                </div>

                <div>
                  <p className="text-xs font-semibold">USER</p>
                  <p className="mt-0.5 text-[11px] text-zinc-400">
                    用户洞察
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#f5e5df] bg-white/75 px-3 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0ea] text-xs font-medium text-[#f47f6b]">
                  G
                </div>

                <div>
                  <p className="text-xs font-semibold">GROWTH</p>
                  <p className="mt-0.5 text-[11px] text-zinc-400">
                    运营执行
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-6 border-t border-[#f1dfd8] pt-5 lg:mt-auto">
            {/* Buttons */}
            <div className="space-y-2">
              <a
                href="#cases"
                className="flex w-full items-center justify-between rounded-full bg-[#f47f6b] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <span>查看案例</span>
                <span>→</span>
              </a>
            </div>

            {/* Personal Info */}
            <div className="mt-5 space-y-2 text-xs text-zinc-500">
              <p>
                <span className="mr-2 text-[#f47f6b]">●</span>
                Xi&apos;an, China
              </p>

              <p>
                <span className="mr-2 text-[#f47f6b]">●</span>
                2027 Graduate
              </p>
            </div>
          </div>
        </aside>

        {/* ================= RIGHT AREA ================= */}

        <div className="grid gap-5">
          {/* ================= HERO ================= */}

          <section className="relative overflow-hidden rounded-[28px] border border-[#f1dfd8] bg-white/55 px-7 py-8 shadow-[0_8px_30px_rgba(74,42,30,0.035)] backdrop-blur md:px-10 md:py-9">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full bg-[#ffd8cf]/50 blur-3xl" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_0.55fr]">
              {/* Main Hero Text */}
              <div>
                <p className="font-mono text-[11px] tracking-[0.32em] text-[#f47f6b]">
                  01 / OPERATIONS PORTFOLIO
                </p>

                <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                  Hello,
                  <br />
                  I&apos;m{" "}
                  <span className="italic text-[#f47f6b]">Yitian.</span>
                </h1>

                <div className="mt-7 h-px w-10 bg-[#f47f6b]" />

                <p className="mt-5 text-lg font-medium text-zinc-800">
                  用内容连接用户，用数据驱动增长。
                </p>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">
                  I turn content, user signals and data into better operations.
                </p>
              </div>

              {/* Hero Side Note */}
              <div className="relative hidden min-h-[175px] md:block">
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#fff1eb]/60 to-transparent" />

                <div className="absolute bottom-5 right-5 max-w-[180px] text-right">
                  <p className="font-serif text-2xl italic leading-tight text-[#f47f6b]">
                    Listen first.
                    <br />
                    Then create.
                  </p>

                  <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Content · User · Result
                  </p>
                </div>

                <div className="absolute left-8 top-10 h-20 w-20 rounded-full border border-[#f6c4b6]" />
                <div className="absolute left-[78px] top-[76px] h-px w-24 rotate-[-18deg] bg-[#f47f6b]/50" />
              </div>
            </div>
          </section>

          {/* ================= OPERATION EXPERIENCE ================= */}

          <section className="rounded-[28px] border border-[#f1dfd8] bg-white/55 px-7 py-6 shadow-[0_8px_30px_rgba(74,42,30,0.035)] backdrop-blur md:px-10">
            {/* Header */}
            <div className="flex flex-col gap-2 border-b border-[#f3ded6] pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
                  02 / OPERATION EXPERIENCE
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  我的运营经历路径
                </h2>
              </div>

              <p className="max-w-md text-xs leading-relaxed text-zinc-400 md:text-right">
                从校园活动、电商实践到内容运营，
                逐渐形成以用户反馈为输入、以执行结果为导向的工作方式。
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mt-6">
              <div className="absolute left-[8%] right-[8%] top-3 h-px bg-[#efcfc4]" />

              <div className="relative grid grid-cols-3">
                {["2019", "2020", "2023—NOW"].map((year) => (
                  <div key={year} className="text-center">
                    <div className="mx-auto h-6 w-6 rounded-full border-4 border-[#fff9f6] bg-[#f47f6b]" />

                    <p className="mt-2 font-mono text-[10px] text-zinc-400">
                      {year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Cards */}
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-[#f6e7e1] bg-white/70 p-4">
                <p className="text-[10px] font-medium tracking-wider text-[#f47f6b]">
                  CAMPUS
                </p>

                <h3 className="mt-2 text-sm font-semibold">
                  校园活动运营
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  活动策划 · 内容传播 · 用户互动
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <p className="text-2xl font-semibold text-[#f47f6b]">
                    2000+
                  </p>

                  <p className="pb-1 text-[10px] text-zinc-400">
                    互动评论
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#f6e7e1] bg-white/70 p-4">
                <p className="text-[10px] font-medium tracking-wider text-[#f47f6b]">
                  COMMERCE
                </p>

                <h3 className="mt-2 text-sm font-semibold">
                  个人电商实践
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  选品测试 · 策略调整 · 用户反馈
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <p className="text-2xl font-semibold text-[#f47f6b]">
                    ¥23K+
                  </p>

                  <p className="pb-1 text-[10px] text-zinc-400">
                    运营成交
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#f6e7e1] bg-white/70 p-4">
                <p className="text-[10px] font-medium tracking-wider text-[#f47f6b]">
                  CONTENT
                </p>

                <h3 className="mt-2 text-sm font-semibold">
                  内容创作运营
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  长篇创作 · 社媒内容 · 用户观察
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <p className="text-2xl font-semibold text-[#f47f6b]">
                    56W+
                  </p>

                  <p className="pb-1 text-[10px] text-zinc-400">
                    内容产出
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ================= SELECTED OPERATIONS ================= */}

<section
  id="cases"
  className="mx-auto mt-6 max-w-7xl border-t border-[#f1dfd8] pt-10"
>
  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        03 / SELECTED OPERATIONS
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        精选运营实践
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
        从真实交易、内容生产到校园平台运营，
        在不同场景中观察用户信号、执行运营动作，并根据结果持续调整。
      </p>
    </div>

    <p className="font-mono text-[10px] tracking-[0.18em] text-zinc-400">
      COMMERCE · CONTENT · COMMUNITY
    </p>
  </div>

  {/* Case Grid */}
  <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
    {/* ================= CASE 01 / COMMERCE ================= */}

    <article className="group relative overflow-hidden rounded-[30px] border border-[#f1dfd8] bg-white/65 shadow-[0_8px_30px_rgba(74,42,30,0.035)]">
      {/* Visual */}
      <div className="relative min-h-[260px] overflow-hidden border-b border-[#f1dfd8] bg-gradient-to-br from-[#fff0ea] via-[#fff9f6] to-[#ffdcd2]/55 p-7">
        <div className="absolute -right-12 -top-14 h-52 w-52 rounded-full bg-[#f6a28e]/20 blur-3xl" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[#f47f6b] px-3 py-1 font-mono text-[10px] text-white">
              01 / COMMERCE
            </span>

            <span className="font-mono text-[10px] tracking-wider text-zinc-400">
              REAL BUSINESS PRACTICE
            </span>
          </div>

          <div className="mt-16">
            <p className="font-serif text-5xl italic text-[#f47f6b]">
              ¥23K+
            </p>

            <p className="mt-2 text-xs tracking-wider text-zinc-500">
              2020 OPERATION PERIOD
            </p>
          </div>

          {/* Mini visual blocks */}
          <div className="mt-8 grid grid-cols-4 gap-2">
            {["TEST", "COMPARE", "ADJUST", "FOCUS"].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/80 bg-white/65 px-3 py-3 backdrop-blur"
              >
                <p className="font-mono text-[9px] text-[#f47f6b]">
                  0{index + 1}
                </p>

                <p className="mt-1 text-[10px] font-medium text-zinc-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="p-7 md:p-8">
        <h3 className="text-2xl font-semibold">
          闲鱼经营实践
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
          从多品类小规模测试开始，根据销量、利润空间、供应商价格变化与客服成本持续调整，
          最终逐步聚焦更熟悉、利润空间更高的动漫周边方向。
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "选品测试",
            "价格比较",
            "供应链调整",
            "用户反馈",
            "品类聚焦",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#f1dfd8] bg-[#fff9f6] px-3 py-1 text-[11px] text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
{/* Strategy Shift */}
<div className="mt-7 flex flex-col gap-4 rounded-2xl border border-[#f1dfd8] bg-[#fffaf7] p-5 md:flex-row md:items-center md:justify-between">
  <div>
    <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
      STRATEGY SHIFT
    </p>

    <p className="mt-2 text-sm font-semibold">
      多品类测试 → 聚焦更适合自己的经营方向
    </p>

    <p className="mt-2 text-xs leading-relaxed text-zinc-500">
      根据利润空间、供货变化与客服成本持续调整，后期逐步转向更熟悉的动漫周边品类。
    </p>
  </div>

  <p className="shrink-0 font-serif text-2xl italic text-[#f4aa99]">
    Test → Focus
  </p>
</div>
        <div className="mt-7 flex items-center justify-between border-t border-[#f1dfd8] pt-5">
          <p className="text-xs text-zinc-400">
            TEST → COMPARE → ADJUST → FOCUS → CONVERT
          </p>

          <Link
          href="/case-commerce"
           className="text-[#f47f6b] transition hover:opacity-60"
          >
            View Case →
          </Link>
        </div>
      </div>
    </article>

    {/* ================= RIGHT COLUMN ================= */}

    <div className="grid gap-5">
      {/* CASE 02 / CONTENT */}

      <article className="group rounded-[30px] border border-[#f1dfd8] bg-white/65 p-7 shadow-[0_8px_30px_rgba(74,42,30,0.035)]">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#fff0ea] px-3 py-1 font-mono text-[10px] text-[#f47f6b]">
            02 / CONTENT
          </span>

          <span className="font-mono text-[9px] tracking-wider text-zinc-400">
            CONTENT OPERATION
          </span>
        </div>

        <h3 className="mt-6 text-xl font-semibold">
          晋江小说 × 小红书内容实践
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          从长篇内容架构与持续创作，到社交平台选题、文案与内容推荐，
          观察用户兴趣、互动反馈与内容传播表现。
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-[#fff7f3] p-3">
            <p className="text-2xl font-semibold text-[#f47f6b]">
              56W+
            </p>
            <p className="mt-1 text-[10px] text-zinc-400">
              内容产出
            </p>
          </div>

          <div className="rounded-2xl bg-[#fff7f3] p-3">
            <p className="text-2xl font-semibold text-[#f47f6b]">
            249K+
            </p>
            <p className="mt-1 text-[9px] text-zinc-400">
             作品总点击
               </p>
            </div>

          <div className="rounded-2xl bg-[#fff7f3] p-3">
            <p className="text-2xl font-semibold text-[#f47f6b]">
              3K+
            </p>
            <p className="mt-1 text-[10px] text-zinc-400">
              内容收藏
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[#f1dfd8] pt-4">
          <p className="text-[10px] text-zinc-400">
            CREATE → DISTRIBUTE → OBSERVE
          </p>

         <Link
           href="/case-content"
            className="text-[#f47f6b] transition hover:opacity-60"
           >
             View Case →
           </Link>
        </div>
      </article>

      {/* CASE 03 / COMMUNITY */}

      <article className="group rounded-[30px] border border-[#f1dfd8] bg-white/65 p-7 shadow-[0_8px_30px_rgba(74,42,30,0.035)]">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#fff0ea] px-3 py-1 font-mono text-[10px] text-[#f47f6b]">
            03 / COMMUNITY
          </span>

          <span className="font-mono text-[9px] tracking-wider text-zinc-400">
            PLATFORM OPERATION
          </span>
        </div>

        <h3 className="mt-6 text-xl font-semibold">
          易班校园平台运营
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          在学生站长任期内参与推进平台内容建设、团队机制完善与新人培训，
          将内容生产、人员协作和平台运营持续连接起来。
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-[#fff7f3] p-3">
            <p className="text-2xl font-semibold text-[#f47f6b]">
              ~300
            </p>
            <p className="mt-1 text-[10px] text-zinc-400">
              内容发布
            </p>
          </div>

          <div className="rounded-2xl bg-[#fff7f3] p-3">
            <p className="text-2xl font-semibold text-[#f47f6b]">
              35
            </p>
            <p className="mt-1 text-[10px] text-zinc-400">
              机构群
            </p>
          </div>

          <div className="rounded-2xl bg-[#fff7f3] p-3">
            <p className="text-2xl font-semibold text-[#f47f6b]">
              153
            </p>
            <p className="mt-1 text-[10px] text-zinc-400">
              公共号
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[#f1dfd8] pt-4">
          <p className="text-[10px] text-zinc-400">
            ORGANIZE → TRAIN → PUBLISH
          </p>

          <Link
             href="/case-community"
              className="text-[#f47f6b] transition hover:opacity-60"
              >
           View Case →
         </Link>
        </div>
      </article>
    </div>
  </div>
</section>
{/* ================= USER SIGNALS ================= */}

<section className="mx-auto mt-14 max-w-7xl border-t border-[#f1dfd8] pt-10">
  {/* Header */}
  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        04 / USER SIGNALS
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        我如何读取用户反馈
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
        运营结果不只存在于数字里。用户说了什么、做了什么，
        都可以成为下一轮判断与调整的输入。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Feedback → Next Input
    </p>
  </div>

  {/* Two Columns */}
  <div className="mt-8 grid gap-5 lg:grid-cols-2">

    {/* Qualitative */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#f47f6b]">
            QUALITATIVE
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            用户说了什么
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[10px] text-[#f47f6b]">
          COMMERCE
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {[
          ["孩子非常喜欢，质量也不错。", "PRODUCT FIT"],
          ["发货快，包装也保存得很好。", "FULFILLMENT"],
          ["物品不错，值得购买。", "SATISFACTION"],
        ].map(([quote, signal]) => (
          <div
            key={signal}
            className="flex items-center justify-between gap-5 rounded-2xl border border-[#f5e5df] bg-[#fffaf7] px-4 py-4"
          >
            <p className="text-sm leading-relaxed text-zinc-600">
              “{quote}”
            </p>

            <span className="shrink-0 rounded-full bg-white px-3 py-1 font-mono text-[9px] text-[#f47f6b]">
              {signal}
            </span>
          </div>
        ))}
      </div>
    </article>

    {/* Behaviour */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#f47f6b]">
            BEHAVIOR
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            用户做了什么
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[10px] text-[#f47f6b]">
          CONTENT
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-[#fff7f3] p-4">
          <p className="text-3xl font-semibold text-[#f47f6b]">
           10,497
           </p>

         <p className="mt-2 text-xs font-medium">
         CLICKS
         </p>

         <p className="mt-1 text-[10px] text-zinc-400">
          首章点击
         </p>
        </div>

        <div className="rounded-2xl bg-[#fff7f3] p-4">
          <p className="text-3xl font-semibold text-[#f47f6b]">
            3K+
          </p>

          <p className="mt-2 text-xs font-medium">
            SAVE
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            用户收藏
          </p>
        </div>

        <div className="rounded-2xl bg-[#fff7f3] p-4">
          <p className="text-3xl font-semibold text-[#f47f6b]">
            ♥
          </p>

          <p className="mt-2 text-xs font-medium">
            INTERACT
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            点赞 · 评论
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[#f5e5df] bg-[#fffaf7] p-4">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          WHAT I LOOK FOR
        </p>

        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          不只判断内容是否“发出去”，还观察用户是否愿意点击、
          收藏、评论，以及不同选题和表达带来的反馈差异。
        </p>
      </div>
    </article>

  </div>

  {/* Closing line */}
  <p className="mt-6 text-center font-serif text-lg italic text-zinc-400">
    Feedback is not decoration. It is the next input.
  </p>
</section>
{/* ================= USER INSIGHT ================= */}

<section className="mx-auto mt-14 max-w-7xl border-t border-[#f1dfd8] pt-10">
  {/* Header */}
  <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
    {/* Left */}
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        05 / USER INSIGHT
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        从用户反馈，到系统研究
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
        当评论和行为数据不足以解释问题时，
        我也会通过问卷、访谈与实地观察进一步理解用户需求，
        将零散反馈转化为可以分析和比较的信息。
      </p>

      <p className="mt-6 font-serif text-xl italic text-[#f4aa99]">
        Ask → Analyze → Synthesize
      </p>
    </div>

    {/* Right Research Card */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7 shadow-[0_8px_30px_rgba(74,42,30,0.035)]">
      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            2
          </p>

          <p className="mt-3 text-xs font-medium">
            FIELD ROUNDS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            两轮实地调研
          </p>
        </div>

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            230
          </p>

          <p className="mt-3 text-xs font-medium">
            VALID SAMPLES
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            有效问卷样本
          </p>
        </div>

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            ~15
          </p>

          <p className="mt-3 text-xs font-medium">
            INTERVIEWS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            深度访谈
          </p>
        </div>
      </div>

      {/* Research Logic */}
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-[#f5e5df] bg-white/70 p-4">
          <p className="font-mono text-[9px] text-[#f47f6b]">
            01 / ASK
          </p>

          <h3 className="mt-2 text-sm font-semibold">
            获取用户声音
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            问卷、访谈与现场观察
          </p>
        </div>

        <div className="rounded-2xl border border-[#f5e5df] bg-white/70 p-4">
          <p className="font-mono text-[9px] text-[#f47f6b]">
            02 / ANALYZE
          </p>

          <h3 className="mt-2 text-sm font-semibold">
            整理差异与规律
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            数据清洗、统计与对比
          </p>
        </div>

        <div className="rounded-2xl border border-[#f5e5df] bg-white/70 p-4">
          <p className="font-mono text-[9px] text-[#f47f6b]">
            03 / SYNTHESIZE
          </p>

          <h3 className="mt-2 text-sm font-semibold">
            提炼用户洞察
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            将反馈转化为问题与需求
          </p>
        </div>
      </div>

      {/* Takeaway */}
      <div className="mt-6 border-t border-[#f1dfd8] pt-5">
        <p className="text-sm leading-relaxed text-zinc-500">
          对我来说，用户研究的价值不是“做了一份问卷”，
          而是把主观感受转化为更有依据的运营判断。
        </p>
      </div>
    </div>
  </div>
</section>
{/* ================= HOW I OPERATE ================= */}

<section className="mx-auto mt-14 max-w-7xl border-t border-[#f1dfd8] pt-10">

  {/* Header */}
  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        06 / HOW I OPERATE
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        我的运营工作方式
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
        我更习惯从真实用户信号出发，把问题拆成可以执行的动作，
        再根据数据与反馈持续调整。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Listen → Create → Iterate
    </p>
  </div>


  {/* Workflow */}
  <div className="mt-8 grid gap-3 md:grid-cols-5">

    {[
      {
        number: "01",
        english: "LISTEN",
        chinese: "理解用户",
        text: "观察场景、反馈与真实需求",
      },
      {
        number: "02",
        english: "CREATE",
        chinese: "形成方案",
        text: "把洞察转化为内容、策略与动作",
      },
      {
        number: "03",
        english: "LAUNCH",
        chinese: "执行落地",
        text: "推进发布、运营与协作执行",
      },
      {
        number: "04",
        english: "MEASURE",
        chinese: "读取结果",
        text: "观察数据、互动与用户反馈",
      },
      {
        number: "05",
        english: "ITERATE",
        chinese: "持续优化",
        text: "根据结果调整下一轮运营动作",
      },
    ].map((step) => (

      <div
        key={step.number}
        className="relative rounded-[24px] border border-[#f1dfd8] bg-white/60 p-5"
      >

        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#f47f6b]">
            {step.number}
          </span>

          <div className="h-2 w-2 rounded-full bg-[#f47f6b]" />
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-[0.16em] text-[#f47f6b]">
          {step.english}
        </p>

        <h3 className="mt-2 text-base font-semibold">
          {step.chinese}
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          {step.text}
        </p>

      </div>

    ))}

  </div>


  {/* Closing */}
  <div className="mt-6 rounded-[24px] border border-[#f1dfd8] bg-[#fffaf7] px-6 py-5">
    <p className="text-sm leading-relaxed text-zinc-500">
      不同项目的业务场景并不相同，但我的工作逻辑始终比较稳定：
      <span className="font-medium text-zinc-800">
        先理解用户与问题，再执行动作，并让反馈进入下一轮决策。
      </span>
    </p>
  </div>

</section>
{/* ================= ABOUT + CONTACT ================= */}

<section className="mx-auto mt-14 max-w-7xl border-t border-[#f1dfd8] pt-10 pb-8">

  <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

    {/* About */}
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        07 / ABOUT + CONTACT
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        关于我
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        我喜欢观察用户为什么点击、为什么停留、为什么愿意再次回来。
        过去的经历横跨内容创作、校园平台运营、用户研究和小规模商业实践，
        但持续不变的是：理解反馈、执行动作，并根据结果继续调整。
      </p>

      <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-[#f4aa99]">
        I care about what people notice, click, stay for, and come back to.
      </p>
    </div>


    {/* Contact Actions */}
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">

      <a
        href="/cai-yitian-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-2xl border border-[#f1dfd8] bg-white/65 px-5 py-4 transition hover:border-[#f47f6b]"
      >
        <div>
          <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
            RESUME
          </p>

          <p className="mt-1 text-sm font-medium">
            查看个人简历
          </p>
        </div>

        <span className="text-[#f47f6b] transition group-hover:translate-x-1">
          ↗
        </span>
      </a>

      <a
        href="mailto:caiyitian0298@163.com"
        className="group flex items-center justify-between rounded-2xl border border-[#f1dfd8] bg-white/65 px-5 py-4 transition hover:border-[#f47f6b]"
      >
        <div>
          <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
            EMAIL
          </p>

          <p className="mt-1 text-sm font-medium">
            caiyitian0298@163.com
          </p>
        </div>

        <span className="text-[#f47f6b] transition group-hover:translate-x-1">
          →
        </span>
      </a>

    </div>

  </div>


  {/* Footer */}
  <div className="mt-10 flex flex-col gap-3 border-t border-[#f1dfd8] pt-5 text-[10px] text-zinc-400 md:flex-row md:items-center md:justify-between">

    <p>
      CAI YITIAN · OPERATIONS PORTFOLIO · 2026
    </p>

    <p>
      Content · User · Growth
    </p>

  </div>

</section>
    </main>
  );
}