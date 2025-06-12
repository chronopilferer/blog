import { getPostData, getPostSlugs } from '@utils/markdown';
import PostHeader from '@components/layout/Header/Post/PostHeader';
import PostClientContent from './PostClientContent'; 
import styles from './PostPage.module.css';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const slug = (await params).slug;
  const post = await getPostData(slug);

  return (
    <div className={styles.postContainer}>
      <PostHeader {...post} />
      <div className={styles.postContent}>
        <div className={styles.sidebarLeft}></div>
        <div className={styles.mainContent}>
          <PostClientContent code={post.code} />
        </div>
        <div className={styles.sidebarRight}></div>
      </div>
    </div>
  );
}
