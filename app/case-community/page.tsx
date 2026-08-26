import Link from "next/link";

export default function CommunityCasePage() {
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
            CASE 03 / COMMUNITY
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            易班校园平台运营
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500">
            从内容发布、活动运营到团队机制与新人培训，
            在学生工作站负责人期间参与推进校园平台持续运营，
            连接内容生产、人员协作与用户互动。
          </p>


          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "校园平台运营",
              "内容运营",
              "活动策划",
              "团队协作",
              "新人培训",
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


        {/* ================= CONTEXT & ROLE ================= */}

<section className="mt-12 border-t border-[#f1dfd8] pt-10">

  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">

    {/* Left */}
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        01 / CONTEXT & ROLE
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        从学生工作站负责人视角参与校园平台运营
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
        在易班学生工作站任职期间，我参与校园平台的内容运营、
        活动推进、团队协作与新人培养，也逐步从“完成单项任务”
        转向思考如何让内容、人员与平台机制持续运转。
      </p>

      <p className="mt-6 font-serif text-xl italic text-[#f4aa99]">
        Content, people, platform.
      </p>


      {/* Role */}
      <div className="mt-10 max-w-sm border-t border-[#f1dfd8] pt-5">

        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          MY ROLE
        </p>

        <h3 className="mt-3 text-lg font-semibold">
          易班学生工作站负责人
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "内容推进",
            "活动协作",
            "团队机制",
            "新人培训",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#f1dfd8] bg-white/60 px-3 py-1.5 text-[11px] text-zinc-500"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>


    {/* Right */}
    <div className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            PLATFORM CONTEXT
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            任期内的平台运营规模
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            以下数据用于说明当时所参与运营的平台环境与协作规模，
            不代表由个人独立创建。
          </p>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          CAMPUS PLATFORM
        </span>
      </div>


      {/* Metrics */}
      <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">

        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-3xl font-semibold text-[#f47f6b]">
            35
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wider text-zinc-500">
            INSTITUTION GROUPS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            机构群
          </p>
        </div>


        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-3xl font-semibold text-[#f47f6b]">
            153
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wider text-zinc-500">
            PUBLIC ACCOUNTS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            公共账号
          </p>
        </div>


        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-3xl font-semibold text-[#f47f6b]">
            1193
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wider text-zinc-500">
            PUBLIC GROUPS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            公共群
          </p>
        </div>


        <div className="rounded-2xl bg-[#fff7f3] p-5">
          <p className="text-3xl font-semibold text-[#f47f6b]">
            953
          </p>

          <p className="mt-3 text-[10px] font-medium tracking-wider text-zinc-500">
            LIGHT APPS
          </p>

          <p className="mt-1 text-[10px] text-zinc-400">
            轻应用
          </p>
        </div>

      </div>


      {/* Challenge */}
      <div className="mt-6 border-t border-[#f1dfd8] pt-5">

        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          THE OPERATING QUESTION
        </p>

        <p className="mt-3 text-lg font-medium leading-relaxed">
          如何让校园平台不只是“有人发内容”，
          而是形成更稳定的内容生产与团队协作机制？
        </p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          这意味着除了完成具体内容与活动，还需要同时处理人员分工、
          新人培养、工作规则以及持续发布等问题。
        </p>

      </div>

    </div>

  </div>
</section>
{/* ================= TEAM & MECHANISM ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">

  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        02 / TEAM & MECHANISM
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        先把协作机制搭起来，再让内容持续运转
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        当团队成员不断更替时，单靠临时分工很难保持稳定产出。
        因此我更关注规则、分工、培训与经验传递，让新人能够更快进入工作状态。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Build the system, not just the task.
    </p>
  </div>


  {/* Mechanism Grid */}
  <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

    {/* 01 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[#f47f6b]">
          01
        </p>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          RULE
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold">
        明确工作规则
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        重新梳理日常工作要求与执行方式，
        减少信息模糊带来的重复沟通。
      </p>
    </article>


    {/* 02 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[#f47f6b]">
          02
        </p>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          ROLE
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold">
        拆分人员职责
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        根据内容、活动和日常工作进行任务分配，
        让成员更清楚自己负责什么。
      </p>
    </article>


    {/* 03 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-[#fff3ee] p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[#f47f6b]">
          03
        </p>

        <span className="rounded-full bg-white/70 px-3 py-1 text-[9px] text-[#f47f6b]">
          TRAIN
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold">
        建立新人培训
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        将平台操作、内容要求与日常工作方式整理成培训内容，
        降低新成员上手成本。
      </p>
    </article>


    {/* 04 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[#f47f6b]">
          04
        </p>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          TRANSFER
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold">
        推进“老带新”
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        通过有经验成员带新成员参与实际任务，
        让工作经验在团队内部持续传递。
      </p>
    </article>

  </div>


  {/* Before / After */}
  <div className="mt-5 rounded-[28px] border border-[#f1dfd8] bg-[#fffaf7] p-7">

    <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
      FROM TASK TO SYSTEM
    </p>

    <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">

      {/* Before */}
      <div className="rounded-2xl border border-[#f1dfd8] bg-white/70 p-5">
        <p className="text-[10px] tracking-wider text-zinc-400">
          BEFORE
        </p>

        <h3 className="mt-2 text-base font-semibold">
          临时分工、依赖个人经验
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          新成员需要反复询问，工作方法也容易随着人员变化而中断。
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

        <h3 className="mt-2 text-base font-semibold">
          规则 + 分工 + 培训 + 传递
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          让团队成员更容易理解任务，也让日常运营不再完全依赖某一个人。
        </p>
      </div>

    </div>
  </div>


  {/* Flow */}
  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#f1dfd8] pt-5 text-xs text-zinc-500">
    <span>RULE</span>
    <span className="text-[#f4aa99]">→</span>
    <span>ROLE</span>
    <span className="text-[#f4aa99]">→</span>
    <span>TRAIN</span>
    <span className="text-[#f4aa99]">→</span>
    <span>TRANSFER</span>
    <span className="text-[#f4aa99]">→</span>
    <span>OPERATE</span>
  </div>

</section>
{/* ================= CONTENT & ACTIVITY ================= */}

<section className="mt-14 border-t border-[#f1dfd8] pt-10">

  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-mono text-[11px] tracking-[0.3em] text-[#f47f6b]">
        03 / CONTENT & ACTIVITY
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        机制最终要落到内容，也要落到真实互动
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        团队机制只是基础，真正的运营仍然需要通过持续内容与具体活动触达用户。
        在任职期间，我参与推进日常内容生产，也参与校园主题活动的策划与互动运营。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Publish consistently. Create participation.
    </p>
  </div>


  {/* Main Grid */}
  <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

    {/* ================= CONTENT ================= */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            CONTENT OPERATION
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            让内容生产保持连续
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          DAILY OPERATION
        </span>
      </div>


      {/* Metric */}
      <div className="mt-8">
        <p className="text-6xl font-semibold tracking-tight text-[#f47f6b]">
          ~300
        </p>

        <p className="mt-3 text-sm font-medium">
          不到一年内团队累计内容产出
        </p>

        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          该数据为团队协作产出，用于说明任职期间的持续内容运营规模，
          不表述为个人独立完成。
        </p>
      </div>


      {/* What I Did */}
      <div className="mt-8 border-t border-[#f1dfd8] pt-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          WHAT I WORKED ON
        </p>

        <div className="mt-4 grid gap-3">

          <div className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f47f6b]" />
            <p className="text-xs leading-relaxed text-zinc-500">
              推进日常校园内容发布与团队任务分配
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f47f6b]" />
            <p className="text-xs leading-relaxed text-zinc-500">
              协调成员完成内容生产、平台发布与日常维护
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f47f6b]" />
            <p className="text-xs leading-relaxed text-zinc-500">
              通过规则与新人培养降低持续更新对个别成员的依赖
            </p>
          </div>

        </div>
      </div>

    </article>


    {/* ================= ACTIVITY ================= */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-[#fffaf7] p-7">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            ACTIVITY OPERATION
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            从“发布信息”转向“让用户参与”
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          CAMPUS ACTIVITY
        </span>
      </div>


      {/* Activity Name */}
      <div className="mt-7 rounded-2xl border border-[#f1dfd8] bg-white/70 p-5">

        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          2019 / CAMPAIGN
        </p>

        <h4 className="mt-2 text-lg font-semibold">
          “我在西科，向祖国告白”
        </h4>

        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          通过校园主题内容与互动机制，引导师生主动留言，
          让活动从单向信息发布转变为用户共同参与的表达场景。
        </p>

      </div>


      {/* Metric */}
      <div className="mt-5 rounded-2xl bg-[#fff3ee] p-6">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-5xl font-semibold tracking-tight text-[#f47f6b]">
              2000+
            </p>

            <p className="mt-2 text-sm font-medium">
              一次活动累计互动评论
            </p>
          </div>

          <p className="max-w-[240px] text-xs leading-relaxed text-zinc-500">
            该结果来自一次主题活动的累计师生互动，
            用于衡量活动实际参与度，而非单篇内容曝光。
          </p>

        </div>

      </div>


      {/* Activity Logic */}
      <div className="mt-6 border-t border-[#f1dfd8] pt-5">

        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          ACTIVITY LOGIC
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">

          <span className="rounded-full bg-white px-3 py-2">
            主题
          </span>

          <span className="text-[#f4aa99]">→</span>

          <span className="rounded-full bg-white px-3 py-2">
            内容
          </span>

          <span className="text-[#f4aa99]">→</span>

          <span className="rounded-full bg-white px-3 py-2">
            互动机制
          </span>

          <span className="text-[#f4aa99]">→</span>

          <span className="rounded-full bg-white px-3 py-2">
            用户表达
          </span>

        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          这次经历让我开始意识到，校园运营不只是把内容发出去，
          还需要设计一个足够低门槛、足够明确的参与入口，
          让用户愿意真正留下自己的表达。
        </p>

      </div>

    </article>

  </div>


  {/* Bottom Insight */}
  <div className="mt-5 rounded-[26px] border border-[#f1dfd8] bg-white/60 px-6 py-5">

    <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-center">

      <div>
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          WHAT CHANGED
        </p>

        <p className="mt-3 font-serif text-xl italic text-[#f4aa99]">
          From publishing to participation.
        </p>
      </div>

      <p className="text-sm leading-relaxed text-zinc-500">
        我对内容运营的理解也从“保持更新”，逐渐延伸到
        “为什么用户愿意参与”。持续发布解决的是平台活跃基础，
        而活动设计进一步验证了内容、场景与用户互动之间的关系。
      </p>

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
        从日常运营，到可以被验证的结果
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        除了内容产出和活动互动，我也更关注平台运营是否形成了更稳定的覆盖，
        以及这段工作是否得到了外部认可。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Operation needs evidence.
    </p>
  </div>


  {/* Result Grid */}
  <div className="mt-8 grid gap-5 md:grid-cols-2">

    {/* Coverage */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-white/60 p-7">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            RESULT 01 / COVERAGE
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            本科生易班注册实现覆盖
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          PLATFORM RESULT
        </span>
      </div>


      <div className="mt-8 rounded-2xl bg-[#fff7f3] p-6">

        <p className="text-5xl font-semibold tracking-tight text-[#f47f6b]">
          FULL
        </p>

        <p className="mt-2 text-sm font-medium">
          本科生注册覆盖
        </p>

        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          任职期间，学校本科生易班注册实现覆盖。
          该结果属于平台整体运营成果，不表述为个人独立完成。
        </p>

      </div>


      <div className="mt-6 border-t border-[#f1dfd8] pt-5">

        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          WHAT IT MEANS
        </p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          对校园平台而言，用户覆盖是内容、活动与后续运营能够持续发生的基础。
          我的工作更多是在这一平台环境中参与内容、活动和团队运营的持续推进。
        </p>

      </div>

    </article>


    {/* Recognition */}
    <article className="rounded-[28px] border border-[#f1dfd8] bg-[#fffaf7] p-7">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#f47f6b]">
            RESULT 02 / RECOGNITION
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            运营实践获得外部认可
          </h3>
        </div>

        <span className="rounded-full bg-[#fff0ea] px-3 py-1 text-[9px] text-[#f47f6b]">
          PERSONAL AWARD
        </span>
      </div>


      <div className="mt-8 rounded-2xl border border-[#f3ded6] bg-white/70 p-6">

        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          RECOGNITION
        </p>

        <p className="mt-4 text-2xl font-semibold leading-snug">
          陕西高校易班学生工作站
          <span className="text-[#f47f6b]">
            十佳站长
          </span>
        </p>

        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          这项认可对应的是我在学生工作站负责人期间的校园平台运营、
          团队协作与组织推进实践。
        </p>

      </div>


      <div className="mt-6 border-t border-[#f1dfd8] pt-5">

        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          WHY IT MATTERS
        </p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          对我来说，这段经历最重要的不只是一次荣誉，
          而是第一次完整接触到“内容、用户、团队与机制”同时存在的运营场景。
        </p>

      </div>

    </article>

  </div>


  {/* Proof Boundary */}
  <div className="mt-5 rounded-[26px] border border-[#f1dfd8] bg-white/60 px-6 py-5">

    <div className="grid gap-4 md:grid-cols-[0.55fr_1.45fr] md:items-center">

      <div>
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          EVIDENCE BOUNDARY
        </p>

        <p className="mt-2 font-serif text-lg italic text-[#f4aa99]">
          Context matters.
        </p>
      </div>

      <p className="text-xs leading-relaxed text-zinc-500">
        页面中的平台覆盖与规模数据用于说明任职期间的运营环境与团队成果；
        个人贡献则重点体现在内容推进、活动协作、团队机制和新人培养等具体工作中。
      </p>

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
        从完成任务，到理解一个运营系统如何持续运转
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        这段校园平台经历让我第一次同时面对内容、用户、团队与协作机制，
        也让我逐渐意识到，运营并不只是完成一次活动或发布一批内容。
      </p>
    </div>

    <p className="font-serif text-xl italic text-[#f4aa99]">
      Make it work. Then make it last.
    </p>
  </div>


  {/* Learning Cards */}
  <div className="mt-8 grid gap-4 md:grid-cols-3">

    {/* 01 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">

      <p className="font-mono text-[10px] text-[#f47f6b]">
        01
      </p>

      <h3 className="mt-6 text-lg font-semibold">
        持续运营依赖机制，而不是个人硬撑
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        当团队成员不断变化时，仅靠熟练成员临时推进并不稳定。
        规则、分工、培训与经验传递，才能降低运营对单个人的依赖。
      </p>

    </article>


    {/* 02 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">

      <p className="font-mono text-[10px] text-[#f47f6b]">
        02
      </p>

      <h3 className="mt-6 text-lg font-semibold">
        内容发布只是开始，参与才是更深一层的反馈
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        持续更新能够维持平台基础活跃，
        但真正的用户运营还需要设计合适的场景和参与入口，
        让用户愿意主动留下表达。
      </p>

    </article>


    {/* 03 */}
    <article className="rounded-[24px] border border-[#f1dfd8] bg-white/60 p-6">

      <p className="font-mono text-[10px] text-[#f47f6b]">
        03
      </p>

      <h3 className="mt-6 text-lg font-semibold">
        运营结果需要区分平台成果与个人贡献
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        平台规模、覆盖和团队产出可以说明运营环境，
        但个人价值更应该落在自己实际推进的内容、活动、
        协作机制与具体决策中。
      </p>

    </article>

  </div>


  {/* Takeaway */}
  <div className="mt-5 rounded-[28px] border border-[#f1dfd8] bg-[#fff3ee] px-6 py-6 md:px-8">

    <div className="grid gap-5 md:grid-cols-[0.55fr_1.45fr] md:items-center">

      <div>
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#f47f6b]">
          TAKEAWAY
        </p>

        <p className="mt-3 font-serif text-xl italic text-[#f4aa99]">
          Keep the loop running.
        </p>
      </div>

      <p className="text-lg font-medium leading-relaxed">
        对我来说，校园平台运营逐渐变成了一套
        <span className="text-[#f47f6b]">
          「内容生产 → 团队协作 → 用户参与 → 经验沉淀」
        </span>
        的持续循环，而不是一个个彼此独立的任务。
      </p>

    </div>

  </div>


  {/* Back Home */}
  <div className="mt-8 flex justify-end">
    <Link
      href="/"
      className="text-sm font-medium text-[#f47f6b] transition hover:opacity-60"
    >
      Back to Selected Operations →
    </Link>
  </div>

</section>
      </div>
    </main>
  );
}