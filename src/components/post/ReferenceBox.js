
export default function ReferenceBox({ items }) {
  return (
    <div
      style={{
        backgroundColor: '#f0f4f8',
        padding: '16px',
        borderLeft: '5px solid #1976d2',
        borderRadius: '6px',
        marginTop: '2rem',
        color: '#333',
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontWeight: '600', fontSize: '1.1rem' }}>
        References
      </h3>
      <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.6 }}>
        {items.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
