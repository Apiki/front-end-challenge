import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchContentData } from '../../services/fetch';
import ContentDisplay from '../../components/contentDisplay';
import ReturnButton from '../../components/returnButton';

export default function ContentPage() {
  const [content, setContent] = useState({});
  const { slug } = useParams();
  const haveContent = !!Object.keys(content).length;
  useEffect(() => {
    fetchContentData(slug).then(setContent);
  }, []);
  return haveContent ? (
    <div>
      <ReturnButton />
      {haveContent && <ContentDisplay content={content} />}
      <ReturnButton />
    </div>
  ) : (
    <CircularProgress size="3em" className="loading" />
  );
}
