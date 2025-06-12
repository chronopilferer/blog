'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const MathInline = ({ math = '' }) => {
  try {
    return <InlineMath math={math} />;
  } catch (e) {
    return <code style={{ color: 'red' }}>{math}</code>;
  }
};

export const MathBlock = ({ math = '' }) => {
  try {
    return (
      <div style={{ margin: '1em 0' }}>
        <BlockMath math={math} />
      </div>
    );
  } catch (e) {
    return (
      <pre style={{ color: 'red', backgroundColor: '#fdd', padding: '1em' }}>
        {math}
      </pre>
    );
  }
};
