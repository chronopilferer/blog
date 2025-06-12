
export default function PostFigure({ src, alt, caption, width = '100%', height = 'auto' }) {
  return (
    <figure style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          maxWidth: '100%',
          display: 'block',
          margin: '0 auto',
        }}
      />
      {caption && (
        <figcaption
          style={{
            fontStyle: 'italic',
            fontSize: '0.9rem',
            marginTop: '0.5rem',
            color: '#666',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
