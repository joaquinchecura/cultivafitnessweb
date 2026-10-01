import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
}

const SITE_NAME = 'Cultiva Fitness';

export function SeoHead({ title, description }: SeoHeadProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}