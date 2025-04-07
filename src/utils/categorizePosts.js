export function categorizePosts(posts) {
    return posts.reduce((acc, post) => {
      const category = post.frontMatter.category || "Uncategorized";
      if (!acc[category]) acc[category] = [];
      acc[category].push(post);
      return acc;
    }, {});
  }
  