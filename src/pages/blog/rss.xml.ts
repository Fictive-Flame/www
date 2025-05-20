import rss from "@astrojs/rss";
import { getPosts, publishedOnly, postDescending } from "../../utils/data";

export async function GET(ctx) {
  const posts = (await getPosts()).filter(publishedOnly).sort(postDescending);

  return rss({
    title: `Fictive Flame Blog`,
    description: `Education, insight, and behind-the-scenes content from a video production company.`,
    site: new URL(`/blog`, ctx.site),
    xmlns: {
      atom: "https://www.w3.org/2005/Atom",
    },
    items: postsToRSSItems(posts),
  });
}

const postsToRSSItems = (posts) =>
  posts.map(({ id, data, rendered }) => ({
    title: data.title,
    description: data.description,
    link: `/blog/${id}`,
    pubDate: data.pubDate,
    content: rendered.html,
  }));
