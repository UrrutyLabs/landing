import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { addLanguageToPath, type Language } from "../utils/routing";
import SEO from "../components/SEO";

function SuccessStories() {
  const { lang } = useParams<{ lang: Language }>();
  const { t } = useTranslation("successStories");
  const currentLang = lang || "en";

  const getLocalizedPath = (path: string) => {
    return addLanguageToPath(path, currentLang);
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("meta.title"),
    description: t("meta.description"),
    url: `https://uxioma.com/${currentLang}/success-stories`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Article",
            name: "LeanZupply Success Story",
            url: `https://uxioma.com/${currentLang}/success-stories/leanzupply`,
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        lang={currentLang}
        path="/success-stories"
        title={t("meta.title")}
        description={t("meta.description")}
        ogTitle={t("meta.ogTitle")}
        ogDescription={t("meta.ogDescription")}
        ogType="website"
        structuredData={collectionPageSchema}
      />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {t("title")}
            </h1>
            <div className="max-w-3xl">
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                {t("intro")}{" "}
                <Link
                  to={getLocalizedPath("/about")}
                  className="text-gray-900 underline hover:text-gray-600 transition-colors"
                >
                  {t("learnMore")}
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 p-8 hover:border-gray-300 transition-all">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-400">LZ</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("leanzupply.title")}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {t("leanzupply.subtitle")}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t("leanzupply.description")}
                </p>
                <Link
                  to={getLocalizedPath("/success-stories/leanzupply")}
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors group"
                >
                  {t("leanzupply.viewSuccessStory")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-gray-400">—</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">
                    {t("placeholder.title")}
                  </h3>
                  <p className="text-gray-400">{t("placeholder.subtitle")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("contact.h2")}
            </h2>
            <a
              href="mailto:nicolas@uxioma.com"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105"
              aria-label={`${t(
                "contact.cta"
              )} - Send email to nicolas@uxioma.com`}
            >
              {t("contact.cta")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default SuccessStories;
