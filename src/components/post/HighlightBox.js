
export default function HighlightBox({ children }) {
  return (
    <div
      style={{
        backgroundColor: '#fff9c4', 
        padding: '12px 16px',
        borderLeft: '5px solid #fdd835', 
        borderRadius: '6px',
        fontWeight: 500,
        textAlign: 'left',
        lineHeight: 1.6,
        margin: '1.5rem 0',
        color: '#333',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
