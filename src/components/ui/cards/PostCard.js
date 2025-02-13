"use client";

import Link from 'next/link';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function PostCard({ image = '/default-image.jpg', title, summary, date, slug }) {

  return (
    <Link href={`/posts/${slug}`} passHref>
      <Card sx={{ cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt={title}
          sx={{ maxHeight: 300, objectFit: 'cover' }}
        />
        <CardContent>
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
