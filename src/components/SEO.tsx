import { Helmet } from "react-helmet-async";
import { type Language } from "../utils/routing";
import StructuredData from "./StructuredData";

interface SEOProps {
  lang: Language;
  path: string; // e.g., "/", "/about", "/success-stories", "/success-stories/leanzupply"
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  structuredData?: object | object[]; // Single schema object or array of schemas
}

function SEO({
  lang,
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = "website",
  structuredData,
}: SEOProps) {
  const BASE_URL = "https://uxioma.com";
  const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

  // Normalize path (remove leading slash if present, but keep it for root)
  const normalizedPath = path === "/" ? "" : path.replace(/^\//, "");
  const canonicalUrl = `${BASE_URL}/${lang}${
    normalizedPath ? `/${normalizedPath}` : ""
  }`;

  // Generate hreflang URLs
  const enUrl = `${BASE_URL}/en${normalizedPath ? `/${normalizedPath}` : ""}`;
  const esUrl = `${BASE_URL}/es${normalizedPath ? `/${normalizedPath}` : ""}`;

  const ogLocale = lang === "es" ? "es_ES" : "en_US";

  // Handle structured data - can be single object or array
  const schemas = Array.isArray(structuredData)
    ? structuredData
    : structuredData
    ? [structuredData]
    : [];

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={ogTitle || title} />
        <meta
          property="og:description"
          content={ogDescription || description}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:site_name" content="Uxioma" />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="es" href={esUrl} />
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
      </Helmet>
      {schemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
    </>
  );
}

export default SEO;
