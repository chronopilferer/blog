"use client";

import styles from './PostHeader.module.css';

export default function PostHeader({ title, date, category, tags, summary }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>작성일: {date}</p>
      <p className={styles.category}><strong>카테고리:</strong> {category}</p>
      <p className={styles.summary}><strong>요약:</strong> {summary}</p>

      {tags && tags.length > 0 && (
        <p className={styles.tags}>
          <strong>태그:</strong> {tags.join(', ')}
        </p>
      )}

    </header>
  );
}
