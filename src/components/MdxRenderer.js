'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MathInline, MathBlock } from '@components/common/Math';
import PostFigure from '@components/post/PostFigure'; 
import HighlightBox from '@components/post/HighlightBox';
import ReferenceBox from '@components/post/ReferenceBox';

export default function MdxRenderer({ source }) {
  if (!source) return <p>⚠️ 콘텐츠가 없습니다.</p>;

  return (
    <MDXRemote
      {...source}
      components={{
        MathInline,
        MathBlock,
        PostFigure, 
        HighlightBox,
        ReferenceBox,
      }}
    />
  );
}
