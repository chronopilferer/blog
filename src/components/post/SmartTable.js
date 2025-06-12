'use client';

import { MathInline } from '@components/common/Math';

const isLatex = (str) => typeof str === 'string' && /[\\^_{}=<>]/.test(str);

export default function SmartTable({ rows, headers = ['용어', '의미'] }) {
  return (
    <div style={{ overflowX: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {headers.map((head, idx) => (
              <th key={idx} style={thStyle}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([col1, col2], idx) => (
            <tr key={idx}>
              <td style={tdStyle}>
                {isLatex(col1) ? <MathInline math={col1} /> : col1}
              </td>
              <td style={tdStyle}>
                {typeof col2 === 'string' || typeof col2 === 'number'
                  ? col2
                  : col2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  background: '#f8f8f8',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  verticalAlign: 'top',
};
