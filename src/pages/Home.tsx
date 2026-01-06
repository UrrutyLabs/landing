import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { addLanguageToPath, type Language } from "../utils/routing";

function Home() {
  const { lang } = useParams<{ lang: Language }>();
  const { t } = useTranslation("home");
  const currentLang = lang || "en";

  const getLocalizedPath = (path: string) => {
    return addLanguageToPath(path, currentLang);
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://urrutylabs.com/en`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`https://urrutylabs.com/es`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://urrutylabs.com/en`}
        />
      </Helmet>
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              {t("hero.h1")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto text-justify">
              {t("hero.subtitle")}{" "}
              <Link
                to={getLocalizedPath("/about")}
                className="text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                {t("hero.learnMore")}
              </Link>
              .
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("cost.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>{t("cost.p1")}</p>
              <p>{t("cost.p2")}</p>
              <p className="font-medium text-gray-900">{t("cost.p3")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t("whoWeWorkWith.h2")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  {t("whoWeWorkWith.forYou.title")}
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {(
                    t("whoWeWorkWith.forYou.items", {
                      returnObjects: true,
                    }) as string[]
                  ).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                  {t("whoWeWorkWith.notFit.title")}
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {(
                    t("whoWeWorkWith.notFit.items", {
                      returnObjects: true,
                    }) as string[]
                  ).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {t("engagement.h2")}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {t("engagement.subtitle")}
            </p>

            <div className="space-y-6">
              {["01", "02", "03", "04", "05"].map((step) => (
                <div
                  key={step}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                      {step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t(`engagement.steps.${step}.title`)}
                      </h3>
                      <p className="text-gray-700 text-justify">
                        {t(`engagement.steps.${step}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {t("aiAugmented.h2")}
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
              {t("aiAugmented.subtitle")}
            </p>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>{t("aiAugmented.p1")}</p>
              <p>{t("aiAugmented.p2")}</p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("aiAugmented.aiBoosts.title")}
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  {(
                    t("aiAugmented.aiBoosts.items", {
                      returnObjects: true,
                    }) as string[]
                  ).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gray-900 font-semibold mt-1">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-medium text-gray-900 mt-8">
                {t("aiAugmented.p3")}
              </p>
              <p>{t("aiAugmented.p4")}</p>
              <p className="font-medium text-gray-900 mt-6">
                {t("aiAugmented.p5")}
              </p>
              <p>{t("aiAugmented.p6")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t("whyUs.h2")}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {t("whyUs.subtitle")}{" "}
              <Link
                to={getLocalizedPath("/case-studies")}
                className="text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                {t("whyUs.viewCaseStudies")}
              </Link>
              .
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "senior",
                "faster",
                "opinionated",
                "handoff",
                "noDependencies",
                "fixedScope",
              ].map((key) => (
                <div
                  key={key}
                  className="bg-white rounded-lg p-8 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`whyUs.benefits.${key}.title`)}
                  </h3>
                  <p className="text-gray-700">
                    {t(`whyUs.benefits.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("contact.h2")}
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {t("contact.subtitle")}
            </p>
            <a
              href="mailto:nicolas@urrutylabs.com"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105"
            >
              {t("contact.cta")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
