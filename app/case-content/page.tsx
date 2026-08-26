import Image from "next/image";
import Link from "next/link";

export default function ContentCasePage() {
  return (
    <main className="min-h-screen bg-[#fff9f6] px-5 py-6 text-zinc-900 md:px-8 md:py-8">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-[#f47f6b]"
        >
          ← BACK TO HOME
        </Link>

        {/* Case Header */}
        <section className="mt-10 border-t border-[#f1dfd8] pt-10">
          <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
            CASE 02 / CONTENT
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            晋江小说 × 小红书内容实践
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500">
            从长篇内容架构与持续创作，到社交平台选题、表达与内容推荐，
            我逐步形成了从内容生产、用户反馈到下一轮调整的实践路径。
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "长篇内容创作",
              "内容结构",
              "平台表达",
              "选题观察",
              "用户反馈",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#f1dfd8] bg-white/60 px-3 py-1.5 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ================= CONTENT FOUNDATION ================= */}

<section className="mt-12 border-t border-[#f1dfd8] pt-10">
  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">

    {/* Left */}
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        01 / CONTENT FOUNDATION
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        先把内容做深，再理解用户为什么留下
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
        长篇小说创作让我第一次持续面对一个内容问题：
        如何在较长的阅读周期中维持结构、节奏与人物关系，
        同时根据真实阅读反馈不断理解用户兴趣。
      </p>

      <p className="mt-6 font-serif text-xl italic text-[#f4aa99]">
        Create for continuity.
      </p>
      <div className="mt-10 max-w-[260px] border-t border-[#f1dfd8] pt-5">
  <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
    LONG-FORM PRACTICE
  </p>

  <div className="mt-4 flex items-center gap-3 text-[10px] tracking-[0.12em] text-zinc-400">
    <span>CREATE</span>
    <span className="text-[#f4aa99]">→</span>
    <span>SUSTAIN</span>
    <span className="text-[#f4aa99]">→</span>
    <span>OBSERVE</span>
  </div>
</div>
    </div>

    {/* Right */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      {/* Metrics */}
      <div className="grid gap-3 sm:grid-cols-3">

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            56W+
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wider text-zinc-500">
            CONTENT OUTPUT
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            长篇内容产出
          </p>
        </div>

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            10,497
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wider text-zinc-500">
            FIRST-CHAPTER CLICKS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            首章点击
          </p>
        </div>

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            3K+
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wider text-zinc-500">
            COLLECTIONS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            内容收藏
          </p>
        </div>

      </div>

      {/* Content Logic */}
      <div className="mt-6 border-t border-[#f1dfd8] pt-6">
        <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
          WHAT LONG-FORM CREATION TRAINED
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "内容架构",
              text: "提前组织故事主线、人物关系与章节推进。",
            },
            {
              number: "02",
              title: "持续生产",
              text: "在长周期创作中保持内容连续性与表达稳定性。",
            },
            {
              number: "03",
              title: "反馈观察",
              text: "从点击、收藏与读者互动中观察内容吸引力。",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-[#f5e5df] bg-[#fffaf7] p-4"
            >
              <p className="font-mono text-[9px] text-[#f47f6b]">
                {item.number}
              </p>

              <h3 className="mt-3 text-sm font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Takeaway */}
      <div className="mt-6 rounded-2xl bg-[#fff3ee] px-5 py-4">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          CONTENT FOUNDATION
        </p>

        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          这段经历让我意识到，内容运营并不只是“写出来”，
          还需要考虑用户为什么点进来、为什么愿意继续阅读，以及什么内容值得被留下。
        </p>
      </div>

    </div>
  </div>
</section>
{/* ================= PLATFORM ADAPTATION ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">

  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        02 / PLATFORM ADAPTATION
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        从长篇创作，到适配社交平台表达
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        从晋江转向小红书后，我开始面对另一类内容问题：
        用户停留时间更短，选题、标题、信息密度与表达方式都需要重新组织。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Same content instinct, different platform.
    </p>
  </div>


  {/* Main Content */}
  <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

    {/* Left */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">
      <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
        WHAT CHANGED
      </p>

      <div className="mt-6 space-y-5">

        <div className="border-b border-[#f1dfd8] pb-5">
          <p className="font-mono text-[9px] text-[#f47f6b]">
            01 / TOPIC
          </p>

          <h3 className="mt-2 text-base font-semibold">
            先判断什么值得被讲
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            从长篇内容的连续推进，转向更强调单篇主题是否明确、
            是否能快速建立用户兴趣。
          </p>
        </div>

        <div className="border-b border-[#f1dfd8] pb-5">
          <p className="font-mono text-[9px] text-[#f47f6b]">
            02 / EXPRESSION
          </p>

          <h3 className="mt-2 text-base font-semibold">
            把信息重新包装
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            调整标题、开头与正文结构，让信息更适合碎片化浏览场景。
          </p>
        </div>

        <div>
          <p className="font-mono text-[9px] text-[#f47f6b]">
            03 / RECOMMEND
          </p>

          <h3 className="mt-2 text-base font-semibold">
            内容不只来自原创，也来自发现
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            除原创内容外，我也会观察平台中的优质创作者，
            判断哪些内容值得进一步推荐与分享。
          </p>
        </div>

      </div>
    </div>


    {/* Right */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-[#fffaf7] p-7">
      <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
        CONTENT PRACTICE
      </p>

      <h3 className="mt-3 text-2xl font-semibold">
        我在小红书中尝试的两类内容动作
      </h3>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {/* Original */}
        <div className="rounded-2xl border border-[#f1dfd8] bg-white/70 p-5">
          <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
            ORIGINAL
          </span>

          <h4 className="mt-5 text-base font-semibold">
            原创内容表达
          </h4>

          <p className="mt-3 text-xs leading-relaxed text-zinc-500">
            将自己的观察与内容重新组织为适合社交平台阅读的表达，
            练习更短、更直接的信息呈现方式。
          </p>

          <p className="mt-5 font-mono text-[9px] tracking-[0.14em] text-zinc-400">
            2 POSTS / SELF-WRITTEN
          </p>
        </div>

        {/* Curation */}
        <div className="rounded-2xl border border-[#f1dfd8] bg-white/70 p-5">
          <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
            CURATION
          </span>

          <h4 className="mt-5 text-base font-semibold">
            创作者发现与推荐
          </h4>

          <p className="mt-3 text-xs leading-relaxed text-zinc-500">
            观察平台内容与创作者表达，判断值得推荐的内容，
            并从中理解用户可能感兴趣的主题与呈现方式。
          </p>

          <p className="mt-5 font-mono text-[9px] tracking-[0.14em] text-zinc-400">
            1 CREATOR / DISCOVERED & RECOMMENDED
          </p>
        </div>

      </div>


      {/* Flow */}
      <div className="mt-6 border-t border-[#f1dfd8] pt-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          PLATFORM LOGIC
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span>SELECT</span>
          <span className="text-[#f4aa99]">→</span>
          <span>PACKAGE</span>
          <span className="text-[#f4aa99]">→</span>
          <span>PUBLISH</span>
          <span className="text-[#f4aa99]">→</span>
          <span>OBSERVE</span>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= USER SIGNALS ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">

  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        03 / USER SIGNALS
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        内容发布之后，我更关注用户留下了什么信号
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        从长篇阅读到社交平台互动，不同反馈代表不同层级的用户意愿。
        我会结合点击、收藏、点赞与评论，判断内容是否真正建立了兴趣与价值。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Publish, then listen.
    </p>
  </div>


  {/* Main Signals */}
  <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

    {/* ================= JINJIANG ================= */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            JINJIANG / READING SIGNALS
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            长篇内容的阅读反馈
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          LONG-FORM
        </span>
      </div>


      {/* Metrics */}
      <div className="mt-7 grid grid-cols-2 gap-3">

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            10,497
          </p>

          <p className="mt-3 text-xs font-semibold">
            FIRST-CHAPTER CLICKS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            首章点击
          </p>
        </div>


        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            3K+
          </p>

          <p className="mt-3 text-xs font-semibold">
            COLLECTIONS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            内容收藏
          </p>
        </div>

      </div>


      {/* Interpretation */}
      <div className="mt-5 border-t border-[#f1dfd8] pt-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          HOW I READ IT
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500">
          <span className="rounded-full bg-[#fff0ea] px-3 py-2">
            点击
          </span>

          <span className="text-[#f4aa99]">
            →
          </span>

          <span className="rounded-full bg-[#fff0ea] px-3 py-2">
            收藏
          </span>

          <span className="text-[#f4aa99]">
            →
          </span>

          <span>从进入内容，到愿意留下</span>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          点击证明用户愿意进入内容，而收藏进一步反映内容是否具有持续阅读或再次查看的价值。
        </p>
      </div>

    </article>


    {/* ================= XIAOHONGSHU ================= */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-[#fffaf7] p-7">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            XIAOHONGSHU / SOCIAL SIGNALS
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            社交平台中的即时内容反馈
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          3 SAMPLES
        </span>
      </div>


      {/* Sample 01 */}
      <div className="mt-7 grid gap-3">

        <div className="rounded-2xl border border-[#f1dfd8] bg-white/70 px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-mono text-[9px] tracking-[0.16em] text-[#f47f6b]">
                CONTENT SAMPLE 01
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                社交平台内容反馈样本
              </p>
            </div>

            <div className="flex gap-6">
              <div>
                <p className="text-xl font-semibold text-[#f47f6b]">
                  165
                </p>
                <p className="text-[9px] text-zinc-400">
                  点赞
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-[#f47f6b]">
                  91
                </p>
                <p className="text-[9px] text-zinc-400">
                  收藏
                </p>
              </div>

          
            </div>

          </div>
        </div>


        {/* Sample 02 */}
        <div className="rounded-2xl border border-[#f1dfd8] bg-white/70 px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-mono text-[9px] tracking-[0.16em] text-[#f47f6b]">
                CONTENT SAMPLE 02
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                社交平台内容反馈样本
              </p>
            </div>

            <div className="flex gap-6">
              <div>
                <p className="text-xl font-semibold text-[#f47f6b]">
                  146
                </p>
                <p className="text-[9px] text-zinc-400">
                  点赞
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-[#f47f6b]">
                  86
                </p>
                <p className="text-[9px] text-zinc-400">
                  收藏
                </p>
              </div>

              
            </div>

          </div>
        </div>


        {/* Sample 03 */}
        <div className="rounded-2xl border border-[#f1dfd8] bg-white/70 px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-mono text-[9px] tracking-[0.16em] text-[#f47f6b]">
                CONTENT SAMPLE 03
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                社交平台内容反馈样本
              </p>
            </div>

            <div className="flex gap-6">
              <div>
                <p className="text-xl font-semibold text-[#f47f6b]">
                  172
                </p>
                <p className="text-[9px] text-zinc-400">
                  点赞
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-[#f47f6b]">
                  121
                </p>
                <p className="text-[9px] text-zinc-400">
                  收藏
                </p>
              </div>

             
            </div>

          </div>
        </div>

      </div>


      {/* Note */}
      <p className="mt-5 text-[10px] leading-relaxed text-zinc-400">
        注：以上为 3 个内容实践样本的公开互动数据，
        包含原创内容与创作者发现 / 推荐内容，不将全部样本表述为个人原创。
      </p>

    </article>

  </div>


  {/* ================= Insight ================= */}
  <div className="mt-5 rounded-[26px] border border-[#f1dfd8] bg-white/60 px-6 py-5">

    <div className="grid gap-5 md:grid-cols-[0.65fr_1.35fr] md:items-center">

      <div>
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          HOW I READ USER SIGNALS
        </p>

        <p className="mt-3 font-serif text-xl italic text-[#f4aa99]">
          Attention is not the same as value.
        </p>
      </div>


      <div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">

          <span className="rounded-full bg-[#fff0ea] px-3 py-2">
  CLICK
</span>

<span className="text-[#f4aa99]">
  →
</span>

<span>愿意进入</span>

<span className="text-[#f4aa99]">
  →
</span>

<span className="rounded-full bg-[#fff0ea] px-3 py-2">
  SAVE
</span>

<span className="text-[#f4aa99]">
  →
</span>

<span>愿意留下</span>

<span className="text-[#f4aa99]">
  →
</span>

<span className="rounded-full bg-[#fff0ea] px-3 py-2">
  LIKE
</span>

<span className="text-[#f4aa99]">
  →
</span>

<span>产生即时兴趣</span>

        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          我不会把所有互动简单理解为“数据越高越好”，
          而是结合不同平台和内容场景，判断用户是在产生兴趣、
          认为内容有保存价值，还是愿意进一步表达观点。
        </p>
      </div>

    </div>
  </div>

</section>

{/* ================= CONTENT SYSTEM & PROOF ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">

  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        04 / CONTENT SYSTEM & PROOF
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        从内容设定，到持续交付
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        长篇内容能够持续推进，并不只是依赖灵感。
        我会提前梳理人物关系、故事线与阶段任务，
        再把复杂内容逐步拆解到可以持续执行的章节与事件中。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Structure before scale.
    </p>
  </div>


  {/* Main Grid */}
  <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">

    {/* ================= LEFT / CONTENT SYSTEM ================= */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      <div>
        <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
          EVIDENCE 01 / CONTENT SYSTEM
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          长篇内容并不是边写边想
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          在长周期创作中，我会提前拆分故事线、人物关系与阶段任务，
          让不同内容线索能够在较长的更新周期中持续推进。
        </p>
      </div>


      {/* Main Architecture Image */}
      <div className="mt-7">
        <div className="relative h-[260px] overflow-hidden rounded-2xl border border-[#f1dfd8] bg-[#fffaf7]">
          <Image
            src="/operations/content/story-architecture.png"
            alt="长篇内容多线结构规划局部"
            fill
            className="object-cover object-left transition duration-500 hover:scale-[1.01]"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent px-5 pb-4 pt-16">
            <p className="font-mono text-[9px] tracking-[0.16em] text-[#f47f6b]">
              STORY ARCHITECTURE
            </p>

            <p className="mt-1 text-xs font-medium text-zinc-700">
              多线内容结构与长期发展规划
            </p>
          </div>
        </div>
      </div>


      {/* Detail Images */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">

        {/* Task Progression */}
        <div>
          <div className="relative h-[190px] overflow-hidden rounded-2xl border border-[#f1dfd8] bg-[#fffaf7]">
            <Image
              src="/operations/content/task-progression.png"
              alt="长期任务进程拆解局部"
              fill
              className="object-cover object-center transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="px-1 pt-3">
            <p className="font-mono text-[9px] tracking-[0.15em] text-[#f47f6b]">
              TASK PROGRESSION
            </p>

            <p className="mt-1 text-xs leading-relaxed text-zinc-500">
              将长期主线拆解为阶段性任务与推进节点
            </p>
          </div>
        </div>


        {/* Character Dynamics */}
        <div>
          <div className="relative h-[190px] overflow-hidden rounded-2xl border border-[#f1dfd8] bg-[#fffaf7]">
            <Image
              src="/operations/content/character-dynamics.png"
              alt="人物关系与角色碰撞设计局部"
              fill
              className="object-cover object-center transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="px-1 pt-3">
            <p className="font-mono text-[9px] tracking-[0.15em] text-[#f47f6b]">
              CHARACTER DYNAMICS
            </p>

            <p className="mt-1 text-xs leading-relaxed text-zinc-500">
              提前设计人物差异、关系变化与冲突机制
            </p>
          </div>
        </div>

      </div>


      {/* Planning Logic */}
      <div className="mt-6 border-t border-[#f1dfd8] pt-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          CONTENT PLANNING
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span>CHARACTER</span>
          <span className="text-[#f4aa99]">→</span>
          <span>STORYLINE</span>
          <span className="text-[#f4aa99]">→</span>
          <span>EVENT</span>
          <span className="text-[#f4aa99]">→</span>
          <span>CHAPTER</span>
        </div>
      </div>

    </article>


    {/* ================= RIGHT / RESULT ================= */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-[#fffaf7] p-7">

      <div>
        <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
          EVIDENCE 02 / PUBLISHED RESULT
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          内容最终需要面对真实用户
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          出于账号与作品隐私考虑，这里不公开平台页面截图，
          仅呈现作品阶段性数据与榜单结果。
        </p>
      </div>


      {/* Delivery Result */}
<div className="mt-7 rounded-2xl bg-white/80 p-6">
  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

    <div>
      <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
        LONG-FORM DELIVERY
      </p>

      <p className="mt-4 text-5xl font-semibold text-[#f47f6b]">
        56W+
      </p>

      <p className="mt-2 text-sm font-medium">
        长篇内容持续交付
      </p>
    </div>

    <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
      从前期内容规划、人物关系与剧情大纲，
      持续推进至完整长篇内容交付。
    </p>

  </div>
</div>


      {/* Ranking */}
      <div className="mt-6 rounded-2xl border border-[#f1dfd8] bg-white/70 p-5">

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
              PLATFORM PERFORMANCE
            </p>

            <h4 className="mt-2 text-base font-semibold">
              平台榜单成绩
            </h4>
          </div>

          <p className="font-serif text-lg italic text-[#f4aa99]">
            Proof of reach
          </p>
        </div>


        <div className="mt-5 grid gap-3">

          <div className="flex items-center justify-between rounded-xl bg-[#fff7f3] px-4 py-4">
            <div>
              <p className="font-mono text-[9px] text-[#f47f6b]">
                RANKING 01
              </p>

              <p className="mt-1 text-xs font-medium">
                新人榜
              </p>
            </div>

            <p className="font-serif text-2xl italic text-[#f47f6b]">
              #01
            </p>
          </div>


          <div className="flex items-center justify-between rounded-xl bg-[#fff7f3] px-4 py-4">
            <div>
              <p className="font-mono text-[9px] text-[#f47f6b]">
                RANKING 02
              </p>

              <p className="mt-1 text-xs font-medium">
                主分区榜
              </p>
            </div>

            <p className="font-serif text-2xl italic text-[#f47f6b]">
              #03
            </p>
          </div>


          <div className="flex items-center justify-between rounded-xl bg-[#fff7f3] px-4 py-4">
            <div>
              <p className="font-mono text-[9px] text-[#f47f6b]">
                RANKING 03
              </p>

              <p className="mt-1 text-xs font-medium">
                主页新人榜
              </p>
            </div>

            <p className="font-serif text-2xl italic text-[#f47f6b]">
              #03
            </p>
          </div>

        </div>
      </div>


      {/* Content Loop */}
      <div className="mt-6 rounded-2xl bg-[#fff3ee] p-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          CONTENT LOOP
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span>PLAN</span>
          <span className="text-[#f4aa99]">→</span>
          <span>CREATE</span>
          <span className="text-[#f4aa99]">→</span>
          <span>PUBLISH</span>
          <span className="text-[#f4aa99]">→</span>
          <span>OBSERVE</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          对我来说，这段经历的价值不只是完成了一部长篇内容，
          而是完整经历了内容规划、持续生产、公开发布与用户反馈的循环。
        </p>
      </div>

    </article>

  </div>


  {/* Social Extension */}
  <div className="mt-5 rounded-[28px] border border-[#f1dfd8] bg-white/60 px-6 py-6 md:px-7">
    <div className="grid gap-5 md:grid-cols-[0.65fr_1.35fr] md:items-center">

      <div>
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          EVIDENCE 03 / SOCIAL EXTENSION
        </p>

        <h3 className="mt-2 text-lg font-semibold">
          再把内容能力迁移到社交平台
        </h3>
      </div>


      <div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">

          <span className="rounded-full bg-[#fff0ea] px-3 py-2">
            ORIGINAL
          </span>

          <span>
            2 个原创内容样本
          </span>

          <span className="text-[#f4aa99]">
            +
          </span>

          <span className="rounded-full bg-[#fff0ea] px-3 py-2">
            CURATION
          </span>

          <span>
            1 个创作者发现 / 推荐样本
          </span>

        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          在更碎片化的内容环境中，我进一步练习选题、包装、表达与内容发现，
          并通过点赞、收藏等即时反馈观察用户兴趣。
        </p>
      </div>

    </div>
  </div>

</section>
{/* ================= LEARNINGS ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10 pb-12">

  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        05 / LEARNINGS
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        从“会写内容”，到理解内容如何被用户接住
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        长篇创作训练了我对内容结构与持续生产的把控，
        社交平台实践则让我更关注选题、表达与用户反馈之间的关系。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Create with structure. Iterate with signals.
    </p>
  </div>


  {/* Learnings */}
  <div className="mt-8 grid gap-4 md:grid-cols-3">

    {/* 01 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <p className="font-mono text-[10px] text-[#f47f6b]">
        01
      </p>

      <h3 className="mt-6 text-lg font-semibold">
        内容需要结构，而不只是灵感
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        当内容周期变长，人物、故事线和事件之间都需要提前规划。
        结构化准备能降低持续生产过程中的混乱与返工。
      </p>
    </article>


    {/* 02 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <p className="font-mono text-[10px] text-[#f47f6b]">
        02
      </p>

      <h3 className="mt-6 text-lg font-semibold">
        不同平台，需要重新组织表达
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        长篇平台更强调持续阅读与内容承接，
        社交平台则更依赖选题、开头与信息密度。
        内容能力不能简单复制，需要适配平台场景。
      </p>
    </article>


    {/* 03 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <p className="font-mono text-[10px] text-[#f47f6b]">
        03
      </p>

      <h3 className="mt-6 text-lg font-semibold">
        用户反馈应该进入下一轮内容判断
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        点击、收藏与点赞不是页面上的装饰数字，
        而是理解用户兴趣、内容价值与后续方向的输入。
      </p>
    </article>

  </div>


  {/* Takeaway */}
  <div className="mt-5 rounded-[28px] border border-[#f1dfd8] bg-[#fff3ee] px-6 py-6 md:px-8">

    <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
      TAKEAWAY
    </p>

    <p className="mt-3 text-lg font-medium leading-relaxed">
      对我来说，内容运营不是单纯追求“多发内容”，
      而是建立一套从
      <span className="text-[#f47f6b]">
        「规划 → 生产 → 分发 → 观察 → 调整」
      </span>
      的持续循环。
    </p>

  </div>


  {/* Back Home */}
  <div className="mt-8 flex justify-end">
    <Link
      href="/"
      className="text-sm font-medium text-[#f47f6b] transition hover:opacity-70"
    >
      Back to Selected Operations →
    </Link>
  </div>

</section>
      </div>
    </main>
  );
}