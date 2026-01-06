import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function CaseStudies() {
  return (
    <main>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Case Studies
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Urruty Labs works with early-stage founders to build or rebuild
              production-ready products. Each case study highlights real
              examples of senior technical leadership, fast iteration,
              architecture decisions, overcoming complexity, and preparing
              products for scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* LeanZupply Case Study */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:border-gray-300 transition-all">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-400">LZ</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  LeanZupply
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Strengthening the technical foundation of a D2B procurement
                  platform
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Building a production-ready MVP in 90 days for a founder with
                market fit and a proven business model. The engagement focused
                on translating a successful business model into a digital
                marketplace, establishing architecture that scales, and enabling
                initial traction in a complex D2B supply chain environment.
              </p>
              <Link
                to="/case-studies/leanzupply"
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors group"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Placeholder Card 1 */}
            <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-gray-400">—</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  New Case Study
                </h3>
                <p className="text-gray-400">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            If you're working on something new — or your current product needs a
            stronger foundation — let's talk.
          </h2>
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

export default CaseStudies;
