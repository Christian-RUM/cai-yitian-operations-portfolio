import Image from "next/image";
import Link from "next/link";

export default function CommerceCasePage() {
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
            CASE 01 / COMMERCE
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            闲鱼个人经营实践
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500">
            从多品类小规模测试开始，根据销量、利润空间、供应变化与用户反馈持续调整，
            最终逐步聚焦更熟悉、更适合长期经营的动漫周边品类。
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "选品测试",
              "价格比较",
              "供应链调整",
              "用户反馈",
              "品类聚焦",
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

        {/* ================= CONTEXT ================= */}

<section className="mt-12 border-t border-[#f1dfd8] pt-10">
  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

    {/* Left */}
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        01 / CONTEXT
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        从一次小规模经营实验开始
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
        2020 年，我开始在闲鱼进行个人经营实践。
        起初没有直接锁定某一品类，而是通过多个方向的小规模测试，
        观察真实交易反馈，再决定后续投入。
      </p>
    </div>


    {/* Right */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      {/* Metrics */}
      <div className="grid gap-3 sm:grid-cols-3">

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            2020
          </p>

          <p className="mt-2 text-[10px] font-medium tracking-wider text-zinc-500">
            ACTIVE PERIOD
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            主要运营周期
          </p>
        </div>


        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            ¥23K+
          </p>

          <p className="mt-2 text-[10px] font-medium tracking-wider text-zinc-500">
            TRANSACTION VALUE
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            运营周期交易额
          </p>
        </div>


        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-4xl font-semibold text-[#f47f6b]">
            3+
          </p>

          <p className="mt-2 text-[10px] font-medium tracking-wider text-zinc-500">
            CATEGORIES TESTED
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            前期测试品类
          </p>
        </div>

      </div>


      {/* Challenge */}
      <div className="mt-6 border-t border-[#f1dfd8] pt-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          THE QUESTION
        </p>

        <p className="mt-3 text-lg font-medium leading-relaxed">
          在有限成本下，什么样的品类更值得继续投入？
        </p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          我需要同时考虑销量表现、利润空间、供货价格变化、
          客服沟通成本以及自己对品类的熟悉程度，而不是只看“有没有卖出去”。
        </p>
      </div>

    </div>
  </div>
</section>
{/* ================= TEST & COMPARE ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">
  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        02 / TEST & COMPARE
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        先小规模测试，再决定往哪里投入
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        前期没有把资源集中在单一商品上，而是同时尝试不同类型的小商品，
        用真实交易表现去判断用户需求与经营空间。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Test before scaling.
    </p>
  </div>


  {/* Category Test */}
  <div className="mt-8 grid gap-4 md:grid-cols-3">

    {/* Category 01 */}
    <div className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[#f47f6b]">
          01
        </p>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          TEST
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold">
        男性背心
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        作为前期尝试品类之一，通过上架与交易反馈观察实际需求。
      </p>
    </div>


    {/* Category 02 */}
    <div className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[#f47f6b]">
          02
        </p>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          TEST
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold">
        家居小物
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        与其他品类同步测试，比较不同商品的需求表现与利润空间。
      </p>
    </div>


    {/* Category 03 */}
    <div className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[#f47f6b]">
          03
        </p>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          TEST
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold">
        小玩具
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        在前期对比中表现更适合继续尝试，因此成为阶段性的重点方向。
      </p>
    </div>

  </div>


  {/* Comparison Logic */}
  <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

    {/* What I compared */}
    <div className="rounded-[24px] border border-[#f1dfd8] bg-[#fffaf7] p-6">
      <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
        WHAT I COMPARED
      </p>

      <div className="mt-5 space-y-3">
        {[
          ["01", "用户需求", "实际咨询与交易反馈"],
          ["02", "利润空间", "售价与进货成本之间的空间"],
          ["03", "持续经营", "是否值得继续投入时间与精力"],
        ].map(([number, title, text]) => (
          <div
            key={number}
            className="flex gap-4 border-b border-[#f1dfd8] pb-3 last:border-0 last:pb-0"
          >
            <span className="font-mono text-[9px] text-[#f47f6b]">
              {number}
            </span>

            <div>
              <p className="text-sm font-medium">
                {title}
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>


    {/* First Decision */}
    <div className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
        FIRST DECISION
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        从“什么都试一点”，到阶段性聚焦小玩具
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-zinc-500">
        对比几个品类后，我没有继续平均分配精力，
        而是优先投入到当时表现更值得继续验证的小玩具方向。
        这也是第一次根据真实经营反馈做出品类取舍。
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
        <span className="rounded-full border border-[#f1dfd8] bg-[#fff9f6] px-3 py-2 text-zinc-500">
          MULTI-CATEGORY TEST
        </span>

        <span className="text-[#f47f6b]">
          →
        </span>

        <span className="rounded-full border border-[#f1dfd8] bg-[#fff9f6] px-3 py-2 text-zinc-500">
          COMPARE
        </span>

        <span className="text-[#f47f6b]">
          →
        </span>

        <span className="rounded-full bg-[#fff0ea] px-3 py-2 font-medium text-[#f47f6b]">
          TOY FOCUS
        </span>
      </div>
    </div>

  </div>
</section>
{/* ================= ADJUST & FOCUS ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">

  {/* Header */}
  <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">

    {/* Left */}
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        03 / ADJUST & FOCUS
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        当原来的方向不再合适，就重新做选择
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
        小玩具成为阶段性重点后，供应商价格出现多次调整，
        原本的利润空间被压缩。相比继续维持原有方向，
        我选择重新评估品类与经营成本。
      </p>

      <p className="mt-6 font-serif text-xl italic text-[#f4aa99]">
        Adjust when the signal changes.
      </p>
    </div>


    {/* Right */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      {/* Change Trigger */}
      <div>
        <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
          CHANGE TRIGGER
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-3">

          <div className="rounded-2xl bg-[#fff7f3] p-5">
            <p className="font-mono text-[9px] text-[#f47f6b]">
              01
            </p>

            <h3 className="mt-3 text-sm font-semibold">
              供货价格变化
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              供应商多次调价，原有成本优势下降。
            </p>
          </div>


          <div className="rounded-2xl bg-[#fff7f3] p-5">
            <p className="font-mono text-[9px] text-[#f47f6b]">
              02
            </p>

            <h3 className="mt-3 text-sm font-semibold">
              利润空间收窄
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              继续经营需要重新判断投入与回报是否匹配。
            </p>
          </div>


          <div className="rounded-2xl bg-[#fff7f3] p-5">
            <p className="font-mono text-[9px] text-[#f47f6b]">
              03
            </p>

            <h3 className="mt-3 text-sm font-semibold">
              经营效率
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              开始同时考虑客服沟通与持续经营成本。
            </p>
          </div>

        </div>
      </div>


      {/* Strategy Shift */}
      <div className="mt-7 border-t border-[#f1dfd8] pt-7">

        <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
          STRATEGY SHIFT
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">

          {/* Before */}
          <div className="rounded-2xl border border-[#f1dfd8] bg-[#fffaf7] p-5">
            <p className="text-[10px] tracking-wider text-zinc-400">
              BEFORE
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              小玩具
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              前期测试后阶段性聚焦，但随着供货成本变化，
              继续投入的吸引力下降。
            </p>
          </div>


          {/* Arrow */}
          <div className="text-center text-2xl text-[#f47f6b]">
            →
          </div>


          {/* After */}
          <div className="rounded-2xl border border-[#f3d8cf] bg-[#fff3ee] p-5">
            <p className="text-[10px] tracking-wider text-[#f47f6b]">
              AFTER
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              动漫周边
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              转向自己更熟悉的品类，在利润空间、
              用户沟通与经营效率之间取得更好的平衡。
            </p>
          </div>

        </div>
      </div>


      {/* Decision */}
      <div className="mt-6 rounded-2xl bg-[#fffaf7] p-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          WHY THIS DIRECTION
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "更熟悉品类",
            "利润空间更高",
            "客服工作量更低",
            "更适合持续经营",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#f1dfd8] bg-white/70 px-3 py-2 text-xs text-zinc-500"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= RESULT & PROOF ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">
  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        04 / RESULT & PROOF
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        经营结果，与真实交易反馈
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        2020 年主要运营周期内累计实现 ¥23K+ 交易额。
        除结果数字外，我也保留了部分交易记录与用户评价，
        用来验证经营过程和用户反馈。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Result, backed by evidence.
    </p>
  </div>

  {/* Main Result */}
  <div className="mt-8 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
    {/* Metric */}
    <div className="flex flex-col justify-between rounded-[28px] border border-[#f1dfd8] bg-[#fff3ee] p-7">
      <div>
        <p className="font-mono text-[10px] tracking-[0.2em] text-[#f47f6b]">
          2020 ACTIVE OPERATION PERIOD
        </p>

        <p className="mt-8 font-serif text-6xl italic text-[#f47f6b] md:text-7xl">
          ¥23K+
        </p>

        <p className="mt-3 text-sm font-medium">
          运营周期交易额
        </p>
      </div>

      <div className="mt-10 border-t border-[#efcfc5] pt-5">
        <p className="text-xs leading-relaxed text-zinc-500">
          该数字仅对应 2020 年主要经营实践阶段，
          不将后续偶尔出售个人二手物品产生的金额计入主动运营成果。
        </p>
      </div>
    </div>

    {/* Sales Screenshot */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            EVIDENCE 01
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            平台累计金额记录
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          REAL RECORD
        </span>
      </div>

     <div className="relative mt-5 h-[300px] overflow-hidden rounded-2xl border border-[#f1dfd8] bg-[#fffaf7]">
  <Image
    src="/operations/commerce/sales.png"
    alt="闲鱼平台累计金额截图"
    fill
    className="object-cover object-[center_38%]"
  />
</div>

      <p className="mt-4 text-[11px] leading-relaxed text-zinc-400">
        注：截图展示的是平台后续累计金额，其中包含停止主动运营后偶尔出售个人二手物品产生的交易。
        因此本案例仍以 ¥23K+ 作为 2020 年运营周期成果口径。
      </p>
    </div>
  </div>

  {/* Evidence */}
  <div className="mt-5 grid gap-5 lg:grid-cols-2">
    {/* Orders */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            EVIDENCE 02
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            部分交易记录
          </h3>
        </div>

        <span className="text-xs text-zinc-400">
          TRANSACTIONS
        </span>
      </div>

      <a
  href="/operations/commerce/orders.png"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative mt-5 block h-[420px] overflow-hidden rounded-2xl border border-[#f1dfd8] bg-[#fffaf7]"
>
  <Image
    src="/operations/commerce/orders.png"
    alt="闲鱼部分交易订单截图"
    fill
    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
  />

  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-white via-white/80 to-transparent px-5 pb-4 pt-16">
    <p className="text-xs text-zinc-500">
      截取部分交易记录预览
    </p>

    <span className="text-xs font-medium text-[#f47f6b]">
      查看完整长图 ↗
    </span>
  </div>
</a>

      <p className="mt-4 text-xs leading-relaxed text-zinc-500">
        部分订单按时间顺序保留，用于呈现经营期间真实发生的交易过程。
      </p>
    </article>

    {/* Reviews */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            EVIDENCE 03
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            部分买家反馈
          </h3>
        </div>

        <span className="text-xs text-zinc-400">
          USER FEEDBACK
        </span>
      </div>

      <a
  href="/operations/commerce/reviews.png"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative mt-5 block h-[420px] overflow-hidden rounded-2xl border border-[#f1dfd8] bg-[#fffaf7]"
>
  <Image
    src="/operations/commerce/reviews.png"
    alt="闲鱼部分买家好评截图"
    fill
    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
  />

  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-white via-white/80 to-transparent px-5 pb-4 pt-16">
    <p className="text-xs text-zinc-500">
      截取部分买家反馈预览
    </p>

    <span className="text-xs font-medium text-[#f47f6b]">
      查看完整长图 ↗
    </span>
  </div>
</a>

      <p className="mt-4 text-xs leading-relaxed text-zinc-500">
        用户评价让我能够从商品体验、发货履约和满意度等维度，
        继续判断哪些环节值得保持或优化。
      </p>
    </article>
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
        这次实践让我形成的运营判断
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        这不是一次追求规模的商业项目，而是一段真实的小规模经营实践。
        对我更有价值的是，在持续交易中逐渐建立起对用户、成本和经营效率的判断。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Small practice, real signals.
    </p>
  </div>

  {/* Learnings */}
  <div className="mt-8 grid gap-4 md:grid-cols-3">
    {[
      {
        number: "01",
        title: "先验证，再放大",
        text: "面对不确定的品类，我更倾向先用小规模测试获取真实反馈，而不是一开始就投入大量资源。",
      },
      {
        number: "02",
        title: "结果之外，也要看成本",
        text: "销量并不是唯一判断标准。利润空间、供货稳定性与沟通成本都会影响一个方向是否值得持续。",
      },
      {
        number: "03",
        title: "用户反馈要进入下一轮决策",
        text: "交易、咨询和评价不只是结果证明，也能帮助判断商品体验与履约环节是否需要继续调整。",
      },
    ].map((item) => (
      <article
        key={item.number}
        className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6"
      >
        <p className="font-mono text-[10px] text-[#f47f6b]">
          {item.number}
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          {item.text}
        </p>
      </article>
    ))}
  </div>

  {/* Closing */}
  <div className="mt-5 rounded-[28px] border border-[#f1dfd8] bg-[#fff3ee] px-6 py-6 md:px-8">
    <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
      TAKEAWAY
    </p>

    <p className="mt-3 text-lg font-medium leading-relaxed">
  运营不是把一个方案坚持到底，而是在真实反馈发生变化时，
  知道什么时候继续、什么时候调整，以及为什么调整。
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