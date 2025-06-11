"use client";

import PostCard from "@components/ui/cards/post/PostCard";
import { Typography, Box } from "@mui/material";
import styles from "./CategorySection.module.css";

export default function CategorySection({ category, posts }) {
  return (
    <Box className={styles["category-section"]}>
      <Typography variant="h5" component="h2" className={styles["category-title"]}>
        {category}
      </Typography>
      <Box className={styles["posts-grid"]}>
        {posts.map((post, index) => (
          <PostCard
            key={post.slug || `${category}-${index}`}
            image={post.frontMatter.image}
            title={post.frontMatter.title}
            summary={post.frontMatter.summary}
            date={post.frontMatter.date}
            slug={post.slug}
          />
        ))}
      </Box>
    </Box>
  );
}