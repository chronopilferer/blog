"use client";

import Link from 'next/link';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import styles from './PostCard.module.css';

export default function PostCard({ image = '/default-image.jpg', title, summary, date, slug }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/blog' : '';
  const imageSrc = image.startsWith('/') ? `${basePath}${image}` : `${basePath}/${image}`;

  return (
    <Link href={`/posts/${slug}`} className={styles.card}>
      <Card
        sx={{
          cursor: 'pointer',
          height: 400,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          image={imageSrc}
          alt={title}
          sx={{
            height: 240,
            width: '100%',
            objectFit: 'contain',
            backgroundColor: '#f0f0f0',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title || 'No title available'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary || 'No summary available'}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {date || 'N/A'}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
