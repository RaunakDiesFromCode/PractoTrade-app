import { useEffect, useState } from "react";

interface PostData {
  title: string;
  url: string;
  subreddit: string;
  score: number;
  num_comments: number;
}

const useRedditPosts = (ticker: string) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const res = await fetch(
          `https://implicit-electra-sagnify-8514ada8.koyeb.app/api/reddit-posts/?ticker=${ticker}`
        );
        const data = await res.json();
        const links: string[] = data.post_links || [];

        const fetchDetails = async (url: string) => {
          try {
            const permalinkMatch = url.match(/\/r\/[^/]+\/comments\/[^/]+/);
            if (!permalinkMatch) return null;
            const permalink = permalinkMatch[0];
            const redditRes = await fetch(
              `https://www.reddit.com${permalink}.json`
            );
            const json = await redditRes.json();
            const post = json[0]?.data?.children[0]?.data;

            return {
              title: post.title,
              url,
              subreddit: post.subreddit,
              score: post.score,
              num_comments: post.num_comments,
            };
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (e) {
            return null;
          }
        };

        const postDetails = await Promise.all(links.map(fetchDetails));
        setPosts(postDetails.filter(Boolean) as PostData[]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [ticker]);

  return { posts, loading, error };
};

export default useRedditPosts;
