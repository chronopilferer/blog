import { getPostData, getPostSlugs } from '@lib/utils/markdown';
import PostHeader from '@components/layout/Header/Post/PostHeader';
import styles from '@styles/PostPage.module.css';
import PostSidebar from '@components/ui/sidebar/PostSidebar';

export async function generateStaticParams() {
  try {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (e) {
    return []; 
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;  
  const post = await getPostData(slug);  

  const contentList = [];
  const contentWithIds = post.contentHtml.replace(/<h1([^>]*)>(.*?)<\/h1>/g, (match, attrs, title) => {
    let id = attrs.match(/id="([^"]+)"/)?.[1] || `section-${contentList.length + 1}`;

    contentList.push({ id, title: title.trim() });
    return `<h1 ${attrs.includes('id=') ? attrs : `${attrs} id="${id}"`}>${title}</h1>`;
  });

  return (
    <div className={styles.postContainer}>
      <PostHeader {...post} />
      <div className={styles.postContent}>
        <div className={styles.sidebarLeft}></div>
        <div className={styles.mainContent}>
          <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
        </div>
        <div className={styles.sidebarRight}>
          <PostSidebar content={contentList} />
        </div>
      </div>
    </div>
  );
}
