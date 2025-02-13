import { getPostData, getPostSlugs } from '@lib/utils/markdown';
import PostHeader from '@components/layout/Header/Post/PostHeader';
import styles from '@styles/PostPage.module.css';
import PostSidebar from '@components/ui/sidebar/PostSidebar';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;  
  const post = await getPostData(slug);  


  const contentList = [];
  let contentWithIds = post.contentHtml.replace(/<h1([^>]*)>(.*?)<\/h1>/g, (match, attrs, title, index) => {
    let idMatch = attrs.match(/id="([^"]+)"/) || attrs.match(/id=([^ >]+)/);
    let id = idMatch ? idMatch[1] : `section-${index + 1}`;

    contentList.push({
      id,
      title: title.trim(),
    });

    if (!idMatch) {
      return `<h1 ${attrs} id="${id}">${title}</h1>`;
    }
    return match;
  });

  return (
    <div className={styles.postContainer}>
      <PostHeader title={post.title} date={post.date} category={post.category} tags={post.tags} summary={post.summary} />
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
