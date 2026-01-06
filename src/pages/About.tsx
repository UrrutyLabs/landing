import { ArrowRight } from "lucide-react";
import mePhoto from "../assets/me.jpeg";

function About() {
  return (
    <main>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
            About Urruty Labs
          </h1>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              Urruty Labs helps founders turn validated ideas or unstable MVPs
              into production-ready products. We work with early-stage startups
              that have traction but need a solid technical foundation to scale.
            </p>
            <p>
              Our 90-day fixed-scope engagement is designed for momentum. We
              focus on what you need to launch, not what's nice to have. Every
              decision is made by senior engineers who've built products that
              scale. We use AI to accelerate clarity and execution, but human
              judgment owns every architectural choice and line of production
              code.
            </p>
            <p>
              When we're done, you get a clean handoff: complete documentation,
              clear architecture, and a system your team can understand and
              extend independently. No vendor lock-in, no ongoing dependencies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            About the Founder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center md:justify-start">
              <img
                src={mePhoto}
                alt="Nicolás Urruty"
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong className="text-gray-900">Nicolás Urruty</strong> is an
                experienced lead engineer with 10+ years of experience helping
                startups grow from pre-seed and seed rounds to thousands of
                users.
              </p>
              <p>
                His strengths lie in architecture, rapid iteration, and scaling
                systems. He builds clean foundations that last, makes hard
                tradeoffs when they matter, and guides founders through
                technical decisions that impact their business.
              </p>
              <p>
                He's worked with startups across different stages, from
                validating product-market fit to scaling infrastructure that
                handles real user growth. The common thread: building
                production-ready systems that founders can own and extend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            How We Work
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              <strong className="text-gray-900">
                Senior-led from start to finish.
              </strong>{" "}
              Every decision, every line of code, every architectural choice is
              made by experienced engineers. No junior developers learning on
              your time.
            </p>
            <p>
              <strong className="text-gray-900">
                Fixed-scope, focused on what's needed to launch.
              </strong>{" "}
              We don't build features you don't need. We focus on the foundation
              that lets you ship, iterate, and scale.
            </p>
            <p>
              <strong className="text-gray-900">
                AI-augmented, human-owned.
              </strong>{" "}
              We use AI to accelerate clarity, documentation, and exploration.
              But judgment, decisions, and production code are human. The
              quality difference shows.
            </p>
            <p>
              <strong className="text-gray-900">
                Designed for clean handoff and future growth.
              </strong>{" "}
              Complete documentation, clear architecture, and knowledge
              transfer. Your team inherits a system they can understand,
              maintain, and extend independently.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Founders Choose Us
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              Founders come to us when they need{" "}
              <strong className="text-gray-900">
                trustworthy technical leadership.
              </strong>{" "}
              They've outgrown their MVP or need to rebuild it properly. They
              want someone who understands both the technical and business sides
              of building a product.
            </p>
            <p>
              They want to{" "}
              <strong className="text-gray-900">
                avoid rewrites and wasted time.
              </strong>{" "}
              They've seen what happens when technical debt compounds. They want
              a foundation that scales, not another prototype that needs to be
              rebuilt in six months.
            </p>
            <p>
              They seek{" "}
              <strong className="text-gray-900">
                fast, thoughtful execution.
              </strong>{" "}
              Speed matters, but so does quality. They want someone who can move
              quickly without cutting corners that will cost them later.
            </p>
            <p>
              They prefer a partner who{" "}
              <strong className="text-gray-900">
                understands startup realities:
              </strong>{" "}
              speed, uncertainty, resource constraints. Someone who's been
              there, made the tradeoffs, and knows what actually matters when
              you're building something new.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            If you're building something new — or need to rebuild your MVP —
            let's talk.
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

export default About;
