import parse from 'html-react-parser';
import Link from 'next/link';

import { CommonCardContainer, ContentCommonCard } from './styles';

interface CommonCardProps {
  title: string;
  excerpt: string;
  source_url: string;
  slug: string;
}

export function CommonCard({
  title,
  excerpt,
  source_url,
  slug,
}: CommonCardProps) {
  return (
    <Link href={`/postpage/${slug}`}>
      <CommonCardContainer>
        <img src={source_url} alt='' />
        <hr />
        <ContentCommonCard>
          <h3>{title}</h3>
          {parse(excerpt)}
        </ContentCommonCard>
      </CommonCardContainer>
    </Link>
  );
}
