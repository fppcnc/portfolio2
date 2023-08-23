import React, { lazy, Suspense } from 'react';

const LazyParagraphs = lazy(() => import('./Paragraphs'));

const Paragraphs = props => (
  <Suspense fallback={null}>
    <LazyParagraphs {...props} />
  </Suspense>
);

export default Paragraphs;
