export default function CenteredLink({ href, children }) {
  return (
    <div style={{ textAlign: 'center', margin: '1rem 0' }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}
      >
        {children}
      </a>
    </div>
  );
}
