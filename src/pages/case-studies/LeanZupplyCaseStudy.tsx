import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { addLanguageToPath, type Language } from "../../utils/routing";

function LeanZupplyCaseStudy() {
  const { lang } = useParams<{ lang: Language }>();
  const { t } = useTranslation("leanZupply");
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
          href={`https://urrutylabs.com/en/case-studies/leanzupply`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`https://urrutylabs.com/es/case-studies/leanzupply`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://urrutylabs.com/en/case-studies/leanzupply`}
        />
      </Helmet>
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {t("badge")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {t("h1")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t("intro")}{" "}
              <Link
                to={getLocalizedPath("/case-studies")}
                className="text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                {t("viewAll")}
              </Link>
              {" · "}
              <Link
                to={getLocalizedPath("/about")}
                className="text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                {t("learnApproach")}
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("overview.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong className="text-gray-900">LeanZupply</strong>{" "}
                {t("overview.p1")}{" "}
                <a
                  href="https://www.leanzupply.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline hover:text-gray-600 transition-colors"
                >
                  {t("overview.visit")}
                </a>
              </p>
              <p>{t("overview.p2")}</p>
              <p>{t("overview.p3")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("challenge.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>{t("challenge.p1")}</p>
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed list-disc list-inside ml-4">
                {(
                  t("challenge.items", { returnObjects: true }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t("challenge.p2")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("whatWeDid.h2")}
            </h2>
            <div className="space-y-8">
              {[
                "productFraming",
                "architecture",
                "implementation",
                "infrastructure",
                "security",
                "ai",
                "support",
              ].map((key) => (
                <div key={key}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`whatWeDid.${key}.title`)}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {t(`whatWeDid.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("results.h2")}
            </h2>
            <div className="space-y-6">
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                {(t("results.items", { returnObjects: true }) as string[]).map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gray-900 font-semibold mt-1">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("whyItWorked.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong className="text-gray-900">
                  {t("whyItWorked.p1").split(". ")[0]}.
                </strong>{" "}
                {t("whyItWorked.p1").includes(". ")
                  ? t("whyItWorked.p1").split(". ").slice(1).join(". ")
                  : ""}
              </p>
              <p>
                <strong className="text-gray-900">
                  {t("whyItWorked.p2").split(". ")[0]}.
                </strong>{" "}
                {t("whyItWorked.p2").includes(". ")
                  ? t("whyItWorked.p2").split(". ").slice(1).join(". ")
                  : ""}
              </p>
              <p>
                <strong className="text-gray-900">
                  {t("whyItWorked.p3").split(". ")[0]}.
                </strong>{" "}
                {t("whyItWorked.p3").includes(". ")
                  ? t("whyItWorked.p3").split(". ").slice(1).join(". ")
                  : ""}
              </p>
              <p>{t("whyItWorked.p4")}</p>
              <p>{t("whyItWorked.p5")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-gray-900 pl-8 py-8">
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-4">
                {t("quote.text")}
              </blockquote>
              <div className="text-sm text-gray-600">{t("quote.author")}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("contact.h2")}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {t("contact.subtitle")}{" "}
              <Link
                to={getLocalizedPath("/")}
                className="text-white underline hover:text-gray-300 transition-colors"
              >
                {t("contact.learnMore")}
              </Link>
              .
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

export default LeanZupplyCaseStudy;
