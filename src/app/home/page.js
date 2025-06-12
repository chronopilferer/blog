import { Box } from "@mui/material";
import { getAllPosts } from "@utils/markdown";
import { categorizePosts } from "@utils/categorizePosts";
import CategorySection from "@components/common/CategorySection";
import Header from "@components/layout/Header/Home/Header";
import styles from "./Home.module.css"; 

export const dynamic = "auto";

export default async function HomePage() {
  const posts = await getAllPosts(); 
  const categorizedPosts = categorizePosts(posts);

  return (
    <Box className={styles["main-container"]}>
      <Box className={styles["root-page-container"]}>
        <Header />
        {Object.entries(categorizedPosts).map(([category, posts]) => (
          <CategorySection key={category} category={category} posts={posts} />
        ))}
      </Box>
    </Box>
  );
}