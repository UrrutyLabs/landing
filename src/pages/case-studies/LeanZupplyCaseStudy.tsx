import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function LeanZupplyCaseStudy() {
  return (
    <>
      <Helmet>
        <title>
          LeanZupply Case Study — B2B Platform Engineering | Urruty Labs
        </title>
        <meta
          name="description"
          content="How Urruty Labs built a production-ready D2B marketplace in 90 days. Technical foundations, scaling architecture, and product stability for early-stage startups."
        />
        <meta
          property="og:title"
          content="LeanZupply Case Study — B2B Platform Engineering | Urruty Labs"
        />
        <meta
          property="og:description"
          content="How Urruty Labs built a production-ready D2B marketplace in 90 days. Technical foundations, scaling architecture, and product stability for early-stage startups."
        />
      </Helmet>
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Case Study
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              LeanZupply: From Business Model to Production-Ready Digital
              Marketplace
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              How Urruty Labs built a production-ready MVP in 90 days for a
              founder with market fit and a proven business model, enabling the
              launch of a digital D2B supply chain platform.{" "}
              <Link
                to="/case-studies"
                className="text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                View all case studies
              </Link>
              {" · "}
              <Link
                to="/about"
                className="text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                Learn about our approach
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Case Study Overview
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong className="text-gray-900">LeanZupply</strong> is a
                professional D2B supply-chain and procurement platform that
                transforms international commerce into an efficient,
                transparent, and structured experience for professional buyers
                and verified manufacturers.{" "}
                <a
                  href="https://www.leanzupply.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline hover:text-gray-600 transition-colors"
                >
                  Visit LeanZupply →
                </a>
              </p>
              <p>
                The founder had already validated market fit and developed a
                proven business model, but it existed outside of a digital
                marketplace. The challenge was translating that successful
                business model into a production-ready digital platform that
                could launch, gain initial traction, and establish LeanZupply as
                a trusted name in D2B supply chain procurement.
              </p>
              <p>
                Urruty Labs engaged with LeanZupply to build a production-ready
                MVP in 90 days. The goal was clear: create a digital marketplace
                that would allow the founder to launch, acquire initial users,
                and establish the platform's reputation—all while maintaining
                the quality and reliability needed for professional D2B
                transactions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Challenge
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                The founder had market fit and a working business model, but no
                digital platform. The challenge was building the first
                production-ready version that could:
              </p>
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed list-disc list-inside ml-4">
                <li>
                  Translate the proven business model into a functional digital
                  marketplace
                </li>
                <li>
                  Launch within 90 days to capture market opportunity and
                  establish the platform's name
                </li>
                <li>
                  Handle real D2B transactions with the reliability and
                  professionalism required for commercial use
                </li>
                <li>
                  Support initial user acquisition and traction without
                  technical limitations blocking growth
                </li>
                <li>
                  Build production-ready systems from day one—no prototypes that
                  would need rebuilding later
                </li>
                <li>
                  Balance speed of delivery with quality, ensuring the platform
                  could scale as traction grew
                </li>
              </ul>
              <p>
                The founder needed a partner who could move fast without cutting
                corners, building a platform that would establish LeanZupply's
                reputation from day one.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What We Did
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Product Framing & Prioritization
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We worked with the founder to translate the proven business
                  model into a digital product. We clarified what needed to be
                  built for launch, who it served, and what success looked like
                  in the first 90 days. This involved defining core user types
                  and roles (buyer, manufacturer, and superadmin), implementing
                  authentication and authorization systems for sign up and sign
                  in. We prioritized building the product catalog, manufacturer
                  profiling and documentation capabilities, and order pricing
                  calculation systems—the essential features needed for the
                  platform to function as a D2B marketplace from day one.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Architecture & System Design
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Senior engineers designed the platform architecture from the
                  ground up to support D2B transactions and future growth. We
                  chose a web-first approach, selected a relational database
                  architecture to support scale and complex business logic, and
                  designed system boundaries with low coupling—using third-party
                  services only for authentication and data storage, keeping the
                  core business logic independent. This approach ensured the
                  platform could evolve without vendor lock-in while maintaining
                  security and reliability standards required for commercial D2B
                  transactions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Production-Ready MVP Implementation
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We built the complete digital marketplace—frontend, backend,
                  and core features needed for launch. Every system was
                  production-ready from day one, designed to handle real
                  transactions and support initial user acquisition without
                  technical limitations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Development Infrastructure & Quality Assurance
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We established the complete development infrastructure: GitHub
                  repository setup, CI/CD pipelines for automated testing and
                  deployment, and comprehensive unit tests throughout the
                  codebase. This ensured code quality, reliable deployments, and
                  a foundation that the founder's team could maintain and extend
                  with confidence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Security, Reliability & Monitoring
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We implemented security measures, error handling, and
                  monitoring systems essential for a D2B platform. The founder
                  needed confidence that the platform could handle commercial
                  transactions reliably from launch day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI-Assisted Development & Documentation
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We used AI to accelerate development, documentation, and code
                  clarity while maintaining tight 90-day timeline. All decisions
                  and production code remained human-owned, ensuring quality and
                  maintainability for the founder's team.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Post-Handoff Support & Future Hires
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  After the handoff, Urruty Labs continued to support LeanZupply
                  by helping identify and evaluate future engineering hires. We
                  assisted in finding candidates who could understand and extend
                  the system we built, ensuring the founder could build a team
                  that matched the quality and standards established during the
                  initial engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Key Results
            </h2>
            <div className="space-y-6">
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Launched production-ready MVP in 90 days, enabling the
                    founder to go to market and start acquiring users
                    immediately
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Platform successfully handled initial user acquisition and
                    [X] transactions without technical issues blocking growth
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Established LeanZupply as a trusted name in D2B supply chain
                    procurement through reliable, professional platform
                    performance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Production-ready systems from day one—no rewrites needed, no
                    technical debt blocking future features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Clean handoff with complete documentation, allowing the
                    founder to own and extend the platform independently as
                    traction grows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Platform architecture designed to scale as user base and
                    transaction volume grow, without requiring fundamental
                    rebuilds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-semibold mt-1">•</span>
                  <span>
                    Post-handoff support with hiring assistance, helping the
                    founder identify and evaluate engineering talent that could
                    extend the platform as the team grew
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why It Worked
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong className="text-gray-900">Senior leadership.</strong>{" "}
                Every decision was made by experienced engineers who've built
                products that scale. No junior developers learning on the
                client's time.
              </p>
              <p>
                <strong className="text-gray-900">Disciplined scope.</strong> We
                focused on what was needed to launch and gain initial traction,
                not what was nice to have. This kept the 90-day timeline
                realistic and the MVP production-ready.
              </p>
              <p>
                <strong className="text-gray-900">
                  Production readiness from day one.
                </strong>{" "}
                Every system was built with scalability, reliability, and
                maintainability in mind. No prototypes that needed to be rebuilt
                later.
              </p>
              <p>
                <strong className="text-gray-900">
                  Clear handoff with ongoing support.
                </strong>{" "}
                Complete documentation, clear architecture, and knowledge
                transfer meant the LeanZupply team could own and extend the
                system independently. We also supported future hiring efforts,
                helping identify engineers who could maintain the quality
                standards we established. No vendor lock-in, but continued
                partnership where it mattered.
              </p>
              <p>
                The difference wasn't in the tools or technologies we used—it
                was in the quality of decisions, the focus on what actually
                matters, and the commitment to building systems that last.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-gray-900 pl-8 py-8">
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-4">
                "[Founder quote about Urruty Labs' impact on launching the
                digital platform, the 90-day timeline, and how the
                production-ready MVP enabled initial traction and established
                LeanZupply's name in the market.]"
              </blockquote>
              <div className="text-sm text-gray-600">— LeanZupply Founder</div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              If you're building something new — or your current platform needs
              a real foundation — let's talk.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to build a production-ready product in 90 days?{" "}
              <Link
                to="/"
                className="text-white underline hover:text-gray-300 transition-colors"
              >
                Learn more about our 90-day engagement
              </Link>
              .
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
    </>
  );
}

export default LeanZupplyCaseStudy;
