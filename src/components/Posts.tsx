/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import useRedditPosts from "../hooks/useRedditPosts";
import { MessageSquare, ThumbsUp } from "lucide-react";

const Posts = ({ name }: { name: string }) => {
  const { posts, loading, error } = useRedditPosts(name);

  return (
    <Card className="w-full">
      <CardHeader className="p-0 m-0 w-full px-10">
        <CardTitle className="text-2xl">Top News of {name}</CardTitle>
        <CardDescription>Powered by Reddit</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className=" space-y-4 px-10">
        {loading && <p>Loading news...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && posts.length === 0 && <p>No news found.</p>}
        {posts.map(
          (
            post: {
              url: string | undefined;
              title:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
              subreddit:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
              score:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
              num_comments:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
            },
            index: React.Key | null | undefined
          ) => (
            <div key={index} className="border-b pb-3">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold hover:underline"
              >
                {post.title}
              </a>
              <p className="text-sm text-gray-600 flex gap-2 items-center">
                <span className="flex items-center gap-1 text-lg">
                  r/{post.subreddit}{" "}
                </span>{" "}
                <span className="flex items-center gap-1">
                  <ThumbsUp /> {post.score} •{" "}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare /> {post.num_comments}
                </span>
              </p>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default Posts;
