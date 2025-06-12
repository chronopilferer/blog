'use client';

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { MathInline, MathBlock } from '@components/common/Math';
import PostFigure from '@components/post/PostFigure';
import HighlightBox from '@components/post/HighlightBox';
import ReferenceBox from '@components/post/ReferenceBox';
import SmartTable from '@components/post/SmartTable';
import CenteredLink from '@components/post/CenteredLink';
import PostSidebar from './PostSidebar';

export default function PostClientContent({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div style={{ width: '100%' }}>
        <Component
          components={{
            MathInline,
            MathBlock,
            PostFigure,
            HighlightBox,
            ReferenceBox,
            SmartTable,
            CenteredLink,
          }}
        />
      </div>
      <div>
        <PostSidebar />
      </div>
    </>
  );
}
