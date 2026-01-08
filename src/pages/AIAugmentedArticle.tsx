import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { type Language } from "../utils/routing";
import SEO from "../components/SEO";
import ArticleParagraph from "../components/ArticleParagraph";

function AIAugmentedArticle() {
  const { lang } = useParams<{ lang: Language }>();
  const { t } = useTranslation("aiAugmentedArticle");
  const currentLang = lang || "en";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t("meta.title"),
    description: t("meta.description"),
    author: {
      "@type": "Person",
      name: "Nicolás Urruty",
    },
    publisher: {
      "@type": "Organization",
      name: "Uxioma",
    },
    datePublished: "2024-01-01",
    url: `https://uxioma.com/${currentLang}/ai-augmented-human-led-engineering`,
  };

  return (
    <>
      <SEO
        lang={currentLang}
        path="/ai-augmented-human-led-engineering"
        title={t("meta.title")}
        description={t("meta.description")}
        ogTitle={t("meta.ogTitle")}
        ogDescription={t("meta.ogDescription")}
        ogType="article"
        structuredData={articleSchema}
      />
      <main>
        <article className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {t("badge")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-12">
              {t("title")}
            </h1>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {(t("paragraphs", { returnObjects: true }) as string[]).map(
                (paragraph, index, array) => {
                  const isLast = index === array.length - 1;
                  return (
                    <p
                      key={index}
                      className={
                        isLast
                          ? "text-xl font-semibold text-gray-900 mt-8"
                          : undefined
                      }
                    >
                      <ArticleParagraph>{paragraph}</ArticleParagraph>
                    </p>
                  );
                }
              )}
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                {t("author.label")}{" "}
                <span className="font-medium text-gray-900">
                  {t("author.name")}
                </span>
              </p>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}

export default AIAugmentedArticle;
