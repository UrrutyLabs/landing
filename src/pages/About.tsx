import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import mePhoto from "../assets/me.jpeg";
import { addLanguageToPath, type Language } from "../utils/routing";
import SEO from "../components/SEO";

function About() {
  const { lang } = useParams<{ lang: Language }>();
  const { t } = useTranslation("about");
  const currentLang = lang || "en";

  const getLocalizedPath = (path: string) => {
    return addLanguageToPath(path, currentLang);
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicolás Urruty",
    jobTitle: "Senior Engineer & Founder",
    worksFor: {
      "@type": "Organization",
      name: "Urruty Labs",
    },
    description: t("founder.p1"),
    url: `https://urrutylabs.com/${currentLang}/about`,
  };

  return (
    <>
      <SEO
        lang={currentLang}
        path="/about"
        title={t("meta.title")}
        description={t("meta.description")}
        ogTitle={t("meta.ogTitle")}
        ogDescription={t("meta.ogDescription")}
        ogType="website"
        structuredData={personSchema}
      />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
              {t("title")}
            </h1>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>{t("intro.p1")}</p>
              <p>
                {t("intro.p2").split(t("intro.p2Link"))[0]}
                <Link
                  to={getLocalizedPath("/")}
                  className="text-gray-900 underline hover:text-gray-600 transition-colors"
                >
                  {t("intro.p2Link")}
                </Link>
                {t("intro.p2").split(t("intro.p2Link"))[1]}
              </p>
              <p>
                {t("intro.p3")}{" "}
                <Link
                  to={getLocalizedPath("/case-studies")}
                  className="text-gray-900 underline hover:text-gray-600 transition-colors"
                >
                  {t("intro.seeHow")}
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              {t("founder.h2")}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="flex justify-center md:justify-start">
                <img
                  src={mePhoto}
                  alt={t("founder.alt")}
                  className="w-full max-w-md rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  <strong className="text-gray-900">Nicolás Urruty</strong>{" "}
                  {t("founder.p1")}
                </p>
                <p>{t("founder.p2")}</p>
                <p>{t("founder.p3")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("howWeWork.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong className="text-gray-900">
                  {t("howWeWork.p1").split(". ")[0]}.
                </strong>{" "}
                {t("howWeWork.p1").includes(". ")
                  ? t("howWeWork.p1").split(". ").slice(1).join(". ")
                  : ""}
              </p>
              <p>
                <strong className="text-gray-900">
                  {t("howWeWork.p2").split(". ")[0]}.
                </strong>{" "}
                {t("howWeWork.p2").includes(". ")
                  ? t("howWeWork.p2").split(". ").slice(1).join(". ")
                  : ""}
              </p>
              <p>
                <strong className="text-gray-900">
                  {t("howWeWork.p3").split(". ")[0]}.
                </strong>{" "}
                {t("howWeWork.p3").includes(". ")
                  ? t("howWeWork.p3").split(". ").slice(1).join(". ")
                  : ""}
              </p>
              <p>
                <strong className="text-gray-900">
                  {t("howWeWork.p4").split(". ")[0]}.
                </strong>{" "}
                {t("howWeWork.p4").includes(". ")
                  ? t("howWeWork.p4").split(". ").slice(1).join(". ")
                  : ""}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("whyChooseUs.h2")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>{t("whyChooseUs.p1")}</p>
              <p>{t("whyChooseUs.p2")}</p>
              <p>{t("whyChooseUs.p3")}</p>
              <p>{t("whyChooseUs.p4")}</p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("contact.h2")}
            </h2>
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

export default About;
