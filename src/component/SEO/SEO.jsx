import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  value,
  keywords,
  imageUrl,
  type,
  url,
  locale,
  siteName,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="prototy" content={value} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
    </Helmet>
  );
};

export default SEO;
