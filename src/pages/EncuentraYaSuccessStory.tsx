import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { addLanguageToPath, type Language } from "../utils/routing";
import SEO from "../components/SEO";

function EncuentraYaSuccessStory() {
  const { lang } = useParams<{ lang: Language }>();
  const { t } = useTranslation("encuentraya");
  const currentLang = lang || "en";

  const getLocalizedPath = (path: string) => {
    return addLanguageToPath(path, currentLang);
  };

  const baseUrl = "https://urrutylabs.com";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${currentLang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLang === "es" ? "Historias de Éxito" : "Success Stories",
        item: `${baseUrl}/${currentLang}/success-stories`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "EncuentraYa",
        item: `${baseUrl}/${currentLang}/success-stories/encuentraya`,
      },
    ],
  };

  return (
    <>
      <SEO
        lang={currentLang}
        path="/success-stories/encuentraya"
        title={t("meta.title")}
        description={t("meta.description")}
        ogTitle={t("meta.ogTitle")}
        ogDescription={t("meta.ogDescription")}
        ogType="article"
        structuredData={breadcrumbSchema}
      />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Avatar */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-400">EY</span>
              </div>
            </div>
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
                to={getLocalizedPath("/success-stories")}
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
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  {t("overview.client")}
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  {t("overview.clientValue")}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  {t("overview.engagement")}
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  {t("overview.engagementValue")}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  {t("overview.timeline")}
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  {t("overview.timelineValue")}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  {t("overview.outcome")}
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  {t("overview.outcomeValue")}
                </p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{t("overview.p1")}</p>
              <p>{t("overview.p2")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("challenge.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{t("challenge.p1")}</p>
              <p>{t("challenge.p2")}</p>
              <ul className="list-disc list-outside ml-6 space-y-3">
                {(t("challenge.items", { returnObjects: true }) as string[]).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("solution.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{t("solution.p1")}</p>
              <p>{t("solution.p2")}</p>
              <ul className="list-disc list-outside ml-6 space-y-3">
                {(t("solution.items", { returnObjects: true }) as string[]).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
              <p>{t("solution.p3")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("results.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {t("results.p1")}{" "}
                <a
                  href="https://encuentraya.uy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline hover:text-gray-600 transition-colors"
                >
                  {t("results.linkText")}
                </a>
                .
              </p>
              <p>{t("results.p2")}</p>
              <ul className="list-disc list-outside ml-6 space-y-3">
                {(t("results.items", { returnObjects: true }) as string[]).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
            <div className="mt-10">
              <a
                href="https://encuentraya.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 font-medium underline hover:text-gray-600 transition-colors"
              >
                {t("visitLink")}
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("contact.h2")}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t("contact.p")}
            </p>
            <Link
              to={getLocalizedPath("/contact")}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              {t("contact.cta")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default EncuentraYaSuccessStory;
