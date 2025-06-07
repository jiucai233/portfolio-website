import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { FaGithub } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/next"

export default async function BlogDetail({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const mdPath = path.join(process.cwd(), "app/blogs", ...slug, "index.md");
  const file = fs.readFileSync(mdPath, "utf-8");
  const { data, content } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      {data.repoURL && (
        <a
          href={data.repoURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 text-2xl text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
      )}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
