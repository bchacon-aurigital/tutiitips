import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => (
  <Helmet>
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TutiiTips",
        "url": "https://lustrous-profiterole-5424fd.netlify.app/",
        "logo": "https://lustrous-profiterole-5424fd.netlify.app/logojpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+506-87845969",
          "contactType": "Customer Service",
          "areaServed": "CR",
          "availableLanguage": "Spanish"
        },
        "sameAs": [
          "https://www.instagram.com/tutiitips/"
        ]
      }
      `}
    </script>
  </Helmet>
);

export default SchemaMarkup;