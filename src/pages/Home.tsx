import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

function Home() {
  return (
    <main>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Build the first real version of your company in 90 days.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto text-justify">
            A boutique engineering partner helping founders turn validated ideas
            into production-ready products — fast, focused, and senior-led.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-105"
          >
            Start a conversation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            The cost of getting this wrong is high.
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              You validated the idea. You have users or commitments. You've
              raised or have revenue. Now you need the foundation that scales.
            </p>
            <p>
              But many founders find themselves stuck: MVPs held together with
              duct tape. Unclear product direction. Rewrites every 6 months.
              Fragmented teams making disconnected decisions. Slow execution
              when speed matters most.
            </p>
            <p className="font-medium text-gray-900">
              Every month spent on the wrong build creates technical debt that
              costs 10x to fix later.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Who we work with
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                This is for you if:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>You have a validated idea or existing users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>
                    You need a production-ready foundation, not another
                    prototype
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>
                    You want senior decision-making, not junior execution
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>
                    You value clarity and momentum over endless iteration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span>
                    You want a clean handoff and independence afterward
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                Not a fit if:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>You're looking for the cheapest option</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>
                    You need staff augmentation or body shop resources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>You want open-ended scope and ongoing maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>
                    You're seeking a feature factory without strategic direction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>You need to explore if the idea works at all</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            The 90-Day Engagement
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Fixed scope. Senior-led. Designed for momentum.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Discovery & Product Definition
                  </h3>
                  <p className="text-gray-700 text-justify">
                    We clarify what we're building, who it's for, and what
                    success looks like. No assumptions, no guesswork.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Architecture
                  </h3>
                  <p className="text-gray-700 text-justify">
                    Senior engineers design the foundation: stack, data model,
                    infrastructure, and technical decisions that will last.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Build
                  </h3>
                  <p className="text-gray-700 text-justify">
                    We execute with production quality from day one. Clean code,
                    tested, documented, and ready to scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  04
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hardening & Deployment
                  </h3>
                  <p className="text-gray-700 text-justify">
                    Security, performance, monitoring, and production readiness.
                    We launch with confidence, not crossed fingers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  05
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Handoff
                  </h3>
                  <p className="text-gray-700 text-justify">
                    Complete documentation, architecture review, and knowledge
                    transfer. Your team inherits a system they can understand
                    and extend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            AI-Augmented. Human-Led.
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            The New Way to Build Product Foundations.
          </p>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              AI has transformed how software gets built. Tasks that once
              required teams of engineers — boilerplate code, refactors, tests,
              documentation, architecture exploration — can now be automated or
              accelerated by AI-powered agents.
            </p>
            <p>
              At Urruty Labs, we use AI to compress months of engineering effort
              into weeks, while keeping all product decisions in the hands of an
              experienced lead engineer.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI boosts our speed by:
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Generating high-quality code drafts for rapid iteration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Exploring multiple architectural approaches instantly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>Automating routine engineering tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Producing documentation, tests, and refactors faster
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Turning conversations into structured product requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>Reducing the risk of costly rewrites</span>
                </li>
              </ul>
            </div>
            <p className="font-medium text-gray-900 mt-8">
              But AI doesn't replace judgment.
            </p>
            <p>
              Every architectural decision, every tradeoff, every critical line
              of code is reviewed and owned by a senior engineer. AI accelerates
              the work — experience ensures it's done right.
            </p>
            <p className="font-medium text-gray-900 mt-6">The result?</p>
            <p>
              A production-ready foundation in 90 days, with the clarity and
              quality of a senior engineering team — but the speed of an
              AI-empowered studio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Urruty Labs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Senior involvement
              </h3>
              <p className="text-gray-700">
                No junior developers figuring it out on your dime. Decisions are
                made by people who've been here before.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Faster decision cycles
              </h3>
              <p className="text-gray-700">
                Small, focused team. No layers of project managers. Direct
                communication with people who write the code.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Opinionated stack
              </h3>
              <p className="text-gray-700">
                We use proven, modern tools. No endless technology debates. We
                know what works and get started immediately.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Clean handoff
              </h3>
              <p className="text-gray-700">
                Complete documentation, clear architecture, and knowledge
                transfer. You own the code and can extend it independently.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No long-term dependencies
              </h3>
              <p className="text-gray-700">
                We build so you can continue. No vendor lock-in, no proprietary
                frameworks, no ongoing retainer required.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fixed scope, clear timeline
              </h3>
              <p className="text-gray-700">
                90 days. Defined deliverables. Predictable investment. You know
                what you're getting and when.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We take on a small number of projects.
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's talk and see if we're a fit.
          </p>
          <a
            href="mailto:nicolas@urrutylabs.com"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105"
          >
            Start a conversation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
